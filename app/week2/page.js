import StudentInfo from "../StudentInfo";

export default function Page(){
    return(
        <div>
            <h1 className="text-left font-bold text-4xl m-4">My Shopping List</h1>
            <p className="text-right"><StudentInfo>Info</StudentInfo></p>
        </div>
    );
}