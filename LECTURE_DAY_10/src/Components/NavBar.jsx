import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";


export default function NavBar() {
    const themeColor = useContext( ThemeContext )

    console.log(themeColor);
    return<h1 style={({color:themeColor.clr})}>Hello from NavBar...</h1>
} 