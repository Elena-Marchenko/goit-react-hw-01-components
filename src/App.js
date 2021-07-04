// import ProfileList from './components/social-profile/ProfileList';
// import profiles from './components/social-profile/user.json';
import Section from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';

export default function App() {
  return (
    <div>
      {/* <ProfileList items={profiles} /> */}
      <Section title="Upload stats" stats={statisticalData} />
    </div>
  );
}
