import Image from "next/image";
import Navbar from "./_components/Navbar";
import About from "./_components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <article>
        <About />
      </article>
    </main>
  );
}
