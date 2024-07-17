import './App.css'
import Navbar from "../components/Navbar"
import Info from "../components/Info"
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

const App = (props)=>{
    return(
        <div className="app">
            <Navbar/>
            <Info/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}

export default App