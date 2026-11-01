const redirect = `location.replace((navigator.language || '').toLowerCase().startsWith('ja') ? '/ja/' : '/en/')`

export default function LanguageRedirect() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: redirect }} />
      <noscript>
        <meta httpEquiv="refresh" content="0;url=/ja/" />
      </noscript>
      <p>
        <a href="/ja/">日本語</a> / <a href="/en/">English</a>
      </p>
    </>
  )
}
