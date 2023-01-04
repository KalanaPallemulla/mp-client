import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Header from "../../components/Header";

const CreateAccount = () => {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    gender: "male",
  });
  const { email, password, name, age, gender } = userData;

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (
      email.length > 0 &&
      password.length > 0 &&
      name.length > 0 &&
      age.length > 0 &&
      gender.length > 0 &&
      confirmPassword.length > 0
    ) {
      if (password === confirmPassword) {
        setShow(true);
        setPasswordError("");
      } else {
        setShow(false);
        setPasswordError("Passwords don't match");
      }
    } else {
      setShow(false);
    }
  }, [email, password, name, age, confirmPassword, gender]);
  return (
    <Container>
      <div className="h-screen">
        <Header
          topText="Let's join to Proposal Paradise"
          middleText="We will suggest you the best proposals"
        />
        <div className="flex h-full -mt-24 justify-center">
          <div className="m-auto">
            <h1 className="text-3xl font-satisfy font-bold text-orange-600 text-center">
              Join
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
                  Name<span className="text-red-400">*</span>
                </label>
                <input
                  className="border border-gray-500 px-4 py-2 w-72 sm:w-96 rounded-full mt-2 placeholder:text-md placeholder:text-gray-300 placeholder:font-pacifico font-mulish text-gray-400 focus:outline-none focus:border-orange-600 focus:ring-orange-600"
                  placeholder="John Doe"
                  type="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className="flex flex-col mt-8">
                <label className="text-sm font-yanone text-gray-500 ml-4">
                  Age<span className="text-red-400">*</span>
                </label>
                <input
                  className="border border-gray-500 px-4 py-2 w-72 sm:w-96 rounded-full mt-2 placeholder:text-md placeholder:text-gray-300 placeholder:font-pacifico font-mulish text-gray-400 focus:outline-none focus:border-orange-600 focus:ring-orange-600"
                  placeholder="18"
                  type="number"
                  name="age"
                  value={age}
                  onChange={onChange}
                />
              </div>
              <div className="flex flex-col mt-8">
                <label className="text-sm font-yanone text-gray-500 ml-4">
                  Gender<span className="text-red-400">*</span>
                </label>
                <select
                  className="border border-gray-500 px-4 py-2 w-72 sm:w-96 rounded-full mt-2 placeholder:text-md placeholder:text-gray-300 placeholder:font-pacifico font-mulish text-gray-400 focus:outline-none focus:border-orange-600 focus:ring-orange-600"
                  placeholder="18"
                  name="gender"
                  value={gender}
                  onChange={onChange}
                >
                  <option value={"Male"}>Male</option>
                  <option value={"Female"}>Female</option>
                </select>
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
              <div className="flex flex-col mt-8">
                <label className="text-sm font-yanone text-gray-500 ml-4">
                  Confirm Password<span className="text-red-400">*</span>
                </label>
                <input
                  className="border border-gray-500 px-4 py-2 w-72 sm:w-96 rounded-full mt-2 placeholder:text-md placeholder:text-gray-300 placeholder:font-pacifico font-mulish text-gray-400 focus:outline-none focus:border-orange-600 focus:ring-orange-600"
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="text-red-600 text-xs font-mulish  h-6 flex items-center ml-4">
                {passwordError}
              </div>

              <div className="flex justify-center mt-6">
                <button
                  disabled={!show}
                  className={`${
                    show ? "bg-orange-400 " : "bg-gray-400 "
                  } font-pacifico text-lg px-4 py-2 rounded-lg shadow-lg text-white`}
                >
                  Create Account
                </button>
              </div>
              <div className="mt-4 text-center font-mulish text-xs text-gray-600">
                Do you have an account..?{" "}
                <Link className="text-orange-600" to="/join">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreateAccount;
