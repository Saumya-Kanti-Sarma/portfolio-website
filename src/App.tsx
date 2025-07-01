import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home.js';
const App = () => {
  return (
    <main className='w-full'>
      <Navbar />
      <div id='home' className='w-[100%] min-h-[calc(100dvh-70px)]  px-[10%] text-white flex flex-col justify-center items-center max-sm:px-[15px]'>
        <Home />
      </div>
    </main>
  )
}

export default App
