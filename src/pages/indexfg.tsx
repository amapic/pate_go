import React from "react";

// import { Navbar } from "../component/navbar/navbar";
// // import theme from '../types/theme';
// import theme from "../../custom.d";
// // import {DefaultTheme} from '@material-ui/core/styles'

// import Login from "../Login/Login";
// import { test, get_login } from "../fonction/fonction";

// import  MenuContainer  from "../component_pate/slide";
// import Corps from "../component_pate/menu_droit";
import 'bootstrap/dist/css/bootstrap.css';
// import  Scene,{Scene2} from "../component_pate/camembert";


export default function Dashboard() {
  // const classes = useStyles();
  const [close, setClose] = React.useState(false);
  const [sceneId, setSceneId] = React.useState(0);
  const handleClick = (event) => {
    setClose(!close);
    setSceneId(close ? sceneId+1 : sceneId);
  }
  return (
    // <React.StrictMode>
      <>
      fhdf
    {/* </React.StrictMode> */}
    </>
  );
}

