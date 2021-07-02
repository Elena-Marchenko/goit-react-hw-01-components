import Profile from './components/social-profile/Profile';
import profiles from './user.json';

export default function App() {
  return (
    <Profile
      name={profiles[0].name}
      tag={profiles[0].tag}
      location={profiles[0].location}
      avatar={profiles[0].avatar}
      followers={profiles[0].stats.followers}
      views={profiles[0].stats.views}
      likes={profiles[0].stats.likes}
    />
  );
}
