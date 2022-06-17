import "./Navbar.css";
import navbarLogo from "../../Images/mainLogo.svg";
import { ImLocation } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { BiWallet } from "react-icons/bi";

import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Login from "../Login/Login";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const { token, user } = useContext(AuthContext);
  return (
    <div id="Navmain">
      <div id="navlogo1">
        <img src={navbarLogo}></img>
      </div>
      <div id="div2">
        <div id="div21">
          <ImLocation />
        </div>
        <div id="div22">Pawai</div>
      </div>
      <div id="div3">
        <InputGroup w={"570px"} rounded={"xl"}>
          <Input placeholder="find Fresh vegitable frute and dairy"  rounded={"full"}/>
          <InputRightElement children={<FaSearch color="green.500" />} />
        </InputGroup>
      </div>
      <div id="div4">
        {/* <div>
          <BsCart3 />
        </div>
        <div>Cart</div> */}
        <Cart/>
      </div>
      <div id="div5">
        <div>
          <BiWallet />
        </div>
        <div>Credit</div>
      </div>
      <div id="div6">{token == "" ? <Login /> : user}</div>
    </div>
  );
};

export default Navbar;
