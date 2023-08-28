import { EpisodesType } from "./EpisodesType";

export interface SeriesWithSeasonType {
    Title: string;
    Season: string;
    totalSeasons: string;
    Episodes: EpisodesType[];
    Response: string;
} 
