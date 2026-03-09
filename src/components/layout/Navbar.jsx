import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Download, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
    const { t, i18n } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const [isDark, setIsDark] = useState(true)

    const toggleLanguage = () => {
        const newLang = i18n.language.startsWith('en') ? 'es' : 'en'
        i18n.changeLanguage(newLang)
    }

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDark])

    const navLinks = [
        { name: t('nav.about'), href: '/#about' },
        { name: t('nav.experience'), href: '/#experience' },
        { name: t('nav.skills'), href: '/#skills' },
        { name: t('nav.projects'), href: '/projects' },
    ]

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="text-xl font-bold bg-gradient-to-r from-brand-500 to-purple-600 bg-clip-text text-transparent">
                            Samuel López
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-brand-500 dark:text-gray-300 dark:hover:text-white font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        <button
                            onClick={toggleLanguage}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 font-medium transition-colors flex items-center gap-1"
                            aria-label="Toggle Language"
                        >
                            <Globe size={20} />
                            <span className="text-sm uppercase">{i18n.language ? i18n.language.substring(0, 2) : 'EN'}</span>
                        </button>

                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 transition-colors"
                            aria-label="Toggle Dark Mode"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <a
                            href="/CV_Samuel_Lopez.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-medium transition-colors cursor-pointer"
                        >
                            <Download size={18} />
                            <span>{t('nav.download_cv')}</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button onClick={toggleLanguage} className="p-2 text-gray-600 dark:text-gray-300 flex items-center gap-1 font-medium">
                            <Globe size={20} />
                            <span className="text-xs uppercase">{i18n.language ? i18n.language.substring(0, 2) : 'EN'}</span>
                        </button>
                        <button onClick={() => setIsDark(!isDark)} className="p-2 text-gray-600 dark:text-gray-300">
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-white"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-brand-500 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/CV_Samuel_Lopez.pdf"
                            className="flex items-center gap-2 mt-4 mx-3 px-4 py-2 rounded-md bg-brand-500 text-white font-medium justify-center"
                        >
                            <Download size={18} />
                            {t('nav.download_cv')}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}
