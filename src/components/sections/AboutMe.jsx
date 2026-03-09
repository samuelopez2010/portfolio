import { motion } from 'framer-motion'
import { Code, Server, LayoutTemplate, Coffee, Heart, Database } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function AboutMe() {
    const { t } = useTranslation()
    const containerVars = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVars = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVars}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                >
                    {/* Main Bio Column */}
                    <div className="lg:col-span-8 space-y-8">
                        <motion.div variants={itemVars}>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('about.title')}</h2>
                            <div className="w-20 h-1 bg-brand-500 rounded-full mb-8"></div>
                        </motion.div>

                        <motion.div variants={itemVars} className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                            <p>
                                {t('about.bio_1_pre')} <strong>{t('about.bio_1_bold')}</strong> {t('about.bio_1_post')}
                            </p>

                            <p>
                                {t('about.bio_2_pre')} <strong>{t('about.bio_2_bold')}</strong>{t('about.bio_2_post')}
                            </p>

                            <p>
                                {t('about.bio_3')}
                            </p>
                        </motion.div>

                        {/* Soft Skills */}
                        <motion.div variants={itemVars} className="pt-6 border-t border-gray-200 dark:border-white/10">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t('about.skills_title')}</h3>
                            <div className="flex flex-wrap gap-3">
                                {Object.values(t('about.skills', { returnObjects: true })).map((skill) => (
                                    <span key={skill} className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 font-medium text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* New Section: Engineering Focus to fill logic gap */}
                        <motion.div variants={itemVars} className="pt-6 border-t border-gray-200 dark:border-white/10">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t('about.engineering_title')}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-gray-100 dark:border-white/5 hover:border-brand-500/30 transition-colors">
                                    <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-2"><Server size={16} className="text-brand-500" /> {t('about.engineering.backend_title')}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{t('about.engineering.backend_desc')}</p>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-gray-100 dark:border-white/5 hover:border-brand-500/30 transition-colors">
                                    <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-2"><Database size={16} className="text-emerald-500" /> {t('about.engineering.db_title')}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{t('about.engineering.db_desc')}</p>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-gray-100 dark:border-white/5 hover:border-brand-500/30 transition-colors">
                                    <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-2"><LayoutTemplate size={16} className="text-purple-500" /> {t('about.engineering.sys_title')}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{t('about.engineering.sys_desc')}</p>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-gray-100 dark:border-white/5 hover:border-brand-500/30 transition-colors">
                                    <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-2"><Code size={16} className="text-blue-500" /> {t('about.engineering.front_title')}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{t('about.engineering.front_desc')}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Secondary Column (Opcional Section from Midudev) */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Photo Placeholder */}
                        <motion.div variants={itemVars} className="relative group rounded-3xl overflow-hidden aspect-[4/5] border-2 border-gray-100 dark:border-white/5 bg-slate-100 dark:bg-slate-900 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                            <img
                                src="/samuel_photo.png"
                                alt="Samuel López"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Learning / Hobbies Cards (Restored to their original right-column placement) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            <motion.div variants={itemVars} className="p-5 rounded-2xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20">
                                <div className="flex items-center gap-2 mb-2 text-brand-600 dark:text-brand-400">
                                    <Code size={18} />
                                    <h4 className="font-semibold">{t('about.cards.learning_title')}</h4>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{t('about.cards.learning_desc')}</p>
                            </motion.div>

                            <motion.div variants={itemVars} className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                                <div className="flex items-center gap-2 mb-2 text-gray-900 dark:text-white">
                                    <Heart size={18} className="text-rose-500" />
                                    <h4 className="font-semibold">{t('about.cards.languages_title')}</h4>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{t('about.cards.languages_desc')}</p>
                            </motion.div>

                            <motion.div variants={itemVars} className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                                <div className="flex items-center gap-2 mb-2 text-gray-900 dark:text-white">
                                    <Coffee size={18} className="text-orange-500" />
                                    <h4 className="font-semibold">{t('about.cards.hobbies_title')}</h4>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {t('about.cards.hobbies_desc')}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div >
        </section >
    )
}
