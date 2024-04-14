export interface Movie {
  id: number;
  name: string;
  shortDescription?: string;
  rating?: {
    kp?: number;
    imdb?: number;
  };
  poster: {
    url: string;
  };
}
export interface FilterState {
  yearFilter: {
    start?: string;
    end?: string;
  };
  countryFilter: string | null;
  ageRatingFilter: string | null;
}

export interface Genre {
  name: string;
}

export interface Country {
  name: string;
}

export interface Movies {
  id: number;
  name: string;
  shortDescription: string;
  poster: {
    url: string;
  };
  rating: {
    kp: number;
    imdb: number;
  };
  genres: Genre[];
  countries: Country[];
}

export interface SearchContextProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: SearchResults | null;
  setSearchResults: (results: SearchResults) => void;
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  resetFilters: () => void;
  updateHistory: (query: string) => void;
  suggestions: string[];
  setSuggestions: (suggestions: string[]) => void;
}

export interface SearchResults {
  docs: Movies[];
}

export interface ReviewStyles {
  [key: string]: {
    background: string;
    textColor: string;
  };
}

export interface EpisodeCardProps {
  episode: {
    name: string;
    still: {
      url: string;
    };
    number: number;
  };
}

export interface Episode {
  number: number;
  name: string;
  duration: number;
  still: {
    url: string;
  };
}

export interface Season {
  id: string;
  number: number;
  name: string;
  episodes: Episode[];
}

export interface SeasonsListProps {
  seasons: Season[];
}
