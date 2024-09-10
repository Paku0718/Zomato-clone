import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';

const Login = ({ onClose, onSwitchToSignup }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSendOTP = () => {
    // Implement OTP sending logic here
    console.log('Sending OTP to', phoneNumber);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="tel"
          placeholder="Phone number ..."
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleSendOTP}
          className="w-full bg-gray-400 text-white py-2 rounded mb-4 hover:bg-gray-500"
        >
          Send OTP
        </button>
        <div className="text-center mb-4">or</div>
        <button className="w-full border border-gray-300 py-2 rounded mb-2 flex items-center justify-center">
          <Mail size={20} className="mr-2" />
          Continue with Email
        </button>
        <button className="w-full border border-gray-300 py-2 rounded mb-4 flex items-center justify-center">
          {/* Custom Google icon */}
          <svg viewBox="0 0 24 24" width="20" height="20" className="mr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" fill="#4285F4"/>
          </svg>
          Continue with Google
        </button>
        <p className="text-center">
          New to Zomato?{' '}
          <button onClick={onSwitchToSignup} className="text-red-500 underline">
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
