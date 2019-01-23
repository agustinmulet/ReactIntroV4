export default function locationReducer(state = "Seattle, WA", action) {
  //return Object.assign({}, state, { location: action.payload });

  if (action.type === "SET_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}

//Testing the reducer
/*
test("locationReducer", () => {
  expect(
    locationReducer("Seattle, WA", {
      type: "SET_LOCATION",
      payload: "San Francisco, CA"
    })
  ).toBe("San Francisco, CA");
});
*/
