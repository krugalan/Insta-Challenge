import { AxiosError } from "axios";
import HttpClient from './HttpClient'

export type RequestPromise<TResponse> = Promise<TResponse | AxiosError<TResponse | TData>>
type TData = {}

// TODO: Define other necessary methods POST, PATCH, DELETE, etc
class RequestService {
    public static async get<TResponse = {}>({
        endpoint,
        params,
    }: {
        endpoint: string,
        params?: URLSearchParams | string,
    }): Promise<any | AxiosError<any | TData>> {
        const queryParams = params ? params.toString() : "";
        const urlWithParams = `${endpoint}${queryParams ? `?${queryParams}` : ""}`;

        // TODO: Define here Headers logic, Token, etc
        console.log(HttpClient)
        const response = await HttpClient.get(urlWithParams)
        if (response instanceof AxiosError) {
            return response
        }
        else return response
    }
}

export default RequestService
