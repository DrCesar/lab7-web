
const API = {
  fetchMaze: function(w, h) {
    return fetch(`http://34.210.35.174:3001/?w=${w}&h=${h}&type=json`)
      .then(response => response.json());
  }
}


export default API;