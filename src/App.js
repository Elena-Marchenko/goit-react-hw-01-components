import ProfileList from './components/social-profile/ProfileList';
import profiles from './components/social-profile/user.json';

export default function App() {
  return (
    <div>
      <ProfileList items={profiles} />
    </div>
  );
}
