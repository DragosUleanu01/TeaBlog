

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return(
    <Router>
    <div className="App">
      <Navbar />
      <div className = "content">
      <Switch>
        <Route exact path="/">
          <Home />


        </Route>

        <Route path="/create">

        <Create></Create>


        </Route>

        <Route path="/blogs/:id">
        <BlogDetails />

        </Route>

        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;