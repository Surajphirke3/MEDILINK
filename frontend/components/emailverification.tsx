"use client";
// pages/email-verify.tsx
import { useState } from "react";
import { requestEmailVerification, submitEmailOTP } from "../lib/api";

export default function EmailVerify() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  const handleRequestOTP = async () => {
    try {
      setLoading(true);
      setMessage("");
      setError("");

      if (!token) throw new Error("Access token missing");

      const res = await requestEmailVerification(token);
      setMessage(res.message);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitOTP = async () => {
    try {
      setLoading(true);
      setMessage("");
      setError("");

      if (!token) throw new Error("Access token missing");

      const res = await submitEmailOTP(token, otp);
      setMessage(res.message);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Verify your Email</h2>

        <button
          onClick={handleRequestOTP}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Sending OTP..." : "Send OTP to Email"}
        </button>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-4"
        />

        <button
          onClick={handleSubmitOTP}
          className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        {message && <p className="text-green-600 mt-4">{message}</p>}
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
    </div>
  );
}
