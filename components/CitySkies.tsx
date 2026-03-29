import React from 'react'

export function CitySkies() {
  return (
    <div className="relative w-full h-32 bg-gradient-to-b from-comic-blue to-comic-yellow overflow-hidden">
      {/* Buildings */}
      <svg viewBox="0 0 1200 200" className="w-full h-full absolute bottom-0" preserveAspectRatio="xMidYMid slice">
        {/* Building 1 */}
        <rect x="0" y="80" width="150" height="120" fill="#1a1a1a" />
        <rect x="10" y="90" width="30" height="30" fill="#FFF000" />
        <rect x="50" y="90" width="30" height="30" fill="#1a1a1a" />
        <rect x="90" y="90" width="30" height="30" fill="#FFF000" />
        <rect x="10" y="130" width="30" height="30" fill="#1a1a1a" />
        <rect x="50" y="130" width="30" height="30" fill="#FFF000" />
        <rect x="90" y="130" width="30" height="30" fill="#1a1a1a" />
        
        {/* Building 2 */}
        <rect x="160" y="60" width="120" height="140" fill="#0066FF" />
        <rect x="170" y="70" width="25" height="25" fill="#FFF000" />
        <rect x="210" y="70" width="25" height="25" fill="#FFF000" />
        <rect x="170" y="110" width="25" height="25" fill="#1a1a1a" />
        <rect x="210" y="110" width="25" height="25" fill="#FFF000" />
        <rect x="170" y="150" width="25" height="25" fill="#FFF000" />
        <rect x="210" y="150" width="25" height="25" fill="#1a1a1a" />
        
        {/* Building 3 */}
        <rect x="300" y="100" width="100" height="100" fill="#FF0000" />
        <rect x="310" y="110" width="20" height="20" fill="#FFF000" />
        <rect x="340" y="110" width="20" height="20" fill="#FFF000" />
        <rect x="370" y="110" width="20" height="20" fill="#1a1a1a" />
        <rect x="310" y="145" width="20" height="20" fill="#1a1a1a" />
        <rect x="340" y="145" width="20" height="20" fill="#FFF000" />
        <rect x="370" y="145" width="20" height="20" fill="#FFF000" />
        
        {/* Building 4 */}
        <rect x="420" y="70" width="130" height="130" fill="#1a1a1a" />
        <rect x="435" y="85" width="25" height="25" fill="#FFF000" />
        <rect x="475" y="85" width="25" height="25" fill="#1a1a1a" />
        <rect x="515" y="85" width="25" height="25" fill="#FFF000" />
        <rect x="435" y="130" width="25" height="25" fill="#FFF000" />
        <rect x="475" y="130" width="25" height="25" fill="#FFF000" />
        <rect x="515" y="130" width="25" height="25" fill="#1a1a1a" />
        
        {/* Building 5 */}
        <rect x="570" y="90" width="110" height="110" fill="#0066FF" />
        <rect x="585" y="105" width="22" height="22" fill="#1a1a1a" />
        <rect x="625" y="105" width="22" height="22" fill="#FFF000" />
        <rect x="585" y="150" width="22" height="22" fill="#FFF000" />
        <rect x="625" y="150" width="22" height="22" fill="#1a1a1a" />
        
        {/* Building 6 */}
        <rect x="700" y="50" width="140" height="150" fill="#FF0000" />
        <rect x="715" y="65" width="28" height="28" fill="#FFF000" />
        <rect x="760" y="65" width="28" height="28" fill="#1a1a1a" />
        <rect x="715" y="115" width="28" height="28" fill="#FFF000" />
        <rect x="760" y="115" width="28" height="28" fill="#FFF000" />
        <rect x="715" y="165" width="28" height="28" fill="#1a1a1a" />
        
        {/* Building 7 */}
        <rect x="860" y="80" width="120" height="120" fill="#1a1a1a" />
        <rect x="875" y="95" width="24" height="24" fill="#FFF000" />
        <rect x="920" y="95" width="24" height="24" fill="#FFF000" />
        <rect x="875" y="140" width="24" height="24" fill="#1a1a1a" />
        <rect x="920" y="140" width="24" height="24" fill="#FFF000" />
        
        {/* Building 8 */}
        <rect x="1000" y="70" width="100" height="130" fill="#0066FF" />
        <rect x="1015" y="85" width="20" height="20" fill="#FFF000" />
        <rect x="1050" y="85" width="20" height="20" fill="#1a1a1a" />
        <rect x="1015" y="130" width="20" height="20" fill="#FFF000" />
        <rect x="1050" y="130" width="20" height="20" fill="#FFF000" />
        
        {/* Horizon line */}
        <line x1="0" y1="80" x2="1200" y2="80" stroke="#1a1a1a" strokeWidth="3" />
      </svg>
    </div>
  )
}
