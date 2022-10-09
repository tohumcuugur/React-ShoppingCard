export default function Header(props){
    const {countCardItems} = props;
    return (
        <div className="row center block">
            <div>
                <a href="#/">
                    <h2>Shopping Card</h2>
                </a>
            </div>
            <div>
                <a href="#/card">Card{countCardItems? <button className="badge">{countCardItems}</button>:("")}</a>
                &nbsp;
                &nbsp;
            </div>
        </div>
    );
}