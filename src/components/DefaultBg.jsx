const DefaultBg = ({ children, top = 32 }) => {
  return (
    <div className="h-screen overflow-hidden relative bg-[#050508] w-full">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -left-20 -top-${top} h-130 w-130 rounded-full bg-violet-600 opacity-[0.15] blur-[90px]`}
        />
        <div className="absolute -right-24 top-16 h-100 w-100 rounded-full bg-cyan-500 opacity-[0.14] blur-[80px]" />
        <div className="absolute bottom-20 left-1/2 h-75 w-75 -translate-x-1/2 rounded-full bg-purple-600 opacity-[0.1] blur-[80px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {children}
    </div>
  );
};

export default DefaultBg;
