import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ThemedText } from '../ThemedText';

type FirstCommentPreviewProps = {
    name: string;
    userFirstComment: string;
    userCompleteFirstComment: string;
};

const LENGTH_FIRST_COMMENT = 40;

export const FirstCommentPreview = ({ name, userFirstComment, userCompleteFirstComment }: FirstCommentPreviewProps) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => setExpanded(!expanded);

    const commentToShow = expanded ? userCompleteFirstComment : userFirstComment;

    return (
        <View style={styles.container}>
            <ThemedText>
                <ThemedText style={styles.userName}>{name} </ThemedText>
                <ThemedText style={styles.text}>{commentToShow}</ThemedText>

                {userFirstComment.length > LENGTH_FIRST_COMMENT && !expanded ? (
                    <Pressable style={styles.seeMoreContainer} onPress={toggleExpanded}>
                        <Text style={styles.seeMore}>...Ver más</Text>
                    </Pressable>
                ) :
                    <Pressable style={styles.seeMoreContainer} onPress={toggleExpanded}>
                        <Text style={styles.seeMore}>...Ver menos</Text>
                    </Pressable>}
            </ThemedText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-end' },
    text: { fontSize: 14 },
    userName: { fontWeight: 'bold' },
    seeMoreContainer: { bottom: 0, marginTop: 8, paddingTop: 8, justifyContent: 'flex-end', alignSelf: 'flex-end' },
    seeMore: { fontSize: 14, bottom: 0, marginTop: 8 }
});
