export const checkboxLabourSelector = (state) => state.forms.checkboxLabour;
export const checkboxIncomeSelector = (state) => state.forms.checkboxIncome;
export const passPhotosSelector = (state) => state.forms.passPhotos;
export const passCheckboxSelector = (state) => state.forms.checkbox;

export const isPassportFulfilledSelector = (state) => {
  const passPhotos = passPhotosSelector(state);
  const passCheckbox = passCheckboxSelector(state);
  let res = 1;
  for (let i = 1; i <= Object.keys(passPhotos).length; i++) {
    res *= !!passPhotos[`photo${i}`] || passCheckbox[`check${i}`];
  }
  return res;
};

export const isIncomeFulfilledSelector = (state) => {
  const checkbox = checkboxIncomeSelector(state);
  let res = state.forms.incomeFiles.length;
  for (let i = 1; i <= Object.keys(checkbox).length; i++) {
    res *= checkbox[`check${i}`];
  }
  return !!res;
};

export const isLabourFulfilledSelector = (state) => {
  const checkbox = checkboxLabourSelector(state);
  let res = state.forms.labourFiles.length;
  for (let i = 1; i <= Object.keys(checkbox).length; i++) {
    res *= checkbox[`check${i}`];
  }
  return !!res;
};

export const passFieldsStatus = (state) => {
  const passPhotos = passPhotosSelector(state);
  const passCheckbox = passCheckboxSelector(state);

  return {
    field1: !!(!!passPhotos.photo1 || passCheckbox.check1),
    field2: !!(!!passPhotos.photo2 || passCheckbox.check2),
    field3: !!(!!passPhotos.photo3 || passCheckbox.check3),
    field4: !!(!!passPhotos.photo4 || passCheckbox.check4),
    field5: !!(!!passPhotos.photo5 || passCheckbox.check5),
    field6: !!(!!passPhotos.photo6 || passCheckbox.check6),
  };
};

export const isFormsFulfilledSelector = (state) => {
  return (
    isPassportFulfilledSelector(state) &&
    isLabourFulfilledSelector(state) &&
    isIncomeFulfilledSelector(state)
  );
};
