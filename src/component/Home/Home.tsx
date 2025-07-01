import Button from "../../utils/Btn/Button"
import "./Home.css"
const Home = () => {
  return (
    <>
      <div id="home-parent-holder" className="flex-col w-[100%]">
        <div id="home-info-holder" className="flex justify-center  items-center max-sm:flex-col-reverse w-[80%] mx-auto my-0 max-md:w-[100%]">
          <div className="flex-3 max-md:flex-1">
            <h1>Hii! I'm Saumya Sarma</h1>
            <h3 className="font-medium text-[#ffe600]">a Full-stack web developer with prior knowledge of  both Frontend and Backend in MERN stack development. <br />Also in Cloud services and system design...</h3>
            <br />
            <p className="text-2xl">I have deep knowledge of:</p>
            <section className="flex flex-wrap items-center justify-start gap-[10px] w-[100%] mt-1 ">
              <Button Text="TypeScript" bgColor="#3079C6" color="#fff" onclick={() => { }} />
              <Button Text="JavaScript" bgColor="#FFEC17" color="#000" onclick={() => { }} />
              <Button Text="Python" bgColor="#779AB8" color="#fff" onclick={() => { }} />
              <Button Text="Next.js" bgColor="#fff" color="#000" onclick={() => { }} />
              <Button Text="React" bgColor="#50C3E3" color="#FFFFFF" onclick={() => { }} />
              <Button Text="Redux" bgColor="#1A1B1E" color="#FFFFFF" onclick={() => { }} />
              <Button Text="Tailwind CSS" bgColor="#43AAB1" color="#FFFFFF" onclick={() => { }} />
              <Button Text="Node.js" bgColor="#2F6323" color="#fff" onclick={() => { }} />
              <Button Text="Nest JS" bgColor="#DF214F" color="#fff" onclick={() => { }} />
              <Button Text="Fastify" bgColor="#1A1B1E" color="#fff" onclick={() => { }} />
              <Button Text="Flask" bgColor="#1A1B1E" color="#fff" onclick={() => { }} />
              <Button Text="Supabase" bgColor="#3ECF8E" color="#000" onclick={() => { }} />
              <Button Text="MongoDB" bgColor="#3F9C36" color="#fff" onclick={() => { }} />
              <Button Text="CloudFlare" bgColor="#F5AB0D" color="#000" onclick={() => { }} />
              <Button Text="AWS" bgColor="#F79C0A" color="#000" onclick={() => { }} />
              <Button Text="Docker" bgColor="#0093D7" color="#fff" onclick={() => { }} />
            </section>
          </div>
          <div className="flex-1 flex items-center">
            <img src="/pfp.jpg" alt="my-profile-pic" className="w-[300px] rounded-[100%] object-cover max-sm:w-[240px] mt-[20px]" />
          </div>
        </div>
      </div>
      <br />
      <div id="home-more-info-area" className="bg-[#ffffff1f] w-[80%] h-[10dvh] rounded-2xl p-2.5 flex justify-around items-center gap-[20px] max-md:w-[100%] max-sm:px-[5px] max-md:gap-[5px]">
        <a
          className=" p-[10px] rounded-[12px] border border-dotted border-white cursor-pointer"
          style={{ borderWidth: "3px" }}
          href="/resume/saumya-sarma-resume.pdf"
        >
          Download Resume
        </a>
        <section className="flex  justify-center items-center gap-2">
          <a href="x.com/devloper_saumya" target="blank">
            <div className="flex flex-col items-center justify-center m-[2px]">
              <img src="/logos/1.png" alt="logo" className="w-[30px] max-sm:w-[20px] " /> Twitter
            </div>
          </a>
          <a href="https://www.linkedin.com/in/saumya-sarma-2ab6a52a4/" target="blank">
            <div className="flex flex-col items-center justify-center m-[2px]">
              <img src="/logos/2.png" alt="logo" className="w-[30px] max-sm:w-[20px] " /> Linkedin
            </div>
          </a>
          <a href="https://github.com/Saumya-Kanti-Sarma/" target="blank">
            <div className="flex flex-col items-center justify-center m-[2px]">
              <img src="/logos/3.png" alt="logo" className="w-[30px] max-sm:w-[20px] " /> Github
            </div>
          </a>
          <a href="https://www.instagram.com/developer_saumya" target="blank">
            <div className="flex flex-col items-center justify-center m-[2px]">
              <img src="/logos/4.png" alt="logo" className="w-[30px] max-sm:w-[20px] " /> Insta
            </div>
          </a>

        </section>
      </div>
      <br />
      <div id="home-stats-info-area" className="bg-[#ffffff1f] w-[80%] min-h-[15dvh] rounded-2xl p-2.5 flex justify-around items-center gap-[20px] flex-wrap  max-md:w-[100%] max-sm:hidden max-lg:justify-start mx-[auto] my-0">

        <div className="flex justify-between items-center gap-1 bg-[#ffffff3a] rounded-2xl p-[10px] w-[150px]">
          <h1 className="text-2xl">40+</h1>
          <p className="text-[16px]">public repositories in Github</p>
        </div>
        <div className="flex justify-between items-center gap-1 bg-[#ffffff3a] rounded-2xl p-[10px] w-[150px]">
          <h1 className="text-2xl">40+</h1>
          <p className="text-[16px]">public repositories in Github</p>
        </div>
        <div className="flex justify-between items-center gap-1 bg-[#ffffff3a] rounded-2xl p-[10px] w-[150px]">
          <h1 className="text-2xl">40+</h1>
          <p className="text-[16px]">public repositories in Github</p>
        </div>
        <div className="flex justify-between items-center gap-1 bg-[#ffffff3a] rounded-2xl p-[10px] w-[150px]">
          <h1 className="text-2xl">40+</h1>
          <p className="text-[16px]">public repositories in Github</p>
        </div>
        <div className="flex justify-between items-center gap-1 bg-[#ffffff3a] rounded-2xl p-[10px] w-[150px]">
          <h1 className="text-2xl">40+</h1>
          <p className="text-[16px]">public repositories in Github</p>
        </div>
      </div>
    </>
  )
}

export default Home