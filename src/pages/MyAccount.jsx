import { useState } from "react";
import { Link } from "react-router-dom";

function MyAccount() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    if (isLogin) {
      console.log("Logging in with:", formData.email);
      alert(`Welcome back! Logging in as ${formData.email}`);
      // Here you'll add real authentication later
    } else {
      console.log("Registering:", formData);
      alert(`Account created for ${formData.name || formData.email}! Please check your email to verify.`);
      // Switch to login after registration
      setIsLogin(true);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center py-20">
      <div className="max-w-md w-full mx-4">
        {/* Form Container */}
        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {isLogin ? "Welcome Back" : "Join the Gallery"}
            </h2>
            <p className="text-gray-400">
              {isLogin 
                ? "Login to access your account and orders" 
                : "Create an account to track orders and commissions"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field - Only for Registration */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white"
                  placeholder="John Doe"
                />
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white"
                placeholder="art@example.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white"
                placeholder="••••••••"
              />
            </div>

            {/* Confirm Password - Only for Registration */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white"
                  placeholder="••••••••"
                />
              </div>
            )}

            {/* Forgot Password Link - Only for Login */}
            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => alert("Password reset would be sent to your email")}
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition mt-6"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>

          {/* Demo Guest Login - Helpful for testing */}
          {isLogin && (
            <div className="mt-4">
              <button
                type="button"
                onClick={() => {
                  setFormData({ ...formData, email: "guest@example.com", password: "guest123" });
                }}
                className="w-full text-sm text-gray-400 hover:text-white transition border border-gray-700 py-2 rounded-lg"
              >
                Try Guest Demo
              </button>
            </div>
          )}

          {/* Toggle between Login and Register */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setFormData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                  });
                }}
                className="ml-2 text-white hover:underline focus:outline-none"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>

          {/* Demo Notice */}
          <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-800">
            <p className="text-xs text-gray-500 text-center">
              🔒 Demo Mode: This is a frontend-only prototype. 
              Authentication will be added when backend is ready.
              <br />
              📝 For demo, any email/password works.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;