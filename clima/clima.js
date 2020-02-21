const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=b6c66e68c67d131590bf7b019b54c520&units=metric`); //  params: { 'location': 'Toluca' },

    return resp.data.main.temp;
}

module.exports = {
    getClima
}