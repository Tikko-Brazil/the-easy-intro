import { Link, useParams } from 'react-router-dom'

function User() {
  const { userId } = useParams<{ userId: string }>()

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {userId}</p>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  )
}

export default User
