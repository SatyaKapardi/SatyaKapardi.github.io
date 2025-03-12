import { ExternalProject } from './external-project';

export interface SanitizedConfig {
  github: {
    username: string;
  };
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
} 