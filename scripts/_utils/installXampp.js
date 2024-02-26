const fetch = require('node-fetch');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// URL du fichier d'installation de XAMPP
const xamppDownloadUrl = 'https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.12/xampp-windows-x64-8.2.12-0-VS16-installer.exe/download';

// Chemin de destination pour le téléchargement du fichier d'installation
const defaultDownloadDir = path.join(os.homedir(), 'Desktop');
const downloadFilePath = path.join(defaultDownloadDir, 'xampp-installer.exe');
const installPath = path.join("C:/Xampp");


// Fonction pour télécharger le fichier d'installation de XAMPP
async function downloadAndInstallXamppInstaller() {
    return new Promise(async (resolve, reject) => {
        console.log("Téléchargement de xampp en cours....");
        const response = await fetch(xamppDownloadUrl);

        const fileStream = fs.createWriteStream(downloadFilePath);
        response.body.pipe(fileStream);
        response.body.on("error", (err) => {
            console.error('Erreur lors du téléchargement de XAMPP :', error);
            reject(err);
        });
        fileStream.on("finish", function () {
            console.log('Téléchargement terminé.');
            installXampp()
                .then(
                    (val) => {
                        resolve(installPath);
                    },
                    (err) => {
                        reject();
                    });

        });
    });
}

// Fonction pour exécuter le fichier d'installation de XAMPP
function installXampp() {
    return new Promise((resolve, reject) => {
        console.log('Installation de XAMPP en cours...');
        const installCommand = `"${downloadFilePath}" --mode unattended --unattendedmodeui minimal --disable-components xampp_mercury,xampp_tomcat,xampp_perl,xampp_webalizer,xampp_sendmail --prefix "F:/xampp"`;
        exec(installCommand, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erreur lors de l'installation de XAMPP : ${error}`);
                reject();
            }

            console.log('XAMPP a été installé avec succès.');
            resolve()
            // Vous pouvez effectuer d'autres actions ici après l'installation
        });
    });

}

module.exports = {
    downloadAndInstallXamppInstaller
}
