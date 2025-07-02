interface btnProps {

  Text: string,
}

const Button: React.FC<btnProps> = ({ Text = "" }) => {
  const colorMap: Record<string, { bg: string, font: string }> = { //Record<Keys, Type>
    TypeScript: { bg: "#3178C6", font: "#000" },
    JavaScript: { bg: "#FEEC16", font: "#000" },
    Python: { bg: "#769AB9", font: "#fff" },
    "Next.js": { bg: "#FFFEFE", font: "#000" },
    React: { bg: "#51C2E3", font: "#fff" },
    Redux: { bg: "#1A1B1E", font: "#fff" },
    Fastify: { bg: "#1A1B1E", font: "#fff" },
    Flask: { bg: "#1A1B1E", font: "#fff" },
    Tailwind: { bg: "#43AAB1", font: "#fff" },
    "Node.js": { bg: "#2F6323", font: "#fff" },
    NestJS: { bg: "#DF214F", font: "#fff" },
    Supabase: { bg: "#3ECF8E", font: "#000" },
    MongoDB: { bg: "#3E9C37", font: "#fff" },
    Cloudflare: { bg: "#F5AB0D", font: "#000" },
    Firebase: { bg: "#F5AB0D", font: "#000" },
    AWS: { bg: "#F69C0B", font: "#000" },
    Docker: { bg: "#0193D6", font: "#fff" },
  };
  const { bg, font } = colorMap[Text] || { bg: "#333", font: "#fff" };
  return (
    <button
      className={`px-3 py-1 rounded-md hover:invert-[0.88] transition-all`}
      style={{
        background: bg,
        color: font
      }}

    >
      {Text}
    </button>
  )
}

export default Button
