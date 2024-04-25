import Home from "./Components/Home";
import CartPage from "./Components/cart";
import Mobile from "./Components/mobile";
import PaymentPage from "./Components/payment";
import Product from "./Components/product";

const routes = [
    {path: "/" , element: <Home /> },
    {path: "/product/:id" , element: <Product /> },
    {path: "/cart" , element: <CartPage />},
    {path: "/payment" , element: <PaymentPage />},
    {path: "/mobile" , element: <Mobile />},
]
export default routes;