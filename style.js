export const styles = {
  body: {
    background: "linear-gradient(to bottom,rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url('./image/background.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    fontFamily: "'Arial', sans-serif",
    color: "white",
    margin: "0",
    padding: "0",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    margin: "30px 60px", 
    padding: "0px 20px", 
    color: "white", 
    // backgroundColor: "rgba(255, 255, 255,0.1)",  // white background
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: "10px" ,
    boxShadow: "0px 16px 40px rgba(0, 0, 0, 0.5)",

  },
  symbol: {
   // will set later for the image now just for text
   fontFamily: "cursive",
    fontWeight: "bold",
    fontSize: "28px",
    lineHeight: "1", 
     

  },
  buttonSection: {
    display: "flex",
    gap: "20px",
    // color :"red"
  },
  onMouseHover: {
    color: "white", 
  },
  ofMouseHover: {
    color: "rgba(255, 255, 255, 0.6)", 
    cursor: "pointer", // Pointer cursor on hover
    transition: "0.3s ease"
  },
};
