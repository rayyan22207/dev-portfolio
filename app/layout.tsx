import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Rayyan Aqil – Full-Stack Developer',
	description:
		'Welcome to my portfolio! I’m a backend-focused full-stack developer with 3+ years of experience building production-ready systems with Django, Firebase, and APIs.',
	keywords: [
		'Rayyan Aqil',
		'Full-Stack Developer',
		'Django Developer',
		'Backend Engineer',
		'Software Developer',
		'Firebase',
		'REST APIs',
		'Portfolio',
	],
	authors: [{ name: 'Rayyan Aqil' }],
	creator: 'Rayyan Aqil',
	openGraph: {
		title: 'Rayyan Aqil – Full-Stack Developer Portfolio',
		description:
			'Explore Rayyan’s backend-heavy portfolio of production-ready web systems, real-time apps, and scalable infrastructure.',
		url: 'https://rayyan.vercel.app',
		siteName: 'Rayyan Aqil – Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Rayyan Aqil Portfolio Preview',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Rayyan Aqil – Full-Stack Developer',
		description:
			'Explore Rayyan’s backend-heavy portfolio of production-ready web systems, real-time apps, and scalable infrastructure.',
		creator: '@rayyancodez', // or remove if none
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
