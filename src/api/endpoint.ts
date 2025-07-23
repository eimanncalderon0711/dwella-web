import type { IAuthUrls } from "../interfaces/endpoints/IAuthUrls";
import type { IInquiriesUrls } from "../interfaces/endpoints/IInquiriesUrls";
import type { INoticesUrls } from "../interfaces/endpoints/INoticesUrls";
import type { IPaymentUrls } from "../interfaces/endpoints/IPaymentUrls";
import type { IUserUrls } from "../interfaces/endpoints/IUserUrls";


export const API_BASE_URL = "http://127.0.0.1:8000/api";


// Url endpoints for authentication to get token and refresh tokens
export const AUTH_URLS: IAuthUrls = {
  LOGIN: `${API_BASE_URL}/token/`,
  REFRESH_TOKEN: `${API_BASE_URL}/token/refresh/`,
};


// Url endpoints for users. Create user, Retrieve user, Retrieve users, Update user, Delete user  
export const USER_URLS: IUserUrls = {
  GET_USERS: `users`,
  CREATE_USER: `register/`,
  GET_USER_BY_ID: (id:number | string) => `/user/${id}/`,
  UPDATE_USER_BY_ID: (id: number | string) => `/user/update/${id}/`,
  DELETE_USER_BY_ID: (id: number | string) => `/user/${id}/delete/`,
}


// Url endpoints for payments. Create payment, Retrieve payment, Retrieve payments, Update payment, Delete Payment
export const PAYMENT_URLS: IPaymentUrls = {
  GET_PAYMENTS: `${API_BASE_URL}/payments`,
  CREATE_PAYMENT: `${API_BASE_URL}/payment/`,
  GET_PAYMENT_BY_ID: (id: string) => `${API_BASE_URL}/payment/${id}/`,
  UPDATE_PAYMENT_BY_ID: (id: string) => `${API_BASE_URL}/payment/${id}/update/`,
  DELETE_PAYMENT_BY_ID: (id: string) => `${API_BASE_URL}/payment/${id}/delete/`,
}


// Url endpoints for inquiries. Create inquiry, Retrieve inquiry, Retrieve inquiries, Update inquiry, Delete inquiry
export const INQUIRIES_URLS: IInquiriesUrls = {
  GET_INQUIRIES: `${API_BASE_URL}/inquiries`,
  CREATE_INQUIRY:`${API_BASE_URL}/inquiry/`,
  GET_INQUIRY_BY_ID: (id:string) => `${API_BASE_URL}/inquiry/${id}/`,
  UPDATE_INQUIRY_BY_ID: (id:string) => `${API_BASE_URL}/inquiry/${id}/update/`,
  DELETE_INQUIRY_BY_ID: (id: string) => `${API_BASE_URL}/inquiry/${id}/delete/`
}


// Url endpoints for notices. Create notice, Retrieve notice, Retrieve notices, Update notice, Delete notice
export const NOTICES_URLS: INoticesUrls = {
  GET_NOTICES: `${API_BASE_URL}/notices`,
  CREATE_NOTICE: `${API_BASE_URL}/notice/`,
  GET_NOTICE_BY_ID: (id:string) => `${API_BASE_URL}/notice/${id}/`,
  UPDATE_NOTICE_BY_ID: (id:string) => `${API_BASE_URL}/notice/${id}/update/`,
  DELETE_NOTICE_BY_ID: (id:string) => `${API_BASE_URL}/notice/${id}/delete/`
}
