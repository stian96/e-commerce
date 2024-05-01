import "@/styles/order.scss";

// TODO: Fix component so it uses dynamic information.
export const OrderSummary = () => {

    const orderData = [
        { label: "Subtotal", price: 3445 },
        { label: "Discount 10%", price: -100 },
        { label: "Shipping", price: 0 }
    ]

    return (
        <div className="summary-container">
            <h2 className="summary-container__title">Order Summary</h2>
            <div className="summary-container__inner">
                { orderData.map((order, id) => (
                    <div key={id} className="summary-container__inner-row">
                        <span className="summary-container__inner-row-label">{order.label}</span>
                        <span className="summary-container__inner-row-price">{order.price}</span>
                    </div>
                ))}
                <span className='line-separator'></span>
                <div className="summary-container__inner-row">
                        <span className="summary-container__inner-row-label total">Total:</span>
                        <span className="summary-container__inner-row-price total">8753</span>
                    </div>
                <button className="summary-container__inner__order-btn">Process Order</button>
            </div>
        </div>
    );
};