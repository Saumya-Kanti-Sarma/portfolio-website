import data from "./data"

const Packages = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 ">
      <h1 className="mb-5">My Open-Source Contributions</h1>
      <div className="grid grid-cols-2 gap-1 max-md:grid-cols-1">
        {data.map((item, index) => (
          <a key={index} href={item.url} target="blank" className="flex flex-col justify-start items-center gap-0 max-w-[400px] hover:bg-white/20 transition-all duration-300 rounded-[12px]">
            <img src="/npm.png" alt="npm-logo" className="max-md:w-[250px] object-cover " />
            <h2>{item.name}</h2>
            <p className="text-center">{item.about}</p>
          </a>
        ))}

      </div>


    </div>

  )
}

export default Packages
