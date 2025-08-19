type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Cox Automotive',
    title: 'Software Engineer ll',
    start: 'September 2020',
    end: 'Present',
    link: 'https://www.coxautoinc.com/',
    id: 'work1',
  },
  {
    company: 'Oden Industries',
    title: 'Software Engineer',
    start: 'March 2016',
    end: 'October 2020',
    link: 'https://odenindustries.com/',
    id: 'work2',
  },
  {
    company: 'Chino Commercial Bank',
    title: 'Jr Software Engineer',
    start: 'May 2015',
    end: 'February 2016',
    link: 'https://www.chinocommercialbank.com/',
    id: 'work3',
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
