import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import NavBar from './Components/NavBar/NavBar';
import Login from './Components/Login/Login';
import Checkout from './Components/Checkout/Checkout';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyOrders from './Components/MyOrders/MyOrders';
import AllProductList from './Components/AllProductList/AllProductList';
import AddNewProduct from './Components/AddNewProduct/AddNewProduct';

function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/myOrders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/allProductList">
            <AllProductList></AllProductList>
          </PrivateRoute>
          <PrivateRoute path="/addNewProduct">
            <AddNewProduct></AddNewProduct>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
