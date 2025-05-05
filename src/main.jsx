import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Footer from './Components/Footer/Footer.jsx';
import Root from './Root.jsx';
import Home from './Pages/HomePage/Home.jsx';
import ContactPage from './Pages/Contact/ContactPage.jsx';
import BrandSection from './Pages/Brand/BrandSection.jsx';
import ProductCategorySection from './Pages/AllProduct/ProductCategorySection.jsx';
import FAQSection from './Pages/FAQ/FAQSection.jsx';
import NewArrivals from './Pages/NewArrival/NewArrival.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>  ,

    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>
      },
      {
        path: "/brand",
        element: <BrandSection></BrandSection>
      },
      {
        path: "/all",
        element: <ProductCategorySection ></ProductCategorySection>
      },
      {
        path: "/faq",
        element: <FAQSection></FAQSection>
      },
      {
        path: "/new",
        element:<NewArrivals></NewArrivals>
      }
    ]
  },


]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <RouterProvider router={router} />

  </StrictMode>,
)
