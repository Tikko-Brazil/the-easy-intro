import { useParams } from "react-router";

export default function User() {
  const { userId } = useParams();
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}
