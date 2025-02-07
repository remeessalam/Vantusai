import img1 from "../../assets/services-details/blockchain1.jpg";
import img2 from "../../assets/services-details/blockchain2.jpg";

const BlockchainDevelopment = () => {
  const blockchainServices = [
    {
      title: "Blockchain Solutions",
      description:
        "Vantus AI develops secure and scalable blockchain solutions for businesses, ensuring transparency and efficiency in transactions.",
    },
    {
      title: "Smart Contract Development",
      description:
        "We create and deploy self-executing smart contracts on platforms like Ethereum, Binance Smart Chain, and Hyperledger.",
    },
    {
      title: "Decentralized Applications (DApps)",
      description:
        "Our team builds decentralized applications that leverage blockchain technology to enhance security and reduce reliance on intermediaries.",
    },
    {
      title: "Crypto Wallet Development",
      description:
        "We design and develop secure cryptocurrency wallets that support multiple digital assets and seamless transactions.",
    },
    {
      title: "NFT & Token Development",
      description:
        "Vantus AI specializes in creating custom tokens and NFT platforms, enabling businesses to explore the potential of digital assets.",
    },
  ];
  return (
    <div className="flex flex-col gap-10 text-white">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="blockchain development"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Blockchain Development
        </h2>
        <p data-aos="fade-up" className="description">
          Blockchain technology is revolutionizing industries by providing
          decentralized, secure, and transparent solutions. At Vantus AI, we
          specialize in developing cutting-edge blockchain applications, smart
          contracts, and decentralized solutions that empower businesses to
          leverage the power of blockchain for enhanced security and efficiency.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Our Blockchain Development Services
        </h2>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="blockchain development"
        />
        <p data-aos="fade-up" className="description">
          {blockchainServices.map((service, index) => (
            <div key={index}>
              <strong>{service.title}:</strong> {service.description}
              {index !== blockchainServices.length - 1 && (
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

export default BlockchainDevelopment;
