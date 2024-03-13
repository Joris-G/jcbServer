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

const { DataTypes } = require('sequelize');
const sequelize = require('../_server/server');


const Task = require('../tasks/tasks.model');
const Document = require('../documents/documents.model');

const Project = sequelize.define('Project', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    projectType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estimatedEndDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    manager: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    priority: {
        type: DataTypes.STRING,
        allowNull: false
    },
    assignedTo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    followers: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    createdBy: {
        type: DataTypes.STRING,
        allowNull: false
    },
    progressNotes: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

// Définir les relations

Project.hasMany(Task); // Un projet peut avoir plusieurs tâches
Project.hasMany(Document); // Un projet peut avoir plusieurs documents


module.exports = Project;
