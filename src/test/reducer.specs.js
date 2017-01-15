import expect from 'expect';
import reducers from '../../reducers';

describe('reducers', () => {
  it('should handle actions', () => {
    let state;
    state = reducers({ selected: { selected: false } }, { type: 'SELECT_COMP', payload: true });
    expect(state.selected.selected).toEqual(true);
  });
});
