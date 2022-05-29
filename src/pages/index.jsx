import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { IntlProvider } from "react-intl";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import { localeText } from "../nls";

const Home = React.lazy(() => import("./home"));

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
          </Routes>
        </BrowserRouter>
      </Suspense>
    </IntlProvider>
  );
};

export default Pages;
