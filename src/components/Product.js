export default function Product(props) {
    const { product, onAdd, onRemove, item} = props;

    return(
        <div className="card">
            <img className="small" src={product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div className="m-qty">
                {item ? 
                <div className="btn-span">
                    <button onClick={() => onRemove(item)} className="remove">-</button>
                    <span className="p-1">{item.qty}</span>
                    <button onClick={() => onAdd(item)} className="add">+</button>
                </div>:
                <button onClick={() => onAdd(product)}>Add To Card</button>

                }
            </div>
        </div>
    )
}