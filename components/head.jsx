import { default as NextHead } from 'next/head';
import { useRouter } from 'next/router';

/**
 * Head component.
 * Built on top of Next.js Head component.
 *
 * @param {string} title - page title
 * @param {string} description - page description
 * @param {string} ogImage - open graph image filename
 * @param {boolean} noIndex - whether to index the page
 * @returns {JSX.Element} - rendered component
 */
export const Head = ({ title, description, ogImage = 'og-1260x630.png', noindex = false }) => {
  const router = useRouter();

  const sitename = 'Andrew Shah';
  const domain = `andrewshah.dev`;
  const titleFallback = `Andrew Shah | Software Engineer`;
  const descriptionFallback = `An eternal work in progress.`;

  return (
    <NextHead>
      {/* General */}
      <title>{title ?? titleFallback}</title>
      <meta name='description' content={description ?? descriptionFallback} />

      {/* Open Graph */}
      <meta property='og:site_name' content={sitename} />
      <meta property='og:url' content={`https://${domain}/${router.asPath}`} />
      <meta property='og:title' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={`/${ogImage}`} />

      {/* Icons */}
      <link rel='icon' href='/favicons/favicon.ico' />
      <link rel='apple-touch-icon-precomposed' sizes='57x57' href='apple-touch-icon-57x57.png' />
      <link rel='apple-touch-icon-precomposed' sizes='114x114' href='apple-touch-icon-114x114.png' />
      <link rel='apple-touch-icon-precomposed' sizes='72x72' href='apple-touch-icon-72x72.png' />
      <link rel='apple-touch-icon-precomposed' sizes='144x144' href='apple-touch-icon-144x144.png' />
      <link rel='apple-touch-icon-precomposed' sizes='60x60' href='apple-touch-icon-60x60.png' />
      <link rel='apple-touch-icon-precomposed' sizes='120x120' href='apple-touch-icon-120x120.png' />
      <link rel='apple-touch-icon-precomposed' sizes='76x76' href='apple-touch-icon-76x76.png' />
      <link rel='apple-touch-icon-precomposed' sizes='152x152' href='apple-touch-icon-152x152.png' />
      <link rel='icon' type='image/png' href='favicon-196x196.png' sizes='196x196' />
      <link rel='icon' type='image/png' href='favicon-96x96.png' sizes='96x96' />
      <link rel='icon' type='image/png' href='favicon-32x32.png' sizes='32x32' />
      <link rel='icon' type='image/png' href='favicon-16x16.png' sizes='16x16' />
      <link rel='icon' type='image/png' href='favicon-128.png' sizes='128x128' />
      <meta name='application-name' content='axs' />
      <meta name='msapplication-TileColor' content='#FFFFFF' />
      <meta name='msapplication-TileImage' content='mstile-144x144.png' />
      <meta name='msapplication-square70x70logo' content='mstile-70x70.png' />
      <meta name='msapplication-square150x150logo' content='mstile-150x150.png' />
      <meta name='msapplication-wide310x150logo' content='mstile-310x150.png' />
      <meta name='msapplication-square310x310logo' content='mstile-310x310.png' />

      {/* Other */}
      <meta name='viewport' content='width=device-width,initial-scale=1'></meta>
      <link rel='canonical' href={`https://www.${domain}/${router.asPath}`}></link>

      {/* Index by default, only add noindex if specified */}
      {noindex ? <meta name='robots' content='noindex'></meta> : <meta name='robots' content='follow, index' />}
    </NextHead>
  );
};
