import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
// import { FriendList } from 'components/friendList/FriendsList';

import userData from 'data/user.json';
import statsData from 'data/data.json';
// import friendsData from 'data/friends.json';

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
