const initialState = {
  pdfFile: null,
  checkbox: {
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    check6: false,
  },
  checkboxLabour: {
    check1: false,
    check2: false,
    check3: false,
  },
  checkboxIncome: {
    check1: false,
    check2: false,
  },
  passPhotos: {
    photo1: null,
    photo2: null,
    photo3: null,
    photo4: null,
    photo5: null,
    photo6: null,
  },
  verifyLabour: false,
  labourFiles: [],
  verifyIncome: false,
  incomeFiles: [],
};

const forms = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case "ADDED_FILE":
      return {
        ...state,
        pdfFile: payload.file,
      };
    case "REMOVED_FILE":
      return {
        ...state,
        pdfFile: null,
      };
    case "UPDATE_CHECKBOX":
      return {
        ...state,
        checkbox: payload.obj,
      };
    case "ADD_PASSPORT_PHOTO":
      return {
        ...state,
        passPhotos: {
          ...state.passPhotos,
          [`photo${payload.id}`]: payload.file,
        },
      };
    case "REMOVE_PASSPORT_PHOTO":
      return {
        ...state,
        passPhotos: {
          ...state.passPhotos,
          [`photo${payload.id}`]: null,
        },
      };
    case "VERIFY_LABOUR":
      return {
        ...state,
        verifyLabour: payload.bool,
      };
    case "UPDATE_CHECKBOX_LABOUR":
      return {
        ...state,
        checkboxLabour: payload.obj,
      };

    case "ADD_LABOUR_FILE":
      return {
        ...state,
        labourFiles: [...state.labourFiles, payload.file],
      };

    case "REMOVE_LABOUR_FILE":
      return {
        ...state,
        labourFiles: state.labourFiles.filter((next) => next !== payload.file),
      };

    case "VERIFY_INCOME":
      return {
        ...state,
        verifyIncome: payload.bool,
      };
    case "UPDATE_CHECKBOX_INCOME":
      return {
        ...state,
        checkboxIncome: payload.obj,
      };

    case "ADD_INCOME_FILE":
      return {
        ...state,
        incomeFiles: [...state.incomeFiles, payload.file],
      };

    case "REMOVE_INCOME_FILE":
      return {
        ...state,
        incomeFiles: state.incomeFiles.filter((next) => next !== payload.file),
      };

    default:
      return state;
  }
};

export default forms;
