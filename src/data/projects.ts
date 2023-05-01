

export type Project = {
  id:number,
  image:string,
  title:string,
  desc:string,
  github:string,
  demo:string
}

export const projectsData:Project[] = [
    {
      id: 1,
      image: "/images/projects/tavenli.png",
      title: "VeganizeIt",
      desc: "Single-page web app for scanning barcodes and searching vegan-friendly products. Built with React.js, Express.js & MongoDB",
      github: "https://github.com/Daniel1231234/veganizeIt",
      demo: "https://veganizeit.onrender.com/home",
    },
    {
      id: 2,
      image: "/images/projects/bmyguest.png",
      title: "BmyGuest",
      desc: "A single-page, full stack web application (SPA) inspired by Airbnb where users can view, book, and search for listings by location. Built with Vue.js, Express.js, SASS & MongoDB",
      github: "https://github.com/Daniel1231234/bmyguest-front",
      demo: "https://bmyguest.onrender.com/#/",
    },
    {
      id: 3,
      image: "/images/projects/whosapp.png",
      title: "WhosApp",
      desc: "A real-time chat application built with React.js, TypeScript, Nest.js, Socket.io, JWT, & MongoDB",
      github: "https://github.com/Daniel1231234/whosapp-frontend",
      demo: "https://whosapp.onrender.com/",
    },
    {
      id: 4,
      image: "/images/projects/sophie.png",
      title: "Sophie-website",
      desc: "A modern portfolio for a psychotherapist built with React.js and MUI that offers a sleek and interactive user experience while presenting the therapist's services and qualifications in a clear and concise manner.",
      github: "https://github.com/Daniel1231234/sophie-website",
      demo: "https://daniel1231234.github.io/sophie-website/",
    },
  ]