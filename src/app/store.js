import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/task/taskSlice';
import listReducer from '../features/list/listSlice';

export default configureStore({
  reducer: {
    tasks: taskReducer,
    lists: listReducer
  },
});
