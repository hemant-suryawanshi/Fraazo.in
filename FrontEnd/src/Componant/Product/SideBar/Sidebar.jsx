import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import "./Sidebar.css";

import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);

  const handelState1 = () => {
    setState1(true);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(false);
  };
  const handelState2 = () => {
    setState1(false);
    setState2(true);
    setState3(false);
    setState4(false);
    setState5(false);
  };
  const handelState3 = () => {
    setState1(false);
    setState2(false);
    setState3(true);
    setState4(false);
    setState5(false);
  };
  const handelState4 = () => {
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(true);
    setState5(false);
  };
  const handelState5 = () => {
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(true);
  };
  return (
    <Box id="Sidebar1">
      <Link to="/product/mangos">
        <Box id={state1 ? "Sidebar22" : "Sidebar11"} onClick={handelState1}>
          {state1 ? <FaMinus id="logo1" /> : <BsPlusLg id="logo1" />}
          <p id="SidbarHead">Mangoes</p>
        </Box>
      </Link>

      <Link to="/product/fruits">
        <Box id={state2 ? "Sidebar22" : "Sidebar11"} onClick={handelState2}>
          {state2 ? <FaMinus id="logo1" /> : <BsPlusLg id="logo1" />}
          <p id="SidbarHead">Fruits</p>
        </Box>
      </Link>

      <Link to="/product/vegitables">
        <Box id={state3 ? "Sidebar22" : "Sidebar11"} onClick={handelState3}>
          {state3 ? <FaMinus id="logo1" /> : <BsPlusLg id="logo1" />}
          <p id="SidbarHead">Vegetables</p>
        </Box>
      </Link>

      <Link to="/product/dryfruits">
        <Box id={state4 ? "Sidebar22" : "Sidebar11"} onClick={handelState4}>
          {state4 ? <FaMinus id="logo1" /> : <BsPlusLg id="logo1" />}
          <p id="SidbarHead">Dry Fruits</p>
        </Box>
      </Link>

      <Link to="/product/kitchenstaples">
        <Box id={state5 ? "Sidebar22" : "Sidebar11"} onClick={handelState5}>
          {state5 ? <FaMinus id="logo1" /> : <BsPlusLg id="logo1" />}
          <p id="SidbarHead">Kitchen Staples</p>
        </Box>
      </Link>
    </Box>
  );
};
export default Sidebar;
