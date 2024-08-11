import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useQuery } from '@tanstack/react-query';
import PostService from '@/services/postService';
import { ActivityIndicator, FlatList } from 'react-native';
import { PostType } from '@/services/typings/postsTypings';
import { Post } from '@/components/Post/Post';

export default function Index() {
    const getPosts = async () => await PostService.getPosts();

    const query = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts
    })

    if (query.isFetching) {
        return (
            <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color='blue' />
            </ThemedView>
        )
    } else if (query.error || (query.data instanceof Error)) {
        return (
            <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ThemedText>
                    Error
                </ThemedText>
            </ThemedView>
        )
    } else {
        const posts: PostType[] = query?.data?.data || [];

        return (
            <FlatList
                data={posts}
                renderItem={({ item }: { item: PostType }) => <Post post={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 0 }}
                onEndReachedThreshold={0.5}  // Umbral para disparar la carga de más elementos
                ListFooterComponent={query.isFetching ? <ActivityIndicator color="blue" /> : null}
            />
        );
    }
}
