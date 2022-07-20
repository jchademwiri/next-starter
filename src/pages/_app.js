import { DefaultSeo } from 'next-seo';
import '../styles/globals.scss';
import Layout from '../components/Layout';
import Router from 'next/router';
import '../styles/nprogress.scss';
import nProgress from 'nprogress';
import Script from 'next/script';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script
				id='ga-mesurement-id'
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<Script id='ga-mesurement-code' strategy='lazyOnload'>
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
			</Script>
			<DefaultSeo
				titleTemplate='King Tax Accounting Services | %s'
				title='Tax Returns and Accounting Services'
				description={`King Tax Accounting is based in Centurion, Johannesburg. The company directors have more than 20 years combined experience. We provide  everything you need to start an official company.`}
				openGraph={{
					title: 'Tax Returns and Accounting Services',
					description: `King Tax Accounting is based in Centurion, Johannesburg. The company directors have more than 20 years combined experience. We provide  everything you need to start an official company.`,
					type: 'website',
					locale: 'en_US',
					site_name: 'King Tax Accounting Services',
					images: [
						{
							url: `https://jacobc.co.za/social.jpg`,
							width: 1200,
							height: 600,
							alt: 'Tax Returns and Accounting Services',
						},
					],
				}}
				twitter={{
					site: '@jchademwiri',
					cardType: 'summary_large_image',
				}}
			/>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
