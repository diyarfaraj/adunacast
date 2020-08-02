import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { StyleSheet, TextInput } from 'react-native';
import { theme } from '../../constants/theme.js'

const SearchScreen = () => {
    return (
        <Box f={1} bg="white">
            <Box h={50} w="100%" mt="sm" px="sm">
                <TextInput style={s.input} placeholder="Search podcasts" selectionColor={theme.color.purpleDarkest} />
            </Box>
        </Box>
    )
}
//15.16 min -------------------------
const s = StyleSheet.create({
    input: {
        height: 40,
        flex: 1,
        backgroundColor: theme.color.greyLightest,
        borderRadius: 10,
        paddingHorizontal: theme.space.sm,
        fontSize: theme.text.size.md
    }
})

export default SearchScreen;
