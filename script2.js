

const  api= "api_key=e0dee7e3fc878998b5132d1a09b84310";

const base_url="https://api.themoviedb.org/3/movie/11?api_key=API_KEY"; 

const banner_url="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg";

const img_url="https://image.tmdb.org/t/p/w300/1E5baAaEse26fej7uHcjOgEE2t2.jpg";

const requests= {

    fetchTrending: '${base_url}/trending/all/week?{api}&language=en-Us',
    fetchNetfixOrignals: '${base_url}/discover/tv?{api}&with_networks=213',
    fetchActiveMovies: '${base_url}/discover/movie?{api}&with_genres=28',
    fetchComedyMovies: '${base_url}/discover/movie?{api}&with_genres=35',
    fetchHorrorMovies: '${base_url}/discover/movie?{api}&with_genres=27',
    fetchRomanceMovies: '${base_url}/discover/movie?{api}&with_genres=10749',
    fetchDocumentaries: '${base_url}/discover/movie?{api}&with_genres=99',

};


function truncate(str, n) {
    return str?.length> n ? str.substr(0,n - 1) + "..." : str;
}

fetch(requests.fetchNetfixOrignals)
  .then((res) => res.json()) 

  .then((data) => {
        
   const setMovie =
     data.result [Math.floor(Math.random() * data.result.length - 1)];

     var banner =document.getElementById("banner");
     var banner_title =document.getElementById("banner_title");
     var banner_desc=document.getElementById("banner_description");

    banner.style.backgroundImage=
        "url(" + banner_url + setMovie.backdrop_path + ")";
        banner_desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText = setMovie.name;
      });

      fetch(requests.fetchNetfixOrignals)
      .then((res) => res.json())

      .then((data) => {
      const headbrow = document.getElementById("headrow");
      const row = document.createElement("div");

      row.className ="row";
      row.classList.add("netflixrow")

      headbrow.appendChild(row);

      const tittle = document.createElement("h2");

      tittle.className = "row_title";
      tittle.innerText ="NETFLIX ORIGINALS";

      row.appendChild(title);

      const row_posters = document.createElement("div");
      row_posters.className = "row_posters";
      row.appendChild(row_posters);
    
    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className ="row_posterlarge";

      var s = movie.name.replace(/\s+/g,"");

      poster.id = s;
      poster.src =img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  
    });

fetch(requests.fetchTrending)
  .then((res) => res.json())
  
  .then((data) => {
    const headbrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";

    headbrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText ="Top_Rated";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {

      const poster = document.createElement("img");
      poster.className = "row_postersLarge";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });
  fetch(requests.fetchActiveMovies)
   .then((res) => res.json())

   .then ((data)  => {
     const headbrow = document.getElementById("headrow");
     const row = document.createElement("div");
     row.className ="row";
     headbrow.appendChild(row);

     const title = document.createElement("h2");
     title.className ="row_title";
     title.innerText ="Action Movies";
     row.appendChild(title);

     const row_posters = document.createElement("div");
     row_posters.className = "row_posters";
     row.appendChild(row_posters);

     data.results.forEach((movie) => {

      const poster = document.createElement("img");
      poster.className = "row_poster";
      var s2 = movie.id;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
       
     });

   });
   fetch(requests.fetchComedyMovies)
     .then((res) => res.json ())
     .then ((data) => {
        const headrow = document.getElementById("headrow");
        const row =document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className ="row_title";
        title.innerText ="Comedy Movies";
        row.appendChild(title);

        const row_poster = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
          console.log(movie);
          const poster = document.createElement("img");
          poster.className = "row_poster";
          var s2 = movie.id;
          poster.id = s2;
          poster.src = img_url + movie.backdrop_path;
          row_posters.appendChild(poster);
        });

     });

     fetch(requests.fetchDocumentaries)
       .then((res) => res.json())
       .then((data) => {

          const headrow = document.getElementById("headrow");
          const row = document.createElement("div");
          row.className ="row";
          headrow.appendChild(row);

          const title = document.createElement("h2");
          title.className = "row_title";
          title.innerText = "Documentaries";
          row.appendChild(title);
          const row_poster = document.createElement("div");
          row_poster.className = "row_posters";
          row.appendChild(row_poster);

          data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row_poster";
            var s2 = movie.id;
            poster.id = s2;
            poster.src =img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        
          });
       });
    

      

        