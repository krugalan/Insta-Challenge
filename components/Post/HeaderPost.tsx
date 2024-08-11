import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import { HeaderPostType } from '@/services/typings/postsTypings';
import { Image } from 'expo-image';

export const HeaderPost = ({ data }: { data: HeaderPostType }) => {
    const { avatar, name, location } = data;
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    return (
        <ThemedView style={styles.container}>
            {loading && <ActivityIndicator color="blue" />}
            {error && <ThemedText>Error loading image</ThemedText>}
            <Image
                source={{ uri: avatar }}
                style={styles.avatar}
                onLoad={() => setLoading(false)}
                onError={(err) => {
                    console.log(err)
                    setLoading(false);
                    setError(true);
                }}
            />
            <ThemedView style={styles.textContainer}>
                <ThemedText style={styles.name}>{name}</ThemedText>
                <ThemedText style={styles.location}>{location}</ThemedText>
            </ThemedView>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    location: {
        fontSize: 14,
        color: 'gray',
    },
});
