import React from 'react';
import ReactDOM from 'react-dom';
import profiles from './user.json';

function Profile(props) {
  return (
    <div className="profile">
      <div className="description">
        <img src={props.avatar} alt="Аватар пользователя" className="avatar" />
        <p className="name">{props.name}</p>
        <p className="tag">@{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{props.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{props.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{props.likes}</span>
        </li>
      </ul>
    </div>
  );
}

const profile = profiles[0];
ReactDOM.render(
  <Profile
    name={profile.name}
    tag={profile.tag}
    locatoin={profile.location}
    avatar={profile.avatar}
    followers={profile.stats.followers}
    views={profile.stats.views}
    likes={profile.stats.likes}
  />,
  document.querySelector('#root'),
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
