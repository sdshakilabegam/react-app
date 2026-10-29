import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("Request failed with status " + response.status);
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="user-box">
      <h3>Users from an API</h3>

      {loading && <p>Loading users...</p>}

      {error && <p className="error-text">Error: {error}</p>}

      {!loading && !error && (
        <>
          <p>Total users: {users.length}</p>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong>
                <span className="user-detail">
                  {user.email} - {user.address.city}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default UserList;
