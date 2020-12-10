import {
    SET_IN_DATABASE_BY_PATH,
} from './actions/actionsTypes';
//store
export interface IData {
    users: IUsers,
    posts: IPosts,
    post: IPost,
    comments: IComments
}
export interface IUsers {
    id: number,
    name: string,
    email: string,
    gender: string,
    status: string,
    created_at: string,
    updated_at: string,
}
export interface IPosts {
    id: number,
    user_id: number,
    title: string,
    body: string,
    created_at: string,
    updated_at: string,
}
export interface IPost {
    id: number,
    user_id: number,
    title: string,
    body: string,
    created_at: string,
    updated_at: string,
}
export interface IComments {
    id: number,
    post_id: number,
    name: string,
    email: string,
    body: string,
    created_at: string,
    updated_at: string,
}

//actions
interface ISetDatabase {
    type: typeof SET_IN_DATABASE_BY_PATH,
    data: IData,
    path: string
}

export type ActionsTypes = ISetDatabase;