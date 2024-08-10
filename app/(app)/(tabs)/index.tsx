import { useSession } from '@/utils/ctx';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Index() {
    const { signOut } = useSession();
    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ThemedText onPress={signOut}>
                Posts
            </ThemedText>
        </ThemedView>
    );
}
