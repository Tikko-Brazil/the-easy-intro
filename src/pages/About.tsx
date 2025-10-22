import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of our React + Vite application.</p>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  )
}

export default About
