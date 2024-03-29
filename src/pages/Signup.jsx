import React from "react";
import { Signup as SignupComponent } from "../components";

function Signup() {
  return (
    <div
      className="py-8"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Replace this URL with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "95vh",
      }}
    >
      <SignupComponent />
    </div>
  );
}

export default Signup;
