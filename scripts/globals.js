const HEAD_API = 'https://www.themoviedb.org/3/'

function getTrendingMoviesPreview() {
    const res = (HEAD_API + 'trending/{media_type}/{time_window}')
    console.log(res)
}
getTrendingMoviesPreview()