import React, { useState, useEffect } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon } from "antd";
import "./Sections/Navbar.css";
import { useSelector } from "react-redux";

function NavBar(props) {
  const [visible, setVisible] = useState(false);
  // 지금은 요청이 로그인상탸로 확인 하지만
  // request를 받는 방향으로 받으면 상태정보를 수정해서 사용하자
  //요청받으면 true로 바꾸자
  const user = useSelector((state) => state.user.userData);

  useEffect(() => {}, []);
  useEffect(() => {
    if (user) {
      if (user.isAuth) {
        // 요청받으면 해당 함수를 호출
        props.updateRequire(true);
      }
    }
    console.log(user);
  }, [user]);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav
      className="menu"
      style={{ position: "fixed", zIndex: 5, width: "100%" }}
    >
      <div className="menu__logo">
        <a href="/">Logo</a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  );
}

export default NavBar;
