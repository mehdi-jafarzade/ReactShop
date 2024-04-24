import { Link } from "react-router-dom";
import CheckoutWizard from "./CheckoutWizard";
import Layout from "./Layout";
import Swal from "sweetalert2";

function PaymentPage() {
    const methods = ['پرداخت آنلاین', 'پرداخت درب منزل']

    const alerthandler = () => {
        Swal.fire({
            icon: 'error',
            title: 'خطا',
            text: 'درگاه پرداخت و فاکتور به زودی فعال می شود'
        });
    }

    return (
        <Layout>
            <CheckoutWizard activeStep={2} />
            <form className='mx-auto max-w-screen-md h-screen mr-5'>
                <h2 className='mb-4 text-xl lalezar'>روش پرداخت</h2>
                {methods.map((item) => (
                    <div key={item} className='mb-4 form-check'>
                        <input
                            name='paymentMethod'
                            className='form-check-input'
                            id={item}
                            type='radio'
                        />
                        <label className='form-check-label vazir' htmlFor={item}>
                            {item}
                        </label>
                    </div>
                ))}
                <div className='mb-4 d-flex justify-content-around vazir'>
                    <Link className="btn btn-danger vazir" to='/cart'>
                        برگشت
                    </Link>
                    <button onClick={alerthandler} className='btn btn-danger vazir'>
                        بعدی
                    </button>
                </div>
            </form>
        </Layout>
    )
}

export default PaymentPage;