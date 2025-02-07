import img1 from "../../assets/services-details/data-analytics1.jpg";
import img2 from "../../assets/services-details/data-analytics2.jpg";

const DataAnalytics = () => {
  const dataAnalyticsServices = [
    {
      title: "Big Data Processing",
      description:
        "Vantus AI leverages advanced big data technologies to process, analyze, and extract meaningful insights from massive datasets.",
    },
    {
      title: "Predictive Analytics",
      description:
        "We use machine learning algorithms to analyze historical data and provide predictive insights that help businesses make data-driven decisions.",
    },
    {
      title: "Data Visualization & Reporting",
      description:
        "Our team creates interactive dashboards and reports that transform complex data into easily understandable visual insights.",
    },
    {
      title: "Business Intelligence Solutions",
      description:
        "We develop custom BI solutions to help organizations optimize operations, track performance, and uncover hidden trends.",
    },
    {
      title: "Data Warehousing & Management",
      description:
        "Vantus AI designs and implements efficient data storage solutions, ensuring data is structured, secure, and accessible.",
    },
  ];
  return (
    <div className="flex flex-col gap-10 text-white">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="data analytics"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Data Analytics
        </h2>
        <p data-aos="fade-up" className="description">
          In the era of data-driven decision-making, businesses need powerful
          analytics solutions to stay ahead. At Vantus AI, we specialize in
          transforming raw data into actionable insights, helping companies
          optimize performance, improve efficiency, and gain a competitive edge.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Our Data Analytics Services
        </h2>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="data analytics"
        />
        <p data-aos="fade-up" className="description">
          {dataAnalyticsServices.map((service, index) => (
            <div key={index}>
              <strong>{service.title}:</strong> {service.description}
              {index !== dataAnalyticsServices.length - 1 && (
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

export default DataAnalytics;
