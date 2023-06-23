import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';

import userData from 'data/user.json';
import statsData from 'data/data.json';

export const App = () => {
  return (
    <>
      <div>
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <div>
        <Statistics title="Upload stats" stats={statsData} />
        {/* <Statistics stats={statsData} /> */}
      </div>
    </>
  );
};
