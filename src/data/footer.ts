import { Icon } from "@/cmps/Icons";

interface SocialsData {
    href: string;
    Icon: Icon;
  }
  
  export const socialsData: SocialsData[] = [
    {
      href: "https://www.facebook.com/daniel.shechter.5/",
      Icon: "FaFacebookF",
    },
    {
      href: "https://github.com/Daniel1231234",
      Icon: "BsGithub",
    },
    {
      href: "https://www.linkedin.com/in/daniel-shalem-990429211/",
      Icon: "BsLinkedin",
    },
  ]
  
  interface Permalinks {
    href:string
    title:string
  }
  
  export const permalinks:Permalinks[] = [
    {
      href:'#header',
      title:'Home'
    },
    {
      href:'#about',
      title:'About'
    },
    {
      href:'#skills',
      title:'Skills'
    },
    {
      href:'#projects',
      title:'Projects'
    },
    {
      href:'#contact',
      title:'Contact'
    },
  ]