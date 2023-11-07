import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Components/Navber";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/Ai";
import { FcGoogle } from "react-icons/Fc";
import "../AllCss/Login.css";
import PageTitle from "../Components/PageTitle";
const Login = () => {
  const { googleLogin, login } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGooleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.message);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLoginForm = (event) => {
    setLoginError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : "/");
        Swal.fire("Good job!", "You successfully logedin!", "success");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError("This E-mail or Password is invalid");
      });
  };
  return (
    <div className="logcontainer font-philosopher">
      <PageTitle title="Tastyc-Login"></PageTitle>
      <Navber></Navber>
      <div className="min-h-screen">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#000000b9]">
            <div className="text-center mt-5">
              <h1 className="text-3xl text-gray-200 font-bold">Login now !</h1>
            </div>
            <div className="text-center text-red-600">
              {loginError && <span>{loginError}</span>}
            </div>
            <form onSubmit={handleLoginForm} className="card-body">
              <div className="form-control">
                <label className="label text-gray-100">
                  <span className="">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-gray-100">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered relative"
                  required
                />
                <span
                  className="text-xl absolute right-10 top-[240px] "
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiFillEye></AiFillEye>
                  ) : (
                    <AiFillEyeInvisible></AiFillEyeInvisible>
                  )}
                </span>
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-gray-100"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-black bg-gray-100 text-xl tracking-wider">
                  Login
                </button>
              </div>
              <h1 className="text-sm font-semibold text-gray-100">
                Do not have account ?{" "}
                <Link to="/Register" className="underline">
                  Register
                </Link>{" "}
              </h1>
            </form>
            <span className="text-sm font-semibold text-center text-gray-100">
              Login with
            </span>
            <button
              onClick={handleGooleLogin}
              className="btn btn-outline mb-3 mx-2 text-gray-100"
            >
              <span className="text-xl">
                <FcGoogle></FcGoogle>
              </span>
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
