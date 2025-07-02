import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav-bar w-[98%] max-w-[1200px] flex text-white p-[10px] items-center">
      <h1 className="text-3xl flex-3 nav-heading font-bold hover:invert-[1] transition duration-300 ease-in-out bg-transparent">Developer Saumya</h1>
      <ul className="flex flex-1 justify-around items-center text-2xl h-full nav-ul bg-transparent">
        <a href="https://x.com/devloper_saumya" target="blank" className="nav-Links bg-transparent"><img src="/logos/1.png" alt="logo" className="w-[50px] " /></a>
        <a href="https://www.linkedin.com/in/saumya-sarma-2ab6a52a4/" target="blank" className="nav-Links bg-transparent"><img src="/logos/2.png" alt="logo" className="w-[50px] " /></a>
        <a href="https://github.com/Saumya-Kanti-Sarma/" target="blank" className="nav-Links bg-transparent"><img src="/logos/3.png" alt="logo" className="w-[50px] " /></a>
        <a href="https://www.instagram.com/developer_saumya" target="blank" className="nav-Links bg-transparent"><img src="/logos/4.png" alt="logo" className="w-[50px] " /></a>
      </ul>
    </nav>
  )
}

export default Navbar
