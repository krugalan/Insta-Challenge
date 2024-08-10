import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useQuery } from '@tanstack/react-query';
import PostService from '@/services/postService';
import { ActivityIndicator } from 'react-native';

export default function Index() {
    const getPosts = async () => await PostService.getPosts();

    const { isFetching, data, error } = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts
    })

    if (isFetching) {
        return (
            <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color='blue' />
            </ThemedView>
        )
    }

    if (error) {
        return (
            <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ThemedText>
                    Error
                </ThemedText>
            </ThemedView>
        )
    }

    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ThemedText>
                {JSON.stringify(data, null, 4)}
            </ThemedText>
        </ThemedView>
    );
}
