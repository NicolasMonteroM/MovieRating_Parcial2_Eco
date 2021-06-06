class Movie {

    constructor(movie) {
        this.movie = movie;
    }

    render = () => {

        let component = document.createElement('div');

        component.innerHTML = `
        <div>
            <div class="movies__movie">
            <h2 class="movies__title">${this.movie.name}</h2>
                <form class="movies__form">
                    <div class="star-widget">
                        <input type="radio" name="rate" id="${this.movie.name}rate-5" value="5">

                        <label for="${this.movie.name}rate-5" class="fas fa-star"></label>

                        <input type="radio" name="rate" id="${this.movie.name}rate-4" value="4">

                        <label for="${this.movie.name}rate-4" class="fas fa-star"></label>

                        <input type="radio" name="rate" id="${this.movie.name}rate-3" value="3">

                        <label for="${this.movie.name}rate-3" class="fas fa-star"></label>

                        <input type="radio" name="rate" id="${this.movie.name}rate-2" value="2">

                        <label for="${this.movie.name}rate-2" class="fas fa-star"></label>

                        <input type="radio" name="rate" id="${this.movie.name}rate-1" value="1">

                        <label for="${this.movie.name}rate-1" class="fas fa-star"></label>
                       
                    </div>
                </form>

                <div class="movies__info">
                    <p class="movies__avg">Average: ${this.movie.avg}</p>
                    <p class="movies__voteCount">Votes: ${this.movie.voteCount}</p>
                </div>
            </div>
        </div>
        `;

        return component;

    }
}