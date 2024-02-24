const { exec } = require('child_process');
const { access, constants } = require('fs');
const { platform } = require('os');
const Registry = require('winreg');
const { downloadAndInstallXamppInstaller } = require('./installXampp');


function getMySqlPath() {
    return new Promise((resolve, reject) => {
        searchXamppInRegistry()
            .then(
                (installPath) => {
                    resolve(installPath);
                },
                async (err) => {
                    const installPath = await downloadAndInstallXamppInstaller();
                    resolve(installPath);
                }
            );

    });
}


// Fonction pour rechercher WampServer dans le registre Windows
function searchXamppInRegistry() {
    return new Promise((resolve, reject) => {
        if (platform() !== 'win32') {
            reject(new Error('Ce script fonctionne uniquement sous Windows.'));
            return;
        }
        // Clé de registre pour les programmes installés
        const regKey = 'HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\xampp';

        // Commande pour lister les sous-clés de la clé de registre des programmes installés
        const xampp = `reg query "${regKey}" /v "InstallLocation"`;
        // Exécuter la commande pour lister les programmes installés
        exec(xampp, (error, stdout, stderr) => {
            if (error) {
                reject(new Error(`Erreur lors de la recherche dans le registre : ${error.message}`));
                return;
            }
            if (stderr) {
                reject(new Error(`Erreur lors de la recherche dans le registre : ${stderr}`));
                return;
            }
            // console.log(stdout);
            const match = stdout.match(/InstallLocation\s+REG_SZ\s+(.*)/);
            if (match && match[1]) {
                const installLocation = match[1].trim();
                // console.log('Chemin d\'installation de XAMPP :', installLocation);
                resolve(installLocation);
            } else {
                console.error('Impossible de trouver le chemin d\'installation de XAMPP.');
                reject();
            }
        });
    });
}


module.exports = {
    getMySqlPath
};