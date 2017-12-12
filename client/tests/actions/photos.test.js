import { SET_PHOTOS, setPhotos } from "../../src/actions/photos";
import photos from "../../../data/fixtures/photos";

test("should generate setPhotos action object", () => {
  const action = setPhotos(photos);
  expect(action).toEqual({
    type: SET_PHOTOS,
    photos
  });
});
