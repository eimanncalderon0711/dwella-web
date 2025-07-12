export interface IUserUrls{
    GET_USERS: string
    CREATE_USER: string,
    GET_USER_BY_ID: (id:string) => string,
    UPDATE_USER_BY_ID: (id: string) => string,
    DELETE_USER_BY_ID: (id: string) => string
}