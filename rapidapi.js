const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://us-states.p.rapidapi.com/basic',
  headers: {
    'X-RapidAPI-Key': '098ddacd62mshd80520ccc7eff87p1fc231jsn5db385af2d0d',
    'X-RapidAPI-Host': 'us-states.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}