import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from './components/Sidebar'


function App() {
 

  return (
    
    <div className='app-conatiner'>
    <Sidebar></Sidebar>
    <Header></Header>
    <Footer></Footer>
    </div>
      
 
  )
}

export default App
