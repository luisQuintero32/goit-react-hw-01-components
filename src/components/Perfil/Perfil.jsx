import PropTypes from 'prop-types';
import style from './Perfil.module.css'

export const Perfil = ({user}) =>{
  return(
  <div className={style.container}> 
    <div className={style.profile}>
      <div className={style.description}>
        <img
          src={user.avatar}
          alt={user.tag}
          className={style.avatar}
        />
        <p className={style.name}>{user.username}</p>
        <p className={style.tag}>@{user.tag}</p>
        <p className={style.location}>{user.location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.stats_item}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{user.stats.followers}</span>
        </li>
        <li className={style.stats_item}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{user.stats.views}</span>
        </li>
        <li className={style.stats_item}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  </div>
)
}


Perfil.propTypes = {
  username: PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};



