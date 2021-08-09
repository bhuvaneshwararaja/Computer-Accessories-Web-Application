
import './index.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ProductView from "./Pages/Admin/productView"
import Home from "./Pages/User/Home"
function App() {
  return <>
  <Router>
    <Switch>
      <Route path="/user/home" exact component={Home}></Route>
      <Route path="/admin/view" exact component={ProductView}></Route>
    </Switch>
  </Router>
  </>
}

export default App;
