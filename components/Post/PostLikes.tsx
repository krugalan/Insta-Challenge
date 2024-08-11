import React from 'react'
import { ThemedText } from '../ThemedText'
import { ThemedView } from '../ThemedView'
import { StyleSheet } from 'react-native'

type PostLikesProps = {
    likes: number
}

export const PostLikes = ({ likes }: PostLikesProps) => {
    const formattedLikes = likes.toLocaleString();

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.likes}>
                {formattedLikes} likes
            </ThemedText>
        </ThemedView>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 4,
    },
    likes: {
        fontWeight: 'bold',
        fontSize: 14
    }
});
