// PUERTO 
process.env.PORT = process.env.PORT || 8080;
//ENTORNO 
process.env.NODE_ENV = process.env.NODE_ENV  || 'dev';
//BASE DE DATOS
let urlDB;

if( urlDB === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = 'mongodb+srv://duki117:aVGCa0AizAVAPjFc@cluster0.kyecs.mongodb.net/cafe';
}

process.env.URLDB = urlDB;
