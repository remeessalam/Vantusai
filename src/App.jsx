import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Loader from "./Components/Loader";
import WebDevelopment from "./pages/ServicesPage/WebDevelopment";
import AppDevelopment from "./pages/ServicesPage/AppDevelopment";
import { Toaster } from "react-hot-toast";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import GameDevelopment from "./pages/ServicesPage/GameDevelopment";
import ChatbotDevelopment from "./pages/ServicesPage/ChatbotDevelopment";
import DataAnalytics from "./pages/ServicesPage/DataAnalytics";
import BlockchainDevelopment from "./pages/ServicesPage/BlockchainDevelopment";
import VrArDevelopment from "./pages/ServicesPage/VrArDevelopment";
import WhatsAppIcon from "./Components/WhatAppIcon";
import AiCallingAgent from "./pages/ServicesPage/AiCallingAgent";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutusPage = lazy(() => import("./pages/AboutusPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Industries = lazy(() => import("./pages/Industries"));
const ServicePageLayout = lazy(() => import("./Layout/ServicePageLayout"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Thankyou = lazy(() => import("./Components/ThankYou"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#000000",
              color: "#ffffff",
            },
          }}
        />
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutusPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />, // Main /services page with AppLayout
      },
      {
        path: "/industries",
        element: <Industries />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/portfolio",
        element: <Portfolio isBannerShow={true} />,
      },
      {
        path: "/thank-you",
        element: <Thankyou />,
      },
    ],
  },
  {
    path: "/services",
    element: <ServicePageLayout />, // Separate layout for /services child routes
    children: [
      {
        path: "web-development",
        element: <WebDevelopment />,
      },
      {
        path: "mobile-app-development",
        element: <AppDevelopment />,
      },
      {
        path: "game-development",
        element: <GameDevelopment />,
      },
      {
        path: "chatbots",
        element: <ChatbotDevelopment />,
      },
      {
        path: "data-analytics",
        element: <DataAnalytics />,
      },
      {
        path: "blockchain-development",
        element: <BlockchainDevelopment />,
      },
      {
        path: "vr-ar-development",
        element: <VrArDevelopment />,
      },
      {
        path: "ai-calling-agent",
        element: <AiCallingAgent />,
      },
    ],
  },
  {
    path: "/web-development",
    element: (
      <>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#000000",
              color: "#ffffff",
            },
          }}
        />
        <WhatsAppIcon />

        <LandingPage page={"web-development"} />
      </>
    ),
  },
  {
    path: "/app-development",
    element: (
      <>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#000000",
              color: "#ffffff",
            },
          }}
        />
        <WhatsAppIcon />

        <LandingPage page={"app-development"} />
      </>
    ),
  },
]);

export default AppRouter;
