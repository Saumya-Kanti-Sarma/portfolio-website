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
              <Button Text="TypeScript" />
              <Button Text="JavaScript" />
              <Button Text="Python" />
              <Button Text="Next.js" />
              <Button Text="React" />
              <Button Text="Redux" />
              <Button Text="Tailwind" />
              <Button Text="Node.js" />
              <Button Text="NestJS" />
              <Button Text="Fastify" />
              <Button Text="Flask" />
              <Button Text="Supabase" />
              <Button Text="MongoDB" />
              <Button Text="Cloudflare" />
              <Button Text="AWS" />
              <Button Text="Docker" />
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