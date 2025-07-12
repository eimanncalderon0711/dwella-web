export interface IInquiriesUrls{
    GET_INQUIRIES: string,
    CREATE_INQUIRY: string,
    GET_INQUIRY_BY_ID: (id: string) => string,
    UPDATE_INQUIRY_BY_ID: (id: string) => string,
    DELETE_INQUIRY_BY_ID: (id: string) => string,
}