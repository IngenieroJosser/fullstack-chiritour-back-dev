const isLogged = (req, res, next) => {
    let logged = true;
    (logged) ? next() : res.send("no está logueado, por lo tanto no tiene acceso")
} 

const authMiddleware = (req, res, next) => {
    const token = req.headers("authorization");
    if (!token) return res.status(401).send({error: "Acceso denegado."});

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(401).send({error: "Token invalido, acceso denegado."});
    }
}

module.exports = {isLogged, authMiddleware}