const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        'Content-Type': 'application/json;charset=utf-8'
    },
    params: {
        'api_key': '76cf5b839ff14e2cc3ba78216df7c5da',
        'language': 'es'
    }
})

async function getTrendingMoviesPreview(){
    const {data} = await api('/trending/movie/day')

    const movies = data.results

    containerCardMovies.innerHTML = ""

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


async function getCategoriesMovie(){
    const {data} = await api('/genre/movie/list')
    console.log(data)

    const categories = data.genres

    contentAllCategories.innerHTML = ""

    categories.forEach(category => {
        const containerCategories = document.querySelector('.contentAllCategories')

        const sectionNameCategories = document.createElement('section')
        sectionNameCategories.classList.add('itemAllCategories')

        const ctaNameCategories = document.createElement('a')
        ctaNameCategories.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`
        })

        const nameCategories = document.createElement('p')
        nameCategories.classList.add('titleAllCategory')

        const getNameCategories = document.createTextNode(category.name)


        containerCategories.appendChild(sectionNameCategories)
        sectionNameCategories.appendChild(ctaNameCategories)
        ctaNameCategories.appendChild(nameCategories)
        nameCategories.appendChild(getNameCategories)
    })
}

async function getMoviesByCategory(id) {
    const {data} = await api('/discover/movie', {
        params:{
            with_genres: id
        }
    })
    const movies = data.results

    containerCardMovies.innerHTML = ""

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