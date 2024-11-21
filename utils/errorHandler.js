const errorHandler = ( err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({error: "ha ocurrido un error en el servidor"});
}

module.exports = errorHandler