import "./Payment.css"

const Payment = () => {
  return (
    <div className="Payment-side">
        <div className="Payment-side2">
            <div className="Summary">
                <h2>Order Summary</h2>
                <div className="orders">
                    <div className="order1">
                        <p>Channel Catfish</p>
                        <p>10</p>
                    </div>
                    <div className="order2">
                        <p>NGN 100,000</p>
                    </div>
                </div>
                <hr className="line" />
                <div className="orders">
                    <div className="order1">
                        <p>Chicken</p>
                        <p>10</p>
                    </div>
                    <div className="order2">
                    </div>
                </div>
                <hr className="line" />
            </div>
        </div>
    </div>
  )
}

export default Payment