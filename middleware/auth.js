const jwt = require('jsonwebtoken');

/* VERIFICADOR DE AUTENTICACIÓN */
var authenticateJWT = (req, res, next) => {
    const jwt_token = req.headers["jwt_token"];

    if (jwt_token) {
        const token = jwt_token.split(' ')[1];

        /* Payload decodificado */
        jwt.verify(token, process.env.TOKEN_SECRET, (err, payload) => {
            if (err) {
                return res.sendStatus(403);
            }

            /* Datos del usuario */
            console.log(payload)

            /* Forma parte del requerimiento */
            req.user = payload;
              
            return next();
        });
    } else {
        return res.sendStatus(403);
    }
};

module.exports = authenticateJWT;