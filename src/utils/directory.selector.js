import {createSelector} from 'reselect';

//input selector
const selectDirecory = state=>state.directory;

//output selector
export const selectDirectorySections = createSelector(
    [selectDirecory],
    directory=>directory.sections
)