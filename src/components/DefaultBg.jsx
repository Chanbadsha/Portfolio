const DefaultBg = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#050508]">
      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0">
        <div
          className="absolute -left-20 rounded-full bg-violet-600 opacity-10 blur-[100px]"
          style={{
            top: 12,
            width: "32rem",
            height: "32rem",
          }}
        />

        <div
          className="absolute -right-24 top-16 rounded-full bg-cyan-500 opacity-10 blur-[90px]"
          style={{
            width: "28rem",
            height: "28rem",
          }}
        />

        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 opacity-10 blur-[90px]"
          style={{
            width: "24rem",
            height: "24rem",
          }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default DefaultBg;
