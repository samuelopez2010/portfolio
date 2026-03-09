import { motion } from 'framer-motion'
import { Database, Layout, Terminal, Blocks } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function SkillsGrid() {
    const { t } = useTranslation()
    const t_categories = Object.values(t('skills_section.categories', { returnObjects: true }))
    const categories = [
        {
            title: t_categories[0].title,
            icon: <Blocks className="text-blue-500" size={24} />,
            skills: Object.values(t_categories[0].skills)
        },
        {
            title: t_categories[1].title,
            icon: <Terminal className="text-emerald-500" size={24} />,
            skills: Object.values(t_categories[1].skills)
        },
        {
            title: t_categories[2].title,
            icon: <Layout className="text-rose-500" size={24} />,
            skills: Object.values(t_categories[2].skills)
        },
        {
            title: t_categories[3].title,
            icon: <Database className="text-amber-500" size={24} />,
            skills: Object.values(t_categories[3].skills)
        }
    ]

    const containerVars = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    }

    const itemVars = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    }

    return (
        <section id="skills" className="py-24 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('skills_section.title')}</h2>
                    <div className="w-20 h-1 bg-brand-500 rounded-full mx-auto"></div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVars}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVars}
                            className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex items-center text-gray-600 dark:text-gray-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mr-3 opacity-70"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
