import { motion } from 'framer-motion'
import { ExternalLink, Github, FileText, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function AllProjectsPage() {
    const { t } = useTranslation()
    const t_projects = Object.values(t('all_projects.projects', { returnObjects: true }))
    const allProjects = [
        {
            ...t_projects[0],
            links: {
                github: 'https://github.com/samuelopez2010/shop',
                doc: '/Sky_Architecture_Analysis.pdf'
            }
        },
        {
            ...t_projects[1],
            links: { github: 'https://github.com/samuelopez2010/nexus-auction' }
        },
        {
            ...t_projects[2],
            links: { github: 'https://github.com/samuelopez2010/Plus58MD' }
        },
        {
            ...t_projects[3],
            links: { github: 'https://github.com/samuelopez2010/amazon-price-tracker' }
        },
        {
            ...t_projects[4],
            links: { github: 'https://github.com/samuelopez2010/cinemind' }
        },
        {
            ...t_projects[5],
            links: { github: 'https://github.com/samuelopez2010/Sas---Payroll' }
        }
    ]

    return (
        <div className="min-h-screen pt-24 pb-24 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 mb-8 transition-colors"
                >
                    <ArrowLeft size={20} />
                    {t('all_projects.back_to_home')}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('all_projects.title')}</h1>
                    <div className="w-20 h-1 bg-brand-500 rounded-full"></div>
                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                        {t('all_projects.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                        >
                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${project.category === 'Main' || project.category === 'Principal'
                                        ? 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400'
                                        : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                                        }`}>
                                        {project.category}
                                    </span>

                                    <div className="flex gap-2">
                                        {project.links.doc && (
                                            <a href={project.links.doc} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors" title="Architecture Document">
                                                <FileText size={18} />
                                            </a>
                                        )}
                                        {project.links.github && (
                                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" title="GitHub Repository">
                                                <Github size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-gray-100 dark:border-white/5">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs font-semibold text-brand-500 uppercase tracking-widest">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
