import SiteRoot from "../SiteRoot/SiteRoot";
import AboutUS from "../pages/AboutUS";
import Home from "../pages/Home";
import News from "../pages/News";
import Services from "../pages/Services";

export const ROUTES = [{
    path: '/',
    element:<SiteRoot/>,
    children:[{
        path:"",
        element:<Home/>  
    },
    {
        path:"aboutUs",
        element:<AboutUS/>
    },
    {
        path:"services",
        element:<Services/>
    },
    {
        path:"news",
        element:<News/>
    }
]
}]