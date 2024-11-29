import React from "react";

const ForestBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-forest-gradient opacity-90" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')] bg-cover bg-center opacity-30" />
    </div>
  );
};

export default ForestBackground;