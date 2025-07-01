interface btnProps {
  onclick: () => void;
  Text: string,
  bgColor: string,
  color: string,
}

const Button: React.FC<btnProps> = ({ onclick = () => { }, Text = "", bgColor = "#fff", color = "#000" }) => {
  return (
    <button
      className={`px-3 py-1 rounded-md hover:invert-[0.88] transition-all`}
      style={{
        background: bgColor,
        color: color
      }}
      onClick={onclick}
    >
      {Text}
    </button>
  )
}

export default Button
