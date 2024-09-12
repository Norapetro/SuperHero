import { Route, Routes } from "react-router-dom";
import LoginPages from "../auth/pages/LoginPages";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route path="login" element={<LoginPages />} /> */}
        
        <Route path="login" element={
          <PublicRouter>
            <LoginPages/>
          </PublicRouter>
        } 
        />

        <Route
          path="/*"
          element={
            <PrivateRouter>
              <HeroesRoutes />
            </PrivateRouter>
          }
        />

        {/* <Route path="/*" element={<HeroesRoutes />}/> */}
      </Routes>
    </>
  );
};

export default AppRouter;
