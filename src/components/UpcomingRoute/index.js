import {useState, useEffect} from 'react'
import MoviesList from '../MoviesList'
import './index.css'

const UpcomingRoute = () => {
  const [moviesArray, setMoviesArray] = useState([])
  const [apiStatus, setApiStatus] = useState('')

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const apiKey = '735b06bb00eb9d3d1346af2960df5323'
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
        const response = await fetch(url)
        const data = await response.json()
        const {results} = data
        const updatedData = results.map(eachItem => ({
          adult: eachItem.adult,
          backdropPath: eachItem.backdrop_path,
          genreIds: eachItem.genre_ids,
          id: eachItem.id,
          originalLanguage: eachItem.original_language,
          originalTitle: eachItem.original_title,
          overview: eachItem.overview,
          popularity: eachItem.popularity,
          posterPath: eachItem.poster_path,
          releaseDate: eachItem.release_date,
          title: eachItem.title,
          video: eachItem.video,
          voteAverage: eachItem.vote_average,
          voteCount: eachItem.vote_count,
        }))

        setApiStatus('Success')
        setMoviesArray(updatedData)
      } catch (error) {
        setApiStatus('Failed')
        console.error('Error fetching data:', error)
      }
    }

    getMovieDetails()
  }, [])

  return (
    <div>
      <h1 className="genre-heading">Upcoming</h1>
      <ul className="movies-container">
        {moviesArray.map(eachItem => (
          <MoviesList details={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default UpcomingRoute