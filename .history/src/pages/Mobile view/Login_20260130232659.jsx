import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    emailOrPhone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!form.emailOrPhone || !form.password) {
      return setError("Please enter Email/Phone and Password");
    }

    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    // TODO: API call (axios)
    console.log("Login Data:", form);

    alert("Login Successful ✅");

    navigate("/"); // go to home after login
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <h1 className="text-3xl font-bold text-yellow-500">
            Ama<span className="text-black">zon</span>
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-4">Sign in</h2>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-3 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email or Phone */}
          <div>
            <label className="text-sm font-medium">Email or mobile phone number</label>
            <input
              type="text"
              name="emailOrPhone"
              placeholder="Enter email or phone"
              value={form.emailOrPhone}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Password</label>
              <span className="text-xs text-blue-600 cursor-pointer hover:underline">
                Forgot password?
              </span>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-sm text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition"
          >
            Sign in
          </button>
        </form>

        {/* Terms */}
        <p className="text-xs text-gray-600 mt-4">
          By continuing, you agree to Amazon's{" "}
          <span className="text-blue-600 cursor-pointer">Conditions of Use</span>{" "}
          and{" "}
          <span className="text-blue-600 cursor-pointer">Privacy Notice</span>.
        </p>

        {/* Divider */}
        <div className="flex items-center gap-2 my-4">
          <div className="h-px bg-gray-300 flex-1"></div>
          <span className="text-xs text-gray-500">New to Amazon?</span>
          <div className="h-px bg-gray-300 flex-1"></div>
        </div>

        {/* Create account */}
        <Link
          to="/User Register"
          className="block w-full text-center border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
        >
          Create your Amazon account
        </Link>
      </div>
    </div>
  );
};

export default Login;
