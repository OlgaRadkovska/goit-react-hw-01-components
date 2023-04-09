import Layout from './Layout';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions';

export const App = () => {
  return (
    <>
      <Layout title="Профіль соціальної мережі">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Layout>

      <Layout title="Секція статистики">
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Layout>

      <Layout title="Список друзів">
        <FriendList friends={friends} />
      </Layout>

      <Layout title="Історія транзакцій">
        <TransactionHistory items={transactions} />
      </Layout>
    </>
  );
};
