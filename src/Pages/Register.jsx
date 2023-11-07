import { Link } from "react-router-dom";
import Navber from "../Components/Navber";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import "../AllCss/Login.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/Ai";
import axios from "axios";
import PageTitle from "../Components/PageTitle";
const Register = () => {
  const { register, updataUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState(" ");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegisterForm = (event) => {
    setRegisterError(" ");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imgURL = form.imgURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const checked = form.checkbox.checked;
    console.log(name, password, imgURL, email);
    const user = { name, password, imgURL, email };
    axios.post("http://localhost:5000/user", user).then((res) => {
      console.log(res.data);
    });

    if (password.length < 6) {
      return setRegisterError("Your password must be at least six charecter");
    } else if (!/[A-Z]/.test(password)) {
      return setRegisterError("Your password must have a capital latter");
    } else if (!/[~!@#$%^&*()<>]/.test(password)) {
      return setRegisterError("Your password must have a special charecter");
    } else if (checked == false) {
      return setRegisterError("Please agree with our terms and condition");
    }

    register(email, password)
      .then((result) => {
        updataUser(name, imgURL).then(() => {
          console.log(result.user);
          Swal.fire(
            "Well Come!",
            "You Registration is successfull !",
            "success"
          );
        });
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(
          "This E-mail is already used.please try with another one."
        );
      });
  };
  return (
    <div className="regcontainer font-philosopher">
      <PageTitle title="Tastyc-Register"></PageTitle>
      <Navber></Navber>
      <div className="min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold text-gray-200">Register now !</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-[#000000b9]">
            <div className="text-center m-3">
              {registerError && (
                <span className="text-lg font-semibold text-red-600">
                  {registerError}
                </span>
              )}
            </div>
            <form onSubmit={handleRegisterForm} className="p-5">
              <div className="lg:flex items-center gap-5">
                <div className="form-control">
                  <label className="label text-gray-100">
                    <span>User Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered bg-gray-100"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label text-gray-100">
                    <span className="">User image</span>
                  </label>
                  <input
                    type="text"
                    name="imgURL"
                    placeholder="Your image Link"
                    className="input input-bordered bg-gray-100"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label text-gray-100">
                  <span className="">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered bg-gray-100"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label text-gray-100">
                  <span className="">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered relative "
                  required
                />
                <span
                  className="absolute right-10 bottom-[150px] text-2xl "
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiFillEye></AiFillEye>
                  ) : (
                    <AiFillEyeInvisible></AiFillEyeInvisible>
                  )}
                </span>
              </div>
              <label>
                <input type="checkbox" name="checkbox" id="" />
                <span className="text-sm font-semibold ml-2 text-gray-100">
                  Agree with our term and condition
                </span>
              </label>
              <div className="form-control mt-6">
                <button className="btn text-black bg-gray-100 text-xl tracking-wider">
                  Register
                </button>
              </div>
              <h1 className="texxt-sm font-semibold text-gray-100">
                Do not have account ?{" "}
                <Link to="/Login" className="underline">
                  Login
                </Link>{" "}
              </h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
