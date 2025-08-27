import About from "./components/About.jsx"
import Header from "./components/Header.jsx"
import Projects from "./components/Projects.jsx"
import Testimonials from "./components/Testimonials.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  // This is the main application component
  

  return (
    
    <div className="w-full overflow-hidden">
      <ToastContainer />
      
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/> 
    </div>
  )
}
  

export default App
