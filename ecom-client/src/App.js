
import './index.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ProductView from "./Pages/Admin/productView"
function App() {
  return <>
  <Router>
    <Switch>
      <Route path="/admin/product" exact component={ProductView}></Route>
    </Switch>
  </Router>
  </>
}

export default App;
