import { useSession } from '@/utils/ctx';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedLink } from '@/components/ThemedLink';

// TODO: Implement feature and components related to SignUp
/**
 * Component for sign up with user form or Auth2.0 or Google Sign In or Firebase, etc.
 */
export default function SignUp() {
    const { signIn } = useSession();
    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ThemedText>
                Sign Up
            </ThemedText>
            <ThemedText
                onPress={signIn}>
                Sign Up
            </ThemedText>
            <ThemedLink href={'/sign-in'}>
                Sign In
            </ThemedLink>
        </ThemedView>
    );
}
