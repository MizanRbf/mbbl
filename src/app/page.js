import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Menubar from "./Components/Menubar/Menubar";
import Slider from "./Components/Slider/Slider";

export default function Home() {
  return (
    <div className="">
      <header>
        <Navbar></Navbar>
        <Menubar></Menubar>
        <Slider></Slider>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
