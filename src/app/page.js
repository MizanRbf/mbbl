import Navbar from "./Components/Navbar/Navbar";
import Menubar from "./Components/Menubar/Menubar";
import Slider from "./Components/Slider/Slider";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <div className="">
      {/* Header */}
      <header>
        <Navbar></Navbar>
        <Menubar></Menubar>
        <Slider></Slider>
      </header>

      {/* Main */}
      <main></main>

      {/* Footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
