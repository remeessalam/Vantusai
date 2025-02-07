import img1 from "../../assets/services-details/game-development1.jpg";
import img2 from "../../assets/services-details/game-development2.jpg";

const GameDevelopment = () => {
  const gameDevelopmentServices = [
    {
      title: "Custom Game Development",
      description:
        "Vantus AI creates immersive gaming experiences with custom-built game mechanics, graphics, and animations tailored to your vision.",
    },
    {
      title: "Unity & Unreal Engine Development",
      description:
        "We develop high-performance games using industry-leading engines like Unity and Unreal Engine to deliver stunning visuals and gameplay.",
    },
    {
      title: "AR & VR Gaming",
      description:
        "We integrate Augmented Reality (AR) and Virtual Reality (VR) into games to provide highly interactive and immersive experiences for players.",
    },
    {
      title: "Multiplayer & Online Gaming",
      description:
        "Our team builds online multiplayer experiences with real-time interactions, cloud integration, and seamless connectivity.",
    },
    {
      title: "Game Monetization Strategies",
      description:
        "We help integrate in-game purchases, ad systems, and premium features to maximize revenue and enhance user engagement.",
    },
  ];
  return (
    <div className="flex flex-col gap-10 text-white">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="game development"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Game Development
        </h2>
        <p data-aos="fade-up" className="description">
          The gaming industry is evolving rapidly, and creating engaging,
          high-quality games is more important than ever. At Vantus AI, we
          specialize in developing innovative and immersive gaming experiences
          across multiple platforms. Whether you need a casual mobile game, a
          full-fledged console experience, or an AR/VR-based interactive
          environment, our team ensures top-tier performance and captivating
          gameplay.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Our Game Development Services
        </h2>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="game development"
        />
        <p data-aos="fade-up" className="description">
          {gameDevelopmentServices.map((service, index) => (
            <div key={index}>
              <strong>{service.title}:</strong> {service.description}
              {index !== gameDevelopmentServices.length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default GameDevelopment;
