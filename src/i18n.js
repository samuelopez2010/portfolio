import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation strings
const resources = {
    en: {
        translation: {
            "nav": {
                "about": "About",
                "experience": "Experience",
                "skills": "Skills",
                "projects": "Projects",
                "download_cv": "Download CV"
            },
            "hero": {
                "greeting": "Hi, I'm",
                "title": "Systems Engineer",
                "subtitle": "I focus on building functional web applications and automation tools. I enjoy working on the entire development process, from designing system architecture and databases to developing the logic and interfaces that make them work.",
                "view_projects": "View Projects"
            },
            "about": {
                "title": "About me",
                "bio_1_pre": "I am a",
                "bio_1_bold": "Systems Engineer",
                "bio_1_post": "with more than four years of experience working in e-commerce. My work focuses on building web applications and automation tools designed to meet specific business requirements.",
                "bio_2_pre": "Instead of just writing code, my approach involves",
                "bio_2_bold": "designing the logic and database structure first",
                "bio_2_post": ". I rely on UML and system analysis to make sure every project is stable and easy to maintain.",
                "bio_3": "I enjoy working with Python and Django to build platforms and scripts that handle complex data. My goal is simple: to build reliable tools that solve practical problems and make processes more efficient.",
                "skills_title": "Soft Skills & Capabilities",
                "skills": [
                    "Systematic Problem Solving",
                    "Full-Cycle System Design",
                    "Technical Documentation & Collaboration",
                    "Agile Methodologies"
                ],
                "engineering_title": "Core Engineering Approach",
                "engineering": {
                    "backend_title": "Analysis First",
                    "backend_desc": "I prioritize UML modeling and database design to ensure system stability before writing code.",
                    "db_title": "Automation Focus",
                    "db_desc": "Developing Python scripts to eliminate repetitive tasks and optimize data-heavy workflows.",
                    "sys_title": "Scalability",
                    "sys_desc": "Building backend structures that can grow alongside business requirements without breaking.",
                    "front_title": "Technical Rigor",
                    "front_desc": "Applying the formal systems analysis learned throughout my engineering degree to real-world problems."
                },
                "cards": {
                    "learning_title": "Currently Learning",
                    "learning_desc": "Data analysis with Pandas and leveraging AI models like Claude for development.",
                    "languages_title": "Languages & Certs",
                    "languages_desc": "Spanish (Native), English (Certified Conversational Proficiency).",
                    "hobbies_title": "Interests & Hobbies",
                    "hobbies_desc": "Interested in financial systems, blockchain technology, and enjoying K-Dramas during my downtime."
                }
            },
            "experience": {
                "title": "Experience & Education",
                "items": [
                    {
                        "title": "Systems Analyst & Developer",
                        "company": "SimplyCodes (E-Commerce)",
                        "date": "2021 - Present",
                        "description": "Managing data workflows and verification for high-traffic e-commerce platforms. I specialize in developing Python-based automation tools to streamline data processing and improve operational efficiency."
                    },
                    {
                        "title": "Systems Engineering Degree",
                        "company": "Universidad Nororiental Privada Gran Mariscal de Ayacucho (UGMA)",
                        "date": "2022 - Present",
                        "description": "Focused on software engineering, database management, and system analysis. Developed a comprehensive system analysis for an e-commerce platform (\"Sky\"), covering UML documentation, database modeling, and technical feasibility studies."
                    },
                    {
                        "title": "English Language Certification (B2)",
                        "company": "American English Center",
                        "date": "2023 - 2025",
                        "description": "Completed a structured program from beginner to advanced levels, achieving B2 Upper-Intermediate proficiency. Focused on professional communication, technical writing, and conversational fluency for international environments."
                    }
                ]
            },
            "skills_section": {
                "title": "Technical Arsenal",
                "categories": [
                    {
                        "title": "Systems Architecture",
                        "skills": [
                            "UML Modeling",
                            "System Analysis",
                            "Database Design (ERD)",
                            "Requirements Gathering",
                            "Business Logic Mapping"
                        ]
                    },
                    {
                        "title": "Backend & Automation",
                        "skills": [
                            "Python",
                            "Django",
                            "PHP",
                            "Web Scraping & Automation",
                            "SQL"
                        ]
                    },
                    {
                        "title": "Frontend Development",
                        "skills": [
                            "JavaScript",
                            "CSS",
                            "Bootstrap",
                            "HTML"
                        ]
                    },
                    {
                        "title": "Databases & Tools",
                        "skills": [
                            "PostgreSQL",
                            "GitHub",
                            "Railway"
                        ]
                    }
                ]
            },
            "featured_projects": {
                "title": "Featured Case Studies",
                "subtitle": "A selection of my core engineering work, focusing on system analysis, database design, and practical software solutions.",
                "view_portfolio": "View Entire Portfolio",
                "click_to_view": "Click to view",
                "role_label": "Role:",
                "projects": [
                    {
                        "title": "Sky E-Commerce Architecture & Platform",
                        "role": "Systems Analyst",
                        "description": "A complete e-commerce solution architected from scratch. Includes a 100-page systems engineering dossier (UML, ERD) mapped to a fully functional PHP-based online store.",
                        "tech": ["PHP", "Systems Architecture", "UML Modeling", "Database Design", "System Analysis"]
                    },
                    {
                        "title": "Nexus Auction Marketplace",
                        "role": "Systems Developer",
                        "description": "A live bidding platform where I engineered the backend logic to handle real-time competitive bidding and secure user authentication. Focused on creating a dynamic database structure for seamless category updates.",
                        "tech": ["Python", "Django", "Stripe API", "Cloud Deployment"]
                    },
                    {
                        "title": "Plus58MD LMS Platform",
                        "role": "Systems Engineer (Thesis Project)",
                        "description": "A Learning Management System developed as my degree thesis. It features custom dual-currency checkout pipelines (Stripe & Mercantil C2P) and course progression tracking with a focus on scalable database architecture.",
                        "tech": ["Django", "Python", "PostgreSQL", "Payment APIs"]
                    }
                ]
            },
            "all_projects": {
                "back_to_home": "Back to Home",
                "title": "Project Registry",
                "subtitle": "A full catalog of my systems engineering work, including architecture designs, automation scripts, and web platforms.",
                "projects": [
                    {
                        "title": "Sky E-Commerce Architecture",
                        "role": "Systems Analyst",
                        "description": "A comprehensive 100-page systems engineering dossier detailing the complete architecture of an e-commerce platform. Focused on translating business requirements into technical UML models and ERD designs.",
                        "tech": ["PHP", "System Analysis", "UML Modeling", "Database Design"],
                        "category": "Main"
                    },
                    {
                        "title": "Nexus Auction Marketplace",
                        "role": "Systems Developer",
                        "description": "A live bidding platform where I engineered the backend logic to handle real-time competitive bidding and secure user authentication. Focused on creating a dynamic database structure for seamless category updates.",
                        "tech": ["Python", "Django", "Stripe API", "Relational DB"],
                        "category": "Main"
                    },
                    {
                        "title": "Plus58MD LMS Platform",
                        "role": "Systems Engineer (Thesis Project)",
                        "description": "A Learning Management System featuring custom dual-currency checkout pipelines (Stripe & Mercantil C2P) and course progression tracking. Built as a degree thesis with a focus on scalable database architecture.",
                        "tech": ["Django", "Python CSS", "PostgreSQL", "Payment APIs"],
                        "category": "Main"
                    },
                    {
                        "title": "Amazon Price Tracker",
                        "role": "Backend & Automation Developer",
                        "description": "An automated web scraping engine that monitors e-commerce price volatility. I developed resilient data extraction pipelines in Python to handle real-time updates and bypass basic anti-bot mechanisms.",
                        "tech": ["Python", "BeautifulSoup", "Automation", "Web Scraping"],
                        "category": "Secondary"
                    },
                    {
                        "title": "CineMind Recommendation Engine",
                        "role": "Python developer",
                        "description": "movie recommendation system leveraging Scikit-Learn (SVD algorithm) and the TMDB API. It delivers personalized suggestions by processing datasets to identify viewing patterns and user preferences.",
                        "tech": ["Python", "Scikit-Learn", "Machine Learning", "REST APIs"],
                        "category": "Secondary"
                    },
                    {
                        "title": "Sas-Payroll System",
                        "role": "Backend Developer",
                        "description": "An internal application designed to manage employee payroll calculations. I focused on developing the business logic for accurate salary processing and optimizing database queries for payroll history.",
                        "tech": ["Python", "MySQL", "Business Logic"],
                        "category": "Secondary"
                    }
                ]
            },
            "footer": {
                "subtitle": "Systems Engineer",
                "rights": "All rights reserved."
            }
        }
    },
    es: {
        translation: {
            "nav": {
                "about": "Sobre Mí",
                "experience": "Experiencia",
                "skills": "Habilidades",
                "projects": "Proyectos",
                "download_cv": "Descargar CV"
            },
            "hero": {
                "greeting": "Hola, soy",
                "title": "Ingeniero de Sistemas",
                "subtitle": "Me enfoco en construir aplicaciones web funcionales y herramientas de automatización. Disfruto trabajando en todo el proceso de desarrollo, desde el diseño de la arquitectura y bases de datos hasta el desarrollo de la lógica y de las interfaces.",
                "view_projects": "Ver Proyectos"
            },
            "about": {
                "title": "Sobre mí",
                "bio_1_pre": "Soy un",
                "bio_1_bold": "Ingeniero de Sistemas",
                "bio_1_post": "con más de cuatro años de experiencia trabajando en e-commerce. Mi trabajo se enfoca en la construcción de aplicaciones web y herramientas de automatización diseñadas para cumplir requisitos de negocio específicos.",
                "bio_2_pre": "En lugar de simplemente escribir código, mi enfoque involucra",
                "bio_2_bold": "diseñar la lógica y la estructura de la base de datos primero",
                "bio_2_post": ". Confío en el modelado UML y en el análisis de sistemas para asegurar que cada proyecto sea estable y fácil de mantener.",
                "bio_3": "Disfruto trabajando con Python y Django para construir plataformas y scripts que manejan datos complejos. Mi objetivo es simple: construir herramientas confiables que resuelvan problemas prácticos y hagan los procesos más eficientes.",
                "skills_title": "Habilidades Blandas y Capacidades",
                "skills": [
                    "Resolución Sistemática de Problemas",
                    "Diseño de Sistemas de Ciclo Completo",
                    "Documentación Técnica y Colaboración",
                    "Metodologías Ágiles"
                ],
                "engineering_title": "Enfoque Principal de Ingeniería",
                "engineering": {
                    "backend_title": "Análisis Primero",
                    "backend_desc": "Priorizo el modelado UML y el diseño de bases de datos para garantizar la estabilidad del sistema antes de escribir código.",
                    "db_title": "Enfoque en Automatización",
                    "db_desc": "Desarrollando scripts en Python para eliminar tareas repetitivas y optimizar flujos de trabajo con gran volumen de datos.",
                    "sys_title": "Escalabilidad",
                    "sys_desc": "Construcción de estructuras backend que pueden crecer junto con los requisitos comerciales requeridos sin fallar.",
                    "front_title": "Rigor Técnico",
                    "front_desc": "Aplicando el análisis de sistemas formal aprendido a lo largo de mi carrera de ingeniería a problemas del mundo real."
                },
                "cards": {
                    "learning_title": "Aprendiendo Actualmente",
                    "learning_desc": "Análisis de datos con Pandas y aprovechamiento de IA como Claude para el desarrollo.",
                    "languages_title": "Idiomas y Certificaciones",
                    "languages_desc": "Español (Nativo), Inglés (Competencia Conversacional Certificada).",
                    "hobbies_title": "Intereses y Pasatiempos",
                    "hobbies_desc": "Interesado en sistemas financieros, tecnología blockchain y disfrutar de K-Dramas en mi tiempo libre."
                }
            },
            "experience": {
                "title": "Experiencia y Educación",
                "items": [
                    {
                        "title": "Analista de Sistemas y Desarrollador",
                        "company": "SimplyCodes (E-Commerce)",
                        "date": "2021 - Presente",
                        "description": "Gestión de flujos de trabajo de datos y verificación para plataformas de comercio electrónico de alto tráfico. Me especializo en el desarrollo de herramientas de automatización basadas en Python para agilizar el procesamiento de datos y mejorar la eficiencia operativa."
                    },
                    {
                        "title": "Grado en Ingeniería de Sistemas",
                        "company": "Universidad Nororiental Privada Gran Mariscal de Ayacucho (UGMA)",
                        "date": "2022 - Presente",
                        "description": "Enfoque en la ingeniería de software, gestión de bases de datos y el análisis de sistemas. Desarrollé un análisis de sistemas integral para una plataforma de e-commerce (\"Sky\"), abarcando la documentación UML, modelado de bases de datos y los estudios de viabilidad."
                    },
                    {
                        "title": "Certificación del Idioma Inglés (B2)",
                        "company": "American English Center",
                        "date": "2023 - 2025",
                        "description": "Completé un programa estructurado desde niveles principiantes hasta avanzados, logrando el dominio intermedio-alto B2. Enfocado en la comunicación profesional, redacción técnica y fluidez conversacional para entornos internacionales."
                    }
                ]
            },
            "skills_section": {
                "title": "Arsenal Técnico",
                "categories": [
                    {
                        "title": "Arquitectura de Sistemas",
                        "skills": [
                            "Modelado UML",
                            "Análisis de Sistemas",
                            "Diseño de Bases de Datos (ERD)",
                            "Levantamiento de Requisitos",
                            "Mapeo Lógico de Negocio"
                        ]
                    },
                    {
                        "title": "Backend y Automatización",
                        "skills": [
                            "Python",
                            "Django",
                            "PHP",
                            "Web Scraping y Automatización",
                            "SQL"
                        ]
                    },
                    {
                        "title": "Desarrollo Frontend",
                        "skills": [
                            "JavaScript",
                            "CSS",
                            "Bootstrap",
                            "HTML"
                        ]
                    },
                    {
                        "title": "Bases de Datos y Herramientas",
                        "skills": [
                            "PostgreSQL",
                            "GitHub",
                            "Railway"
                        ]
                    }
                ]
            },
            "featured_projects": {
                "title": "Casos de Estudio Destacados",
                "subtitle": "Una selección de mi trabajo principal en ingeniería, enfocado en el análisis de sistemas, diseño de bases de datos y soluciones de software prácticas.",
                "view_portfolio": "Ver Portafolio Completo",
                "click_to_view": "Haz clic para ver",
                "role_label": "Rol:",
                "projects": [
                    {
                        "title": "Arquitectura y Plataforma E-Commerce Sky",
                        "role": "Analista de Sistemas",
                        "description": "Una solución de e-commerce completa diseñada desde cero. Incluye un dossier de ingeniería de sistemas de 100 páginas (UML, ERD) mapeado a una tienda en línea funcional basada en PHP.",
                        "tech": ["PHP", "Arquitectura de Sistemas", "Modelado UML", "Diseño de Bases de Datos", "Análisis de Sistemas"]
                    },
                    {
                        "title": "Marketplace de Subastas Nexus",
                        "role": "Desarrollador de Sistemas",
                        "description": "Plataforma de pujas en vivo donde diseñé la lógica backend para manejar pujas competitivas en tiempo real y autenticación segura de usuarios. Enfocado en crear una estructura de base de datos dinámica para actualizaciones de categorías sin interrupciones.",
                        "tech": ["Python", "Django", "Stripe API", "Despliegue en la Nube"]
                    },
                    {
                        "title": "Plataforma LMS Plus58MD",
                        "role": "Ingeniero de Sistemas (Proyecto de Tesis)",
                        "description": "Sistema de gestión del aprendizaje desarrollado como mi tesis de grado. Cuenta con flujos de pago duales personalizados (Stripe y Mercantil C2P) y seguimiento del progreso del curso con un enfoque en la arquitectura de base de datos escalable.",
                        "tech": ["Django", "Python", "PostgreSQL", "APIs de Pago"]
                    }
                ]
            },
            "all_projects": {
                "back_to_home": "Volver al Inicio",
                "title": "Registro de Proyectos",
                "subtitle": "Un catálogo completo de mi trabajo de ingeniería de sistemas, incluyendo diseños de arquitectura, scripts de automatización y plataformas web.",
                "projects": [
                    {
                        "title": "Arquitectura E-Commerce Sky",
                        "role": "Analista de Sistemas",
                        "description": "Un exhaustivo dossier de ingeniería de sistemas de 100 páginas que detalla la arquitectura completa de una plataforma de comercio electrónico. Enfocado en traducir requerimientos comerciales en modelos UML técnicos y diseños ERD.",
                        "tech": ["PHP", "Análisis de Sistemas", "Modelado UML", "Diseño de Bases de Datos"],
                        "category": "Principal"
                    },
                    {
                        "title": "Marketplace de Subastas Nexus",
                        "role": "Desarrollador de Sistemas",
                        "description": "Plataforma de pujas en vivo donde diseñé la lógica backend para manejar pujas competitivas en tiempo real y autenticación segura de usuarios. Enfocado en crear una estructura de base de datos dinámica para actualizaciones de categorías sin interrupciones.",
                        "tech": ["Python", "Django", "Stripe API", "BD Relacional"],
                        "category": "Principal"
                    },
                    {
                        "title": "Plataforma LMS Plus58MD",
                        "role": "Ingeniero de Sistemas (Proyecto de Tesis)",
                        "description": "Sistema de gestión de aprendizaje que presenta flujos de pago duales personalizados (Stripe y Mercantil C2P) y seguimiento del progreso. Construido como tesis de grado con enfoque en arquitectura de bases de datos escalable.",
                        "tech": ["Django", "Python CSS", "PostgreSQL", "APIs de Pago"],
                        "category": "Principal"
                    },
                    {
                        "title": "Amazon Price Tracker",
                        "role": "Desarrollador de Backend",
                        "description": "Un motor automatizado de web scraping que monitorea la volatilidad de precios en comercio electrónico. Desarrollé canalizaciones de extracción de datos resilientes en Python para manejar actualizaciones en tiempo real y evitar mecanismos anti-bot básicos.",
                        "tech": ["Python", "BeautifulSoup", "Automatización", "Web Scraping"],
                        "category": "Secundario"
                    },
                    {
                        "title": "Motor de Recomendación CineMind",
                        "role": "Desarrollador Python",
                        "description": "Sistema de recomendación de películas que aprovecha Scikit-Learn (algoritmo SVD) y la API TMDB. Ofrece sugerencias personalizadas mediante el procesamiento de conjuntos de datos para identificar patrones de visualización y preferencias del usuario.",
                        "tech": ["Python", "Scikit-Learn", "Machine Learning", "REST APIs"],
                        "category": "Secundario"
                    },
                    {
                        "title": "Sistema Sas-Payroll",
                        "role": "Desarrollador Backend",
                        "description": "Una aplicación interna diseñada para gestionar los cálculos de nómina de los empleados. Me enfoqué en desarrollar la lógica de negocio para el procesamiento preciso de salarios y en optimizar las consultas a la base de datos para el historial de nómina.",
                        "tech": ["Python", "MySQL", "Lógica de Negocios"],
                        "category": "Secundario"
                    }
                ]
            },
            "footer": {
                "subtitle": "Ingeniero de Sistemas",
                "rights": "Todos los derechos reservados."
            }
        }
    }
};

i18n
    // Detects user language
    .use(LanguageDetector)
    // Passes i18n down to react-i18next
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // React already escapes by default
        }
    });

export default i18n;
