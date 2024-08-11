import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { ActionsPostType } from '@/services/typings/postsTypings';
import { ThemedView } from '../ThemedView';
import { TabBarIcon } from '../navigation/TabBarIconNav';

export const ActionsPost = ({ saved, liked }: ActionsPostType) => {
    const [savedPost, setSavedPost] = useState(saved);
    const [likePost, setLikePost] = useState(liked)

    const handleChangeLike = () => setLikePost(!likePost);
    const handleChangeSave = () => setSavedPost(!savedPost);

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.leftActions}>
                <TabBarIcon family='FontAwesome' size={26} name={liked ? 'heart' : 'heart-o'} color='black' onPress={handleChangeLike} />
                <TabBarIcon family='FontAwesome' size={26} name={'comment-o'} color='black' />
                <TabBarIcon family='FontAwesome' size={26} name={'send-o'} color='black' />
            </ThemedView>
            <ThemedView style={styles.rightActions}>
                <TabBarIcon family='FontAwesome' size={26} name={saved ? "bookmark" : "bookmark-o"} color='black' onPress={handleChangeSave} />
            </ThemedView>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    leftActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    rightActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    likes: {
        marginHorizontal: 8,
    },
    comments: {
        marginHorizontal: 8,
    },
});
