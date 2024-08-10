import { Link } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

// TODO: Implement feature and components related to Terms
/**
 * Component for Terms with information
 */
export default function Terms() {
    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ThemedText>
                Terms & Conditions
            </ThemedText>
            <Link href={'/sign-up'}>
                Sign Up
            </Link>
        </ThemedView>
    );
}
