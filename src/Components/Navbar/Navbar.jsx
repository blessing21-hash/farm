// // components/LandingPage/Navbar.tsx
// import Image from "../../assets/logo.png";
// import "./Navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <div className="navbar-logo">
//         <Image
//           src="/logo.png"
//           alt="Agrimo Logo"
//           width={70}
//           height={70}
//           className="logo-img"
//         />
//       </div>

//       {/* Menu */}
//       <ul className="navbar-menu">
//         <li className="active">
//           <span>•</span> HOME
//         </li>
//         <li>
//           <span>•</span> PAGES
//         </li>
//         <li>
//           <span>•</span> SERVICES
//         </li>
//         <li>
//           <span>•</span> PORTFOLIO
//         </li>
//         <li>
//           <span>•</span> BLOG
//         </li>
//         <li>
//           <span>•</span> CONTACT US
//         </li>
//       </ul>

//       {/* Right section */}
//       <div className="navbar-right">
//         <div className="phone">
//           <span className="phone-icon">📞</span>
//           <span>+1 (212) 255-511</span>
//         </div>
//         <span className="search">🔍</span>
//         <button className="contact-btn">Get In Touch ✈</button>
//       </div>
//     </nav>
//   );
// }




// src/components/LandingPage/Navbar.jsx
// import logo from "../../assets/logo.png";

// export default function Navbar() {
//   return (
//     <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-white z-20">
//       {/* Logo */}
//       <div className="flex items-center gap-2 text-2xl font-bold">
//         <img src={logo} alt="Agrimo Logo" className="w-[70px] h-[70px] object-contain" />
//       </div>

//       {/* Menu */}
//       <ul className="hidden md:flex gap-8 font-medium">
//         <li className="flex items-center gap-2 cursor-pointer text-[#EDDD5E]">
//           <span className="text-[#EDDD5E]">•</span> HOME
//         </li>
//         <li className="flex items-center gap-2 cursor-pointer hover:text-green-400">
//           <span className="text-white">•</span> PAGES
//         </li>
//         <li className="flex items-center gap-2 cursor-pointer hover:text-green-400">
//           <span className="text-white">•</span> SERVICES
//         </li>
//         <li className="flex items-center gap-2 cursor-pointer hover:text-green-400">
//           <span className="text-white">•</span> PORTFOLIO
//         </li>
//         <li className="flex items-center gap-2 cursor-pointer hover:text-green-400">
//           <span className="text-white">•</span> BLOG
//         </li>
//         <li className="flex items-center gap-2 cursor-pointer hover:text-green-400">
//           <span className="text-white">•</span> CONTACT US
//         </li>
//       </ul>

//       {/* Right section */}
//       <div className="flex items-center gap-6">
//         <div className="flex items-center gap-2 text-sm">
//           <span className="text-green-400">📞</span>
//           <span>+1 (212) 255-511</span>
//         </div>
//         <span className="cursor-pointer hover:text-green-400">🔍</span>
//         <button className="bg-yellow-300 text-black rounded-full px-6 py-2 shadow-md hover:bg-yellow-400 transition">
//           Get In Touch ✈
//         </button>
//       </div>
//     </nav>
//   );
// }






// import React from "react";
// import logo from "../../assets/logo.png"
// import "./Navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <div className="logo">
//         <img src= {logo} alt="Agrimo Logo" />
//       </div>

//       {/* Menu */}
//       <ul className="menu">
//         <li className="active">• HOME</li>
//         <li>• PAGES</li>
//         <li>• SERVICES</li>
//         <li>• PORTFOLIO</li>
//         <li>• BLOG</li>
//         <li>• CONTACT US</li>
//       </ul>

//       {/* Right Section */}
//       <div className="right">
//         <div className="phone">📞 +1 (212) 255-511</div>
//         <span className="search">🔍</span>
//         <button className="contact-btn">Get In Touch  </button>
//       </div>
//     </nav>
//   );
// }






// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import "./Navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <div className="logo">
//         <Link to="/">
//           <img src={logo} alt="Agrimo Logo" />
//         </Link>
//       </div>

//       {/* Menu */}
//       <ul className="menu">
//         <li className="active">
//           <Link to="/">• HOME</Link>
//         </li>
//         <li>
//           <Link to="/pages">• PAGES</Link>
//         </li>
//         <li>
//           <Link to="/services">• SERVICES</Link>
//         </li>
//         <li>
//           <Link to="/portfolio">• PORTFOLIO</Link>
//         </li>
//         <li>
//           <Link to="/blog">• BLOG</Link>
//         </li>
//         <li>
//           <Link to="/contact">• CONTACT US</Link>
//         </li>
//       </ul>

