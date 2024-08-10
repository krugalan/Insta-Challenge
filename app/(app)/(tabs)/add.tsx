import { useSession } from '@/utils/ctx';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function Add() {
    const { signOut } = useSession();
    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ThemedText onPress={signOut}>
                Add
            </ThemedText>
        </ThemedView>
    );
}
