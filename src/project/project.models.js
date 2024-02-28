const projets = [
    {
        id: 1,
        nom: 'Projet A',
        description: 'Développement d\'un nouvel avion de ligne à propulsion hybride.',
        type: 'Build to Print',
        dateDebut: new Date('2024-01-01'),
        dateFinEstimee: new Date('2026-12-31'),
        responsable: 'Ingénieur1',
    },
    {
        id: 2,
        nom: 'Projet B',
        description: 'Conception et fabrication de composants composites pour un satellite en orbite géostationnaire.',
        type: 'Build-to-Spec',
        dateDebut: new Date('2024-03-15'),
        dateFinEstimee: new Date('2025-11-30'),
        responsable: 'Ingénieur2',
    },
    {
        id: 3,
        nom: 'Projet C',
        description: 'Amélioration des processus de fabrication pour réduire les temps de cycle des pièces aéronautiques.',
        type: 'Build to Print',
        dateDebut: new Date('2024-05-01'),
        dateFinEstimee: new Date('2024-12-31'),
        responsable: 'Ingénieur3',
    },
];

const projectModel = {
    getById(id) {
        return projets.find(projet => projet.id == id);
    },
    getByDueDate(dueDate) {
        return projets.find(projet => projet.dueDate === dueDate);
    },
    getAll() {
        return projets;
    },
    create(nom, description, type, dateDebut, dateFinEstimee, responsable) {
        const newId = projets.length + 1;
        const newProject = {
            id: newId,
            nom, description, type, dateDebut, dateFinEstimee, responsable
        };
        projets.push(newProject);
        return newProject;
    }
};

module.exports = projectModel;