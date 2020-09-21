import { SET_CURRENT_DATASOURCE } from '../actionTypes'

export const setCurrentDatasource = (currentDatasource) => ({
  type: SET_CURRENT_DATASOURCE,
  currentDatasource,
});

