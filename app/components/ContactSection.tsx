'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-4xl mx-auto text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="space-y-8"
				>
					<h2 className="text-3xl font-bold">Let&apos;s Build Something Amazing</h2>
					<p className="text-gray-400 max-w-2xl mx-auto">
						Looking for a full-stack developer who can architect and implement complete solutions? Let&apos;s discuss your project.
					</p>

					{/* Location */}
					<div className="flex items-center justify-center gap-2 text-gray-400">
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<span>Karachi, Pakistan</span>
					</div>

					{/* Contact Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<a
							href="mailto:rayyan22207@gmail.com"
							className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
							Get in Touch
						</a>
						<a
							href="/resume.pdf"
							target="_blank"
							className="px-8 py-3 bg-black border border-gray-800 rounded-lg font-medium hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
									clipRule="evenodd"
								/>
								<path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
							</svg>
							View Resume
						</a>
					</div>

					{/* Social Links */}
					<div className="flex justify-center gap-6">
						<a
							href="https://github.com/rayyan22207/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
						<a
							href="https://www.linkedin.com/in/rayyan-aqil-4a1a95195/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
						</a>
						<a
							href="https://www.instagram.com/rayyan.developer/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.96.246 2.41.418a4.92 4.92 0 011.755 1.013 4.92 4.92 0 011.013 1.755c.172.45.362 1.24.418 2.41.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.246 1.96-.418 2.41a4.92 4.92 0 01-1.013 1.755 4.92 4.92 0 01-1.755 1.013c-.45.172-1.24.362-2.41.418-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.246-2.41-.418a4.92 4.92 0 01-1.755-1.013 4.92 4.92 0 01-1.013-1.755c-.172-.45-.362-1.24-.418-2.41C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.246-1.96.418-2.41a4.92 4.92 0 011.013-1.755 4.92 4.92 0 011.755-1.013c.45-.172 1.24-.362 2.41-.418C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.333.012 7.052.07 5.77.127 4.725.308 3.88.613a7.142 7.142 0 00-2.592 1.68A7.142 7.142 0 00.613 4.88c-.305.845-.486 1.89-.543 3.172C.012 8.333 0 8.741 0 12s.012 3.667.07 4.948c.057 1.282.238 2.327.543 3.172a7.142 7.142 0 001.68 2.592 7.142 7.142 0 002.592 1.68c.845.305 1.89.486 3.172.543C8.333 23.988 8.741 24 12 24s3.667-.012 4.948-.07c1.282-.057 2.327-.238 3.172-.543a7.142 7.142 0 002.592-1.68 7.142 7.142 0 001.68-2.592c.305-.845.486-1.89.543-3.172.058-1.281.07-1.689.07-4.948s-.012-3.667-.07-4.948c-.057-1.282-.238-2.327-.543-3.172a7.142 7.142 0 00-1.68-2.592A7.142 7.142 0 0019.12.613c-.845-.305-1.89-.486-3.172-.543C15.667.012 15.259 0 12 0z" />
								<path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.18a4.018 4.018 0 110-8.036 4.018 4.018 0 010 8.036zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
							</svg>
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
