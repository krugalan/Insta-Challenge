import React, { useState } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

import { ActionsPostType } from '@/services/typings/postsTypings';
import { ThemedView } from '../ThemedView';
import { TabBarIcon } from '../navigation/TabBarIconNav';
import { Colors } from '@/constants/Colors';
import { PressableTabBarIconHOC } from '../PressableTabBarIconHOC';

const COLOR_ICON_ACTION = 26;

export const ActionsPost = ({ saved, liked }: ActionsPostType) => {
    const colorScheme = useColorScheme();

    const [savedPost, setSavedPost] = useState(saved);
    const [likePost, setLikePost] = useState(liked)

    const handleChangeLike = () => setLikePost(!likePost);
    const handleChangeSave = () => setSavedPost(!savedPost);

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.leftActions}>
                <PressableTabBarIconHOC
                    family='FontAwesome'
                    size={COLOR_ICON_ACTION}
                    color={Colors[colorScheme ?? 'light'].tint}
                    name={likePost ? 'heart' : 'heart-o'}
                    actionPress={handleChangeLike}
                />
                <TabBarIcon family='FontAwesome' size={COLOR_ICON_ACTION} color={Colors[colorScheme ?? 'light'].tint} name={'comment-o'} />
                <TabBarIcon family='FontAwesome' size={COLOR_ICON_ACTION} color={Colors[colorScheme ?? 'light'].tint} name={'send-o'} />
            </ThemedView>
            <ThemedView style={styles.rightActions}>
                <PressableTabBarIconHOC
                    family='FontAwesome'
                    size={COLOR_ICON_ACTION}
                    color={Colors[colorScheme ?? 'light'].tint}
                    name={savedPost ? "bookmark" : "bookmark-o"}
                    actionPress={handleChangeSave}
                />
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
        paddingVertical: 6,
    },
    leftActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
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
