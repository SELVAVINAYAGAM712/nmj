// import React from "react";
// import sparkbg from "../Assests/sparkbg.jpg";

// const BottomContact = () => {
//   return (
//     <div className="bg-[#0E0F1B] text-white py-10 px-5 flex justify-center">
//       <div className="max-w-5xl w-full grid grid-cols-3 gap-10 items-center">
//         {/* Product Card */}
//         <div className="border border-gold p-6 rounded-md text-center relative">
//           <img
//             src={sparkbg}
//             alt="18kt White Gold Wedding Ring"
//             className="mx-auto w-32 h-32 object-cover"
//           />
//           <h2 className="text-lg font-semibold mt-4">18kt White Gold</h2>
//           <p className="text-lg">Wedding Ring For</p>
//           <p className="text-xl font-bold mt-2">$2,000</p>
//           <button className="bg-gold text-black px-6 py-2 mt-4 rounded-md font-semibold hover:bg-opacity-80">
//             BUY NOW
//           </button>
//         </div>

//         {/* Los Angeles Address */}
//         <div>
//           <h3 className="text-gold text-lg font-semibold">Los Angeles</h3>
//           <p className="mt-2"><span className="font-semibold">Address:</span><br /> 3119 Maxwell Street<br /> Bloomfield</p>
//           <p className="mt-2"><span className="font-semibold">Phone:</span><br /> 860-796-7230<br /> 860-912-2307</p>
//           <p className="mt-2"><span className="font-semibold">E-mail:</span><br /> noemail@nodomain.com</p>
//         </div>

//         {/* Texas Address */}
//         <div>
//           <h3 className="text-gold text-lg font-semibold">Texas</h3>
//           <p className="mt-2"><span className="font-semibold">Address:</span><br /> 114 Colonial Drive<br /> Bryan</p>
//           <p className="mt-2"><span className="font-semibold">Phone:</span><br /> 979-731-5860<br /> 979-450-6929</p>
//           <p className="mt-2"><span className="font-semibold">E-mail:</span><br /> noemail@nodomain.com</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BottomContact;



import React from "react";
import "./BottomContact.css";
import sparkbg from "../Assests/sparkbg.jpg";

const BottomContact = () => {
  return (
    <div className="bottom-contact">
      <div className="container">
        {/* Product Card */}
        <div className="product-card">
          <img src={sparkbg} alt="18kt White Gold Wedding Ring" className="product-image" />
          <h2 className="product-title">18kt White Gold</h2>
          <p className="product-subtitle">Wedding Ring For</p>
          <p className="product-price">$2,000</p>
          <button className="buy-button">BUY NOW</button>
        </div>

        {/* Los Angeles Address */}
        <div className="address">
          <h3 className="address-title">Los Angeles</h3>
          <p><span className="label">Address:</span><br /> 3119 Maxwell Street<br /> Bloomfield</p>
          <p><span className="label">Phone:</span><br /> 860-796-7230<br /> 860-912-2307</p>
          <p><span className="label">E-mail:</span><br /> noemail@nodomain.com</p>
        </div>

        {/* Texas Address */}
        <div className="address">
          <h3 className="address-title">Texas</h3>
          <p><span className="label">Address:</span><br /> 114 Colonial Drive<br /> Bryan</p>
          <p><span className="label">Phone:</span><br /> 979-731-5860<br /> 979-450-6929</p>
          <p><span className="label">E-mail:</span><br /> noemail@nodomain.com</p>
        </div>
      </div>
    </div>
  );
};

export default BottomContact;


