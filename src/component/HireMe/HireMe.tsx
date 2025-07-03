const HireMe = () => {
  return (
    <div >
      <h1 className="text-center text-[#fffb00]">I'm Looking for Opportunities in</h1>
      <div>
        <h2 className="mb-0 text-[#1eff00]">Frontend Intern</h2>
        <p className="ml-1">I have hands on experience in Frontend tools like React, Next.js, Redux, Context APIs, Tailwind CSS  and many more which makes me suitable as an intern working in any Frontend filed...</p>
      </div>
      <br />
      <div>
        <h2 className="mb-0 text-[#ff9900]">Backend Intern</h2>
        <p className="ml-1">I have hands on experience in Backend technologies like Express, NestJS, Fastify, Flask, MongoDB, supabase  and many more which makes me suitable as an intern working in any Frontend filed...</p>
      </div>
      <br />
      <div>
        <h2 className="mb-0 text-[#00b7ff]">Full-Stack Intern</h2>
        <p className="ml-1">I have hands on experience in both frontend, backend and cloud technologies like cloudflare (pages/workers/R2 and D1) ans Supabase  which makes me a suitable candidate for a full-stack role. </p>
      </div>
      <br />
      <div className=" h-[10dvh] rounded-2xl p-2.5 flex justify-around items-center  max-md:w-[100%] max-sm:px-[5px] max-md:gap-[5px]">
        <a
          className=" p-[10px] rounded-[12px] w-[50%] text-center border border-dotted border-white cursor-pointer max-md:w-[100%] hover:bg-white/10 hover:scale-105 transition-all duration-300" style={{ borderWidth: "3px" }} href="/resume/saumya-sarma-resume.pdf">
          Download My Resume
        </a>
      </div>
    </div>
  )
}

export default HireMe
