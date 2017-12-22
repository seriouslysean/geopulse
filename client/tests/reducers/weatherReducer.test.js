import weatherReducer, { defaultState } from '../../src/reducers/weatherReducer';

test('should set weatherReducer default state', () => {
  const state = weatherReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(defaultState);
});
