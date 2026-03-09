import { useState } from 'react'
import { Github, Linkedin, Mail, Copy, Check, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()
    const [copied, setCopied] = useState(false)
    const email = "samuelopez2010@gmail.com"

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

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
                        <div className="flex items-center p-1 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-gray-100 dark:border-white/5 hover:border-brand-500/30 transition-colors">
                            <span className="px-3 text-xs font-medium text-gray-500 dark:text-gray-400 select-all hidden sm:inline-block">
                                {email}
                            </span>
                            <div className="flex items-center gap-1 sm:border-l border-gray-200 dark:border-white/10 sm:pl-1">
                                <a
                                    href={`mailto:${email}`}
                                    className="relative group p-2 rounded-lg text-gray-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all"
                                >
                                    <Send size={18} />
                                    <span className="sr-only">Send Email</span>
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-md">
                                        {t('hero.send_email', 'Send Email')}
                                    </div>
                                </a>
                                <button
                                    onClick={handleCopy}
                                    className="relative group p-2 rounded-lg text-gray-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all"
                                >
                                    {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                                    <span className="sr-only">Copy Email</span>
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-md">
                                        {copied ? t('hero.copied', 'Copied!') : t('hero.copy_email', 'Copy Email')}
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} Samuel López. {t('footer.rights')}</p>
                    <div className="flex gap-4">
                        <a href="#about" className="hover:text-brand-500 transition-colors">{t('nav.about')}</a>
                        <a href="#projects" className="hover:text-brand-500 transition-colors">{t('nav.projects')}</a>
                        <a href="/CV_Samuel_Lopez.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-brand-500 transition-colors">CV</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
