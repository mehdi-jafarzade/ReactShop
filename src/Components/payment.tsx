import { Link } from 'react-router-dom';
import CheckoutWizard from './CheckoutWizard';
import Layout from './Layout';
import Swal from 'sweetalert2';
import { FormEvent } from 'react';

function PaymentPage() {
    const methods = ['پرداخت آنلاین', 'پرداخت درب منزل'];

    const alerthandler = (e : FormEvent) => {
        e.preventDefault()
        Swal.fire({
            icon: 'error',
            title: 'خطا',
            text: 'درگاه پرداخت و فاکتور به زودی فعال می شود'
        });
    };

    return (
        <Layout>
            <CheckoutWizard  activeStep={2} />
            <div className="container py-5 vazir">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card shadow-lg border-0">
                            <div className="card-body p-5">
                                <h2 className="card-title mb-4 text-center">روش پرداخت</h2>
                                <form>
                                    {methods.map((item) => (
                                        <div key={item} className="form-check mb-3">
                                            <input
                                                name="paymentMethod"
                                                className="form-check-input"
                                                id={item}
                                                type="radio"
                                            />
                                            <label className="form-check-label ms-2" htmlFor={item}>
                                                {item}
                                            </label>
                                        </div>
                                    ))}
                                    <div className="d-grid gap-3">
                                        <Link className="btn btn-outline-secondary btn-lg" to="/cart">
                                            برگشت
                                        </Link>
                                        <button onClick={alerthandler} className="btn btn-primary btn-lg">
                                            بعدی
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default PaymentPage;
