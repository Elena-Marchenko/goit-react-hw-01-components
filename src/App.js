import ProfileList from './components/social-profile/ProfileList';
import profiles from './components/social-profile/user.json';
import Section from './components/statistics/StatisticsList';
import statisticalData from './components/statistics/statistical-data.json';
import FriendList from './components/friend-list/FriendList';
import friends from './components/friend-list/friends.json';
import transactions from './components/transaction-history/transactions.json';
import TransactionHistory from './components/transaction-history/TransactionsList';

export default function App() {
  return (
    <div>
      <ProfileList items={profiles} />
      <Section title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
