import { useContext, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useTypewriter } from "react-simple-typewriter";

const LoginPage = () => {
  const [text] = useTypewriter({
    words: ["Free-Ps-BD"],
    loop: true,
  });

  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const { LoginUser, setUser, GoogleLogin } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Free-Ps-BD || Log in";
  }, []);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const Email = e.target.email.value;
    const Password = e.target.password.value;

    LoginUser(Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        setError("Password or Email is invalid..!");
      });
  };

  const handleGoogleLogin = () => {
    GoogleLogin()
      .then((res) => {
        setUser(res.user);
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        setUser(null);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-900 via-black to-gray-900 px-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Welcome Back to <span className="text-green-600">{text}</span>
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm mb-1 font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              ref={emailRef}
              id="email"
              name="email"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter password"
              required
            />
            <button
              onClick={handleShowPassword}
              className="absolute right-3 top-9 text-gray-600"
              aria-label="Toggle password visibility"
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </button>
            <div className="mt-1">
              <Link to="#" className="text-xs text-indigo-500 hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-xs text-center text-red-500 font-semibold">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Log In
          </button>
        </form>

        <div className="divider mt-8">or</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="btn btn-sm w-full rounded-full bg-yellow-400 hover:bg-yellow-500 transition mt-2 flex items-center justify-center gap-2"
        >
          <img
            src="https://img.icons8.com/fluency/50/google-logo.png"
            alt="Google logo"
            className="w-5 h-5"
          />
          Log in With Google
        </button>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/signUp" className="text-indigo-500 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
