export interface AuthProps {
  onLogin: (username: string, password: string) => void;
}
export interface Person {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description: string;
  profession: string;
  enProfession: string;
}

export interface Review {
  id: number;
  title: string;
  type: string;
  review: string;
  author: string;
}

export interface Movie {
  name: string;
  poster: {
    url: string;
  };
  rating: {
    kp?: number;
    imdb?: number;
    filmCritics?: number;
    russianFilmCritics?: number;
  };
  id: number;
  shortDescription?: string;
  backdrop?: {
    url: string;
  };
}

export interface Poster {
  url: string;
  id: string;
}
export interface NavBarProps {
  onYearChange: (years: { start?: string; end?: string }) => void;
  onCountryChange: (country: string | null) => void;
  onAgeRatingChange: (rating: string | null) => void;
}
