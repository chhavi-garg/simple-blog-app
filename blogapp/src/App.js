import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';


// function App() {

  // const title = "Welcome to the new blog";
  // const likes = 50;
  // const person = {name: 'Chhavi', age:20}
  // const link = "https://www.google.com";
  // return (
  //   <div className="App">
  //   <NavBar />
  //   <div className="content">
  //   <Home />
      {/* <h1>{title}</h1>
      <p>Liked {likes} times</p> */}
      {/* <p>{person}</p>
      <p>{10}</p>
      <p>{"hello ninjas"}</p>
      <p>{[1,2,3,4,5]}</p>
      <p>{Math.random()*10}</p>

      <a href={link} >Google Site</a> */}
//     </div>
//     </div>
//   );
// }



// After Routing -->

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
