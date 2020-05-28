export const addedFile = (file) => ({
  file,
  type: "ADDED_FILE",
});

export const updateCheckbox = (obj) => ({
  obj,
  type: "UPDATE_CHECKBOX",
});

export const addPassportPhoto = (id, file) => ({
  payload: {
    id,
    file,
  },
  type: "ADD_PASSPORT_PHOTO",
});

export const removePassportPhoto = (id) => ({
  payload: {
    id,
  },
  type: "REMOVE_PASSPORT_PHOTO",
});

export const removeFile = () => ({
  payload: {
    file: null,
  },
  type: "REMOVED_FILE",
});

export const removeFileLabour = () => ({
  payload: {
    file: null,
  },
  type: "REMOVED_FILE_LABOUR",
});

export const addFileLabour = (file) => ({
  payload: {
    file,
  },
  type: "ADDED_FILE_LABOUR",
});

export const updateCheckboxLabour = (obj) => ({
  payload: {
    obj,
  },
  type: "UPDATE_CHECKBOX_LABOUR",
});

export const verifyLabour = (bool) => ({
  payload: {
    bool,
  },
  type: "VERIFY_LABOUR",
});

export const addLabourFile = (file) => ({
  payload: {
    file,
  },
  type: "ADD_LABOUR_FILE",
});

export const removeLabourFile = (file) => ({
  payload: {
    file,
  },
  type: "REMOVE_LABOUR_FILE",
});

export const updateCheckboxIncome = (obj) => ({
  payload: {
    obj,
  },
  type: "UPDATE_CHECKBOX_INCOME",
});

export const verifyIncome = (bool) => ({
  payload: {
    bool,
  },
  type: "VERIFY_INCOME",
});

export const addIncomeFile = (file) => ({
  payload: {
    file,
  },
  type: "ADD_INCOME_FILE",
});

export const removeIncomeFile = (file) => ({
  payload: {
    file,
  },
  type: "REMOVE_INCOME_FILE",
});
