const { response } = require('express');

const getUser = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'get API controller'
    })
}

const postUser = (req, res) => {

    const body = req.body;
    console.log(body);

    res.json({
        ok: true,
        msg: 'post API controller',
        body
    })
}

const putUser = (req, res) => {
    res.json({
        ok: true,
        msg: 'put API controller'
    })
}

const deleteUser = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete API controller'
    })
}


module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}