import { Link } from "react-router-dom";
import PageBanner from "../Components/PageBanner";
import blog1 from "../assets/blogs/blog1.webp";
import blog2 from "../assets/blogs/blog2.webp";
const blogData = [
  {
    id: 1,
    img: blog1,
    title:
      "Welcome to VANTUS AI SOLUTIONS LLP: Empowering Tomorrow with Intelligent Innovation",
    description:
      "Discover how VANTUS AI is revolutionizing industries with cutting-edge AI solutions, driving innovation, and shaping the future of technology.",
    link: "https://vantusai.blogspot.com/2024/11/VantusAISolutionLLP.html",
  },
  {
    id: 2,
    img: blog2,
    title:
      "Unlocking Business Potential with AI: Exploring VANTUS AI’s Data Analytics Services",
    description:
      "Learn how VANTUS AI's data analytics services leverage AI-driven insights to help businesses make smarter decisions and achieve sustainable growth.",
    link: "https://vantusai.blogspot.com/2024/11/unlocking-business-potential-with-ai.html",
  },
];

const BlogsPage = () => {
  return (
    <div>
      <PageBanner title={"Blogs"} />
      <div className="wrapper paddingtop paddingbottom">
        <h1 data-aos="fade-up" className="main-heading text-center mb-8">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <div
              data-aos="fade-up"
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-black mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <Link
                  to={blog.link}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
