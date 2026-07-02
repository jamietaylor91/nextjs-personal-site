type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link?: string
  description?: string
  highlights?: string[]
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'SoulStageLA',
    description:
      'A live, audience-powered Los Angeles performance competition where emerging dancers, DJs, and vocal artists compete for cash prizes while fans vote for the winner.',
    link: 'https://www.soulstagela.com/',
    id: 'project1',
  },
  {
    name: 'MojoDreams',
    description:
      'An AI-powered dream journal and self-improvement platform that interprets dream entries, tracks themes, and turns subconscious patterns into practical reflection prompts.',
    link: 'https://mojodreams.com/',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Taylor'd Works",
    title: 'Founder & Product Owner',
    start: '2020',
    end: 'Present',
    description:
      'Custom software and AI-integration studio for small businesses; creator of MojoDreams, an AI-powered journaling and self-improvement platform.',
    highlights: [
      'Took MojoDreams from concept to launch and grew it to 500 registered users across free users and paying subscribers.',
      'Owned customer discovery, product strategy, full-stack development, LLM integrations, launch, and go-to-market.',
      'Improved activation to roughly 63% by redesigning onboarding and the first-entry submission experience.',
    ],
    id: 'work1',
  },
  {
    company: 'DataHealth LLC',
    title: 'Co-Founder',
    start: '2020',
    end: '2022',
    description: 'Healthcare analytics software company.',
    highlights: [
      'Co-founded software that analyzed healthcare reports and SQL code to keep reporting assets current with EPIC database schema changes.',
      'Identified commonly used tables and columns across EPIC-based reporting to guide datamart design priorities.',
    ],
    id: 'work2',
  },
  {
    company: 'Cox Automotive',
    title: 'Software Engineer',
    start: 'Sep 2020',
    end: 'Mar 2026',
    link: 'https://www.coxautoinc.com/',
    highlights: [
      'Partnered with product managers and stakeholders on the ProfitTime dealer platform to inform roadmap and feature planning.',
      'Implemented analytics instrumentation and an A/B testing framework, increasing engagement-tracking coverage 15%.',
      'Built shared React and Stencil component libraries adopted across multiple product teams.',
    ],
    id: 'work3',
  },
  {
    company: 'Oden Industries',
    title: 'Software Engineer | Product Owner',
    start: 'Mar 2016',
    end: 'Sep 2020',
    link: 'https://odenindustries.com/',
    highlights: [
      'Owned product requirements and backlog priorities for SmartShip, ODS, and PlaniTrac across major product builds.',
      'Led mobile and desktop development teams while coordinating sprint delivery and release timing.',
      'Architected and led development of PlaniTrac, a real-time emergency-management platform.',
    ],
    id: 'work4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/jamietaylor91',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jtaylor91/',
  }
]

export const EMAIL = 'jamietaylor112@gmail.com'
