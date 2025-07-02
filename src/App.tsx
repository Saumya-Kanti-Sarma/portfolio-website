import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home.js';
import Project from './component/projects/Project.js';
const App = () => {
  return (
    <main className='w-full'>
      <Navbar />
      <div id='home' className='w-[100%] min-h-[calc(100dvh-70px)]  px-[10%] text-white flex flex-col justify-center items-center max-sm:px-[15px]'>
        <Home />
      </div>
      <br />
      <div id='project' className='w-[100vw] min-h-[100dvh]  px-[10%] text-white flex flex-col justify-start items-center max-sm:px-[15px]'>
        <Project />
      </div>
    </main>
  )
}

export default App
