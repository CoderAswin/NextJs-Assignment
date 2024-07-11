
import Nav from "./components/Nav"
import Homescreen from "./components/Homescreen"
import Feature from "./components/Feature"
import Add from "./components/Add"
import Testimonials from "./components/Testimonials"
import End from "./components/End"
import Footer from "./components/Footer"
import Copyright from "./components/Copyright"

export default function Home() {
  return (
    <div>
      <Nav/>
      <Homescreen/>
      <Feature/>
      <Add/>
      <Testimonials/>
      <End/>
      <Footer/>
      <Copyright/>
    </div>
  );
}
