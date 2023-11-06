import { Link } from "react-router-dom";
import design2 from "../assets/images/design2.png";
import burger1 from "../assets/images/burger1.png";
import burger2 from "../assets/images/burger2.png";
import burger3 from "../assets/images/burger3.png";
import burger4 from "../assets/images/burger4.jpg";
import burger5 from "../assets/images/burger5.jpg";
import burger6 from "../assets/images/burger6.jpg";
const Footer = () => {
  return (
    <div>
      <div className="w-full  lg:block lg:flex">
        <img src={burger2} className="hidden lg:w-60" alt="" />
        <img src={burger1} className="hidden lg:w-60" alt="" />
        <img src={burger3} className="hidden lg:w-60" alt="" />
        <img src={burger4} className="hidden lg:w-60" alt="" />
        <img src={burger5} className="hidden lg:w-60" alt="" />
        <img src={burger6} className="hidden lg:w-60" alt="" />
      </div>
      <div className="footerContainer">
        <footer className="footer p-20  text-gray-100">
          <aside>
            <Link to="/">
              <div>
                <h1 className="text-6xl font-semibold text-gray-100 font-philosopher mb-5">
                  Tastyc
                </h1>
                <img src={design2} className="w-56" alt="" />
              </div>
            </Link>
            <p className="text-xl font-philosopher">
              Satisfy Your Cravings at tastyc
            </p>
          </aside>
          <nav>
            <header className="footer-title text-2xl text-[#f3ce85]">
              Services
            </header>
            <a className="link link-hover text-xl">Branding</a>
            <a className="link link-hover text-xl">Design</a>
            <a className="link link-hover text-xl">Marketing</a>
            <a className="link link-hover text-xl">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title text-2xl text-[#f3ce85]">
              Company
            </header>
            <a className="link link-hover text-xl">About us</a>
            <a className="link link-hover text-xl">Contact</a>
            <a className="link link-hover text-xl">Jobs</a>
            <a className="link link-hover text-xl">Press kit</a>
          </nav>{" "}
          <nav>
            <header className="footer-title text-2xl text-[#f3ce85]">
              Legal
            </header>
            <a className="link link-hover text-xl">Terms of use</a>
            <a className="link link-hover text-xl">Privacy policy</a>
            <a className="link link-hover text-xl">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
