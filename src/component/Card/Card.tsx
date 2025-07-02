import Button from "../../utils/Btn/Button";

interface cardProps {
  url?: string,
  title?: string,
  img?: string,
  about?: string,
  techstack?: string[],
}

const Card: React.FC<cardProps> = ({
  url,
  title,
  img,
  about,
  techstack,
}) => {

  return (
    <a href={url} className="max-w-[420px] w-[100%] flex flex-col justify-start items-center gap-[10px] p-[10px] border-[1px] border-[#ffffff77] rounded-[5px]" target="blank">
      <h2 className="text-center">{title}</h2>
      <img src={img} alt="card.img.svg" className="w-[100%] object-cover rounded-[8px]" />
      <p>{about}</p>
      <div className="flex gap-[10px] flex-wrap items-start justify-start w-full">{techstack && techstack.map((item, index) => {
        return (<Button Text={item} key={index} />);
      })}</div>
    </a>
  )
}

export default Card
