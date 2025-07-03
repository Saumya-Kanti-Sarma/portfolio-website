import Button from "../../utils/Btn/Button";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="home-parent-holder" className="flex-col w-[100%] animate-fade-in">
        <div
          id="home-info-holder"
          className="flex justify-center items-center max-sm:flex-col-reverse w-[80%] mx-auto my-0 max-md:w-[100%]"
        >
          <div className="flex-3 max-md:flex-1">
            <h1 className="max-sm:text-[28px]">Hii! I'm Saumya Sarma</h1>
            <h3 className="font-medium text-[#c4ffa2] max-sm:text-[18px]">
              <i>
                "a Full-stack web developer with prior knowledge of Frontend, Backend, Cloud providers and Systen designs.."
              </i>
            </h3>
            <br />
            <p className="text-2xl max-sm:text-[18px]">I have deep knowledge of:</p>
            <section className="flex flex-wrap items-center justify-start gap-[10px] w-[100%] mt-1 animate-fade-in">
              {[
                "TypeScript",
                "JavaScript",
                "Python",
                "Next.js",
                "React",
                "Redux",
                "Tailwind",
                "Node.js",
                "NestJS",
                "Fastify",
                "Flask",
                "Supabase",
                "MongoDB",
                "Cloudflare",
                "AWS",
                "Docker",
              ].map((text) => (
                <Button
                  key={text}
                  Text={text}
                />
              ))}
            </section>
          </div>
          <div className="flex-1 flex items-center animate-fade-in">
            <img
              src="/pfp.jpg"
              alt="my-profile-pic"
              className="w-[300px] rounded-full object-cover max-sm:w-[150px] mt-[20px] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      <br />
      <div
        id="home-more-info-area"
        className="bg-[#ffffff1f] w-[80%] h-[10dvh] rounded-2xl p-2.5 flex justify-around items-center gap-[20px] max-md:w-[100%] max-sm:px-[5px] max-md:gap-[5px] animate-fade-in">
        <a
          className="p-[10px] rounded-[12px] border border-dotted border-white cursor-pointer hover:bg-white/10 hover:scale-105 transition-all duration-300" style={{ borderWidth: "3px" }}
          href="/resume/saumya-sarma-resume.pdf">
          Download Resume
        </a>
        <section className="flex justify-center items-center gap-2 max-sm:hidden animate-fade-in">
          {[
            { href: "https://x.com/devloper_saumya", src: "/logos/1.png", label: "Twitter" },
            { href: "https://www.linkedin.com/in/saumya-sarma-2ab6a52a4/", src: "/logos/2.png", label: "Linkedin" },
            { href: "https://github.com/Saumya-Kanti-Sarma/", src: "/logos/3.png", label: "Github" },
            { href: "https://www.instagram.com/developer_saumya", src: "/logos/4.png", label: "Insta" },
          ].map((item, index) => (
            <a href={item.href} target="_blank" key={index}>
              <div className="flex flex-col items-center justify-center m-[2px]">
                <img
                  src={item.src}
                  alt="logo"
                  className="w-[30px] max-sm:w-[20px] hover:scale-110 hover:brightness-125 transition-all duration-200"
                />
                {item.label}
              </div>
            </a>
          ))}
        </section>
      </div>
      <br />
      <div
        id="home-stats-info-area"
        className="bg-[#ffffff1f] w-[80%] min-h-[15dvh] rounded-2xl p-2.5 grid grid-cols-5 gap-[20px] max-md:w-[100%] max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:items-center max-lg:justify-start max-lg:items-center mx-[auto] my-0 animate-fade-in">
        {[
          { title: "30+", subtitle: "project repositories" },
          { title: "10+", subtitle: "Full stack project" },
          { title: "13+", subtitle: "Tech stack" },
          { title: "2+", subtitle: "open-source projects" },
          { title: "4", subtitle: "certifications" },
        ].map((stat, i) => (
          <div
            key={i}
            className="flex justify-between items-center gap-1 bg-[#ffffff17] rounded-2xl p-[10px] w-[150px] max-md:w-[140px] hover:scale-[1.05] hover:bg-white/20 transition-all duration-300"
          >
            <h1 className="text-2xl">{stat.title}</h1>
            <p className="text-[16px]">{stat.subtitle}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
