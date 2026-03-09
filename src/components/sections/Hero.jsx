import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Hero() {
    const { t } = useTranslation()
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 text-sm font-medium mb-8 border border-brand-100 dark:border-brand-500/20"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                    </span>
                    Available for new opportunities
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6"
                >
                    {t('hero.greeting')}{' '}
                    <span className="bg-gradient-to-r from-brand-500 to-purple-600 bg-clip-text text-transparent">
                        Samuel López
                    </span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
                >
                    {t('hero.title')}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 mb-10"
                >
                    {t('hero.subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        {t('hero.view_projects')}
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </a>

                    <a
                        href="/CV_Samuel_Lopez.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-white dark:bg-slate-900 text-gray-900 dark:text-white rounded-full font-semibold border-2 border-gray-200 dark:border-white/10 overflow-hidden shadow-lg hover:shadow-xl hover:border-brand-500/30 dark:hover:border-brand-500/30 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <Download size={20} />
                        {t('nav.download_cv')}
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 flex items-center gap-6"
                >
                    <a href="https://github.com/samuelopez2010" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-brand-500 transition-colors">
                        <Github size={24} />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/samuelopezblondell/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-[#0077b5] dark:hover:text-[#0a66c2] hover:border-[#0077b5] dark:hover:border-[#0a66c2] transition-colors">
                        <Linkedin size={24} />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="mailto:samuelopez2010@gmail.com" className="p-3 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-rose-500 dark:hover:text-rose-400 hover:border-rose-500 transition-colors">
                        <Mail size={24} />
                        <span className="sr-only">Email</span>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
