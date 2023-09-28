
export default function Item({name, quantity, category}) {
    return (
        <div className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2">
            <p>{name}</p>
            <p>Buy {quantity} in {category}</p>
        </div>
    );
}
