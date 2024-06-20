const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');
const app = express();


app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(cors());
//! PRUEBE ESE EVENTO A VER SI BOTA FIRE

//aplicar css
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'public' ,'css')));
app.use(express.static(path.join(__dirname, 'public',"js")));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, "noticias")));
app.use(express.static(path.join(__dirname, "archivos")));
app.use(express.static(path.join(__dirname, "estrellas")));
app.use(express.static(path.join(__dirname, "planetas")));
app.use(express.static(path.join(__dirname, "fuentes")));
//Ruta planetas
// app.get('/planetas', (req, res) => {
//   res.sendFile(path.join(__dirname, './Planetas.html'));
// });

// app.get('/estrellas', (req, res) => {
//   res.sendFile(path.join(__dirname, './Estrellas.html'));
// });

// Ruta para servir el archivo HTML principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main.html'));
});


// Ruta para manejar el envÃo de correos
app.post('/send-email', (req, res) => {
  const { email, subject, message
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'santimoralessgr@gmail.com',
      pass: 'mrnp mmwf aceo trtq'
    }
  });

  const mailOptions = {
    from: email,
    to: 'santimoralessgr@gmail.com',
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email enviado correctamente');
  });
});

// Puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT
    }`);
});