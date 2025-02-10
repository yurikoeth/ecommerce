import { useState } from 'react';

export default function UserRetrieval() {
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const res = await fetch(`http://localhost:3000/auth/user/email/${email}`);
      const data = await res.json();
      if (res.ok) {
        setUserData(data);
        setError('');
      } else {
        setUserData(null);
        setError(data.message || 'User not found');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Find User by Email</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
        {userData && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold">User Details:</h3>
            <p>Email: {userData.email}</p>
            <p>Name: {userData.name}</p>
            <p>Created At: {new Date(userData.createdAt).toLocaleString()}</p>
            <p>Updated At: {new Date(userData.updatedAt).toLocaleString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}
