const database = firebase.database();
const auth = firebase.auth();

const moviesContainer = document.getElementById('moviesContainer');

/*const addMovieBtn = document.getElementById('addMovieBtn');
const movie = document.getElementById('movieInfo');


addMovieBtn.addEventListener('click', function (e) {

    e.preventDefault();
    
    if (movie.value === '') {
        alert("Ingrese una película");
    } else {

        let reference = database.ref('Movies').push();

        let movieObj = {
            id: reference.key,
            name: movie.value,
            avg: 0,
            voteCount: 0
        }

        reference.set(movieObj);
        movieInfo.value = "";
    }
});*/


database.ref('Movies').on('value', function (data) {
    moviesContainer.innerHTML = '';
    data.forEach(movieObj => {
        let value = movieObj.val();
        let movie = new Movie(value);
        moviesContainer.appendChild(movie.render());
    }
    );
})