import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import MoviesList from '../MoviesList'
import './index.css'

const SearchResults = () => {
  const {query} = useParams()
  console.log(query)

  const [apiStatus, setApiStatus] = useState('')
  const [searchResultsArray, setSearchResults] = useState([])

  useEffect(() => {
    const getSearchResult = async () => {
      const apiKey = '735b06bb00eb9d3d1346af2960df5323'

      try {
        const api = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1`
        const response = await fetch(api)
        const data = await response.json()
        console.log(data)
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
        console.log(updatedData)
        setApiStatus('Success')
        setSearchResults(updatedData)
      } catch (error) {
        setApiStatus('Failed')
        console.log(error)
      }
    }
    getSearchResult()
  }, [query])

  return (
    <ul className="search-container">
      {searchResultsArray.map(eachItem => (
        <MoviesList details={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}

export default SearchResults
