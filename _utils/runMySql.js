const { exec } = require('child_process');
const { getMySqlPath } = require('./installMySql');
// Chemin vers l'exécutable de WampServer
getMySqlPath()
    .then((path) => {
        console.log("Démarrage du server apache et mysql");
        // Commande pour démarrer WampServer
        const startApacheCommand = `"${path}/apache_start"`;
        const startMysqlommand = `"${path}/mysql_start.bat"`;
        const nodemon = `nodemon index.js`;
        console.log(startApacheCommand);
        // Exécuter la commande pour démarrer WampServer
        const apacheProcess = exec(startApacheCommand, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erreur lors du démarrage de WampServer : ${error.message}`);
                process.exit(1);
            }
            if (stderr) {
                console.error(`Erreur lors du démarrage de WampServer : ${stderr}`);
                process.exit(1);
            }
            console.log(`Xampp démarré avec succès : ${stdout}`);
        });
        console.log(startMysqlommand);
        const mysqlProcess = exec(startMysqlommand, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erreur lors du démarrage de mysql : ${error.message}`);
                process.exit(1);
            }
            if (stderr) {
                console.error(`Erreur lors du démarrage de mysql : ${stderr}`);
                process.exit(1);
            }
            console.log(`mysql démarré avec succès : ${stdout}`);
        });
        console.log(nodemon);
        const nodemonProcess = exec(nodemon, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erreur lors du démarrage de nodemon : ${error.message}`);
                process.exit(1);
            }
            if (stderr) {
                console.error(`Erreur lors du démarrage de nodemon : ${stderr}`);
                process.exit(1);
            }
            console.log(`nodemon démarré avec succès : ${stdout}`);
        });




        apacheProcess.on('exit', (code) => {
            console.log(`Le processus WampServer s'est terminé avec le code ${code}`);
            process.exit(code);
        });
    },
        (err) => {
            console.log("Impossible d'obtenir un server mysql. Erreur : " + err);
        }); // Assurez-vous d'ajuster le chemin selon votre installation




