import { IUser } from './user';

export interface IComment {
    id?: number;
    postId: number;
    userId: number;
    comment: string;
    date: string;
    user?: IUser;
}
