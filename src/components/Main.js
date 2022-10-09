import Product from "./Product";

export default function Main(props){
    const {products,onAdd,onRemove,cardItems} = props;
    return (
        <div className="col-2 block">
            <h2>Products</h2>
            <div className="row">
                {products.map((product) =>(
                    <Product 
                    key={product.id}
                    product={product}
                    onAdd={onAdd} 
                    onRemove={onRemove}
                    item={cardItems.find((x)=> x.id === product.id)}
                    ></Product>
                ))}
            </div>
        </div>
    );
}