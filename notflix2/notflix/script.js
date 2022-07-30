function search() {
  if(event.key === 'Enter') {
    let input_result = document.getElementById('input').value
    let movie_name = input_result.replace(/\s/g, '%20')
    console.log(input_result)    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '69cf7b93c9mshdff4297836a5493p1671f4jsnb7aa26a3a30f',
        'X-RapidAPI-Host': 'online-movie-database.p.ra pidapi.com'
      }
    };
    function create(id, type) {
      if (type === "feature"){
        document.getElementById("video").src = "https://www.2embed.to/embed/imdb/movie?id=" + id;
      } else if(type === "TV series") {
        let sea = prompt("Enter season Number: ");
        let epi = prompt("Enter episode Number: ")
        document.getElementById("video").src = "https://www.2embed.to/embed/imdb/tv?id="+ id +"&s="+ sea +"&e=" + epi;
      }
    }
    fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=' + movie_name, options)
      .then(response => response.json())
      .then(data => (type = data.d[0].q, console.log(type), id = data.d[0].id, console.log(id), create(id, type)))
      .catch(err => console.error(err));
  }
}

function escape() {
  if(event.key === "Enter") {
    console.log("test")
  }
}