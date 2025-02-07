import HealthcareImg from "./assets/industries/Healthcare.webp";
import RetailImg from "./assets/industries/E-commerce & Retail.webp";
import FintechImg from "./assets/industries/Fintech.webp";
import InsuranceImg from "./assets/industries/Insurance.webp";
import HospitalityImg from "./assets/industries/Hospitality.webp";
import ManufacturingImg from "./assets/industries/Manufacturing.webp";
import OnDemandImg from "./assets/industries/On Demand.jpg";
import FoodRestaurantImg from "./assets/industries/Food & Restaurant.webp";
import LogisticsImg from "./assets/industries/Logistics & Supply Chain.webp";
import EducationImg from "./assets/industries/Education.webp";
import GameImg from "./assets/industries/Game.webp";
import RealEstateImg from "./assets/industries/RealEstateImg.jpg";
import webDevIcon from "./assets/images/slider-item-webdev-icon.png";
import appDevIcon from "./assets/images/slider-item-appdev-icon.png";
import aiIcon from "./assets/images/slider-item-ai-icon.png";
import webDevCardImg from "./assets/images/slider-item-webdev.png";
import appDevCardImg from "./assets/images/slider-item-appdev.png";
import aiCardImg from "./assets/images/slider-item-ai.png";
// clients
import client1 from "./assets/client-1.png";
import client2 from "./assets/client-2.png";
import client3 from "./assets/client-3.png";
import client4 from "./assets/client-4.png";

import service1 from "./assets/service1.png";
import service3 from "./assets/service3.png";
import service6 from "./assets/service6.png";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import BayutImg from "./assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "./assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "./assets/web-development-portfolio/flatiorn.png";
import MavenImg from "./assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "./assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "./assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "./assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "./assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "./assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "./assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "./assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "./assets/app-development-portfolio/namaz.png";
import PoteaImg from "./assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "./assets/app-development-portfolio/rentop bike and car.png";
// landingpage service iamge
import ecommerceIcon from "./assets/images/icons/online-shopping.png";
import socialMediaIcon from "./assets/images/icons/socialmedia.png";
import landingPageIcon from "./assets/images/icons/landing-page.png";
import customWebsiteIcon from "./assets/images/icons/software-development.png";
import iosDevelopmentIcon from "./assets/images/icons/ios-development.png";
import androidDevelopmentIcon from "./assets/images/icons/android-development.png";
import flutterDevelopmentIcon from "./assets/images/icons/flutter-development.png";
import hybridAppDevelopmentIcon from "./assets/images/icons/hybrid-app-development.png";
// service images
import web from "./assets/service-icons/web.jpg";
import app from "./assets/service-icons/app.jpg";
import game from "./assets/service-icons/game.jpg";
import chatbot from "./assets/service-icons/chatbot.jpg";
import data from "./assets/service-icons/data.jpg";
import block from "./assets/service-icons/block.jpg";
import arvr from "./assets/service-icons/arvr.jpg";
export const clientDetails = {
  phone: "+91-8591331353",
  whatsappbox: "8591331353",
  email: "support@elixirai.co",
  address: "Malad West, Mumbai, Maharashtra – 400095, India",
};

export const navItems = [
  {
    label: "[ LET'S TALK AI ]",
    path: "/services/artificial-intelligence",
    extraClasses: "text-white hover:text-blue-400",
  },
  { label: "Home", path: "/", extraClasses: "hover:text-blue-400 " },
  { label: "About", path: "/about-us", extraClasses: "hover:text-blue-400" },
  { label: "Services", path: "/services", extraClasses: "hover:text-blue-400" },
  // Uncomment the below links if needed
  {
    label: "Industries",
    path: "/industries",
    extraClasses: "hover:text-blue-400",
  },
  {
    label: "Portfolio",
    path: "/portfolio",
    extraClasses: "hover:text-blue-400",
  },
  {
    label: "Blogs",
    path: "/blogs",
    extraClasses: "hover:text-blue-400",
  },
  // { label: "PORTFOLIO", path: "/portfolio", extraClasses: "hover:text-blue-400" },
  // { label: "RESOURCES", path: "/resources", extraClasses: "hover:text-blue-400" },
  {
    label: "Contact Us",
    path: "/contact-us",
    extraClasses:
      "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700",
  },
];

