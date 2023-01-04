import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Header from "../../components/Header";

const Login = () => {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userData;

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [email, password]);
  return (
    <Container>
      <div className="h-screen">
        <Header
          topText="Let's login to Proposal Paradise"
          middleText="We will suggest you the best proposals"
        />
        <div className="flex h-full -mt-48 justify-center">
          <div className="m-auto">
            <h1 className="text-3xl font-satisfy font-bold text-orange-600 text-center">
              LOGIN
            </h1>
            <form>
              <div className="flex flex-col mt-8">
                <label className="text-sm font-yanone text-gray-500 ml-4">
                  Email<span className="text-red-400">*</span>
                </label>
                <input
                  className="border border-gray-500 px-4 py-2 w-72 sm:w-96 rounded-full mt-2 placeholder:text-md placeholder:text-gray-300 placeholder:font-pacifico font-mulish text-gray-400 focus:outline-none focus:border-orange-600 focus:ring-orange-600"
                  placeholder="johndoe@gmail.com"
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className="flex flex-col mt-8">
                <label className="text-sm font-yanone text-gray-500 ml-4">
                  Password<span className="text-red-400">*</span>
                </label>
                <input
                  className="border border-gray-500 px-4 py-2 w-72 sm:w-96 rounded-full mt-2 placeholder:text-md placeholder:text-gray-300 placeholder:font-pacifico font-mulish text-gray-400 focus:outline-none focus:border-orange-600 focus:ring-orange-600"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>

              <div className="flex justify-center mt-8">
                <button
                  disabled={!show}
                  className={`${
                    show ? "bg-orange-400 " : "bg-gray-400 "
                  } font-pacifico text-lg px-4 py-2 rounded-lg shadow-lg text-white`}
                >
                  Login
                </button>
              </div>
              <div className="mt-4 text-center font-mulish text-xs text-gray-600">
                Don't you have an account..?{" "}
                <Link className="text-orange-600" to="/createAccount">
                  Join
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
