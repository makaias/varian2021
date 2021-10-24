const axios = require("axios");

//comment out new addresses if you want more 100 serches from a new serpapi account
const apiKey = 'e46c7289f24ab432fff79125001322df5805788047915a733f21572c1f783e4f';
// const apiKey = '857b1e8a45957acbb57da7b9467d9b58d9d0b7b7ff975083f71c3b3f305536fd';
// const apiKey = 'd44456390869dcf3c0d1920b441318563f504b2d1857f30919fb7ef984eae1bd';
// const apiKey = '84378c066ca6c946cb7ca016ceced5854711a3b31c266fc2f598ea4b123ca2d0';

module.exports = {
  async fetch(ctx) {
    const { num = 5 } = ctx.query;
    const { keyword } = ctx.params;
    const response = await axios.get(
      `https://serpapi.com/search?engine=google_scholar&sort=year&num=${num}&q=${keyword}&api_key=${apiKey}`
    );
    return response.data;
  },
};
