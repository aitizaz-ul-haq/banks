module.exports = app => {
    const {
        addbanks,
        getbanks,
        getbanksById,
        updatebanks,
        deletebanks
    } = require('../controllers/banks.controller');

    app.post('/banks', addbanks);
    app.get('/banks', getbanks);
    app.get('/banks/:id', getbanksById);
    app.put('/banks/:id', updatebanks);
    app.delete('/banks/:id', deletebanks);
}