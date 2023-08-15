export interface NavbarTypes{
  name: string,
  url: string
}

export interface Partners{
  id: number,
  title: string,
  url: string
}

export interface SectionTitleTypes{
  title: string,
  description: string
} 

export interface Services{
  id: number,
  title: string[],
  url: string,
  bgColor: string,
  textBgColor: string,
  image: string
} 

export interface CaseStudiesTypes {
  text: string,
  url: string
}

export interface TeamTypes{
  id: number,
  name: string,
  title: string,
  experience: string,
  avatar: string,
  linkedin: string
}