import { SET_VIDEOS, setVideos } from "../../src/actions/videos";
import videos from "../../../data/fixtures/videos";

test("should generate setVideos action object", () => {
  const action = setVideos(videos);
  expect(action).toEqual({
    type: SET_VIDEOS,
    videos
  });
});
