export interface ExternalProject {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface SanitizedGithub {
  username: string;
}

export interface SanitizedSocial {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  dribbble?: string;
  behance?: string;
  medium?: string;
  dev?: string;
  website?: string;
  phone?: string;
  email?: string;
  mastodon?: string;
  researchGate?: string;
  reddit?: string;
  threads?: string;
  youtube?: string;
  udemy?: string;
  skype?: string;
  telegram?: string;
  stackOverflow?: string;
}

export interface SanitizedExperience {
  company: string;
  position: string;
  from: string;
  to: string;
  companyLink?: string;
}

export interface SanitizedEducation {
  institution: string;
  degree: string;
  from: string;
  to: string;
}

export interface SanitizedCertification {
  name: string;
  body?: string;
  year: string;
  link: string;
}

export interface SanitizedBlog {
  source?: string;
  username: string;
  limit: number;
  display: boolean;
}

export interface SanitizedExternalProject extends ExternalProject {}

export interface ThemeConfig {
  defaultTheme: string;
  disableSwitch: boolean;
  respectPrefersColorScheme: boolean;
  displayAvatarRing: boolean;
  themes: string[];
  customTheme?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    neutral?: string;
    'base-100'?: string;
    '--rounded-box'?: string;
    '--rounded-btn'?: string;
  };
}

export interface SanitizedConfig {
  github: SanitizedGithub;
  base: string;
  projects: {
    github: {
      display: boolean;
      header: string;
      mode: string;
      automatic: {
        sortBy: string;
        limit: number;
        exclude: {
          forks: boolean;
          projects: string[];
        };
      };
      manual: {
        projects: string[];
      };
    };
    external: {
      header: string;
      projects: ExternalProject[];
    };
  };
  interests: {
    shows: {
      header: string;
      display: boolean;
      items: {
        title: string;
        description: string;
        imageUrl: string;
        link: string;
        platform: string;
      }[];
    };
  };
  seo: {
    title: string;
    description: string;
    imageURL: string;
  };
  social: SanitizedSocial;
  resume: {
    fileUrl: string;
  };
  skills: string[];
  experiences: SanitizedExperience[];
  educations: SanitizedEducation[];
  certifications: SanitizedCertification[];
  publications: {
    title: string;
    conferenceName?: string;
    authors?: string;
    link: string;
    description: string;
  }[];
  blog: SanitizedBlog;
  googleAnalytics: {
    id: string;
  };
  hotjar: {
    id: string;
    snippetVersion: number;
  };
  themeConfig: ThemeConfig;
  footer?: string;
  enablePWA?: boolean;
} 
