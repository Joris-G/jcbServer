const actions = [
    {
        id: 1,
        title: 'Analyser les spécifications de fabrication du composant X',
        description: 'Étudier en détail les spécifications techniques et les exigences de fabrication du composant composite X pour l\'aéronef en cours de production.',
        status: 'in_progress',
        priority: 'high',
        assignedTo: ['ingénieur1', 'technicien2'],
        followers: ['superviseur3'],
        dueDate: new Date('2024-03-15'),
        createdBy: 'responsable4',
        progressNotes: [
            { note: 'Réunion avec l\'ingénierie pour clarifier les spécifications.', user: 'ingénieur1', date: new Date('2024-02-10') },
            { note: 'Début de l\'analyse des matériaux requis pour le composant.', user: 'technicien2', date: new Date('2024-02-12') },
            { note: 'Identification des défis potentiels dans le processus de fabrication.', user: 'ingénieur1', date: new Date('2024-02-14') }
        ]
    },
    {
        id: 2,
        title: 'Optimiser le processus de cuisson des composites',
        description: 'Évaluer et améliorer le processus de cuisson actuel des composites pour garantir des propriétés mécaniques optimales et une qualité de fabrication élevée.',
        status: 'open',
        priority: 'medium',
        assignedTo: ['technicien3'],
        followers: ['ingénieur1', 'responsable2'],
        dueDate: new Date('2024-03-30'),
        createdBy: 'responsable4',
        progressNotes: [
            { note: 'Analyse des données de cuisson des échantillons de test.', user: 'ingénieur1', date: new Date('2024-02-11') }
        ]
    },
    {
        id: 3,
        title: 'Validation des procédures d\'inspection des pièces',
        description: 'Mettre en place des procédures d\'inspection rigoureuses pour garantir la conformité des pièces composites aux normes de qualité et de sécurité aéronautiques.',
        status: 'open',
        priority: 'high',
        assignedTo: ['inspecteur1', 'inspecteur2'],
        followers: ['responsable_qualité3'],
        dueDate: new Date('2024-03-25'),
        createdBy: 'responsable4',
        progressNotes: []
    },
    {
        id: 4,
        title: 'Optimisation de l\'utilisation des matériaux composites',
        description: 'Revoir et optimiser l\'utilisation des matériaux composites afin de réduire les coûts de production tout en maintenant la qualité et la durabilité des pièces.',
        status: 'open',
        priority: 'medium',
        assignedTo: ['ingénieur_matériaux1'],
        followers: ['responsable_production2'],
        dueDate: new Date('2024-04-10'),
        createdBy: 'responsable4',
        progressNotes: []
    },
    {
        id: 5,
        title: 'Formation du personnel sur les techniques de fabrication',
        description: 'Organiser des sessions de formation pour le personnel sur les dernières techniques de fabrication de composites aéronautiques et les meilleures pratiques.',
        status: 'open',
        priority: 'low',
        assignedTo: ['formateur1'],
        followers: ['responsable_formation2'],
        dueDate: new Date('2024-04-15'),
        createdBy: 'responsable4',
        progressNotes: []
    },
    {
        id: 6,
        title: 'Développement de nouveaux moules de fabrication',
        description: 'Concevoir et fabriquer de nouveaux moules pour la production de pièces composites plus complexes et innovantes, en utilisant des matériaux et des techniques de pointe.',
        status: 'open',
        priority: 'high',
        assignedTo: ['ingénieur_conception1', 'technicien_moulistes2'],
        followers: ['responsable_production3'],
        dueDate: new Date('2024-04-20'),
        createdBy: 'responsable4',
        progressNotes: []
    },
    {
        id: 7,
        title: 'Amélioration de la sécurité sur le lieu de travail',
        description: 'Identifier et mettre en œuvre des mesures pour améliorer la sécurité des travailleurs dans l\'environnement de fabrication des composites, en réduisant les risques d\'accidents et de blessures.',
        status: 'open',
        priority: 'medium',
        assignedTo: ['responsable_sécurité1'],
        followers: ['tous'],
        dueDate: new Date('2024-04-25'),
        createdBy: 'responsable4',
        progressNotes: []
    },
    {
        id: 8,
        title: 'Évaluation des fournisseurs de matériaux composites',
        description: 'Évaluer les performances des fournisseurs actuels de matériaux composites et identifier de nouveaux partenaires potentiels pour assurer un approvisionnement fiable et de haute qualité.',
        status: 'open',
        priority: 'medium',
        assignedTo: ['acheteur1', 'ingénieur_qualité2'],
        followers: ['responsable_achats3'],
        dueDate: new Date('2024-05-05'),
        createdBy: 'responsable4',
        progressNotes: []
    },
    {
        id: 9,
        title: 'Étude de faisabilité pour la production en série',
        description: 'Effectuer une étude approfondie pour évaluer la faisabilité de passer à la production en série de nouvelles pièces composites, en tenant compte des aspects techniques, financiers et logistiques.',
        status: 'open',
        priority: 'high',
        assignedTo: ['responsable_projet1', 'ingénieur_process2'],
        followers: ['direction_générale3'],
        dueDate: new Date('2024-05-15'),
        createdBy: 'responsable4',
        progressNotes: []
    },
    {
        id: 10,
        title: 'Réalisation des tests de qualification des pièces',
        description: 'Planifier et effectuer les tests de qualification nécessaires pour valider les propriétés mécaniques et la fiabilité des nouvelles pièces composites selon les normes de l\'industrie aéronautique.',
        status: 'open',
        priority: 'high',
        assignedTo: ['ingénieur_tests1', 'technicien_mesures2'],
        followers: ['responsable_qualité3'],
        dueDate: new Date('2024-05-20'),
        createdBy: 'responsable4',
        progressNotes: []
    },
];


const actionModel = {
    getById(id) {
        return actions.find(action => action.id == id);
    },
    getByStatus(status) {
        return actions.find(action => action.status === status);
    },
    getByPriority(priority) {
        return actions.find(action => action.priority === priority);
    },
    getByDueDate(dueDate) {
        return actions.find(action => action.dueDate === dueDate);
    },
    getAll() {
        return actions;
    },
    create(title, description, status, priority, assignedTo, followers, dueDate, createdBy, progressNotes) {
        const newId = actions.length + 1;
        const newAction = {
            id: newId,
            title,
            description,
            status,
            priority,
            assignedTo,
            followers,
            dueDate,
            createdBy,
            progressNotes
        };
        actions.push(newAction);
        return newAction;
    }
};

module.exports = actionModel;