const axios = require("axios");

const apiKey =
  "e46c7289f24ab432fff79125001322df5805788047915a733f21572c1f783e4f";

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
