import data from "./Data";

const Certifications = () => {


  return (
    <>
      <h1>My Certifications</h1>
      <br />
      <div
        className="grid grid-cols-2 gap-10 max-sm:grid-cols-1 items-center justify-items-center "
        id="certificate-holder"
      >

        {data.map((item, index) => (
          <a
            href={item.link}
            target="blank"
            key={index}
            className="flex flex-col justify-center items-center gap-1 max-w-[470px] shrink-0 max-sm:w-[98%] hover:bg-white/20 transition-all duration-300 rounded-[12px]"
          >
            <img
              src={item.img}
              alt="img"
              className="max-w-[calc(100% - 20px)] object-cover rounded-[5px] aspect-video"
            />
            <h3 className="text-center">{item.title}</h3>
          </a>
        ))}
      </div>
    </>
  );
};

export default Certifications;
