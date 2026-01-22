import logoTcta from "@/assets/logo-tcta.png";
import logoAffies from "@/assets/logo-affies.png";
import logoAhmp from "@/assets/logo-ahmp.svg";
import logoBelgiumCampus from "@/assets/logo-belgium-campus.png";
import logoGmi from "@/assets/logo-gmi.png";
import logoFuchs from "@/assets/logo-fuchs.png";

const logos = [
  { src: logoTcta, alt: "TCTA - A new word for water" },
  { src: logoAffies, alt: "Affies High School - Laat daar lig wees" },
  { src: logoAhmp, alt: "AHMP - Ek sien haar wen" },
  { src: logoBelgiumCampus, alt: "Belgium Campus iTversity - 25 Years" },
  { src: logoGmi, alt: "GMI Property Group" },
  { src: logoFuchs, alt: "Fuchs Roux Prokureurs | Attorneys" },
];

export const LogoCarousel = () => {
  // Duplicate logos for seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-12 bg-secondary/30">
      <div className="flex animate-scroll">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex-shrink-0 mx-8 flex items-center justify-center"
            style={{ width: "200px", height: "120px" }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
