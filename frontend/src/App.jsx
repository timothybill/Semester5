
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Trending from "./components/Trending"
import Superhero from "./components/Superhero"
import Footer from "./components/Footer"


function App() {
   return (
    <>

 
      <div className="intro" id="top">
    <Navbar/>
    <Intro/>
   </div>
     <div className="trending">
     <Trending/>
    <a href="#top" className="btn btn-warning p-2 tombol">Go to top
    </a>
     </div>

     <div className="superhero">
     <Superhero/>
     </div>

     <div className="footer">
     <Footer/>
     </div>

     
     </>
   )}

export default App