//       {/* Right Section */}
//       <div className="right">
//         <div className="phone">📞 +1 (212) 255-511</div>
//         <span className="search">🔍</span>
//         <Link to="/contact">
//           <button className="contact-btn">Get In Touch</button>
//         </Link>
//       </div>
//     </nav>
//   );
// }









// import React from "react";
// import { Link } from "react-router-dom"; // import Link
// import logo from "../../assets/logo.png";
// import "./Navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <div className="logo">
//         <Link to="/">
//           <img src={logo} alt="Agrimo Logo" />
//         </Link>
//       </div>
      

//       {/* Menu */}
//       <ul className="menu">
//         <li className="active">
//           <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>• HOME</Link>
//         </li>
//         <li>
//           <Link to="/pages" style={{ color: "inherit", textDecoration: "none" }}>• PAGES</Link>
//         </li>
//         <li>
//           <Link to="/services" style={{ color: "inherit", textDecoration: "none" }}>• SERVICES</Link>
//         </li>
//         <li>
//           <Link to="/portfolio" style={{ color: "inherit", textDecoration: "none" }}>• PORTFOLIO</Link>
//         </li>
//         <li>
//           <Link to="/blog" style={{ color: "inherit", textDecoration: "none" }}>• BLOG</Link>
//         </li>
//         <li>
//           <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>• CONTACT US</Link>
//         </li>
//       </ul>

//       {/* Right Section */}
//       <div className="right">
//         <div className="phone">📞 +1 (212) 255-511</div>
//         <span className="search">🔍</span>
         

         
//          {/* <div className="blessing">
//               <Link to="/contact">
//           <button className="contact-btn">Get In Touch</button>
//               </Link>
//          </div> */}
//            <Link to="/contact">
//            <button className="contact-btn">Get In Touch</button>
//               </Link>
//       </div>

//       {/* <div className="blessing">
//               <Link to="/contact">
//           <button className="contact-btn">Get In Touch</button>
//         </Link>
//       </div> */}

//     </nav>
    
//   );
// }













































import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Agrimo Logo" />
        </Link>
      </div>

      {/* Menu */}
      <ul className="menu">
        <li className="active">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>• HOME</Link>
        </li>

        {/* Dropdown Menu */}
        <li className="dropdown">
          <Link to="/pages" style={{ color: "inherit", textDecoration: "none" }}>
            • PAGES ▾
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/team" style={{ color: "inherit", textDecoration: "none" }}>
                Our Team Members
              </Link>
            </li>
            <li>
              <Link to="/history" style={{ color: "inherit", textDecoration: "none" }}>
                Our History
              </Link>
            </li>
            <li>
              <Link to="/faq" style={{ color: "inherit", textDecoration: "none" }}>
                FAQ
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/services" style={{ color: "inherit", textDecoration: "none" }}>• SERVICES</Link>
        </li>
        <li>
          <Link to="/portfolio" style={{ color: "inherit", textDecoration: "none" }}>• PORTFOLIO</Link>
        </li>
        <li>
          <Link to="/blog" style={{ color: "inherit", textDecoration: "none" }}>• BLOG</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>• CONTACT US</Link>
        </li>
      </ul>

      {/* Right Section */}
      <div className="right">
        <div className="phone">📞 +1 (212) 255-511</div>
        <span className="search">🔍</span>
        <Link to="/contact">
          <button className="contact-btn">Get In Touch</button>
        </Link>
      </div>
    </nav>
  );
}








// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import "./Navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <div className="logo">
//         <Link to="/">
//           <img src={logo} alt="Agrimo Logo" />
//         </Link>
//       </div>

//       {/* Menu */}
//       <ul className="menu">
//         <li className="active">
//           <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>• HOME</Link>
//         </li>
//         <li>
//           <Link to="/pages" style={{ color: "inherit", textDecoration: "none" }}>• PAGES</Link>
//         </li>
//         <li>
//           <Link to="/services" style={{ color: "inherit", textDecoration: "none" }}>• SERVICES</Link>
//         </li>
//         <li>
//           <Link to="/portfolio" style={{ color: "inherit", textDecoration: "none" }}>• PORTFOLIO</Link>
//         </li>
//         <li>
//           <Link to="/blog" style={{ color: "inherit", textDecoration: "none" }}>• BLOG</Link>
//         </li>
//         <li>
//           <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>• CONTACT US</Link>
//         </li>
//       </ul>

//       {/* Right Section */}
//       <div className="right">
//         <div className="phone">📞 +1 (212) 255-511</div>
//         <span className="search">🔍</span>
//       </div>

//       {/* Corner Button */}
//       <div className="corner-btn">
//         <Link to="/contact">
//           <button className="contact-btn">Get In Touch</button>
//         </Link>
//       </div>
//     </nav>
//   );
// }
