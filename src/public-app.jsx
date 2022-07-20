import { Routes, Route } from "react-router-dom";
import { Registration, SignIn, NotFound } from "./pages";

export const PublicApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
