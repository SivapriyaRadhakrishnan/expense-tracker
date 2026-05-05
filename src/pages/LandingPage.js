import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../utils/auth';
import { FiShield, FiXCircle, FiCheckCircle, FiTarget, FiTrendingUp, FiActivity, FiAlertTriangle } from 'react-icons/fi';
import { TbChartPie, TbSparkles } from 'react-icons/tb';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
    {
        title: 'Instant budget clarity',
        description: 'Track every expense and income item with clean cards and smart totals.',
        icon: <TbChartPie className="h-6 w-6" />,
    },
    {
        title: 'Secure local auth',
        description: 'Sign in quickly and keep your session in the browser, no server needed.',
        icon: <FiShield className="h-6 w-6" />,
    },
    {
        title: 'Modern workflow',
        description: 'Fast route transitions, subtle motion, and premium dashboard polish.',
        icon: <TbSparkles className="h-6 w-6" />,
    },
];

const LandingPage = () => {
    const navigate = useNavigate();
    const currentUser = getCurrentUser();

    const handleCta = () => {
        if (currentUser) {
            navigate('/dashboard');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.16),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.15),_transparent_20%),linear-gradient(180deg,_#fcfaf4_0%,_#f7f0e8_100%)] text-slate-900">
            <Navbar isLanding />
            <main className="mx-auto max-w-7xl px-6 lg:px-8">
                <section className="min-h-[85vh] grid lg:grid-cols-2 items-center gap-10">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10 max-w-2xl"
                    >
                        <div className="space-y-6">
                            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl leading-tight">
                                Smart finance tracking made simple
                            </h1>

                            <p className="text-lg leading-8 text-slate-600">
                                Experience the future of personal finance with gamified tracking, real-time insights, and beautiful design that makes managing money enjoyable.      </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <button
                                onClick={handleCta}
                                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-slate-800"
                            >
                                Get Started
                            </button>

                            <button
                                onClick={() => navigate('/signup')}
                                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-900 transition hover:border-slate-500 hover:bg-slate-50"
                            >
                                Create account
                            </button>
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENt */}
                    <div className="relative hidden lg:flex items-center justify-center">

                        {/* Floating background blob */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl"
                        />

                        {/* Expense illustration card */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative h-[420px] w-[850px] sm:h-[380px] sm:w-[380px] lg:h-[460px] lg:w-[460px] overflow-hidden rounded-[40px] border border-slate-200 bg-slate-950/10 shadow-xl shadow-slate-950/10"
                        >
                            <img
                                src="/expense-tracker.webp"
                                alt="Expense tracking illustration"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-transparent" />
                        </motion.div>

                    </div>

                </section>
                <section className="mt-20 grid gap-8 lg:grid-cols-3">
                    {features.map((feature) => (
                        <motion.article
                            key={feature.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-[28px] border border-slate-200 bg-white/95 p-7 shadow-soft"
                        >
                            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
                                {feature.icon}
                            </div>
                            <h2 className="text-xl font-semibold text-slate-950">{feature.title}</h2>
                            <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
                        </motion.article>
                    ))}
                </section>
                <section className="mt-32">
                    <h2 className="text-3xl font-semibold text-center text-slate-900 mb-12">
                        The Problem vs The Solution
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-10">

                        {/* PROBLEMS */}
                        <div>
                            <h3 className="text-xl font-semibold text-red-500 mb-6 flex items-center gap-2">
                                <FiXCircle /> Common Problems
                            </h3>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Inconsistent Expense Tracking",
                                        desc: "People start tracking but give up after a few days due to boring interfaces",
                                    },
                                    {
                                        title: "Lack of Engagement",
                                        desc: "Traditional apps feel like chores, not habits you enjoy building",
                                    },
                                    {
                                        title: "Confusing Budget Insights",
                                        desc: "Complex charts and graphs that don't tell you what you need to know",
                                    },
                                ].map((item) => (
                                    <div className="rounded-2xl border-l-4 border-red-400 bg-red-50 p-5">
                                        <h4 className="font-semibold text-red-600">{item.title}</h4>
                                        <p className="text-sm text-red-500 mt-2">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SOLUTIONS */}
                        <div>
                            <h3 className="text-xl font-semibold text-green-600 mb-6 flex items-center gap-2">
                                <FiCheckCircle /> FlowFi Solutions
                            </h3>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Gamified Habit Tracking",
                                        desc: "Level up as you track expenses, earn streaks, and get rewarded for consistency",
                                    },
                                    {
                                        title: "Clean, Intuitive Dashboard",
                                        desc: "Beautiful cards that make finance feel approachable and simple",
                                    },
                                    {
                                        title: "Real-Time Smart Insights",
                                        desc: "Instant alerts and indicators that guide your spending decisions",
                                    },
                                ].map((item) => (
                                    <div className="rounded-2xl border-l-4 border-green-400 bg-green-50 p-5">
                                        <h4 className="font-semibold text-green-700">{item.title}</h4>
                                        <p className="text-sm text-green-600 mt-2">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>
                <section className="mt-32 text-center">
                    <h2 className="text-3xl font-semibold text-slate-900 mb-12">
                        The Core Idea Behind FlowFi
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Simplicity First",
                                desc: "Finance tracking should be as simple as checking your phone. No complexity.",
                                icon: <FiTarget />,
                            },
                            {
                                title: "Motivation Through Gamification",
                                desc: "Turn boring tasks into engaging experiences with levels and streaks.",
                                icon: <FiTrendingUp />,
                            },
                            {
                                title: "Habit Building",
                                desc: "Small consistent actions build strong financial discipline.",
                                icon: <FiActivity />,
                            },
                        ].map((item) => (
                            <div className="rounded-3xl bg-white/90 p-8 shadow-soft">
                                <div className="mb-4 text-2xl text-indigo-500 flex justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                                <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="mt-32 text-center mb-5">
                    <h2 className="text-3xl font-semibold text-slate-900 mb-12">
                        Who Uses FlowFi?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah Chen",
                                role: "Marketing Manager",
                                goals: "Save money and track expenses",
                                challenges: "Forgets to log expenses",
                            },
                            {
                                name: "Marcus Rodriguez",
                                role: "Freelance Developer",
                                goals: "Manage irregular income",
                                challenges: "Budget inconsistency",
                            },
                            {
                                name: "Emma Thompson",
                                role: "Student",
                                goals: "Stay within budget",
                                challenges: "Limited income",
                            },
                        ].map((user) => (
                            <div className="rounded-3xl bg-white/90 p-8 shadow-soft text-left">
                                <h3 className="font-semibold text-lg">{user.name}</h3>
                                <p className="text-sm text-slate-500 mb-4">{user.role}</p>

                                <div className="mb-3 flex items-center gap-2 text-green-600 text-sm">
                                    <FiTarget /> Goals
                                </div>
                                <p className="text-sm text-slate-600 mb-3">{user.goals}</p>

                                <div className="flex items-center gap-2 text-red-500 text-sm">
                                    <FiAlertTriangle /> Challenges
                                </div>
                                <p className="text-sm text-slate-600">{user.challenges}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
            </main>
            <Footer/>
        </div>
    );
};

export default LandingPage;
