import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Amitay Soffer',
  subtitle: 'Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-pic.jpg',
  paragraphOne: 'Not so long ago, I was about to start my masters in psychology in Israel. Until then, my working experience included mentoring and treating young adults in hospitals, boarding schools and special programs. As fulfilling as that was, I felt I am not doing what I\'\m supposed to do.It was around that time that I realized I needed a change.',
  paragraphTwo: 'I spent the last several years working in the ad-tech industry, successfully managing and implementing various products whilst extensively using Javascript, HTML and CSS. About six months ago I left my comfort zone in order to pursue my dream of becoming a full time web developer. Since then I joined a unique coding mentorship program in which I am learning new things every single day.',
  paragraphThree: 'Today I live in the UK, working hard every day to polish my skills and to write better and cleaner code. So, if you know of any exciting opportunities that you feel would be a good fit please feel free to let me know.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lepoint.png',
    title: 'hey there',
    info: 'rock star',
    info2: 'baby',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fantazy-stocks.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'snake-game.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'twitter-showcase.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
