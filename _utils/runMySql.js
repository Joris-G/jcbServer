const { exec, spawn } = require('child_process');
const { getMySqlPath } = require('./installMySql');
// Chemin vers l'exécutable de WampServer
getMySqlPath()
    .then((path) => {
        console.log("Démarrage du server apache et mysql");
        // Commande pour démarrer WampServer
        const startApacheCommand = `"${path}/apache_start"`;
        const startMysqlCommand = `"${path}/mysql_start.bat"`;
        const nodemon = `nodemon index.js`;
        // Exécution des commandes en séquence
        const apacheProcess = spawn(startApacheCommand, { shell: true });
        const mysqlProcess = spawn(startMysqlCommand, [], { shell: true });

        // Vérification si les commandes se sont terminées avec succès
        apacheProcess.on('exit', (code) => {
            if (code === 0) {
                console.log('Serveur Apache démarré avec succès.');
                // Démarrage de MySQL après le démarrage réussi d'Apache
                const nodemonProcess = spawn(nodemon, ['start'], { shell: true });
                nodemonProcess.on('exit', (code) => {
                    if (code === 0) {
                        console.log('nodemon a été démarré avec succès.');
                    } else {
                        console.error(`Erreur lors du démarrage de nodemon: ${code}`);
                    }
                });
            } else {
                console.error(`Erreur lors du démarrage du serveur Apache: ${code}`);
            }
        });

        mysqlProcess.on('exit', (code) => {
            if (code === 0) {
                console.log('Serveur MySQL démarré avec succès.');
            } else {
                console.error(`Erreur lors du démarrage du serveur MySQL: ${code}`);
            }
        });
    });