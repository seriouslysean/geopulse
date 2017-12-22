import geolocationReducer, { defaultState } from '../../src/reducers/geolocationReducer';

test('should set geolocationReducer default state', () => {
  const state = geolocationReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(defaultState);
});
