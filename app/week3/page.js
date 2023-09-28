import ItemList from "./item-list";

export default function Page() {
    return (
        <div className="bg-gray-300">
        <h1 className="text-left font-bold text-4xl m-4 ">Shopping List</h1>
        <ItemList />    
        </div>      
    );
}