import { Github, Linkedin, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-brand-500 to-purple-600 bg-clip-text text-transparent mb-2">Samuel López</h2>
                        <p className="text-gray-600 dark:text-gray-400">{t('footer.subtitle')}</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/samuelopez2010" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-all">
                            <Github size={24} />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/samuelopezblondell/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0a66c2] hover:scale-110 transition-all">
                            <Linkedin size={24} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="mailto:samuelopez2010@gmail.com" className="text-gray-400 hover:text-rose-500 hover:scale-110 transition-all">
                            <Mail size={24} />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} Samuel López. {t('footer.rights')}</p>
                    <div className="flex gap-4">
                        <a href="#about" className="hover:text-brand-500 transition-colors">{t('nav.about')}</a>
                        <a href="#projects" className="hover:text-brand-500 transition-colors">{t('nav.projects')}</a>
                        <a href="/CV_Samuel_Lopez.pdf" className="hover:text-brand-500 transition-colors">CV</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
