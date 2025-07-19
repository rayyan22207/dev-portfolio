'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Full Stack Projects by Me
				</motion.h2>

				<div className="space-y-16">

					{/* E-commerce API Backend */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800">
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">🛒 Django E-commerce API Backend</h3>
										<p className="text-gray-400">
											A scalable, modular e-commerce backend inspired by the SaaS Foundations repo. Built using Django REST Framework, Tailwind, and JWT auth. Future-proofed for Paddle integration, analytics, and multi-tenant SaaS.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Tech Stack</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Django + DRF</li>
												<li>• Tailwind CSS</li>
												<li>• PostgreSQL (prod)</li>
												<li>• JWT Authentication</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Planned Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Paddle Billing</li>
												<li>• Analytics & Activity Tracking</li>
												<li>• GraphQL API Layer</li>
												<li>• Multi-Tenant Mode</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Highlights</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Modular app structure</li>
											<li>• RESTful API endpoints</li>
											<li>• Based on SaaS Foundations (MIT License)</li>
											<li>• Live on Vercel (planned)</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">API Structure Preview</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4 text-sm text-gray-400">
										/api/v1/auth/login<br />
										/api/v1/catalog/products<br />
										/api/v1/cart/items<br />
										/api/v1/orders/<br />
										...and more
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Django Real-Time Blog */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800">
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">📝 Django Real-Time Blog</h3>
										<p className="text-gray-400">
											A full-featured blog app with real-time notifications powered by Django Channels and Daphne. Includes advanced user profiles, likes, comments, and WebSocket-based alert system.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Core Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Blog posts & image uploads</li>
												<li>• Like & comment system</li>
												<li>• Real-time notifications</li>
												<li>• Follows & blocks</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Tech Stack</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Django 4+</li>
												<li>• Django Channels + Daphne</li>
												<li>• SQLite / PostgreSQL</li>
												<li>• Bootstrap 5</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Live Events</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• New post from followed user</li>
											<li>• Like/Comment alerts</li>
											<li>• Tip of the Day via ZenQuotes API</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">Real-Time Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4 text text-gray-400 text-xs leading-relaxed">
										<span className="block mb-2">🧩 WebSocket Flow</span>
										User connects → WebSocket server (Daphne) → Subscribed to user ID channel

										<hr className="my-3 border-gray-700" />

										<span className="block mb-2">⚙️ Event Triggers (Planned)</span>
										• When followed user posts → <code>signals.py</code> → WebSocket push<br />
										• When user likes a post/comment → Notification object (future)<br />
										• When someone comments on your post → WebSocket → Browser push
									</div>
								</div>

							</div>
						</div>
					</motion.div>

					{/* Stock & Sales Management System */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800">
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">📦 Stock & Sales Management System</h3>
										<p className="text-gray-400">
											Internal tool developed for business workflows like inventory tracking, sales reports, warehouse management, and user-specific invoicing. Built for Hashmi Surma (proprietary).
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Modules</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• User authentication & roles</li>
												<li>• Invoice generation</li>
												<li>• Stock-in / Stock-out flow</li>
												<li>• Product / Warehouse linkage</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Tech Stack</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Django</li>
												<li>• PostgreSQL / Neon</li>
												<li>• Tailwind + HTML/CSS</li>
												<li>• Deployed on Railway</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Outcomes</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Reduced manual stock errors</li>
											<li>• Improved invoice traceability</li>
											<li>• Faster warehouse-level audits</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Use Case</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4 text-sm text-gray-400">
										Staff login → Add product → Track movement → Print invoice → Reconcile warehouse → Reports
									</div>
								</div>
							</div>
						</div>
					</motion.div>

				</div>
			</div>
		</section>
	);
}
