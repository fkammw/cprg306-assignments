import ItemList from "./item-list";

export default function Page(){
    return(
        <main className="bg-amber-200">
            <h1 className=" font-bold text-4xl m-4 ">Shopping List</h1>
            <ItemList />
        </main>
    )
}