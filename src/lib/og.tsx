import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

/**
 * Shared Open Graph card. Kept deliberately text-first: link previews are
 * rendered small, so the title has to carry the whole thing.
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
          background: 'linear-gradient(135deg, #070915 0%, #131233 55%, #1b1140 100%)',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1200px',
            height: '8px',
            background: 'linear-gradient(90deg, #6366f1, #a855f7 55%, #2dd4bf)',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#818cf8',
              marginBottom: 28,
            }}
          >
            {eyebrow}
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: title.length > 60 ? 60 : 74,
              fontWeight: 700,
              color: '#eaecf7',
              lineHeight: 1.12,
              letterSpacing: -1.5,
              maxWidth: 1020,
            }}
          >
            {title}
          </div>

          {description && (
            <div
              style={{
                display: 'flex',
                fontSize: 30,
                color: '#9aa3c4',
                marginTop: 28,
                lineHeight: 1.4,
                maxWidth: 980,
              }}
            >
              {description.length > 150
                ? `${description.slice(0, 147).replace(/\s+\S*$/, '')}…`
                : description}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 56,
                height: 56,
                borderRadius: 14,
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                color: '#ffffff',
                fontSize: 30,
                fontWeight: 700,
                marginRight: 20,
              }}
            >
              S
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', fontSize: 30, color: '#eaecf7', fontWeight: 600 }}>
                Shashank
              </div>
              <div style={{ display: 'flex', fontSize: 22, color: '#7c85a8' }}>
                Software Engineer · Bengaluru
              </div>
            </div>
          </div>

          {footer && (
            <div style={{ display: 'flex', fontSize: 22, color: '#7c85a8' }}>{footer}</div>
          )}
        </div>
      </div>
    ),
    OG_SIZE
  );
}
