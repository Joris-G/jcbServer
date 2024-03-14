const processes = [
    {
        id: 1,
        processName: 'exampleUser',
        targetTime: 30000,
        partNumber: 'F46C5744121U1_A1'
    },
    // Add more users as needed
];

const processModel = {
    getById(id) {
        return processes.find(process => process.id == id);
    },
    getByName(name) {
        return processes.find(process => process.processName === name);
    },
    getAll() {
        return processes;
    },
    create(processName, targetTime, partNumber) {
        const newId = processes.length + 1;
        const newProcess = { id: newId, processName, targetTime, partNumber };
        processes.push(newProcess);
        return newProcess;
    }
};

module.exports = processModel;