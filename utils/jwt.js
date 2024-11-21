const jwt = require('jsonwebtoken');

// Clave secreta (puedes usar variables de entorno para mayor seguridad)
const SECRET_KEY = process.env.JWTSECRET_KEY || 'mi_clave_secreta';

// Generar un token
const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email }, 
        SECRET_KEY,
        { expiresIn: '5h' }
    );
};

// Verificar el token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado.' });
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token inválido o expirado.' });
    }
};

module.exports = { generateToken, verifyToken };
