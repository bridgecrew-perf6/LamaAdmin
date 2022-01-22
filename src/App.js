import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./app.css";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser"; 
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Router exact path="/">
            <Home />
          </Router>
          <Router path="/users">
            <UserList />
          </Router>
          <Router path="/user/:userId">
            <User/>
          </Router>
          <Router path="/newUser">
            <NewUser/>
          </Router>
          <Router path="/products">
            <ProductList/>
          </Router>
          <Router path="/product/:productId">
            <Product/>
          </Router>
          <Router path="/newproduct">
            <NewProduct/>
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
