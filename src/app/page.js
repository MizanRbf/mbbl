import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Menubar from "./Components/Menubar/Menubar";

export default function Home() {
  return (
    <div className="">
      <header>
        <Navbar></Navbar>
        <Menubar></Menubar>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
