export type PostType = HeaderPostType & {
    createdAt: string;
    description: string;
    likes: number;
    image: string;
    comments: number;
    liked: boolean;
    saved: boolean;
    id: string;
}

export type HeaderPostType = {
    name: string;
    avatar: string;
    location: string;
}


export type PostResponse = { data: PostType[]; }