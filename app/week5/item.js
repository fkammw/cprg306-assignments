export default function Item({name, quantity, category}){
    return(
        <>
        <ul>
            <li className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2">
            <h2 className="text-xl font-bold text-white">{name}</h2>
            <h6 className="text-white">Buy {quantity} in {category}</h6>
            </li>
        </ul>
        </>
    )
}