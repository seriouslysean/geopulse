import videosReducer, { defaultState } from '../../src/reducers/videosReducer';

test('should set videosReducer default state', () => {
  const state = videosReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(defaultState);
});
