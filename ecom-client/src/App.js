
import './index.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ProductView from "./Pages/Admin/productView"
import __404 from "./Error/404"
import CkartNavigation from "./Components/ckartNavigation/"
import CkartHome from "./Pages/ckart/CkartHome"
function App() {
  return <>
  <Router>
    <CkartNavigation />
    <Switch>
      {/* <Route path="/" component={CkartHome} exact /> */}
      {/* <Route component={__404}/> */}
    </Switch>
  </Router>
  </>
}

export default App;
