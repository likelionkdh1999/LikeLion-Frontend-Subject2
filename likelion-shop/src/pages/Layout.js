import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import {Navbar, Nav} from "react-bootstrap";
import './Layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <>
      <Navbar bg="dark"><Nav.Link className ="col" to="/">LikeLion Shop</Nav.Link>
      </Navbar>
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;