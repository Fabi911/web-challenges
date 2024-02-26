import Image from "./Image"
import logo from "../img/logo.jpg";


export default function Logo(){
    return(
        <a href="#">
          <Image url={logo} name="logo"/>
        </a>
    )
}