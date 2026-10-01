export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/hassanfayyaz19/',
  github: 'https://github.com/hassanfayyaz19',
  email: 'mailto:hassanfayyaz19@gmail.com',
}

export const hero = {
  name: 'Hassan Fayyaz',
  title: 'Full-Stack Engineer: ERP, APIs & AI-Powered Web Apps',
  tagline: 'I design and ship production-grade business systems, from ERP and payroll to AI-powered talent matching, with clean, scalable architecture.',
}

export const profile = {
  image: '/images/profile.jpg',
  name: 'Hassan Fayyaz',
  title: 'Full-Stack Engineer: ERP, APIs & AI-Powered Web Apps',
  location: 'Lahore, Pakistan',
  tagline: 'Full-stack developer with 5+ years building scalable web applications.',
  resumeUrl: '', // Add your resume PDF URL, e.g. '/resume.pdf'
}

export const about = {
  bio: "I'm a full-stack developer with 5+ years of experience specializing in Laravel and Vue.js. I've led teams, architected systems from scratch, and delivered production-ready solutions across industries—from fuel management systems to trading platforms and educational LMS.",
}

export const skillGroups = [
  { category: 'Backend', skills: ['Laravel', 'PHP', 'REST APIs', 'GraphQL', 'Sanctum', 'JWT Auth', 'WebSockets (Reverb)'] },
  { category: 'Frontend', skills: ['Vue.js', 'Nuxt.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Flutter'] },
  { category: 'Database', skills: ['MySQL', 'PostgreSQL', 'pgvector'] },
  { category: 'DevOps & Testing', skills: ['Docker', 'GitHub Actions', 'Git', 'Pest', 'Server Deployment'] },
  { category: 'AI', skills: ['OpenAI API', 'Vector Embeddings', 'Semantic Matching'] },
]

export const services = [
  {
    title: 'Custom ERP & Business Systems',
    description: 'Procurement, payroll, accounting, inventory and reporting systems tailored to how your business actually runs.',
    icon: 'layers',
  },
  {
    title: 'API Development',
    description: 'Secure, well-documented REST and GraphQL APIs with token auth, WebSockets and third-party integrations.',
    icon: 'code',
  },
  {
    title: 'Laravel + Vue Web Apps',
    description: 'Full-stack web applications with clean architecture, responsive interfaces and role-based access.',
    icon: 'browser',
  },
  {
    title: 'MVP & Product Builds',
    description: 'From idea to a production-ready first version, including AI-powered features, deployment and CI/CD.',
    icon: 'rocket',
  },
]

// Add real entries below; sections stay hidden while these are empty.
export const education = [
  // { degree: 'BS Computer Science', institution: 'University name', period: '2014 - 2018' },
]

export const certifications = [
  // { name: 'Certification name', issuer: 'Issuing organization', year: '2023' },
]

export const testimonials = [
  // { quote: 'What they said about working with you.', name: 'Full Name', role: 'Title, Company' },
]

