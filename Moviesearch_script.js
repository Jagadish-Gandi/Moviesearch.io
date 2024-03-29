      const form = document.querySelector('form');
      const searchResults = document.querySelector('#search-results');
      const searchInput = document.querySelector('#movie-search');

      searchInput.addEventListener('input', async () => {
        const query = searchInput.value;
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=be354b34065ae484cf8130067ba33203&query=${query}`);
        const data = await response.json();
        console.log(data.results);
        displayResults(data.results);
      });

      function displayResults(results) {
        searchResults.innerHTML = '';
        results.forEach((result) => {
          const movieDiv = document.createElement('div');
          movieDiv.classList.add('movie');
          movieDiv.innerHTML = `
            <h2>${result.title}</h2>
            <p>${result.overview}</p>
            <img src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt="${result.title} poster">
          `;
          searchResults.appendChild(movieDiv);
        });
      
      }

      function changeColor() {
        var info = document.getElementById("info");
        var colors = ["white", "yellow", "#007C80", "skyblue", "#342D7E","#007C80"];
        var currentColor = info.style.color;
        var index = colors.indexOf(currentColor);
        if (index === colors.length - 1) {
            index = 0;
        } else {
            index++;
        }
        info.style.color = colors[index];
    }
    
    setInterval(changeColor, 500);
    
