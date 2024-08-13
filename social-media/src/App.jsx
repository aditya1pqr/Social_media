import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import CardList from './components/CardList'
import { useState } from 'react'
import PostListProvider  from './store/PostListstrore'


function App() {
 const [ selectedtab, setselected] = useState("Home")

  return (
    <PostListProvider>
    <div className='app-conatiner'>
    <Sidebar selectedtab={selectedtab} setselected={setselected}></Sidebar>
    <div className='contain'>
      <Header></Header>
      {selectedtab === "Home" ?<CardList></CardList>:<CreatePost></CreatePost>}
      
      <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
 
  )
}

export default App
