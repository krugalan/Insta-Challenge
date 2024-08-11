export type PostType = HeaderPostType & ActionsPostType & {
    id: string;
    createdAt: string;
    description: string;
    image: string;
    comments: number;
    likes: number;
}

export type HeaderPostType = {
    name: string;
    avatar: string;
    location: string;
}

export type ActionsPostType = {
    liked: boolean;
    saved: boolean;

}

export type PostResponse = { data: PostType[]; }