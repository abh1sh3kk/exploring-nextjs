/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      setUsers(users);
    };
    fetchUser();
  }, []);
  return (
    <main>
      <h1 className="text-xl mb-2">Data Fetching in Client</h1>
      <hr />
      <ul className="flex-col">
        {users.map((user) => (
          <li key={user.id} className="py-1">
            - {user.name}, {user.email}
          </li>
        ))}
      </ul>
      <Link href="/test/try">
        <button className="my-2">Goto TestTry</button>
      </Link>
    </main>
  );
}
