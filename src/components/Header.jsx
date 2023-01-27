import React from "react";

const Header = () => {
  return (
    <>
      <div className="container mx-auto py-2">
        <div className="flex items-center">
          <div className="w-1/6">
            <img src="https://myconvenient.net/wordpress/wp-content/uploads/2016/02/CFMLOGOS1-300x119.png" alt="logo" />
          </div>
          <div className="w-5/6">
            <h1 className="text-xl md:text2xl lg:text-4xl text-center font-bold">Customer Acquisition Cost Prediction</h1>  
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}
export default Header;