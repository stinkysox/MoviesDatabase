import {useState} from 'react'
import './index.css'
import {Link, useHistory} from 'react-router-dom'
import {CiSearch, CiMenuFries} from 'react-icons/ci'
import Popup from 'reactjs-popup'
import {MdCancel} from 'react-icons/md'

const Header = () => {
  const [activeId, setActiveId] = useState('popular')
  const [searchQuery, setSearchQuery] = useState('')
  const history = useHistory()

  const ReactPopUp = () => (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button className="ham-menu" type="button">
            <CiMenuFries />
          </button>
        }
      >
        {close => (
          <div className="menu-bg">
            <div>
              <Link to="/">
                <button
                  type="button"
                  className={
                    activeId === 'popular' ? 'active-sm-btn' : 'option-sm-btn'
                  }
                  onClick={() => setActiveId('popular')}
                >
                  Popular
                </button>
              </Link>
              <Link to="/top-rated">
                <button
                  type="button"
                  className={
                    activeId === 'top' ? 'active-sm-btn' : 'option-sm-btn'
                  }
                  onClick={() => setActiveId('top')}
                >
                  Top Rated
                </button>
              </Link>
              <Link to="/upcoming">
                <button
                  type="button"
                  className={
                    activeId === 'upcoming' ? 'active-sm-btn' : 'option-sm-btn'
                  }
                  onClick={() => setActiveId('upcoming')}
                >
                  Upcoming
                </button>
              </Link>
            </div>
            <button
              onClick={() => close()}
              className="cancel-btn"
              type="button"
            >
              <MdCancel />
            </button>
          </div>
        )}
      </Popup>
    </div>
  )

  const handleSearch = () => {
    setActiveId('')
    history.push(`/search/${searchQuery}`)
  }

  return (
    <div className="w-header">
      <div className="header-container">
        <h1 className="nav-heading">movieDB</h1>
        <ul className="options-container">
          <Link to="/">
            <li>
              <button
                type="button"
                className={activeId === 'popular' ? 'active-btn' : 'option-btn'}
                onClick={() => setActiveId('popular')}
              >
                Popular
              </button>
            </li>
          </Link>
          <Link to="/top-rated">
            <li>
              <button
                type="button"
                className={activeId === 'top' ? 'active-btn' : 'option-btn'}
                onClick={() => setActiveId('top')}
              >
                Top Rated
              </button>
            </li>
          </Link>
          <Link to="/upcoming">
            <li>
              <button
                type="button"
                className={
                  activeId === 'upcoming' ? 'active-btn' : 'option-btn'
                }
                onClick={() => setActiveId('upcoming')}
              >
                Upcoming
              </button>
            </li>
          </Link>
        </ul>
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button className="search-btn" type="button" onClick={handleSearch}>
            <CiSearch fontSize="22px" />
          </button>
        </div>
        <div className="small-options-container">
          <ReactPopUp />
        </div>
      </div>
    </div>
  )
}

export default Header
