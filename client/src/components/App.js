import React, { Suspense, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";

import LandingPage from "./views/LandingPage/LandingPage.js";
import Result from "./views/Result/Result";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";

function App() {
  // 상태를 변경한다.
  // 개발편하라고 만든거
  const isRequest = false;
  // 요청을 받으면 다 안보인다.

  const updateRequire = (bool) => {
    if (bool) {
      setIsRequired(true);
    } else {
      setIsRequired(false);
    }
    console.log("상태를 변경");
  };
  const [IsRequired, setIsRequired] = useState(false);
  return (
    <>
      {IsRequired ? (
        //정현정
        <Result />
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar updateRequire={updateRequire} />
          <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
            <Switch>
              <Route
                exact
                path="/"
                component={Auth(LandingPage, null)}
                updateRequire={updateRequire}
              />
              <Route exact path="/login" component={Auth(LoginPage, false)} />
              <Route
                exact
                path="/register"
                component={Auth(RegisterPage, false)}
              />
            </Switch>
          </div>
          <Footer />
        </Suspense>
      )}
    </>
  );
}

export default App;
