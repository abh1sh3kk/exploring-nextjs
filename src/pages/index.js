import Link from "next/link";
import { useState, useEffect } from "react";

const Home = ({ serverTime, users }) => {
  const [clientTime, setClientTime] = useState("");

  useEffect(() => {
    const thisTime = `${new Date().toLocaleTimeString()}.`;
    setClientTime(thisTime);
  }, []);

  return (
    <main>
      <h1 className="text-xl mb-2">Data Fetching in Server</h1>
      <hr />
      <div className="my-4">
        <div>Server Time: {serverTime}</div>
        <div>Client Time: {clientTime}</div>
      </div>
      <hr />
      <ul className="flex-col">
        {users.map((user) => (
          <li key={user.id} className="py-1">
            {user.name}, {user.email}
          </li>
        ))}
      </ul>
      <Link href="test/try">
        <button className="my-2">Goto TryTest</button>
      </Link>
    </main>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  const thisTime = new Date().toLocaleTimeString();
  return {
    props: {
      serverTime: thisTime,
      users,
    },
  };
}