export const allServices = [
  {
    id: 1,
    img: web,
    title: "Web Development (Full Stack)",
    link: "/services/web-development",
    description: [
      "Custom web solutions built with the latest technologies.",
      "Scalable and secure backend development.",
      "Responsive, user-friendly front-end design.",
      "E-commerce and enterprise web applications.",
      "SEO-optimized for better online visibility.",
    ],
    services: [
      {
        heading: "Custom Full-Stack Development",
        description:
          "Vantus AI builds high-performance web applications using modern front-end and back-end technologies tailored to your needs.",
      },
      {
        heading: "E-Commerce Solutions",
        description:
          "We develop secure and scalable e-commerce platforms with seamless payment integration, product management, and customer engagement features.",
      },
      {
        heading: "API Development & Integration",
        description:
          "Enhance functionality with third-party API integrations, ensuring smooth communication between different software solutions.",
      },
      {
        heading: "Performance Optimization",
        description:
          "We ensure that your website is optimized for speed, security, and scalability, providing a smooth user experience.",
      },
      {
        heading: "SEO & Accessibility",
        description:
          "Our websites are built with SEO best practices and accessibility in mind, ensuring greater reach and usability.",
      },
    ],
  },
  {
    id: 2,
    img: app,
    title: "Mobile App Development",
    link: "/services/mobile-app-development",
    description: [
      "High-quality mobile apps for iOS and Android.",
      "Cross-platform development with Flutter and React Native.",
      "Intuitive UI/UX designs for seamless navigation.",
      "Custom app solutions tailored to business needs.",
      "Continuous updates and app maintenance.",
    ],
    services: [
      {
        heading: "Native & Cross-Platform Apps",
        description:
          "Vantus AI develops powerful mobile applications for both iOS and Android using native and cross-platform technologies like React Native and Flutter.",
      },
      {
        heading: "UI/UX Design for Mobile Apps",
        description:
          "Our expert designers craft visually appealing and user-friendly mobile app interfaces that enhance engagement.",
      },
      {
        heading: "App Integration & API Development",
        description:
          "Seamlessly integrate mobile apps with third-party services, APIs, and cloud solutions to enhance functionality.",
      },
      {
        heading: "App Testing & Deployment",
        description:
          "Rigorous testing ensures bug-free performance, followed by smooth deployment to App Store and Google Play.",
      },
      {
        heading: "Ongoing Support & Updates",
        description:
          "We provide continuous app updates, feature enhancements, and performance optimizations to keep your app competitive.",
      },
    ],
  },
  {
    id: 3,
    img: game,
    title: "Game Development",
    link: "/services/game-development",
    description: [
      "Engaging 2D and 3D game development.",
      "Cross-platform gaming experiences for mobile, PC, and console.",
      "Custom-built game mechanics and physics engines.",
      "Augmented Reality (AR) and Virtual Reality (VR) integration.",
      "Multiplayer and cloud-based gaming solutions.",
    ],
    services: [
      {
        heading: "Custom Game Development",
        description:
          "Vantus AI creates immersive gaming experiences with custom-built game mechanics, graphics, and animations.",
      },
      {
        heading: "Unity & Unreal Engine Development",
        description:
          "We develop high-performance games using industry-leading engines like Unity and Unreal Engine.",
      },
      {
        heading: "AR & VR Gaming",
        description:
          "We integrate AR and VR into games to provide immersive and interactive experiences.",
      },
      {
        heading: "Multiplayer & Online Gaming",
        description:
          "Our team builds online multiplayer experiences with real-time interactions and cloud integration.",
      },
      {
        heading: "Game Monetization Strategies",
        description:
          "We help integrate in-game purchases, ad systems, and premium features to maximize revenue.",
      },
    ],
  },
  {
    id: 4,
    img: chatbot,
    title: "Chatbots",
    link: "/services/chatbots",
    description: [
      "AI-powered chatbots for customer support and automation.",
      "Natural Language Processing (NLP) for human-like interactions.",
      "Multi-platform integration (Web, WhatsApp, Facebook, Telegram).",
      "Custom chatbot solutions tailored to business needs.",
      "24/7 customer service automation.",
    ],
    services: [
      {
        heading: "AI-Powered Virtual Assistants",
        description:
          "Vantus AI develops intelligent virtual assistants that automate customer interactions and enhance support services.",
      },
      {
        heading: "NLP & Conversational AI",
        description:
          "Our chatbots use advanced NLP to understand user intent and provide relevant responses in real-time.",
      },
      {
        heading: "Multi-Platform Integration",
        description:
          "Seamlessly integrate chatbots into websites, mobile apps, and messaging platforms like WhatsApp and Facebook Messenger.",
      },
      {
        heading: "E-Commerce & Support Chatbots",
        description:
          "Automate sales, bookings, and customer queries with smart AI-powered chatbots.",
      },
      {
        heading: "Custom AI Solutions",
        description:
          "We design chatbots tailored to your business needs, whether for lead generation, HR, or technical support.",
      },
    ],
  },
  {
    id: 5,
    img: data,
    title: "Data Analytics",
    link: "/services/data-analytics",
    description: [
      "Data-driven insights to optimize business performance.",
      "Predictive analytics for better decision-making.",
      "Big data processing and visualization.",
      "AI-powered analytics for trend detection.",
      "Custom dashboards and reporting tools.",
    ],
    services: [
      {
        heading: "Big Data Analytics",
        description:
          "Vantus AI processes and analyzes large datasets to extract valuable insights and drive business growth.",
      },
      {
        heading: "Predictive Analytics",
        description:
          "Leverage machine learning to predict trends, customer behavior, and business outcomes.",
      },
      {
        heading: "Data Visualization",
        description:
          "We create intuitive dashboards and reports that make complex data easy to understand and act upon.",
      },
      {
        heading: "AI-Driven Insights",
        description:
          "Harness AI algorithms to uncover patterns and optimize business strategies.",
      },
      {
        heading: "Custom Data Solutions",
        description:
          "Tailored analytics solutions designed to fit your industry and specific data requirements.",
      },
    ],
  },
  {
    id: 6,
    img: block,
    title: "Blockchain Development",
    link: "/services/blockchain-development",
    description: [
      "Secure and decentralized blockchain solutions.",
      "Smart contract development and auditing.",
      "NFT marketplaces and digital assets.",
      "Enterprise blockchain solutions for businesses.",
      "Decentralized applications (dApps) development.",
    ],
    services: [
      {
        heading: "Custom Blockchain Solutions",
        description:
          "Vantus AI develops tailored blockchain solutions for businesses, from secure transactions to smart contracts.",
      },
      {
        heading: "Smart Contracts & DeFi",
        description:
          "We build and audit smart contracts to ensure secure and efficient decentralized finance (DeFi) applications.",
      },
      {
        heading: "NFT & Digital Assets",
        description:
          "Create, mint, and trade NFTs with custom blockchain-based platforms.",
      },
      {
        heading: "Enterprise Blockchain Solutions",
        description:
          "We integrate blockchain technology into businesses for enhanced security, transparency, and efficiency.",
      },
      {
        heading: "Decentralized Applications (dApps)",
        description:
          "Develop secure, scalable dApps for finance, supply chain, healthcare, and more.",
      },
    ],
  },
  {
    id: 7,
    img: arvr,
    title: "Virtual Reality (VR) and Augmented Reality (AR) Development",
    link: "/services/vr-ar-development",
    description: [
      "Immersive Virtual Reality (VR) experiences for gaming and training.",
      "Augmented Reality (AR) solutions for retail, education, and healthcare.",
      "3D modeling and spatial computing integration.",
      "Custom VR/AR applications for business and entertainment.",
      "Cross-platform VR and AR app development.",
    ],
    services: [
      {
        heading: "VR Training & Simulation",
        description:
          "Vantus AI develops interactive VR training simulations for industries like healthcare, aviation, and manufacturing.",
      },
      {
        heading: "Augmented Reality (AR) for Retail & Marketing",
        description:
          "We create AR solutions that enhance customer engagement, such as virtual try-ons and interactive product displays.",
      },
      {
        heading: "3D Modeling & Spatial Computing",
        description:
          "Our team develops detailed 3D assets and spatial computing solutions for immersive environments.",
      },
      {
        heading: "VR Game Development",
        description:
          "We build fully immersive VR games with realistic graphics and engaging storylines.",
      },
      {
        heading: "Cross-Platform AR/VR Applications",
        description:
          "Our AR and VR apps are developed for multiple platforms, including mobile, web, and dedicated VR headsets.",
      },
    ],
  },
];

