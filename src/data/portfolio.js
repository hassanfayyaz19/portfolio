export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/hassanfayyaz19/',
  github: 'https://github.com/hassanfayyaz19',
  email: 'mailto:hassanfayyaz19@gmail.com',
}

export const hero = {
  name: 'Hassan Fayyaz',
  title: 'Senior Laravel & Vue.js Developer',
  tagline: 'Building scalable web applications with modern architecture and clean code.',
}

export const profile = {
  image: '/images/profile.jpg',
  name: 'Hassan Fayyaz',
  title: 'Senior Laravel & Vue.js Developer',
  location: 'Lahore, Pakistan',
  tagline: 'Full-stack developer with 5+ years building scalable web applications.',
  resumeUrl: '', // Add your resume PDF URL, e.g. '/resume.pdf'
}

export const about = {
  bio: "I'm a full-stack developer with 5+ years of experience specializing in Laravel and Vue.js. I've led teams, architected systems from scratch, and delivered production-ready solutions across industries—from fuel management systems to trading platforms and educational LMS.",
  skills: ['Laravel', 'Vue.js', 'Nuxt.js', 'PHP', 'JavaScript', 'TypeScript', 'React', 'GraphQL', 'REST APIs', 'MySQL', 'Tailwind CSS', 'WebSockets'],
}

export const projects = [
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
    description: 'Scalable Learning Management System using Nuxt.js and Laravel. Focused on robust backend features and interactive frontend elements for education delivery.',
    tech: ['Nuxt.js', 'Laravel'],
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
