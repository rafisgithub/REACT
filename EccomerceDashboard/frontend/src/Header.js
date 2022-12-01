import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
        
          <Navbar.Brand href="#home">E-ccom</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">
            <Link to="/add">Add products</Link>
            <Link to="/update">Update products</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            
          </Nav>
      
      </Navbar>
            
        </div>
    )
}
export default Header