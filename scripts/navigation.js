buttonFormSearch.addEventListener('click', () => {
    location.hash = '#search='
})

viewMoreTitle.addEventListener('click', () => {
    location.hash = '#category='
})

window.addEventListener('DOMContentLoad', navigator, false)
window.addEventListener('hashchange', navigator, false)


function navigator(){

    if(location.hash.startsWith('#trends')){
        trends()
    } else if (location.hash.startsWith('#search=')){
        searchControllers()
    } else if (location.hash.startsWith('#movie=')){
        movieDetails()
    } else if (location.hash.startsWith('#category=')){
        categories()
    } else {
        homepage()
    }
    
    window.scrollTo(0, 0);

}

navigator()

function trends(){
    console.log('Estamos en trends')

    topHeader.classList.remove('inactive')
    navigatorContent.classList.remove('inactive')

    mainHero.classList.add('inactive')
    backArrow.classList.remove('inactive')

    titleCategory.classList.add('inactive')
    containerCardMovies.classList.add('inactive')
    containerCard.classList.add('inactive')

    containerCategories.classList.add('inactive')
}

function searchControllers(){
    console.log('Search controllers')

    topHeader.classList.remove('inactive')
    navigatorContent.classList.remove('inactive')

    mainHero.classList.add('inactive')
    backArrow.classList.remove('inactive')

    titleCategory.classList.add('inactive')
    containerCardMovies.classList.add('inactive')
    containerCard.classList.add('inactive')

    containerCategories.classList.add('inactive')
}

function movieDetails(){
    console.log('Movie Details')

    topHeader.classList.remove('inactive')
    navigatorContent.classList.remove('inactive')

    mainHero.classList.add('inactive')
    backArrow.classList.remove('inactive')

    titleCategory.classList.add('inactive')
    containerCardMovies.classList.add('inactive')
    containerCard.classList.add('inactive')

    containerCategories.classList.add('inactive')

}

function categories(){
    console.log('Categories')

    topHeader.classList.remove('inactive')
    navigatorContent.classList.remove('inactive')

    mainHero.classList.remove('inactive')
    containerHeroBanner.classList.add('inactive')
    backArrow.classList.remove('inactive')

    titleCategory.classList.remove('inactive')
    viewMoreTitle.classList.add('inactive')
    containerCardMovies.classList.remove('inactive')
    containerCard.classList.remove('inactive')

    containerCategories.classList.add('inactive')

    const [_, categoryData] = location.hash.split('=')
    const [categoryId, categoryName] = categoryData.split('-')

    titleCategory.innerHTML = categoryName
    getMoviesByCategory(categoryId)
}

function homepage(){
    console.log('Home')

    topHeader.classList.remove('inactive')
    navigatorContent.classList.remove('inactive')

    mainHero.classList.remove('inactive')
    backArrow.classList.add('inactive')

    titleCategory.classList.remove('inactive')
    containerCardMovies.classList.remove('inactive')
    containerCard.classList.remove('inactive')

    containerCategories.classList.remove('inactive')


    getTrendingMoviesPreview()
    getCategoriesMovie()
}

