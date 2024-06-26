import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {RiLogoutCircleRLine} from 'react-icons/ri'
import './index.css'

const Sidebar = props => {
  const logoutClicked = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/')
  }

  return (
    <div className="sidebar" data-testid="sidebar">
      <Link to="/" className="link-item">
        <img
          src="https://cdn.siasat.com/wp-content/uploads/2022/11/Spotify.jpg"
          alt="website logo"
          className="website-logo1"
        />
        <h1 className="heading">Spotify</h1>
        <p className="str">music streaming app</p>
        <p className="str">Enjoy the music with latest albums</p>
      </Link>
      <buton type="button" className="side-logout-btn" onClick={logoutClicked}>
        Logout
        <RiLogoutCircleRLine className="icon" />
      </buton>
    </div>
  )
}

export default withRouter(Sidebar)
