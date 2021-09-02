import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import previewerReducer from '../features/previewer/previewerSlice';

export const store = configureStore({
  reducer: {
    previewer: previewerReducer,
  },
});
