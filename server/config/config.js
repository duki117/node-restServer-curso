// PUERTO 
process.env.PORT = process.env.PORT || 8080;
//ENTORNO 
process.env.NODE_ENV = process.env.NODE_ENV  || 'dev';
//BASE DE DATOS
let urlDB;

if( process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;
//VENCIMIENTO DEL TOKEN
//60 SEG //60 MIN //24 HRS //30 DIAS
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30 ;
//SEED DE AUTENTICACIÓN
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//GOOGLE CLAVE ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '620535683170-bkl6mvm5fedeg0dmerod4h3e4il97k3r.apps.googleusercontent.com'
