import React from "react";

import { Navbar } from "../component/navbar/navbar";
// // import theme from '../types/theme';
// import theme from "../../custom.d";
// // import {DefaultTheme} from '@material-ui/core/styles'

// import Login from "../Login/Login";
// import { test, get_login } from "../fonction/fonction";

import  MenuContainer  from "../component_pate/slide";
import Corps from "../component_pate/menu_droit";
const drawerWidth = 0;
import 'bootstrap/dist/css/bootstrap.css';
import  Scene from "../component_pate/camembert";

// const useStyles = makeStyles((theme) => ({
//   // target: {
//   //   backgroundColor: theme.palette.primary
//   // },
//   root: {
//     display: "block",
//     // position:'absolute'
//   },
//   barchart_container: {
//     [theme.breakpoints.up("sm")]: {
//       width: `calc(100% - 260px)`,
//     },
//     [theme.breakpoints.down("sm")]: {
//       width: "100%",
//     },
//   },
//   toolbar: {
//     paddingRight: 24, // keep right padding when drawer closed
//   },
//   toolbarIcon: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: "0 8px",
//     ...theme.mixins.toolbar,
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: 36,
//   },
//   menuButtonHidden: {
//     display: "none",
//   },
//   title: {
//     flexGrow: 1,
//     textAlign: "center",
//   },
//   drawerPaper: {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerPaperClose: {
//     overflowX: "hidden",
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     width: theme.spacing(7),
//     [theme.breakpoints.up("sm")]: {
//       width: theme.spacing(9),
//     },
//   },
//   appBarSpacer: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     height: "100vh",
//     overflow: "auto",
//     minWidth: "700px",
//     // zIndex:-1
//   },
//   container: {
//     paddingTop: theme.spacing(0),
//     paddingBottom: theme.spacing(2),
//     flexWrap: "nowrap",
//     // zIndex:-3
//   },
//   paper: {
//     padding: theme.spacing(2),
//     marginBottom: theme.spacing(2),
//     display: "flex",
//     overflow: "visible",
//     flexDirection: "column",
//     height: "auto",
//     // backgroundColor: theme.palette.secondary.bgPaper
//   },
//   paper_row: {
//     padding: theme.spacing(2),
//     display: "flex",
//     overflow: "visible",
//     flexDirection: "row",
//   },
//   paper_droite: {
//     padding: theme.spacing(2),
//     marginBottom: theme.spacing(2),
//     display: "flex",
//     overflow: "visible",
//     flexDirection: "column",
//     alignContent: "center",
//     boxSizing: "border-box",
//     justifyContent: "center",
//   },
//   containerprinc: {
//     paddingTop: theme.spacing(2),
//     paddingBottom: theme.spacing(2),
//     paddingRight: "0.75rem",
//     paddingLeft: "0.75rem",
//     flexWrap: "nowrap",
//     width: "100%",
//     maxWidth: "1105px",
//   },
//   fixedHeight: {
//     height: 350,
//   },
//   fixedWidth: {
//     width: 600,
//   },
//   fixedHeightx3: {
//     height: 240,
//   },
//   flexRow: {
//     display: "flex",
//     overflow: "visible",
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
// }));

export default function Dashboard() {
  // const classes = useStyles();
  const [close, setClose] = React.useState(false);
  const [sceneId, setSceneId] = React.useState(0);
  // const fixedHeightPaper = clsx(classes.paper);
  // const paper_droite = clsx(classes.paper_droite);
  const handleClick = (event) => {
    setClose(!close);
    setSceneId(close ? sceneId+1 : sceneId);
  }
  return (
    <React.StrictMode>
      <div style={{top:"10%",backgroundColor:"black"}} className={"w-100 h-100 position-absolute overflow-hidden "}/>
      <div style={{top:"10%",backgroundColor:"black"}} className={"h-100 overflow-hidden "}>
        {/* <CssBaseline /> */}

        <Navbar />
        {/* <Slide /> */}
        
        <MenuContainer />
        {/* <MenuSvg /> */}
        {/* <div> */}
        <Scene key={sceneId} close={close} />
        {/* </div> */}
        <Corps handleClick={handleClick} />
        {/* <main className={}> */}
          {/* <div className={} /> */}
          {/* <video
            className={"videoFront"}
            src={"/proutVideo.mp4"}
            autoPlay
            loop
            muted
          /> */}
          {/* </div> */}
        {/* </main> */}
      </div>
    </React.StrictMode>
  );
}
