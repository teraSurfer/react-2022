import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { IntlProvider } from "react-intl";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import { localeText } from "../nls";
import Home from "./home";

const Login = React.lazy(() => import("./auth/login"));
const Register = React.lazy(() => import("./auth/register"));

const Pages = () => {
  const user = {
    name: "Natraj",
    p13n: {
      darkMode: true,
    },
  };

  return (
    <IntlProvider locale="en-us" messages={localeText["en-us"]}>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Navbar user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </IntlProvider>
  );
};

export default Pages;
