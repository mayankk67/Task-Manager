var initState = [];

const rootReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "DISPLAY":
      var ar = [];
      payload.map(item => {
        ar.push({
          insertionId: item.InsertionId,
          data: item.Data,
          isChecked: 0
        });
        return ar;
      });
      return ar;
    case "CHANGECHK":
      return state.map(i =>
        i.insertionId === payload ? { ...i, isChecked: 1 } : i
      );
    case "CHANGECHKR":
      return state.map(i =>
        i.insertionId === payload ? { ...i, isChecked: 0 } : i
      );
    default:
      return state;
  }
};

export default rootReducer;
