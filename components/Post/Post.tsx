import React from 'react';
import { StyleSheet } from 'react-native';
import { PostType as PostType } from '@/services/typings/postsTypings';
import { HeaderPost } from './HeaderPost';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import { Image } from 'expo-image';
import { ActionsPost } from './ActionsPost';

interface PostProps {
    post: PostType;
}

export const Post: React.FC<PostProps> = ({ post }) => {
    const { name, avatar, location, image, likes, liked, comments, saved, description } = post;
    const headerPostData = { name, avatar, location };

    return (
        <ThemedView style={styles.container}>
            {avatar && <HeaderPost data={headerPostData} />}

            <Image source={{ uri: image }} style={styles.image} />

            <ActionsPost saved={saved} liked={liked} />

            <ThemedText style={styles.description}>{description}</ThemedText>

            {location && <ThemedText style={styles.location}>{location}</ThemedText>}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    image: {
        width: '100%',
        height: 300,
        marginBottom: 10,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    description: {
        marginBottom: 5,
    },
    location: {
        color: 'gray',
    },
});
