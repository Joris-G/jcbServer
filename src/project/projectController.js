const projectModel = require('./project.model');

const projectController = {
    async create(req, res) {
        //     const { title, description, status, priority, assignedTo, followers, dueDate, createdBy, progressNotes } = req.body;

        //     const action = projectModel.create(title, description, status, priority, assignedTo, followers, dueDate, createdBy, progressNotes)
        //     res.status(201).json(action);
    },

    async getById(req, res) {
        const id = req.params.id;
        const project = projectModel.getById(id);

        if (!project) {
            return res.status(404).json({ message: 'Ce projet n\'existe pas' });
        }
        res.status(200).json(project);
    },
    async getAll(req, res) {
        const projects = projectModel.getAll();
        if (!projects) {
            return res.status(404).json({ message: 'Aucune projet trouvé' });
        }
        res.status(200).json(projects);
    }
};

module.exports = projectController;