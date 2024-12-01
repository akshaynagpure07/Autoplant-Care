import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Page/Home";
import NotFound from "./Page/NotFound";
import Layout from "./Components/Layout"; // Import the Layout component
import './index.css';



import {
  AboutUsPage,
  ProfilePage,
  ContactUsPage,
  IrrigationPage,
  DashboardPage,
  PlantInfoPage,
  SettingPage,
  UserLoginPage,
  WateredAreasPage,
} from "./Page";


const router = createBrowserRouter([
  {
    element: <Layout />, // Use Layout for all pages
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/wateredAreasPage",
        element: <WateredAreasPage />,
      },
      {
        path: "/irrigationPage",
        element: <IrrigationPage />,
      },
      {
        path: "/dashBoardPage",
        element: <DashboardPage />,
      },
      {
        path: "/plantInfoPage",
        element: <PlantInfoPage />,
      },
      {
        path: "/userLoginPage",
        element: <UserLoginPage />,
      },
      {
        path: "/settingPage",
        element: <SettingPage />,
      },
      {
        path: "/contactUsPage",
        element: <ContactUsPage />,
      },
      {
        path: "/aboutusPage",
        element: <AboutUsPage />,
      },
      {
        path: "/profilePage",
        element: <ProfilePage />,
      },

    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
