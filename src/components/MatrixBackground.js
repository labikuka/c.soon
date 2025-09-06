import React from 'react';

const MatrixBackground = () => {
  return (
    <div className="matrix-bg">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23000000;stop-opacity:1" /><stop offset="50%" style="stop-color:%23111111;stop-opacity:1" /><stop offset="100%" style="stop-color:%23000000;stop-opacity:1" /></linearGradient><pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse"><path d="M10,10 L110,10 L110,110 L10,110 Z" fill="none" stroke="%2300ff41" stroke-width="2" opacity="0.6"/><circle cx="60" cy="60" r="6" fill="%2300ff41" opacity="0.8"/><path d="M10,60 L30,60 M90,60 L110,60 M60,10 L60,30 M60,90 L60,110" stroke="%2300ff41" stroke-width="1" opacity="0.5"/><path d="M30,30 L90,30 L90,90 L30,90 Z" fill="none" stroke="%2300ff41" stroke-width="1" opacity="0.3"/></pattern><pattern id="hex" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M40,5 L60,15 L60,35 L40,45 L20,35 L20,15 Z" fill="none" stroke="%2300ff41" stroke-width="1" opacity="0.4"/></pattern></defs><rect width="100%" height="100%" fill="url(%23bg)"/><rect width="100%" height="100%" fill="url(%23circuit)"/><rect width="100%" height="100%" fill="url(%23hex)"/><g opacity="0.5"><path d="M100,200 Q300,150 500,200 T900,200" stroke="%2300ff41" stroke-width="3" fill="none"/><path d="M100,400 Q300,350 500,400 T900,400" stroke="%2300ff41" stroke-width="3" fill="none"/><path d="M100,600 Q300,550 500,600 T900,600" stroke="%2300ff41" stroke-width="3" fill="none"/><path d="M100,800 Q300,750 500,800 T900,800" stroke="%2300ff41" stroke-width="3" fill="none"/></g><g opacity="0.4"><circle cx="200" cy="200" r="80" fill="none" stroke="%2300ff41" stroke-width="2"/><circle cx="1600" cy="300" r="100" fill="none" stroke="%2300ff41" stroke-width="2"/><circle cx="800" cy="700" r="90" fill="none" stroke="%2300ff41" stroke-width="2"/><circle cx="1400" cy="800" r="70" fill="none" stroke="%2300ff41" stroke-width="2"/></g><g opacity="0.3"><text x="960" y="150" text-anchor="middle" font-family="monospace" font-size="48" fill="%2300ff41">CYBERSECURITY</text><text x="960" y="200" text-anchor="middle" font-family="monospace" font-size="36" fill="%2300ff41">ETHICAL HACKING</text><text x="960" y="900" text-anchor="middle" font-family="monospace" font-size="28" fill="%2300ff41">CERTIFIED ETHICAL HACKER</text></g></svg>')`
        }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-black/70 to-gray-800/60"></div>
      
      {/* Matrix-style grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Subtle circuit patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M20,20 L180,20 L180,180 L20,180 Z" stroke="#00ff41" strokeWidth="1" fill="none" opacity="0.3"/>
              <circle cx="100" cy="100" r="3" fill="#00ff41" opacity="0.4"/>
              <path d="M20,100 L40,100 M160,100 L180,100 M100,20 L100,40 M100,160 L100,180" stroke="#00ff41" strokeWidth="1" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>
      
      {/* Minimal floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-500 rounded-full opacity-40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5"></div>
    </div>
  );
};

export default MatrixBackground;
