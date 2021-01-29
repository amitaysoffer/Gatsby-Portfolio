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
  name: 'Amitay Soffer.',
  subtitle: 'I am a web developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-pic.jpg',
  paragraphOne:
    'Hi, I am a developer with a thorough knowledge of JavaScript, React and Node.js. I have a host of projects to demonstrate that, along side hands on experience developing various products to clients and internal tools.',
  paragraphTwo:
    'I spent the last several years working in the ad-tech industry, successfully managing and implementing various products whilst extensively using Javascript, HTML and CSS. About six months ago I left my comfort zone in order to pursue my dream of becoming a full time web developer. Since then I joined a unique coding mentorship program in which I am learning new things every single day.',
  paragraphThree:
    "Today I live in the UK, working hard every day to polish my skills and to write better and cleaner code. If not coding, I'm probably in the football pitch playing or watching a game. Or, practicing my long journey of mastering the French language. Mais retournons á nos moutons, hein?",
  resume: 'https://drive.google.com/file/d/1yW4NgDhNMcWdqZ69ocK9OW4waT-Fw-d0/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'taboola.png',
    title: 'Taboola 2017-2020',
    info:
      'At Taboola I started as an Impl Dev and advanced to a Solution Engineer role. I Oversaw the technical integrations of web and SDK code with high profile publishers from pre-sales stages to launch. I was also heavily involved with the development side- working exclusively with Javascript, HTML and CSS to find creative solutions for top tier clients.',
    info2: '',
    url: 'https://www.taboola.com/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fantazy-stocks.png',
    title: 'Fantazy Stocks',
    info:
      'A web application that utilizes the IEX Cloud API to retrieve stock data and simulate a stock trading application. It was developed using React JS, Node.js, PostgresSQL and styled with Bootstrap.',
    info2: 'React | Node.js | PostgresSQL | Bootstrap | Heroku',
    url: 'https://trading-stocks-amitai.herokuapp.com/',
    repo: 'https://github.com/amitaysoffer/stock-trading-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'snake-game.png',
    title: 'Snake Game',
    info:
      'A new version of the classic Snake game with cool new features, sounds and LS setup. Trust me, you are going to want to try this one. Just make sure your speakers are switched on.',
    info2: 'Javascript | HTML | CSS',
    url: 'https://amitaysoffer.github.io/snake-game/',
    repo: 'https://github.com/amitaysoffer/snake-game', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'twitter-showcase.png',
    title: 'Twitter Showcase',
    info:
      "This web app utilizes Twitter's APIs to allow users to search recent tweets of their favorite people, whilst not logging in to twitter.com. Users may also search for random tweets.",
    info2: 'React | Node.js | HTML | CSS | Heroku',
    url: 'https://as-twitter-showcase.herokuapp.com/',
    repo: 'https://github.com/amitaysoffer/twitter-showcase', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'amitaysof@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/amitaysoffer/pens/popular',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/amitay-soffer-137304151/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/amitaysoffer',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
