import axios from 'axios';

export function fetchRandomCat() {
  return axios
    .get("http://aws.random.cat/meow")
    .then(response => response.data)
      // console.log(response)
    .catch(error => {
      console.log("Error fetching random cat", error);
    })
}

