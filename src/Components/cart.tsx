import { useContext } from "react";
import Store from "./context";
import Layout from "./Layout";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
interface item {
    name: string;
    cat: string;
    img: string;
    id: number;
    p1: string;
    h1: string;
    price: string;
    qty: number;
  }
function CartPage() {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  function removeItemHandler(item : item) {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  }
  function incrementQuantityHandler(id : number) {
    console.log("Incrementing quantity for item with ID:", id);
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id } });
  }

  function decrementQuantityHandler(id : number) {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id } });
  }

  return (
    <Layout>
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="d-flex flex-column justify-content-center align-items-center vzir">
          <h3>سبد خرید خالی است.</h3>
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center vzir">
          <div className="col-md-9">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>خرید ها</th>
                  <th className="text-right">تعداد خرید</th>
                  <th className="text-right">قیمت</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr className="vazir" key={item.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={item.img} className="mr-2 w-25 img-fluid" />
                      </div>
                    </td>
                    <td className="">
                      <span>{item.qty}</span>
                      <div className="d-flex">
                      <Button
                        variant="light"
                        className="text-danger fs-5 border-none"
                        onClick={() => incrementQuantityHandler(item.id)} 
                      >
                        +
                      </Button>

                      <Button
                        variant="light"
                        className=" text-danger fs-5 border-none"
                        onClick={() => decrementQuantityHandler(item.id)}
                      >
                        -
                      </Button>
                      </div>
                    </td>
                    <td className="text-right">{item.price}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => removeItemHandler(item)}
                      >
                        حذف
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="col-md-3 vazir text-center">
            <div className="pb-3 text-center">
              <strong>جمع قیمت:</strong>{" "}
              {cartItems.reduce((acc, cur ) => acc + cur.qty * parseFloat(cur.price), 0)}
            </div>
            <Link style={{textDecoration: "none" , borderRadius: "5px"}} to={'/payment'}  className="bg-dark text-white px-2 py-1 rounded-md">
              ادامه پرداخت
            </Link>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default CartPage;
