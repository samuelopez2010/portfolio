import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Download, Copy, Check, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Hero() {
    const { t } = useTranslation()
    const [copied, setCopied] = useState(false)
    const email = "samuelopez2010@gmail.com"

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

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
                    {t('hero.status', 'Available for new opportunities')}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6 flex flex-col sm:block items-center sm:items-stretch"
                >
                    <span>{t('hero.greeting')}</span>
                    <span className="bg-gradient-to-r from-brand-500 to-purple-600 bg-clip-text text-transparent sm:ml-3 mt-1 sm:mt-0">
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
                    <div className="flex items-center p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 shadow-sm hover:border-brand-500/30 transition-colors">
                        <span className="px-4 text-sm font-medium text-gray-600 dark:text-gray-400 select-all">
                            {email}
                        </span>
                        <div className="flex items-center gap-1 border-l border-gray-200 dark:border-white/10 pl-2 pr-1">
                            <a
                                href={`mailto:${email}`}
                                className="relative group p-2 rounded-xl text-gray-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all"
                            >
                                <Send size={18} />
                                <span className="sr-only">Send Email</span>
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-md">
                                    {t('hero.send_email', 'Send Email')}
                                </div>
                            </a>
                            <button
                                onClick={handleCopy}
                                className="relative group p-2 rounded-xl text-gray-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all"
                            >
                                {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                                <span className="sr-only">Copy Email</span>
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-md">
                                    {copied ? t('hero.copied', 'Copied!') : t('hero.copy_email', 'Copy Email')}
                                </div>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
