import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    markdown: '# Here\'s a title\n## Here\'s a smaller title\nLook at this code:\n> ```\n> if(thing.isTrue)\n>   doSomething();\n> ```\n\nYou can also show code inline: `let var = \'You can also show code inline\';`\n\nHere is a link to [Twitter](https://twitter.com)\n\nMarkup is good for **multiple** reasons\n- Fast formatting\n- Easy to understand\n- Many features\n\nHere\'s a logo:\n![logo](logo192.png)\n\nLine Breaks<br>work too!',
};

export const previewerSlice = createSlice({
    name: 'previewer',
    initialState,
    reducers: {
        update: (state, action) => {
            console.log(action);
            state.markdown = action.payload;
        }
    }
})

export const {update} = previewerSlice.actions;

export const selectMarkdown = (state) => state.previewer.markdown;

export default previewerSlice.reducer;