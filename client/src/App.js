import React from "react";

function App() {
  return (
    <button
      onClick={() => {
        window.open("http://192.168.10.170:8080/pdf", "_blank");
      }}
      style={{ width: "200px", height: "100px", margin: "50px" }}
    >
      Download PDF
    </button>
  );
}

export default App;
