import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function CareerTimeline() {
    const { t } = useTranslation()
    const t_experiences = Object.values(t('experience.items', { returnObjects: true }))
    const experiences = [
        {
            ...t_experiences[0],
            icon: <Briefcase size={20} />,
            type: 'work'
        },
        {
            ...t_experiences[1],
            icon: <GraduationCap size={20} />,
            type: 'education'
        },
        {
            ...t_experiences[2],
            icon: <Award size={20} />,
            type: 'education'
        }
    ]

    const itemVars = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-gray-200 dark:border-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('experience.title')}</h2>
                    <div className="w-20 h-1 bg-brand-500 rounded-full mb-16"></div>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={itemVars}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="md:grid md:grid-cols-5 md:gap-8 items-start">

                                {/* Timeline Line & Icon (Desktop) */}
                                <div className="hidden md:flex flex-col items-center col-span-1 h-full relative">
                                    <div className={`p-3 rounded-full z-10 ${exp.type === 'work'
                                        ? 'bg-brand-100 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400'
                                        : 'bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400'
                                        }`}>
                                        {exp.icon}
                                    </div>
                                    {index !== experiences.length - 1 && (
                                        <div className="absolute top-12 bottom-[-4rem] w-px bg-gray-300 dark:bg-gray-700"></div>
                                    )}
                                </div>

                                {/* Mobile Icon */}
                                <div className={`absolute left-0 top-0 p-2 rounded-full md:hidden ${exp.type === 'work'
                                    ? 'bg-brand-100 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400'
                                    : 'bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400'
                                    }`}>
                                    {exp.icon}
                                </div>
                                {index !== experiences.length - 1 && (
                                    <div className="absolute left-[1.125rem] top-10 bottom-[-3rem] w-px bg-gray-300 dark:bg-gray-700 md:hidden"></div>
                                )}

                                {/* Content */}
                                <div className="md:col-span-4 bg-white dark:bg-slate-950 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                                        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium whitespace-nowrap">
                                            {exp.date}
                                        </span>
                                    </div>
                                    <h4 className="text-brand-600 dark:text-brand-400 font-medium mb-4">{exp.company}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
