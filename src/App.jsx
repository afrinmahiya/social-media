
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
const App = () => {
  return (
    <div className='bg-[#F5F5F5] '>
      <Navbar/>
      <div className="flex">
        <Sidebar/>
        <Home/>
      </div>
      
    </div>
  )
}

export default App
