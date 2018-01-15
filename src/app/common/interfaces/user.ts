import { IPost } from './post';
import { IComment } from './comment';

export interface IUser {
    name: string;
    avatarImageUrl: string;
    id?: number;
    googleId?: string;
    posts: IPost[];
    comments: IComment[];
}
