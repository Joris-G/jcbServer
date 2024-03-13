const actionModel = require('./action.model');

const actionController = {
    async create(req, res) {
        const { title, description, status, priority, assignedTo, followers, dueDate, createdBy, progressNotes } = req.body;

        const action = actionModel.create(title, description, status, priority, assignedTo, followers, dueDate, createdBy, progressNotes)
        res.status(201).json(action);
    },

    async getById(req, res) {
        const id = req.params.id;
        const action = actionModel.getById(id);

        if (!action) {
            return res.status(404).json({ message: 'Cet action n\'existe pas' });
        }
        res.status(200).json(action);
    },
    async getAll(req, res) {
        const actions = actionModel.getAll();
        if (!actions) {
            return res.status(404).json({ message: 'Aucune action trouvée' });
        }
        res.status(200).json(actions);
    }
};

module.exports = actionController;