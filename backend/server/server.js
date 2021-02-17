const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('../routes');
const mongoose = require('mongoose');
const config = require('../configs/config');
const jwt = require('jsonwebtoken');
const authController = require('../controllers/Users');

mongoose.connect('mongodb://localhost:27017/twitter', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify:false});


app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', routes);
app.set('llave', config.llave);

app.post('/login', async (req, res) => {
    try{
        const login = await authController.Login(req, res);
        const body = req.body;
        
        if(login ===true){
            const payload = {
                username: body.username,
                check:  true
            };
            const token = jwt.sign(payload, app.get('llave'), {
                expiresIn: 1440
            });
            res.json({
                mensaje: 'Autenticación correcta',
                token: token
            });
        }else if(login === false){
            res.json({ mensaje: "Usuario y, o contraseña incorrectos"});
        }else{
            res.json({ mensaje: "Usuario no encontrado"});
        }
    }catch(error){
        console.log(error);
    }
})

app.get('/secure', (req, res) => {
    var token = req.headers['authorization']
    if(!token){
        res.status(401).send({
          error: "Es necesario el token de autenticación"
        })
        return
    }

    token = token.replace('', '');

    jwt.verify(token, "miclaveultrasecreta123*", function(err, user) {
      if (err) {
        res.status(401).send({
          error: 'Token inválido'
        })
      } else {
        res.send({
          message: 'Bienvenido Onichan'
        })
      }
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost`)
});
