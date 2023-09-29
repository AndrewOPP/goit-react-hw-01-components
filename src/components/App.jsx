import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { Friends } from 'components/Friends';
import data from '../user.json';
import dataStat from '../data.json';
import dataFriends from '../friends.json';
import datatransactions from '../transactions.json';
import { Transactions } from './Transactions';

export function App() {
  return (
    <div>
      <Profile
        username={data.username}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        stats={data.stats}
      />

      <Statistics title="Upload stats" stats={dataStat} />
      <Friends friends={dataFriends} />
      <Transactions items={datatransactions} />
    </div>
  );
}
