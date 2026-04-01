import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'SKYNEX DIGITAL — AI Search Visibility & Data-Driven Growth';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#09090f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          color: 'white',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Subtle gradient accent */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        <div style={{ fontSize: '24px', fontWeight: 600, color: '#3b82f6', letterSpacing: '3px', marginBottom: '24px' }}>
          SKYNEX DIGITAL
        </div>
        <div style={{ fontSize: '56px', fontWeight: 'bold', lineHeight: 1.15, maxWidth: '900px' }}>
          AI Search Visibility
        </div>
        <div style={{ fontSize: '56px', fontWeight: 'bold', lineHeight: 1.15, color: '#71717a' }}>
          & Data-Driven Growth
        </div>
        <div style={{ fontSize: '22px', marginTop: '32px', color: '#71717a', maxWidth: '700px' }}>
          GEO · SEO · Growth Automation · Data Analytics
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
