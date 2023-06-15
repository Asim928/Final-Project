import SiteRoot from "../SiteRoot/SiteRoot";
import AboutUS from "../pages/AboutUS";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ.";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Team from "../pages/Team";
import Testimonials from "../pages/Testimonials";

export const ROUTES = [{
    path: '/',
    element:<SiteRoot/>,
    children:[{
        path:"",
        element:<Home/>  
    },
    {
        path:"about",
        element:<AboutUS/>
    },
    {
        path:"services",
        element:<Services/>
    },
    {
        path:"blog",
        element:<Blog/>
    },
    {
        path:"contact",
        element:<Contact/>
    },
    {
        path:"team",
        element:<Team/>
    },
    {
        path:"faq",
        element:<FAQ/>
    },

    {
        path:"testimonial",
        element:<Testimonials/>
    }
]
}]