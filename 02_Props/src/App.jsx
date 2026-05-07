import React from "react";
import Card from "./component/Card";
import image1 from "./assets/shirt-1.jpg";
import image2 from "./assets/shirt-2.jpg";
import image3 from "./assets/shirt-3.jpg";
import Card2 from "./component/Card2";

const App = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <Card image={image1} name="Combo-1" description="This is a great combo!" />
        </div>

        <div className="col-md-4">
          <Card image={image2} name="Combo-2" description="Another amazing combo!" />
        </div>

        <div className="col-md-4">
          <Card image={image3} name="Combo-3" description="Yet another fantastic combo!" />
        </div>
      </div>
     
    </div>
  );
};

export default App;
