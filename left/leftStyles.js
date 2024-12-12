export const styles = {
  nav: {
    position: "absolute",
    top: "5px",
    left: "20px",
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    color: "black",
    gap: "60%",
  },
  title: {
    fontSize: "26px",
    fontWeight: "bold",
  },
  title2:{
    color:"black",
    position: "absolute",
    top: "2%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex :"20"
  },
  link: {
    margin: "5px 0",
    fontSize: "18px",
    cursor: "pointer",
  },
  Link: {
    display: "flex",
    gap: "45%",
  },
  
  contentButton:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    transform: 'rotate(90deg)',
    top:"20%",
    left:"5px",
    border:"2px solid black",
    color:"black",
    height:"40px",
    width:"125px",
    gap:"5px",
    fontWeight:"bold"
  },
  contentButton2:{
    display:"none"
  },
  bigLine:{
    width: "2px",
  height: "25px",
  backgroundColor: "black",
  border:"none",
  margin: "3px 0",
  },
  smallLine:{
    width: "2px",
  height: "15px",
  border:"none",
  backgroundColor: "black",
  margin: "3px 4px",
  },
  bottomButton:{
    position:"absolute",
    bottom:"8%",
    left:"38px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    border:"2px solid black",
    width:"180px",
  },
  bottomButton2:{
    position:"absolute",
    bottom:"0px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    border:"2px solid black",
    width:"180px",
  },
rightButton:{
    borderLeft:"2px solid black"
},
  rightImg:{
    transform:' scaleX(-1)',
    marginLeft:"30px"
  },
  leftImg:{
    marginRight:"30px"
  },

  ring:{
    position:"absolute",
    top:0,
    left:0,
    backgroundColor:"white",
    height:"400px",
    width:"400px",
    borderBottomRightRadius:"100%"
  },
  innerRing:{
    position:"absolute",
    top:0,
    left:0,
    backgroundColor:"#d9dbde",
    height:"300px",
    width:"300px",
    borderBottomRightRadius:"100%"
  }
};
