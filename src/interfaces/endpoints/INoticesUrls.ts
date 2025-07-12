export interface INoticesUrls{
    GET_NOTICES: string,
    CREATE_NOTICE: string,
    GET_NOTICE_BY_ID: (id: string) => string,
    UPDATE_NOTICE_BY_ID: (id: string) => string,
    DELETE_NOTICE_BY_ID: (id: string) => string,
}