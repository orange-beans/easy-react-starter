

// Fetch user list from server
export function fetchGames(cb) {
  fetch('http://localhost:3001/api/games')
  .then((res) => {
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }
    return res.json();
  })
  .then((games) => {
    console.log(games);
    cb(games);
  });
}

// Update user list to the server
export function updateGames() {
  fetch('http://localhost:3001/api/update', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.props.games),
  }).then((res) => {
    console.log(res);
  });
}
