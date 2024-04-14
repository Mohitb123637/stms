import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../../store/auth/authActions';

const Login = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [loginInProgress, setLoginInProgress] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef('');
  const passwordRef = useRef('');

  console.log(loading);
  useEffect(() => {
    if (user) {
      navigate('/', { successLogin: true });
    }
  }, [navigate, user]);

  const signinUser = async (e) => {
    e.preventDefault();
    setLoginInProgress(true);
    dispatch(
      loginUser({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    )
      .unwrap()
      .catch((errorData) => {
        console.log(errorData);
        setWrongPassword(true);
        setLoginInProgress(false);
      });
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="bg-gray-300 h-3/5 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back!
        </h2>
        <form onSubmit={signinUser} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-lg">
              Email
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              className="form-input w-full mt-1 px-4 py-2 rounded border-gray-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 text-lg">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              className="form-input w-full mt-1 px-4 py-2 rounded border-gray-400"
              placeholder="Enter your password"
            />
          </div>
          {wrongPassword && (
            <p className="text-red-500 text-sm">Invalid email or password.</p>
          )}
          <button
            type="submit"
            className="w-full bg-gray-800 text-lg text-white py-2 px-4 rounded hover:bg-black transition duration-300"
            disabled={loginInProgress}
          >
            {loginInProgress ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700">
            Do not have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
