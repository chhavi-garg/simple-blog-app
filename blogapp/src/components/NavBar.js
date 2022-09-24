import { Link } from "react-router-dom";

const NavBar = () => {

    // const handleClick = (e)=>
    // {
    //     console.log("hello, ninjas",e);  //e--> events object
    // }
    // const handleClickAgain = (name)=>
    // {
    //     console.log("hello, "+name);
    // }
    return (
        <nav className="navbar">
            <h1>The Learner's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {/* <button onClick={handleClick}>Click Me</button>
                <button onClick={handleClickAgain('Chhavi')}>Click Me Again</button> */}
                <Link to="/create" style={{ 
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px' }}>New Blog</Link>
            </div>
        </nav>
      );
}
 
export default NavBar;