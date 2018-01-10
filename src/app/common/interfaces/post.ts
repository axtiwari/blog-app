import { IComment } from './comment';

export interface IPost {
    userId: number;
    id?: number;
    topic: string;
    date: string;
    descriptionHtml: string;
    hashtags: string[];
}
