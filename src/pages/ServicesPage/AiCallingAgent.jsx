import img1 from "../../assets/services-details/aicalling1.jpg";
import img2 from "../../assets/services-details/aicalling2.jpg";

const AiCallingAgent = () => {
  console.log("refresh");
  const aiCallingServices = [
    {
      title: "AI-Powered Outbound Calling",
      description:
        "Boost your outreach with advanced AI-driven outbound calling that delivers personalized and impactful customer connections.",
    },
    {
      title: "Inbound Call Management",
      description:
        "Efficiently manage incoming calls with our intelligent system, ensuring every customer inquiry is handled promptly.",
    },
    {
      title: "Appointment Scheduling & Reminders",
      description:
        "Automate appointment scheduling and send timely reminders to streamline your business operations.",
    },
    {
      title: "Survey & Feedback Collection",
      description:
        "Collect valuable customer insights effortlessly through automated surveys and feedback mechanisms.",
    },
    {
      title: "Customer Retention Campaigns",
      description:
        "Enhance customer loyalty with proactive, AI-powered retention strategies designed to keep your customers engaged.",
    },
    {
      title: "Real-Time Analytics & Reporting",
      description:
        "Gain actionable insights from every call with real-time analytics and detailed reporting to optimize performance.",
    },
  ];

  return (
    <div className="flex flex-col gap-10 text-white">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="AI calling agent"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          AI Calling Agent
        </h2>
        <p data-aos="fade-up" className="description">
          We are a cutting-edge AI Calling Agency dedicated to transforming how
          businesses connect with their customers. With advanced AI-driven
          technology and a focus on exceptional customer experiences, we empower
          businesses to automate repetitive calling tasks while maintaining
          personalized, meaningful interactions.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Our AI Calling Services
        </h2>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="AI calling services"
        />
        <p data-aos="fade-up" className="description">
          {aiCallingServices.map((service, index) => (
            <div key={index}>
              <strong>{service.title}:</strong> {service.description}
              {index !== aiCallingServices.length - 1 && (
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

export default AiCallingAgent;
