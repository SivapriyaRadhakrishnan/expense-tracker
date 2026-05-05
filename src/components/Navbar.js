import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut, FiShield } from 'react-icons/fi';
import { clearCurrentUser, getCurrentUser } from '../utils/auth';

const Navbar = ({ isLanding = false, onLogout }) => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const handleLogout = () => {
    if (typeof onLogout === 'function') {
      onLogout();
      return;
    }
    clearCurrentUser();
    navigate('/login');
  };

  return (
    <header className={`sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl ${isLanding ? '' : ''}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-3 text-xl font-semibold text-slate-950">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
            <FiShield className="h-5 w-5" />
          </span>
          FlowFi
        </Link>

        <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
          <Link to="/" className="hidden rounded-full px-4 py-3 transition hover:bg-slate-100 sm:inline-flex">
            Home
          </Link>
          {!currentUser && (
            <>
              <Link to="/login" className="rounded-full px-4 py-3 transition hover:bg-slate-100">
                Login
              </Link>
              <Link to="/signup" className="rounded-full bg-slate-950 px-4 py-3 text-white transition hover:bg-slate-800">
                Sign up
              </Link>
            </>
          )}
          {currentUser && (
            <>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="rounded-full px-4 py-3 transition hover:bg-slate-100"
              >
                Dashboard
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-white transition hover:bg-slate-800"
              >
                <FiLogOut className="h-4 w-4" />
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
