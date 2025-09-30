function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050814] via-[#0A0E27] to-[#050814] flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#A855F7] bg-clip-text text-transparent animate-pulse">
          FutureMarketingAI
        </h1>
        <p className="text-xl text-[#94A3B8] max-w-2xl">
          The Autonomous Marketing Machine from the Future
        </p>
        <div className="flex gap-4 justify-center text-[#00FF88] font-mono">
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-4xl font-bold">312h</div>
            <div className="text-sm text-[#94A3B8] mt-2">Time Saved</div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-4xl font-bold">847%</div>
            <div className="text-sm text-[#94A3B8] mt-2">ROI</div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-4xl font-bold">15x</div>
            <div className="text-sm text-[#94A3B8] mt-2">Output</div>
          </div>
        </div>
        <div className="mt-8">
          <button className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#A855F7] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#00D4FF]/50 transition-all duration-300 transform hover:scale-105">
            Explore System →
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
