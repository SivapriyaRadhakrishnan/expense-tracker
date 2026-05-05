import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authenticateUser, getCurrentUser } from '../utils/auth';
import Navbar from '../components/Navbar';
import { FiLogIn } from 'react-icons/fi';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (getCurrentUser()) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = authenticateUser(email, password);
    if (!result.success) {
      setError(result.message);
      return;
    }
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <main className="mx-auto flex min-h-[calc(100vh-72px)] items-center justify-center px-6 py-12 lg:px-8">
        <div className="w-full max-w-2xl space-y-8 rounded-[32px] border border-white/10 bg-slate-950/95 p-8 shadow-2xl shadow-slate-950/25 ring-1 ring-white/10 backdrop-blur-xl sm:p-10">
          <div className="space-y-4 text-center">
            <div className="inline-flex rounded-full bg-indigo-500/10 px-3 py-1 text-xs uppercase tracking-[0.32em] text-indigo-200">
               Welcome back
            </div>
          
             <h1 className="text-3xl font-semibold text-white sm:text-4xl">Login Here</h1>
            
            
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="rounded-3xl border border-rose-500/40 bg-rose-500/10 px-5 py-4 text-sm text-rose-100">
                {error}
              </div>
            )}
            <label className="block text-sm font-semibold text-slate-200">
              Email address
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                placeholder="you@mail.com"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-200">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                placeholder="Enter your password"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5"
            >
              <FiLogIn className="h-5 w-5" />
              Sign in
            </button>
          </form>

          <p className="text-center text-sm text-slate-400">
            New to FlowFi?{' '}
            <Link to="/signup" className="font-semibold text-white transition hover:text-indigo-300">
              Create an account
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
