
import './index.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Product from "./Pages/Admin/product"
function App() {
  return <>
  <Router>
    <Switch>
      <Route path="/Admin/product" exact component={Product}></Route>
    </Switch>
  </Router>
  </>
}

export default App;
