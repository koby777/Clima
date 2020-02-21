 const lugar = require('./lugar/lugar')
 const clima = require('./clima/clima')

 const argv = require('yargs').options({
     direccion: {
         alias: 'd',
         desc: 'Direccion de la ciudad para obtener el clima',
         demand: true
     }

 }).argv;

 const getInfo = async(direccion) => {
     try {
         const coords = await lugar.getLugarLatLong(direccion)
         const temp = await clima.getClima(coords.lat, coords.lng)
         return `Èl clima de ${ coords.direccion } es de ${ temp }`
     } catch (e) {
         return `No se pudo determinar el clima de ${ coords.direccion }`
     }

 }



 getInfo(argv.direccion)
     .then(console.log)
     .catch(console.log)

 //  const resp = lugar.getLugarLatLong(argv.direccion)
 //  resp.then(console.log)
 //console.log(resp);

 //  clima.getClima(35, 139)
 //      .then(console.log)
 //      .catch(console.log)