export const projects = [
  {
    title: 'M.A Engineering Services International (ERP)',
    description: 'Enterprise ERP for a construction and engineering firm covering project costing, procurement (requisitions, purchase orders, goods receipts), payment vouchers, petty cash, inventory and assets, invoicing and receipts, and payroll with attendance, EOBI and tax rules. Includes double-entry accounting, role-based access, Excel exports and a mobile API.',
    tech: ['Laravel 13', 'PHP 8.4', 'Sanctum', 'Maatwebsite Excel', 'Tailwind CSS'],
  },
  {
    title: 'The Advisory Bench',
    description: 'Backend and admin for a talent marketplace that matches clients with vetted talent using AI-powered, pgvector-based skill scoring. Covers project briefs, tiered matching and shortlisting, real-time messaging and video meetings, contracts with e-signatures, timesheets and expenses, invoicing, and reviews.',
    tech: ['Laravel 13', 'PostgreSQL', 'pgvector', 'OpenAI', 'Reverb WebSockets', 'Sanctum'],
  },
  {
    title: 'Fuel Pump Station (PTS2)',
    description: 'Laravel application for fuel pump monitoring and control. Integrated with PTS2 controllers for real-time alerts, device info, and user management. Features Artisan commands for alert fetching, PTS user sync/CRUD, and device monitoring (battery, CPU temp).',
    tech: ['Laravel', 'PTS2 API', 'PHP'],
  },
  {
    title: 'Petrol Pump Station HOS',
    description: 'Comprehensive petrol pump operations system with pump transactions, tank measurements, deliveries, inventory, and shift management. Includes PDF and Excel export for reports, product-wise summaries, payment mode summaries, and fuel grade management.',
    tech: ['Laravel 12', 'Vue.js', 'DomPDF', 'Maatwebsite Excel'],
  },
  {
    title: 'DTrader Trading Platform',
    description: 'Modern trading dashboard with order placement, market data, and portfolio management. Responsive design with dark/light theme, sidebar navigation, and timezone-aware authentication. Built with React, TypeScript, and Tailwind CSS.',
    tech: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'DTrader Backend',
    description: 'REST API backend for the DTrader trading platform. Handles authentication, trading operations, and integrations with the React frontend.',
    tech: ['Laravel 12', 'JWT Auth', 'Sanctum'],
  },
  {
    title: 'G-Member (Gaming Platform)',
    description: 'Platform for companies to upload and manage games. Implemented WebSockets for real-time updates and notifications. Developed Vue.js components and mobile app APIs for seamless performance.',
    tech: ['Laravel', 'Vue.js', 'WebSockets'],
  },
  {
    title: 'Studies Weekly (LMS)',
    description: 'Studies Weekly Online 3.0: a ground-up rebuild of a scalable LMS as a monorepo with a Laravel 9 API and a Nuxt.js frontend. Role-based access for admins, district admins, teachers and students, with Clever, ClassLink and SAML single sign-on and a Dockerized local environment.',
    tech: ['Laravel 9', 'Nuxt.js', 'Vue.js', 'Docker', 'SAML SSO'],
  },
  {
    title: 'Polar Adventure (Cruise Website)',
    description: 'Cruise trip platform for Antarctica and other destinations. Integrated third-party APIs to display real-time trip data.',
    tech: ['Laravel', 'Vue.js', 'Third-party APIs'],
  },
]

export const experience = [
  {
    company: 'MERE Business',
    role: 'Senior Laravel & Vue.js Developer | Project Lead',
    period: 'November 2024 - Present',
    duration: '1 year 4 months',
    location: 'Lahore, Pakistan',
    highlights: [
      'Leading development of enterprise web applications',
      'Project planning and technical architecture',
      'Mentoring and code review',
    ],
  },
  {
    company: 'INDEX Holding',
    role: 'Sr. PHP Developer & Team Lead',
    period: 'October 2023 - November 2024',
    duration: '1 year 2 months',
    location: 'Lahore, Punjab, Pakistan',
    highlights: [
      'Led Event Management System revamp using Laravel, Vue.js, and GraphQL',
      'Managed daily tasks and team workflow using agile practices',
      'Handled deployment and managed dev/staging servers',
      'Built standalone Online Registration Module in Vue.js',
    ],
  },
  {
    company: 'The Hexaa',
    role: 'Laravel & Vue.js Developer',
    period: 'July 2021 - September 2023',
    duration: '2 years 3 months',
    location: 'Lahore, Punjab, Pakistan',
    highlights: [
      'G-Member: Gaming platform with WebSockets and Vue.js components',
      'Studies Weekly: Scalable LMS with Nuxt.js and Laravel',
      'Polar Adventure: Cruise platform with third-party API integration',
    ],
  },
  {
    company: 'Ktechz',
    role: 'Laravel Developer',
    period: 'February 2020 - June 2021',
    duration: '1 year 5 months',
    location: 'Lahore, Punjab, Pakistan',
    highlights: [
      'Optimized Time Management System and POS for large datasets',
      'Integrated AJAX with jQuery to improve UX',
      'Built Property Management Solution in core PHP',
      'Developed Leads Management System with WhatsApp API and Email integration',
    ],
  },
]
