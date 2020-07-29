import React, { useState, useEffect } from "react";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon } from "antd";
import "./Sections/Navbar.css";
import { useSelector } from "react-redux";

function NavBar(props) {
  const [visible, setVisible] = useState(false);

  const user = useSelector((state) => state.user);

  useEffect(() => {}, []);
  // 요청상태를 확인 하고 변결해줄것
  useEffect(() => {
    if (user) {
      if (user.isRequired) {
        // 요청받으면 해당 함수를 호출한다.
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
        <a href="/">UAFC</a>
      </div>
      <div className="menu__container">
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
          title="메뉴"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  );
}

export default NavBar;
