import img1 from "../../assets/services-details/chatbot-development1.jpg";
import img2 from "../../assets/services-details/chatbot-development2.jpg";

const ChatbotDevelopment = () => {
  const chatbotDevelopmentServices = [
    {
      title: "AI-Powered Chatbots",
      description:
        "Vantus AI develops intelligent chatbots that enhance customer support, automate tasks, and improve engagement using advanced AI and NLP technologies.",
    },
    {
      title: "Conversational AI Solutions",
      description:
        "We create chatbots with human-like conversational abilities to interact with users naturally, improving customer experience and satisfaction.",
    },
    {
      title: "Multichannel Integration",
      description:
        "Our chatbots seamlessly integrate with websites, mobile apps, WhatsApp, Messenger, Slack, and other popular communication platforms.",
    },
    {
      title: "Custom Chatbot Development",
      description:
        "We tailor chatbot solutions to meet your specific business needs, from customer support bots to lead generation and e-commerce assistants.",
    },
    {
      title: "Voice-Enabled Chatbots",
      description:
        "Enhance user interactions with voice-based chatbots that understand and respond to spoken commands, making interactions more intuitive.",
    },
  ];
  return (
    <div className="flex flex-col gap-10 text-white">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="chatbot development"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Chatbot Development
        </h2>
        <p data-aos="fade-up" className="description">
          AI-driven chatbots are transforming how businesses interact with
          customers, offering 24/7 support, automating processes, and enhancing
          engagement. At Vantus AI, we specialize in building intelligent,
          conversational chatbots tailored to your business needs, ensuring
          seamless communication and enhanced user experiences.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Our Chatbot Development Services
        </h2>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="chatbot development"
        />
        <p data-aos="fade-up" className="description">
          {chatbotDevelopmentServices.map((service, index) => (
            <div key={index}>
              <strong>{service.title}:</strong> {service.description}
              {index !== chatbotDevelopmentServices.length - 1 && (
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

export default ChatbotDevelopment;
