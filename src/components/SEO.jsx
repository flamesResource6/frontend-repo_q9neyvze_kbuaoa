export default function SEO() {
  return (
    <>
      <title>DigitalMol — Дигитална агенция: SEO, PPC, Уеб Дизайн</title>
      <meta name="description" content="DigitalMol е креативна дигитална агенция, която изгражда печеливши SEO стратегии, управлява Google и Meta Ads кампании и разработва бързи, SEO-оптимизирани уеб сайтове." />
      <meta name="keywords" content="дигитална агенция, seo, ppc, google ads, meta ads, уеб дизайн, разработка, brand identity, копирайтинг" />
      <link rel="canonical" href="/" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="DigitalMol — Дигитална агенция: SEO, PPC, Уеб Дизайн" />
      <meta property="og:description" content="Изграждаме стратегии за растеж: SEO, реклама и уеб разработка." />
      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:url" content="/" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="DigitalMol — Дигитална агенция" />
      <meta name="twitter:description" content="SEO, PPC и уеб дизайн за бърз растеж." />
      <meta name="twitter:image" content="/og-image.jpg" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'DigitalMol',
        url: '/',
        logo: '/favicon.svg',
        sameAs: [
          'https://facebook.com/',
          'https://instagram.com/',
          'https://www.linkedin.com/'
        ],
        contactPoint: [{
          '@type': 'ContactPoint',
          telephone: '+359000000000',
          contactType: 'customer service',
          areaServed: 'BG',
          availableLanguage: ['Bulgarian','English']
        }],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '128'
        }
      }) }} />
    </>
  )
}
