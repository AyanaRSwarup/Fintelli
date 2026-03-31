const Loading = () => {
  return (
    <div className="fixed inset-0 transition-all duration-300 bg-secondary z-50 flex flex-col items-center justify-center gap-8">
      
      <div className="text-center">
        <h1 className="text-3xl text-white tracking-tighter">Fintelli</h1>
        <p className="text-primary tracking-widest text-xs mt-1">WEALTH MANAGEMENT</p>
      </div>

      <div className="flex items-end gap-1 h-9">
        {[18, 28, 36, 24, 14].map((h, i) => (
          <div
            key={i}
            className="w-1.5 bg-primary rounded-sm animate-pulse"
            style={{ height: h, animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>

      <p className="text-neutral text-sm tracking-wide">Loading your portfolio...</p>

    </div>
  )
}

export default Loading