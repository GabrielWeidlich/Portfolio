import './App.css'
import Navbar from "../components/Navbar"
import Info from "../components/Info"
import About from '../components/About'
import Skills from '../components/Skills'

const App = (props)=>{
    return(
        <div className="app">
            <Navbar/>
            <Info/>
            <About/>
            <Skills/>
        </div>
    )
}

export default App