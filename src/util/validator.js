const validationTypes = {
  TYPE: "type",
  MIN_LENGTH: "minLength",
  MAX_LENGTH: "maxLength",
  REGEX: "regex",
};

export const isValid = (validationResults) => {
    return validationResults.every(validation => validation.isValid);
};

export const validate = (validationModel, input) => {
  const results = validationModel.map((model) => {
    let result;
    switch (model.validation) {
      case validationTypes.TYPE:
        result = testType(model.type, input);
        break;
      case validationTypes.MIN_LENGTH:
        result = testLength(model.minLength, input, true);
        break;
      case validationTypes.MAX_LENGTH:
        result = testLength(model.maxLength, input);
        break;
      case validationTypes.REGEX:
        result = testRegex(model.regex, input);
        break;
      default:
        break;
    }
    return {
      validation: model.validation,
      isValid: result,
      error: result ? undefined : model.error,
    };
  });

  return results;
};

const testRegex = (regex, input) => {
  return RegExp(regex).test(input);
};

const testType = (type, input) => {
  return typeof input === type;
};

const testLength = (length, input, isMin = false) => {
  if (!input || !input.length) return false;
  if (!isMin) {
    return input.length <= length;
  } else {
    return input.length >= length;
  }
};
