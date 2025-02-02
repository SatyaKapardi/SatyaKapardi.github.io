// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'SatyaKapardi', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['SatyaKapardi/Banking-Application', 'SatyaKapardi/boAt','SatyaKapardi/Health-Insurance-Claim-Fraud-Detection','SatyaKapardi/Flight_Booking_Service'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Coursework Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Renewable Energy Source Analysis',
          description:
            'The renewable energy sector faces challenges in ensuring a constant balance between power supply and demand while minimizing carbon emissions. This project will analyze real-time and historical data to provide insights into renewable energy performance, focusing on curtailment scenarios and carbon intensity variations across regions. The goal is to enable better decision-making for energy-efficient computing and grid optimization.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/SatyaKapardi/Renewable-Energy-Source-Analysis',
        },
        {
          title: 'Economic and Market Cycle Prediction through Macroeconomic Analysis',
          description:
            'The goal of this project is to analyze and model the relationships between macroeconomic indicators and market cycles. We are using historical economic data, including interest rates, inflation rates, and unemployment data, to predict periods of market expansion and recession. These periods of market regimes are often influenced by various economic variables, and the objective is to identify the most significant indicators for predicting market cycles.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/cs418-fa24/project-check-in-team-6/',
        },
      ],
      
    },

  },
  seo: {
    title: 'Portfolio of Satya Kapardi',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'satyakapardi',
    website: 'https://www.arifszn.com',
    phone: '+1 (872) 288-5588',
    email: 'bskapardi2002@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'Spring Boot',
    'JavaScript',
    'React.js',
    'Node.js',
    'C++',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Git',
    'Docker',
    'Software Testing',
    'CSS',
    'Tailwind',
    'Machine Learning'
  ],
  experiences: [
    {
      company: 'Oracle',
      position: 'Software Developer Intern',
      from: 'Janurary 2024',
      to: 'July 2024',
      companyLink: 'https://oracle.com',
    },
    {
      company: 'Scale.Ai',
      position: 'Freelance Competitive Coder AI Trainer',
      from: 'July 2023',
      to: 'December 2023',
      companyLink: 'https://scale.ai',
    },
    {
      company: 'Ignitus',
      position: 'Machine Learning Intern',
      from: 'March 2023',
      to: 'June 2023',
      companyLink: 'https://ignitus.com',
    },
  ],
  certifications: [
    {
      name: 'Amazon ML Summer School',
      year: 'August 2022',
      link: 'https://example.com',
    },
    {
      name: 'AWS Cloud Foundations',
      year: 'November 2023',
      link: 'https://example.com',
    },
    {
      name: 'Neural Networks and Deep Learning',
      body: 'DeepLearning.AI',
      year: 'October 2021',
      link: 'https://example.com',
    },

  ],
  educations: [
    {
      institution: 'University of Illinois Chicago',
      degree: 'Master of Science in Computer Science',
      from: '2024',
      to: 'Present',
    },
    {
      institution: 'Osmania University',
      degree: 'Bachelor of Science in Computer Science',
      from: '2020',
      to: '2024',
    },
  ],
  publications: [
    {
      title: 'A study about Content-Based image Retrieval using features from Deep Neural Networks',
      conferenceName: '2023 IEEE International Conference on Circuit Power and Computing Technologies',
      authors: 'Srisatya Kapardi Budi, Dheeraj Reddy M, Srikrushna B',
      link: 'https://ieeexplore.ieee.org/document/10421161',
      description:
        'This paper presents a comparative study on Content-Based Image Retrieval (CBIR) using features extracted from deep convolutional neural networks (CNNs). CBIR is a technique for retrieving images based on their content rather than metadata or text annotations. The study evaluates the effectiveness of deep learning-based feature extraction compared to traditional hand-crafted features in improving image retrieval performance. Experiments were conducted on radiology and meteorological datasets to assess the ability of pre-trained CNN models in identifying relevant images. The findings suggest that deep learning-based approaches enhance retrieval efficiency and offer a more robust representation of image content.',
    },
    {
      title: 'A study of Deep Learning Algorithm for Brain Computer Interface Cinematics',
      conferenceName: '2022 IEEE International Conference on Contemporary Computing and Informatics',
      author: 'Srisatya Kapardi Budi',
      link: 'https://ieeexplore.ieee.org/document/10072540',
      description:
        'This study investigates the application of deep learning algorithms in brain-computer interface (BCI) technology to analyze emotional responses through EEG sensor data. By examining how brainwave patterns correlate with different emotional states, the research aims to offer valuable insights into how emotions can be monitored and understood in real time. While the primary focus is on emotional response analysis, the potential applications extend beyond just entertainment. In the field of mental health care, this approach could be utilized to track the effects of medication on patients’ emotional states, providing more precise data for understanding mood fluctuations. Such analysis could support the development of more personalized treatment strategies, improving outcomes for patients.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/SatyaKapardi"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
