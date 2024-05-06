import Profile from "./profile/profile";
import userData from "../src/userData.json";
import FriendList from "../src/FriendList/FriendList";
import friends from "../src/FriendList.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
