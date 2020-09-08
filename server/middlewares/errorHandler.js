function errorHandler(err, req, res, next) {
    let allError = []
    let statusCode = 500

    if(err.name === 'LOGIN_FAILED') {
        statusCode = 400
        allError.push('invalid email or password')
    } else if(err.name === 'SequelizeValidationError') {
        statusCode = 400
        err.errors.forEach(e => {
            allError.push(e.message)
        });
    } else if(err.name === 'AUTHENTICATION_FAILED') {
        statusCode = 401
        allError.push('failed to authenticate!')
    } else if(err.name === 'DATA_NOT_FOUND') {
        statusCode = 404
        allError.push('data not found')
    } else if(err.name === 'AUTHORIZATION_FAILED') {
        statusCode = 403
        allError.push('access forbidden')
    } else {
        allError.push('Internal server error')
    }
    res.status(statusCode).json({allError})
}

module.exports = errorHandler