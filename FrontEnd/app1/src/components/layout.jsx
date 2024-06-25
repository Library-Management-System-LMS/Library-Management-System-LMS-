import { MyNavbar, MyNavbar1, MyFooter } from "../pages/pageService";
import { useLocation } from "react-router-dom";

//use location which identifies url pathname
const Layout = () => {
    const location = useLocation();
    //  return (
        //give pathname for different navbar and footer
    
        const renderNavbar = () => {
            switch (location.pathname) {
              case '/register':
                return <MyNavbar1 />;
              case '/login':
                return <MyNavbar1 />;
              default:
                return <MyNavbar />;
            }
          };
        
          return <>{renderNavbar()}</>;
        
        // <div>
        //     {location.pathname === '/login' ? <MyNavbar1 /> : <MyNavbar/>}
        //     {children}
        //     {location.pathname=='/login' ? <MyFooter/> : <MyFooter/>}
        // </div>

    //  );

};


export default Layout;  




