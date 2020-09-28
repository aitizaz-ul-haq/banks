const { Users } = require('../modals/user.modal');


const addUser = async (req, res, next) => {
    try {
        const user = await Users.create(req.body);
        return res.send({ status: true, data: user })
    } catch (error) {
        console.log(error);
    }
}

const getUsers = async (req, res, next) => {
    try {
        const users = await Users.find().populate('banks');
        return res.send({ status: true, data: users })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addUser,
    getUsers,
}