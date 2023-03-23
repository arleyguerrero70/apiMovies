const API_KEY = '76cf5b839ff14e2cc3ba78216df7c5da'
const HEAD_API = 'https://api.themoviedb.org/3'

async function getTrendingMoviesPreview(){
    const res = await fetch(HEAD_API + '/trending/movie/day?api_key=' + API_KEY)
    console.log(res)
    const data = await res.json()
    console.log(data)

    const movies = data.results

    movies.forEach(movie =>{
        const appendMovie = document.getElementById('containerCardsMovies')

        const movieContainer = document.createElement('div')
        movieContainer.classList.add('containerCard')

        const containerCategoryImage = document.createElement('div')
        containerCategoryImage.classList.add('categoryCardImage')

        const movieImg = document.createElement('img')
        movieImg.classList.add('cardImage')
        movieImg.setAttribute('alt', movie.title)
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path)

        const containerMovieTitle = document.createElement('div')
        containerMovieTitle.classList.add('categoryDescription')
        const movieTitle = document.createElement('h3')
        const appendMovieTitle = document.createTextNode(movie.title)

        const containerMovieVote = document.createElement('div')
        containerMovieVote.classList.add('contentCountdown')
        const contentMovieVote = document.createElement('p')
        const dataMovieVote = document.createTextNode((movie.vote_average).toFixed(1))

        appendMovie.appendChild(movieContainer)
        movieContainer.appendChild(containerCategoryImage)
        containerCategoryImage.appendChild(movieImg)
        containerCategoryImage.appendChild(containerMovieVote)

        containerMovieVote.appendChild(contentMovieVote)
        contentMovieVote.appendChild(dataMovieVote)


        containerCategoryImage.appendChild(containerMovieTitle)
        containerMovieTitle.appendChild(movieTitle)
        movieTitle.appendChild(appendMovieTitle)



    })
}

getTrendingMoviesPreview()