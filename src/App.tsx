import './App.css';
import Home from './component/Home/Home.js';
import Project from './component/projects/Project.js';
import Certifications from './component/Certificates/Certificates.js';
import Navbar from './component/Navbar/Navbar.js';
import Packages from './component/packages/Packages.js';
import HireMe from './component/HireMe/HireMe.js';
import Footer from './component/Footer/Footer.js';
const App = () => {
  return (
    <>
      <nav className='w-full h-[70px] absolute left-0 top-[10px] z-[100] flex justify-center'>
        <Navbar />
      </nav>
      <main
        id='main'
        className='w-full h-[100dvh] overflow-hidden overflow-y-auto relative'>
        <div id='home' className='w-[100%] min-h-[calc(100dvh-70px)]  px-[10%] pt-[70px] text-white flex flex-col justify-center items-center max-sm:px-[15px]'>
          <Home />
        </div>
        <hr />
        <br />
        <div id='project' className=' w-[100vw] px-[10%] text-white flex flex-col justify-start items-center max-sm:px-[15px]'>
          <Project />
        </div>
        <div id='packages' className='w-[calc(100vw - 20px)] min-h-[10dvh]  px-[10%] overflow-hidden text-white flex flex-col justify-start items-center max-sm:px-[15px]'>
          <Packages />
          <br />
        </div>
        <div id='certificate' className=' w-[calc(100vw - 20px)] min-h-[10dvh]  px-[10%] overflow-hidden text-white flex flex-col justify-start items-center max-sm:px-[15px]'>
          <Certifications />
        </div>
        <br />
        <br />
        <div id='hire-me' className='w-[calc(100vw - 20px)]   px-[10%] overflow-hidden text-white flex flex-col justify-start items-center max-sm:px-[15px]'>
          <HireMe />
        </div>
        <br />
        <Footer />
      </main>
    </>
  )
}

export default App
