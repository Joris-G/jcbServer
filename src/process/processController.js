const processModel = require('./process.model');

const processController = {
    async create(req, res) {
        const { processName, targetTime, partNumber } = req.body;
        let process = processModel.getByName(processName);

        if (process) {
            return res.status(401).json({ message: 'Ce process existe déjà' });
        }

        process = processModel.create(processName, targetTime, partNumber)
        res.status(201).json(process);
    },

    async getById(req, res) {
        const id = req.params.id;
        const process = processModel.getById(id);

        if (!process) {
            return res.status(404).json({ message: 'Ce process n\'existe pas' });
        }
        res.status(200).json(process);
    },
    async getAll(req, res) {
        const processes = processModel.getAll();
        if (!processes) {
            return res.status(404).json({ message: 'Aucun process trouvé' });
        }
        res.status(200).json(processes);
    }
};

module.exports = processController;