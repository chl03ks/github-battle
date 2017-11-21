const axios = require('axios');
const uri = 'https://api.github.com/search/repositories?q=stars:>1+language:';
const fileter = '&sort=stars&order=desc&type=Repositories';

module.exports = {
  fetchPopularRepos : language => {
    const encodedURI = window.encodeURI(`${uri}${language}${filter}`);
    return axios.get(encodedURI)
      .then((response) => {
        return response.data.items;
      })
  }
}