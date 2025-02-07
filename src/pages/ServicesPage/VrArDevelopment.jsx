import img1 from "../../assets/services-details/vr-ar1.jpg";
import img2 from "../../assets/services-details/vr-ar2.jpg";

const VrArDevelopment = () => {
  const vrArServices = [
    {
      title: "Virtual Reality Solutions",
      description:
        "Vantus AI develops immersive VR applications that revolutionize industries such as gaming, training, and simulations.",
    },
    {
      title: "Augmented Reality Applications",
      description:
        "We create AR solutions that enhance real-world experiences by overlaying digital content onto the physical environment.",
    },
    {
      title: "VR Training & Simulations",
      description:
        "Our team designs realistic VR-based training modules for industries like healthcare, aviation, and manufacturing.",
    },
    {
      title: "AR for E-commerce & Retail",
      description:
        "We build AR-powered shopping experiences, allowing customers to visualize products in their environment before purchasing.",
    },
    {
      title: "Custom VR & AR Development",
      description:
        "Vantus AI specializes in tailored VR and AR applications, delivering unique and engaging interactive experiences.",
    },
  ];
  return (
    <div className="flex flex-col gap-10 text-white">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="vr ar development"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Virtual & Augmented Reality Development
        </h2>
        <p data-aos="fade-up" className="description">
          VR and AR technologies are transforming the way businesses engage with
          customers, train employees, and deliver interactive experiences. At
          Vantus AI, we specialize in developing cutting-edge virtual and
          augmented reality applications that enhance user engagement and
          provide immersive digital interactions.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Our VR & AR Development Services
        </h2>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="vr ar development"
        />
        <p data-aos="fade-up" className="description">
          {vrArServices.map((service, index) => (
            <div key={index}>
              <strong>{service.title}:</strong> {service.description}
              {index !== vrArServices.length - 1 && (
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

export default VrArDevelopment;
