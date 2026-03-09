import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Code2, Database, Layout, ArrowRight, FileText, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function FeaturedProjects() {
    const { t } = useTranslation()
    const [selectedImage, setSelectedImage] = useState(null)
    const t_projects = Object.values(t('featured_projects.projects', { returnObjects: true }))
    const mainProjects = [
        {
            ...t_projects[0],
            image: '/sky-preview.png',
            links: {
                github: 'https://github.com/samuelopez2010/shop',
                doc: '/Sky_Architecture_Analysis.pdf' // Will open the PDF when user uploads it
            },
            icon: <Database className="text-blue-500" size={24} />,
            color: 'from-blue-500/20 to-cyan-500/20'
        },
        {
            ...t_projects[1],
            image: '/nexus-preview.png',
            links: { github: 'https://github.com/samuelopez2010/nexus-auctions' }, // Link pending
            icon: <Code2 className="text-emerald-500" size={24} />,
            color: 'from-emerald-500/20 to-teal-500/20'
        },
        {
            ...t_projects[2],
            image: '/plus58md-preview.png',
            links: { github: 'https://github.com/samuelopez2010/Plus58MD' },
            icon: <Layout className="text-purple-500" size={24} />,
            color: 'from-purple-500/20 to-pink-500/20'
        }
    ]

    return (
        <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('featured_projects.title')}</h2>
                        <div className="w-20 h-1 bg-brand-500 rounded-full"></div>
                        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                            {t('featured_projects.subtitle')}
                        </p>
                    </div>
                    <Link
                        to="/projects"
                        className="group flex items-center gap-2 whitespace-nowrap text-brand-600 dark:text-brand-400 font-semibold hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                    >
                        {t('featured_projects.view_portfolio')}
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                </motion.div>

                {/* Main Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {mainProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative flex flex-col justify-between bg-white dark:bg-slate-950 rounded-3xl p-8 border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-1/3 -translate-y-1/3 pointer-events-none`} />

                            <div className="relative z-10 flex-grow">
                                {project.image && (
                                    <div
                                        onClick={() => setSelectedImage(project.image)}
                                        className="cursor-pointer relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-gray-100 dark:border-white/5 shadow-md hover:shadow-lg transition-all group/image"
                                    >
                                        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 dark:group-hover/image:bg-black/30 transition-colors z-10 flex items-center justify-center opacity-0 group-hover/image:opacity-100">
                                            <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">{t('featured_projects.click_to_view')}</span>
                                        </div>
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-500" />
                                    </div>
                                )}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform">
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-3">
                                        {project.links.doc && (
                                            <a href={project.links.doc} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors" title="Read Architecture Document">
                                                <FileText size={20} />
                                            </a>
                                        )}
                                        {project.links.github && (
                                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-50 dark:bg-slate-900 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 mb-3 rounded-full bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
                                        {t('featured_projects.role_label')} {project.role}
                                    </span>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-500 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            <div className="relative z-10 pt-6 mt-6 border-t border-gray-100 dark:border-white/10">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-900 rounded-lg text-xs text-gray-700 dark:text-gray-300 font-medium border border-transparent dark:border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Image Modal Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={24} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            src={selectedImage}
                            alt="Expanded Project View"
                            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-white/10 bg-slate-950"
                            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
