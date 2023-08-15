import { CaseStudiesTypes, NavbarTypes, Partners, Services, TeamTypes } from '../types/types';


export const navbarLinks: NavbarTypes[] = [
  {name: 'About us', url: 'about-us'},
  {name: 'Services', url: 'services'},
  {name: 'Use Cases', url: 'use-cases'},
  {name: 'Working Process', url: 'working-process'},
  {name: 'Contact', url: 'contact'},

]

export const partners: Partners[] = [
  {id: 0, title: 'Amazon', url: '/images/amazon.png'},
  {id: 1, title: 'Dribbble', url: '/images/dribble.png'},
  {id: 2, title: 'HubSpot', url: '/images/hubspot.png'},
  {id: 3, title: 'Notion', url: '/images/notion.png'},
  {id: 4, title: 'Netflix', url: '/images/netflix.png'},
  {id: 5, title: 'Zoom', url: '/images/zoom.png'},
]

export const servicesData: Services[] = [
  {id:0, title: ['Search engine', 'optimization'], url: '/' , bgColor: 'open', textBgColor: 'green' , image: '/images/tokyo-magnifier.png'},
  {id:1, title: ['Pay-per-click', 'advertising'], url: '/' , bgColor: 'green', textBgColor: 'white' , image: '/images/tokyo-selecting.png'},
  {id:2, title: ['Social Media', 'Marketing'], url: '/' , bgColor: 'dark', textBgColor: 'white' , image: '/images/tokyo-browser.png'},
  {id:3, title: ['Email', 'Marketing'], url: '/' , bgColor: 'open', textBgColor: 'green' , image: '/images/tokyo-sending-messages.png'},
  {id:4, title: ['Content', 'Creation'], url: '/' , bgColor: 'green', textBgColor: 'white' , image: '/images/tokyo-many-browser.png'},
  {id:5, title: ['Analytics and ', 'Tracking'], url: '/' , bgColor: 'dark', textBgColor: 'green' , image: '/images/tokyo-volumetric-analytics.png'}
]

export const caseStudiesData: CaseStudiesTypes[] = [
  {text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
    url: '/'},
  {text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
    url: '/'},
  {text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
    url: '/'}
]

export const teamData:TeamTypes[] = [
  {id: 0, name: 'Said Badalov', title: 'CEO and Founder', experience: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy' , avatar: '/images/avatar.png', linkedin: 'https://www.linkedin.com/in/said-badalov-a8b436219/'},
  {id: 1, name: 'Jane Doe', title: 'Director of Operations', experience: '7+ years of experience in project management and team leadership. Strong organizational and communication skills' , avatar: '/images/avatar.png', linkedin: 'https://www.linkedin.com/in/said-badalov-a8b436219/'},
  {id: 2, name: 'Michael Brown', title: 'Senior SEO Specialist', experience: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization' , avatar: '/images/avatar1.png', linkedin: 'https://www.linkedin.com/in/said-badalov-a8b436219/'},
  {id: 3, name: 'Emily Johnson', title: 'PPC Manager', experience: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis' , avatar: '/images/avatar2.png', linkedin: 'https://www.linkedin.com/in/said-badalov-a8b436219/'},
  {id: 4, name: 'Brian Williams', title: 'Social Media Specialist', experience: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement' , avatar: '/images/avatar.png', linkedin: 'https://www.linkedin.com/in/said-badalov-a8b436219/'},
  {id: 5, name: 'Sarah Kim', title: 'Content Creator', experience: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries' , avatar: '/images/avatar.png', linkedin: 'https://www.linkedin.com/in/said-badalov-a8b436219/'},
]