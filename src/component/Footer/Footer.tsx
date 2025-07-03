const Footer = () => {
  return (
    <footer className="bg-[#000] text-white px-6 py-10 flex flex-col gap-6 items-start justify-center text-center">
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-2 w-full text-center underline underline-offset-4">Thanks for visiting me</h1>
        <br />
        <h2 className="text-lg text-start mb-0">Saumya Sarma | <a href="mailto:work.saumyasarma@gmail.com" className="underline hover:text-blue-400">work.saumyasarma@gmail.com</a></h2>
        <h3 className="text-sm text-gray-400 text-start mt-0">Dharmanagar, North Tripura, India | 799250</h3>
      </div>

      {/* Projects */}
      <div className="w-full">
        <p className="text-xl font-bold mb-4 border-b border-gray-600 pb-2 text-start">Projects</p>
        <div className="flex flex-col gap-3 text-blue-400 items-start">
          <a href="https://codeplexx.vercel.app" target="_blank" className="hover:underline">Codeplexx</a>
          <a href="https://gama-audios.vercel.app" target="_blank" className="hover:underline">Gama Audios</a>
          <a href="https://ommitus.pages.dev" target="_blank" className="hover:underline">Ommitus</a>
          <a href="https://saumyasarma.pages.dev" target="_blank" className="hover:underline">Portfolio</a>
        </div>
      </div>

      {/* Repositories */}
      <div className="w-full">
        <p className="text-xl font-bold mb-4 border-b border-gray-600 pb-2 text-start">Repositories</p>
        <div className="flex flex-col gap-3 text-blue-400 items-start">
          <a href="https://github.com/Saumya-Kanti-Sarma/react-cli-toolkit" target="_blank" className="hover:underline">React CLI Toolkit</a>
          <a href="https://github.com/Saumya-Kanti-Sarma/next-cli-toolkit" target="_blank" className="hover:underline">Next CLI Toolkit</a>
          <a href="https://github.com/Saumya-Kanti-Sarma/codeplexx" target="_blank" className="hover:underline">Codeplexx</a>
          <a href="https://github.com/Saumya-Kanti-Sarma/ommitus" target="_blank" className="hover:underline">Ommitus</a>
          <a href="https://github.com/Saumya-Kanti-Sarma/portfolio-website" target="_blank" className="hover:underline">Portfolio</a>
          <a href="https://github.com/Saumya-Kanti-Sarma/gama-audios" target="_blank" className="hover:underline">Gama Audios</a>
          <a href="https://github.com/Saumya-Kanti-Sarma/shoe-commerce" target="_blank" className="hover:underline">Shoe Commerce</a>
        </div>
      </div>

      {/* Open Source */}
      <div className="w-full">
        <p className="text-xl font-bold mb-4 border-b border-gray-600 pb-2 text-start">Open Source</p>
        <div className="flex flex-col gap-3 text-blue-400 items-start">
          <a href="https://www.npmjs.com/package/next-cli-toolkit" target="_blank" className="hover:underline">Next CLI Toolkit (NPM)</a>
          <a href="https://www.npmjs.com/package/react-cli-toolkit" target="_blank" className="hover:underline">React CLI Toolkit (NPM)</a>
        </div>
      </div>


      <section className="flex w-full justify-center items-center gap-6 mt-6">
        <a href="https://x.com/devloper_saumya" target="_blank" className="flex flex-col items-center text-sm hover:text-blue-400">
          <img src="/logos/1.png" alt="Twitter" className="w-8 h-8 mb-1" />
          Twitter
        </a>
        <a href="https://www.linkedin.com/in/saumya-sarma-2ab6a52a4/" target="_blank" className="flex flex-col items-center text-sm hover:text-blue-400">
          <img src="/logos/2.png" alt="Linkedin" className="w-8 h-8 mb-1" />
          LinkedIn
        </a>
        <a href="https://github.com/Saumya-Kanti-Sarma/" target="_blank" className="flex flex-col items-center text-sm hover:text-blue-400">
          <img src="/logos/3.png" alt="Github" className="w-8 h-8 mb-1" />
          GitHub
        </a>
        <a href="https://www.instagram.com/developer_saumya" target="_blank" className="flex flex-col items-center text-sm hover:text-pink-400">
          <img src="/logos/4.png" alt="Instagram" className="w-8 h-8 mb-1" />
          Instagram
        </a>
      </section>
    </footer>
  );
};

export default Footer;
