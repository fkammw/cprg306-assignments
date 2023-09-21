import Link from "next/link";

export default function StudentInfo() {
    return (
        <div>
            <p>Student Name: Florence Kam</p>
            <p>Course Section: CPRG306 B</p>
            <p>
                <Link href="https://github.com/fkammw">Github</Link>
            </p>
        </div>
    );
}