//VERIFICAR TOKEN
const jwt = require('jsonwebtoken');

let verificaToken = (req, res, next) =>{

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err){
            return res.status(401).json({
              ok: false,
              err: {
                  message: 'TOKEN NO VALIDO...'
              }
            });
        }
        
        req.usuario = decoded.usuario;
        next();
    });

};

//VERIFICAR ROLE
let verificaAdmin_Role = (req, res, next) =>{

    let usuario = req.usuario;

    if(usuario.role === 'ADMIN_ROLE'){
        next();
    }else{
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es admi...'
            }
        });
    }
};

module.exports = {
    verificaToken,
    verificaAdmin_Role
}
