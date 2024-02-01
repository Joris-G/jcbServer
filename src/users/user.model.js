const users = [
    {
        username: 'exampleUser',
        password: '$2b$10$qe.VU/.NPMCA1fapMn.yL.JbNZLgzfu29r4x3lY9kFqDZ8g4y0PI2', // Hashed password
    },
    // Add more users as needed
];

const userModel = {
    getUserByUsername(username) {
        return users.find(user => user.username === username);
    },
    getAllUsers() {
        return users.map((user => user.username));
    }
};

module.exports = userModel;