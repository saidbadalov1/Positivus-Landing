import { CaseStudiesTypes, NavbarTypes, Partners, ProcessCardState, Services, TeamTypes, TestimonialsTypes } from '../types/types';


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

export const processData: ProcessCardState[] = [
  {id: 1, title: 'Consultation', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'},
  {id: 2, title: 'Research and Strategy Development', description: 'Research and Strategy Development involves thorough investigation and analysis to inform effective decision-making. It encompasses data gathering, trend identification, and competitive analysis. Successful strategies are then formulated based on insights gained, enabling organizations to achieve goals, optimize resources, and adapt to evolving market dynamics.'},
  {id: 3, title: 'Implementation', description: 'Implementation refers to the practical execution of strategies and plans derived from research and analysis. It involves translating ideas into actions, deploying resources, and monitoring progress to achieve desired outcomes.'},
  {id: 4, title: 'Monitoring and Optimization', description: 'Monitoring and Optimization involve continuous tracking and analysis of processes, strategies, and performance metrics. Adjustments and refinements are made to ensure efficient and effective operations for sustained success.'},
  {id: 5, title: 'Reporting and Communication', description: 'Reporting and Communication involve conveying insights, outcomes, and progress resulting from strategies and actions. Clear and transparent communication fosters alignment, informed decision-making, and stakeholder engagement.'},
  {id: 6, title: 'Continual Improvement', description: 'Continual Improvement is an ongoing process aimed at enhancing systems, processes, and outcomes. It involves identifying areas for enhancement, implementing changes, and consistently iterating to achieve higher efficiency, effectiveness, and quality over time.'},
]

export const testimonialsData: TestimonialsTypes[] = [
  {id: 1, name: 'John Smith', title: 'John Smith Marketing Director at XYZ Corp', text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'},
  {id: 2, name: 'John Smith', title: 'John Smith Marketing Director at XYZ Corp', text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'},
  {id: 3, name: 'John Smith', title: 'John Smith Marketing Director at XYZ Corp', text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'},
  {id: 4, name: 'John Smith', title: 'John Smith Marketing Director at XYZ Corp', text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'},
  {id: 5, name: 'John Smith', title: 'John Smith Marketing Director at XYZ Corp', text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'},
  {id: 6, name: 'John Smith', title: 'John Smith Marketing Director at XYZ Corp', text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'},
]