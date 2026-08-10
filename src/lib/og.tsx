import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

/**
 * Shared Open Graph card. Flat, type-led, one hairline rule — link previews
 * render small, so the title does the work.
 */
export function renderOgCard({
  eyebrow,
  title,
  description,
  footer,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  footer?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#8a8a93',
              marginBottom: 32,
            }}
          >
            {eyebrow}
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: title.length > 60 ? 58 : 70,
              fontWeight: 600,
              color: '#16161a',
              lineHeight: 1.14,
              letterSpacing: -1.5,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>

          {description && (
            <div
              style={{
                display: 'flex',
                fontSize: 28,
                color: '#63636b',
                marginTop: 28,
                lineHeight: 1.45,
                maxWidth: 940,
              }}
            >
              {description.length > 140
                ? `${description.slice(0, 137).replace(/\s+\S*$/, '')}…`
                : description}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', height: 1, width: '100%', backgroundColor: '#e5e5e8' }} />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 24,
            }}
          >
            <div style={{ display: 'flex', fontSize: 26, color: '#16161a', fontWeight: 500 }}>
              Shashank — Software Engineer
            </div>
            {footer && (
              <div style={{ display: 'flex', fontSize: 22, color: '#8a8a93' }}>{footer}</div>
            )}
          </div>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
