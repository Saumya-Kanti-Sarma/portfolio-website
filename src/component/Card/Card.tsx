import Button from "../../utils/Btn/Button";

interface cardProps {
  url?: string,
  title?: string,
  img?: string,
  about?: string,
  techstack?: [string],
}

const Card: React.FC<cardProps> = ({
}) => {

  return (
    <a href={"https://azjgnoxfyygbnquzecyw.supabase.co/storage/v1/object/public/saumya.dev/projects/ommitus.png"} className="max-w-[420px] w-[92%] flex flex-col justify-start items-center gap-[10px] p-[10px]">
      <h2>{"Ommitus | Digital Menus"}</h2>
      <img src={"https://azjgnoxfyygbnquzecyw.supabase.co/storage/v1/object/public/saumya.dev/projects/ommitus.png"} alt="card.img.svg" className="w-[100%] object-cover" />
      <p>{"I saw a digital QR code of a menu in a fancy restaurant. They were using a canva template uploaded on google drive. So, I thought to make a digital menu hosting platform for restaurants to which is not static (like canva templates) but is dynamic."}</p>
      <div className="flex gap-[10px] flex-wrap">{["React", "JavaScript", "MongoDB", "Cloudflare", "Firebase"].map((item, index) => {
        return (<Button Text={item} key={index} />);
      })}</div>
    </a>
  )
}

export default Card
