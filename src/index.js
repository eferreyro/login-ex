const express = require('express');

//Inicializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
//Middlewares ()

//Global Variables

//Routes


//Static Files


//Server Listener

app.listen(app.get('port'),() =>{
   console.log('Server Escuchando por el puerto', app.get('port'));
    
});