// import {Grid, makeStyles, Typography} from "@mui/material";

// import React from "react";

// export const PortraitMode = props => {
//   const classes = useStyles();
//   return (
//     <>
//       <div className={classes.portraitMode}>{props.children}</div>
//       <div className={classes.landscapeMode}>
//         hey, flip your phone to portrait mode please!
//       </div>
//     </>
//   );
// };

// const useStyles = makeStyles({
//   portraitMode: {
//     display: "none",
//     "@media screen and (max-aspect-ratio: 13/9)": {
//       height: "100%",
//       width: "100%",
//       display: "block",
//     },
//   },
//   landscapeMode: {
//     display: "none",
//     "@media (max-width: 800px) and (min-aspect-ratio: 13/9)": {
//       height: "100%",
//       display: "block",
//     },
//   },
// });