export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: HealthcareImg,
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "Retail",
    img: RetailImg,
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Fintech",
    img: FintechImg,
    desc: "Streamlining financial services with AI-driven fraud detection, automated customer support, and predictive analytics.",
  },
  {
    id: 4,
    title: "Insurance",
    img: InsuranceImg,
    desc: "Improving risk assessment, claims processing, and customer engagement through advanced analytics and AI solutions.",
  },
  {
    id: 5,
    title: "Hospitality",
    img: HospitalityImg,
    desc: "Enhancing guest experiences with smart booking systems, personalized services, and efficient resource management.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: ManufacturingImg,
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "Legal Services",
    img: OnDemandImg,
    desc: "Expert legal solutions in contract law, intellectual property, corporate governance, and dispute resolution, ensuring compliance and strategic advice for business growth.",
  },
  {
    id: 8,
    title: "Food & Restaurant",
    img: FoodRestaurantImg,
    desc: "Optimizing food services with smart inventory, personalized menus, and efficient order management solutions.",
  },
  {
    id: 9,
    title: "Logistics",
    img: LogisticsImg,
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  {
    id: 10,
    title: "Education",
    img: EducationImg,
    desc: "Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  },
  {
    id: 11,
    title: "Game",
    img: GameImg,
    desc: "Elevating game development with AI-enhanced graphics, player behavior analytics, and immersive experiences.",
  },
  {
    id: 12,
    title: "Real Estate Services",
    img: RealEstateImg,
    desc: "Expert property management, investment guidance, and tailored solutions for buying, selling, and renting residential and commercial properties.",
  },
];

export const bestServices = [
  {
    id: 1,
    title: "Web & App Development",
    icon: appDevIcon,
    img: appDevCardImg,
    description:
      "AppGalaxy, a subsidiary of ELIXIRAI, specializes in premium website and app development services. We work across platforms to deliver seamless digital experiences that scale new customer acquisition and retention for commerce brands.",
    link: "/services/web-app-development",
  },

  {
    id: 2,
    title: "Artificial Intelligence",
    icon: aiIcon,
    img: aiCardImg,
    description:
      "Let AI elevate your business, streamline operations, and open doors to new possibilities.",
    link: "/services/artificial-intelligence",
  },

  {
    id: 3,
    title: "AR & VR",
    icon: webDevIcon,
    img: webDevCardImg,
    description:
      "In order to scale new customer acquisition and retention commerce brands, we work across",
    link: "/services/ar-vr",
  },
  {
    id: 4,
    title: "Game Development",
    icon: aiIcon,
    img: aiCardImg,
    description:
      "Creating immersive and engaging experiences through innovative game development solutions.",
    link: "/services/game-development",
  },
];

export const testimonials = [
  {
    id: 1,
    img: "",
    name: "Rohan Sharma",
    title: "CEO of ShopSmart Pvt Ltd",
    description:
      "ELIXIRAI helped us build a seamless e-commerce platform with top-notch web development. Their team delivered a responsive website, ensuring an excellent user experience across all devices. The integration of real-time inventory management and AI-powered recommendations has significantly improved our customer engagement and sales.",
  },
  {
    id: 2,
    img: "",
    name: "Priya Bansal",
    title: "Managing Director of SafeFunds Financial Group",
    description:
      "For our mobile application, we turned to ELIXIRAI for their expertise in app development. They created a user-friendly app for both Android and iOS that seamlessly integrates with our blockchain solutions. The app’s intuitive design and smooth functionality enhanced our client experience and improved service efficiency.",
  },
  {
    id: 3,
    img: "",
    name: "Vikram Rao",
    title: "Operations Manager at FreshMart Retail Solutions",
    description:
      "We sought AI-powered solutions to enhance our retail analytics, and ELIXIRAI provided a comprehensive platform that used artificial intelligence to analyze customer behavior, optimize inventory, and predict trends. Their platform helped us make data-driven decisions and personalize our marketing strategies for better customer engagement.",
  },
  {
    id: 4,
    img: "",
    name: "Dr. Meera Nair",
    title: "Co-Founder of HealthNet Solutions",
    description:
      "ELIXIRAI’s expertise in UI/UX design made a significant impact on our healthcare platform. They revamped our user interface, ensuring a clean and intuitive design that’s easy for our patients and clients to navigate. The new design has enhanced user engagement and significantly improved our platform's overall functionality.",
  },
  {
    id: 5,
    img: "",
    name: "Anjali Deshmukh",
    title: "Sales Director at Elite Properties Pvt Ltd",
    description:
      "To elevate our real estate business, ELIXIRAI developed an innovative mobile app that offers virtual property tours, enhancing the buyer's experience. The app’s design and functionality were crafted with user-centric principles in mind, giving our clients an immersive experience from the convenience of their homes.",
  },
  {
    id: 6,
    img: "",
    name: "Ajay Patil",
    title: "CTO of TechServe Solutions",
    description:
      "When we needed a complete redesign of our website, ELIXIRAI delivered a sleek, responsive platform that reflects our growing tech company. The new site not only showcases our products but also integrates advanced AI solutions, providing personalized user experiences and ensuring seamless navigation across devices.",
  },
  {
    id: 7,
    img: "",
    name: "Sunil Kapoor",
    title: "Operations Manager at SteelTech Manufacturing",
    description:
      "ELIXIRAI revolutionized our internal operations with their web and app development expertise, creating a solution that integrates seamlessly with our existing processes. The user-friendly interface and AI-powered automation have dramatically increased productivity, reducing errors and saving us valuable time and resources.",
  },
];

export const clients = [
  {
    id: 1,
    img: client1,
  },
  {
    id: 2,
    img: client2,
  },
  {
    id: 3,
    img: client3,
  },
  {
    id: 4,
    img: client4,
  },
];

export const faqItems = [
  {
    id: 1,
    question: "What services do you offer for Web Development?",
    answer: `We specialize in creating responsive, user-friendly, and high-performance websites. Our web development services include:
      - Custom Website Development
      - E-commerce Solutions
      - Content Management Systems (CMS)
      - Website Maintenance and Support
      - API Integration
    Whether you need a simple landing page or a complex web application, we’ve got you covered.`,
  },
  {
    id: 2,
    question: "Can you develop mobile apps for both iOS and Android?",
    answer: `Yes, we develop mobile apps for both iOS and Android platforms. Our mobile app development services include:
      - Native App Development
      - Cross-Platform App Development
      - App UI/UX Design
      - App Testing and Deployment
      - App Maintenance and Updates
    We ensure your app is scalable, secure, and delivers a seamless user experience.`,
  },
  {
    id: 3,
    question:
      "What are AI-Driven Solutions, and how can they benefit my business?",
    answer: `AI-Driven Solutions leverage artificial intelligence to automate processes, analyze data, and improve decision-making. Our AI services include:
      - Predictive Analytics
      - Natural Language Processing (NLP)
      - Machine Learning Models
      - AI-Powered Chatbots
      - Computer Vision
    These solutions can help you optimize operations, reduce costs, and enhance customer experiences.`,
  },
  {
    id: 4,
    question: "What does your UI/UX design process look like?",
    answer: `Our UI/UX design process focuses on creating intuitive and visually appealing interfaces. Here’s how we do it:
      - Research and Analysis
      - Wireframing and Prototyping
      - User Testing and Feedback
      - High-Fidelity Design
      - Iterative Improvements
    We ensure the final design aligns with your brand and provides an exceptional user experience.`,
  },
  {
    id: 5,
    question: "How long does it take to develop a website or mobile app?",
    answer: `The timeline depends on the complexity of the project. Typically:
      - Simple Website: 2–4 weeks
      - Complex Website: 6–12 weeks
      - Mobile App: 8–16 weeks
    We provide a detailed project timeline after understanding your requirements.`,
  },
  {
    id: 6,
    question: "Do you offer ongoing support for websites and apps?",
    answer: `Yes, we provide ongoing support for all our projects. This includes:
      - Regular Updates
      - Bug Fixes
      - Performance Optimization
      - Security Patches
    Our goal is to ensure your website or app remains functional and up-to-date.`,
  },
  {
    id: 7,
    question: "Can you redesign an existing website or app?",
    answer: `Absolutely! We specialize in redesigning websites and apps to improve functionality, aesthetics, and user experience. Whether it’s a minor update or a complete overhaul, we can help.`,
  },
  {
    id: 8,
    question: "What technologies do you use for Web Development?",
    answer: `We use a wide range of technologies, including:
      - Frontend: HTML, CSS, JavaScript, React, Angular, Vue.js
      - Backend: Node.js, Python, PHP, Ruby on Rails
      - Databases: MySQL, MongoDB, PostgreSQL
      - CMS: WordPress, Shopify, Drupal
    We choose the best tools based on your project requirements.`,
  },
  {
    id: 9,
    question: "How do you ensure the quality of your mobile apps?",
    answer: `We follow a rigorous quality assurance process, including:
      - Functional Testing
      - Performance Testing
      - Usability Testing
      - Security Testing
      - Beta Testing with Real Users
    This ensures your app is bug-free and delivers a smooth user experience.`,
  },
  {
    id: 10,
    question: "What industries do you serve for Web and Mobile Development?",
    answer: `We’ve worked with clients across various industries, including:
      - E-commerce
      - Healthcare
      - Education
      - Finance
      - Entertainment
    Our solutions are tailored to meet the unique needs of each industry.`,
  },
];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

// // web development services
// export const webDevelopmentServices = [
//   {
//     id: 1,
//     title: "E-commerce Websites",
//     icon: require("./assets/images/icons/online-shopping.png"),
//     // img: <CgWebsite />,
//     description:
//       "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
//   },
//   {
//     id: 2,
//     title: "Social Media Websites",
//     // img: <GoFileMedia />,
//     icon: require("./assets/images/icons/socialmedia.png"),
//     description:
//       "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
//   },
//   {
//     id: 3,
//     title: "Landing Websites",
//     // img: <TfiLayoutMediaRightAlt />,
//     icon: require("./assets/images/icons/landing-page.png"),
//     description:
//       "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
//   },
//   {
//     id: 4,
//     title: "Custom Websites",
//     // img: <MdOutlineDashboardCustomize />,
//     icon: require("./assets/images/icons/software-development.png"),
//     description:
//       "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
//   },
// ];

// // app development services
// export const appDevelopmentServices = [
//   {
//     id: 1,
//     title: "iOS App Development",
//     // img: <FaAppStoreIos />,
//     icon: require("./assets/images/icons/ios-development.png"),
//     description:
//       "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
//   },
//   {
//     id: 2,
//     title: "Android App Development",
//     // img: <IoLogoAndroid />,
//     icon: require("./assets/images/icons/android-development.png"),
//     description:
//       "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
//   },
//   {
//     id: 3,
//     title: "Flutter App Development",
//     // img: <SiFlutter />,
//     icon: require("./assets/images/icons/flutter-development.png"),
//     description:
//       "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
//   },
//   {
//     id: 4,
//     title: "Hybrid App Development",
//     // img: <TbDeviceMobileCode />,
//     icon: require("./assets/images/icons/hybrid-app-development.png"),
//     description:
//       "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
//   },
// ];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: ecommerceIcon,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: socialMediaIcon,
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: landingPageIcon,
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: customWebsiteIcon,
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: iosDevelopmentIcon,
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: androidDevelopmentIcon,
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: flutterDevelopmentIcon,
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: hybridAppDevelopmentIcon,
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];
