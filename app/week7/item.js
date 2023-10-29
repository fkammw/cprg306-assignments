export default function Item({name, quantity, category, onSelect}){

    //add a function to handle onclick
    const handleClick = () => {
        onSelect(name);
        console.log("Item clicked:", name)
    };

    return(
        <>
        <ul>
            <li className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2" onClick={handleClick}>
            <h2 className="text-xl font-bold text-white">{name}</h2>
            <h6 className="text-white">Buy {quantity} in {category}</h6>
            </li>
        </ul>
        </>
    )
}