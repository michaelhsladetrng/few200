

export const featureName = 'shopping';
import * as fromList from './list.reducer';

export interface State {
  list: fromList.ListState;
}

export const reducers = {
  list: fromList.reducer
};
