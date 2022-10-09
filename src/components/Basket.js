export default function Basket(props){

    const {cardItems , onAdd , onRemove} = props;
    const itemsPrice = cardItems.reduce((a,c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return  (
        <aside className="col-1 block">
            <h2>Card Items</h2>
            <div>
                {cardItems.length === 0 && <div>Card is emty</div>}
                {cardItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-1">{item.name}</div>
                        <div className="col-1">
                            <button onClick={() => onRemove(item)} className="remove">-</button>
                            &nbsp;
                            &nbsp;
                            <button onClick={() => onAdd(item)} className="add">+</button>
                        </div>
                        <div className="col-1 text-right">
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
                {cardItems.length !== 0 && (
                    <div>
                        <hr/>
                        <div className="row">
                            <div className="col-2">Items Price</div>
                            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Tax Price</div>
                            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Shipping Price</div>
                            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2"><strong>Total Price</strong></div>
                            <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
                        </div>
                        <div className="row">
                            <button onClick={() => alert("Implement Checkout!")}>Checkout</button>
                        </div>
                    </div>
                )}
            </div>
        </aside>
    )
}