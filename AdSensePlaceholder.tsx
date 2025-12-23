import React, { useEffect } from 'react';

interface AdSenseProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
}

const AdSensePlaceholder: React.FC<AdSenseProps> = ({ slot, format = 'auto', className = "" }) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div className={`my-8 flex justify-center bg-slate-50 border border-slate-100 rounded-lg p-2 overflow-hidden ${className}`}>
      <div className="w-full text-center">
        <p className="text-[10px] text-slate-300 uppercase tracking-widest mb-1 font-semibold">Anúncio</p>
        <ins className="adsbygoogle"
             style={{ display: 'block', minWidth: '250px', minHeight: '90px' }}
             data-ad-client="ca-pub-3901126634352230"
             data-ad-slot={slot}
             data-ad-format={format}
             data-full-width-responsive="true"></ins>
      </div>
    </div>
  );
};

export default AdSensePlaceholder;