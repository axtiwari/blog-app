import { IComment } from './comment';

export interface IPost {
    personId: number;
    postId: number;
    topic: string;
    date: string;
    descriptionHtml: string;
    pictureUrl: string[];
    hashtags: string[];
    comments: IComment[];
}
