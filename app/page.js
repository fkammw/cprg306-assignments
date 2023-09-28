import Link from "next/link";
import StudentInfo from "./StudentInfo";

export default function Home() {
  return (
    <main>
      <h1>GPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2">Week 2</Link>
      <br />
      <Link href="/week3">Week 3</Link>
    </main>
  );
}
