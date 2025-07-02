import Card from "../Card/Card"
import data from "./data";
const Project = () => {

  return (
    <>
      <h1>My best projects</h1>
      <div className="grid grid-cols-3  gap-4 items-center justify-items-center w-full max-lg:grid-cols-2 max-md:grid-cols-1">
        {data.map((item, index) => (
          <Card url={item.url} title={item.title} img={item.img} techstack={item.techstacks} key={index} about={item.about} />
        ))}
      </div>
    </>
  )
}

export default Project
