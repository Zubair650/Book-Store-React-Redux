import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <h2>Book Store</h2>
      <nav>
        <Link to='/'>Home</Link> &nbsp;&nbsp;&nbsp;
        <Link to='/Add_Books'>Add Books</Link>&nbsp;&nbsp;&nbsp;
        <Link to='/All_Books'>All Books</Link>&nbsp;&nbsp;&nbsp;
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default App
