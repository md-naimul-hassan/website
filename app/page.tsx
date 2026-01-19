import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/20 blur-[120px] animate-pulse-slow"></div>
      </div>

      <div className="z-10 flex flex-col items-center text-center max-w-4xl space-y-8">
        <div className="glass-card px-4 py-2 rounded-full text-sm text-gray-300 mb-4 animate-float">
          ✨ Redefining the Web Experience
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          Build the <span className="text-gradient">Future</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Today
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Experience the next generation of web design.
          Performance, aesthetics, and usability combined into one seamless package.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Get Started
          </button>
          <button className="px-8 py-4 rounded-full glass-card text-white font-semibold hover:bg-white/10 transition-colors border border-white/20">
            Explore Features
          </button>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 max-w-6xl w-full px-4">
        {[
          { title: "Modern Stack", desc: "Built with Next.js 15, React 19, and Tailwind CSS v4." },
          { title: "Performance First", desc: "Optimized for speed with server components and edge rendering." },
          { title: "Premium Design", desc: "Glassmorphism, gradients, and smooth animations out of the box." },
        ].map((feature, i) => (
          <div key={i} className="glass-card p-8 rounded-2xl hover:border-purple-500/50 transition-colors duration-300">
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
