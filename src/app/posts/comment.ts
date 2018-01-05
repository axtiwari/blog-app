import { IUser } from './user';

export interface IComment {
    id: number;
    postId: number;
    userId: number;
    comment: string;
    user: IUser;
}
