import React from 'react';
import { StyleSheet } from 'react-native';
import { PostType as PostType } from '@/services/typings/postsTypings';
import { HeaderPost } from './HeaderPost';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import { Image } from 'expo-image';
import { ActionsPost } from './ActionsPost';
import { PostLikes } from './PostLikes';
import { FirstCommentPreview } from './FirstCommentPreview';

interface PostProps {
    post: PostType;
}
// TODO: Define how get this props by API
const userFirstComment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
const userCompleteFirstComment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export const Post: React.FC<PostProps> = ({ post }) => {
    const { name, avatar, location, image, liked, likes, saved, description, comments } = post;
    const headerPostData = { name, avatar, location };

    return (
        <ThemedView style={styles.container}>
            {avatar && <HeaderPost data={headerPostData} />}

            <Image source={{ uri: image }} style={styles.image} />

            <ActionsPost saved={saved} liked={liked} />

            <PostLikes likes={likes} />

            <ThemedView style={styles.content}>
                <FirstCommentPreview name={name} userFirstComment={userFirstComment} userCompleteFirstComment={userCompleteFirstComment} />
            </ThemedView>

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
    content: {
        paddingHorizontal: 16,
        paddingVertical: 4,
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
