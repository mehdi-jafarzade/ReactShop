import Home from "./Components/Home";
import Product from "./Components/product";

const routes = [
    {path: "/" , element: <Home /> },
    {path: "/product/:id" , element: <Product /> },
]
export default routes;