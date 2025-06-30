import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="flex gap-5 h-[70px] bg-[#2ba331] items-center justify-between overflow-hidden w-full text-white px-2.5">
      <h1 className="text-3xl flex-3 nav-heading">Developer Saumya</h1>
      <ul className="flex flex-1 justify-around text-2xl h-full nav-ul">
        <a href="https://x.com/devloper_saumya" target="blank" className="nav-Links"><img src="/logos/1.png" alt="logo" className="w-[50px] " /></a>
        <a href="https://www.linkedin.com/in/saumya-sarma-2ab6a52a4/" target="blank" className="nav-Links"><img src="/logos/2.png" alt="logo" className="w-[50px] " /></a>
        <a href="https://github.com/Saumya-Kanti-Sarma/" target="blank" className="nav-Links"><img src="/logos/3.png" alt="logo" className="w-[50px] " /></a>
        <a href="https://www.instagram.com/developer_saumya" target="blank" className="nav-Links"><img src="/logos/4.png" alt="logo" className="w-[50px] " /></a>
      </ul>
    </nav>
  )
}

export default Navbar
