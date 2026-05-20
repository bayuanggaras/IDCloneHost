import bgNewImage from "../../assets/BGNew.webp";

export function HeroBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${bgNewImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}