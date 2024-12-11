export const styles = {
  nav: {
      position: "absolute",
      top: "5px",
      right: "15%",       
      padding: "20px",

  },
  link: {
      margin: "5px 0",
      fontSize: "18px",
      cursor: "pointer",
      textAlign: "right", 
      },
  Link: {
      display: "flex",
      gap:"55%",
      color:"#d9dbde",
      
  },
  printButton:{
    position:"absolute",
    top: "48%",
    right:"25px",
    zIndex:25,
    transform: 'rotate(90deg)',
    width:"150px",
    height:"50px",
    border:"2px solid white",
    display: "flex", // Use flexbox for centering
    justifyContent: "center", // Center horizontally
    alignItems: "center"
  }
};
