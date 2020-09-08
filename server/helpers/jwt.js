const jwt = require('jsonwebtoken')

function generateToken(payload) {
    return jwt.sign(payload, process.env.SECRET)
}

function verifyToken(access_token) {
    return new Promise(function(resolve, reject) {
        jwt.verify(access_token, process.env.SECRET, function(err, decoded) {
            if(err) {
                reject({msg: 'Invalid Token'})
            } else {
                resolve(decoded)
            }
        })
    })
}

module.exports = {generateToken, verifyToken}

