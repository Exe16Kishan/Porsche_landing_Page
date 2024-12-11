export const styles = {
  body: {
    backgroundColor: "#aba5c2",
    fontFamily: "'Arial', sans-serif",
    color: "white",
    height: '100%',
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
    borderRadius: "10px" ,

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
    cursor: "pointer", 
    transition: "0.3s ease"
  },
};
