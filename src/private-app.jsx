import { MainLayout, SingleUser } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home, NotFound, Profile } from "./pages";

export const PrivateApp = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/users/:id" element={<SingleUser />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </MainLayout>
  );
};
