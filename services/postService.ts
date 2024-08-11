import RequestService from "./RequestService"
import { PostResponse } from "./typings/postsTypings"

class PostService {
    public static async getPosts(): Promise<PostResponse> {
        return await RequestService.get<PostResponse>({ endpoint: '/posts' })
    }
}

export default PostService