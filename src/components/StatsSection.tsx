const StatsSection = () => {
  const stats = [
    { value: "8.4T", label: "Monthly Tokens", color: "text-slate-900" },
    { value: "2.5M+", label: "Global Users", color: "text-slate-900" },
    { value: "60+", label: "Active Providers", color: "text-slate-900" },
    { value: "400+", label: "Models", color: "text-blue-600" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
            {stat.value}
          </div>
          <div className="text-slate-600 text-sm">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;