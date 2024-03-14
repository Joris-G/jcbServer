const Project = require('../_models/projects.model');

const projectController = {
    async create(req, res) {
        const {
            title,
            description,
            projectType,
            startDate,
            estimatedEndDate,
            manager, status,
            priority, assignedTo,
            followers, dueDate,
            createdBy, progressNotes } = req.body;
        try {

            const project = Project.create({
                title, description,
                projectType, startDate,
                estimatedEndDate, manager,
                status, priority,
                assignedTo, followers,
                dueDate, createdBy,
                progressNotes
            });
            return res.status(201).json(project);
        } catch (error) {
            console.error(error);
            return res.status(408).json("Erreur lors de la création du projet");
        }
    },

    async getById(req, res) {
        const id = req.params.id;
        const project = Project.getById(id);

        if (!project) {
            return res.status(404).json({ message: 'Ce projet n\'existe pas' });
        }
        res.status(200).json(project);
    },
    async getAll(req, res) {
        const projects = Project.getAll();
        if (!projects) {
            return res.status(404).json({ message: 'Aucune projet trouvé' });
        }
        res.status(200).json(projects);
    }
};

module.exports = projectController;