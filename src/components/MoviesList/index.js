import './index.css'
import {Link} from 'react-router-dom'

const MoviesList = props => {
  const {details} = props

  const {posterPath, originalTitle, voteAverage, id} = details
  return (
    <li className="movie-card">
      <img
        className="movie-image"
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        alt={originalTitle}
      />
      <p>{originalTitle}</p>
      <p>{voteAverage}</p>
      <Link to={`/movies/${id}`}>
        <button className="view-details" type="button">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default MoviesList
