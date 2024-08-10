import RequestService from "./RequestService"
import { PostResponse } from "./typings/potsTypings"

class PostService {
    public static async getPosts(): Promise<PostResponse | Error> {
        const response = await RequestService.get<PostResponse | Error>({ endpoint: '/posts' })
        return (response instanceof Error) ? new Error("There is an error. Try again later.") : response;
    }
}

export default PostService