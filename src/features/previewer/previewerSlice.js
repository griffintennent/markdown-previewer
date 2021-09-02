import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    markdown: '#Here\'s a title\n##Here\'s a smaller title',
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