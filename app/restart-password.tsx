import { Link } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

// TODO: Implement feature and components related to RestartPassword
/**
 * Component for restart password with Password and Confirm Password
 */
export default function RestartPassword() {
    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ThemedText>
               Restart Password
            </ThemedText>
            <Link href={'/sign-in'}>
                Sign In
            </Link>
        </ThemedView>
    );
}
