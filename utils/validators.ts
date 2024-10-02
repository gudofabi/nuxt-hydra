import { required, helpers } from "@vuelidate/validators";

export const requiredMessage = () => {
  return helpers.withMessage("This field is required", required);
};

export const uniqueInArray = (data_subCategory: any) => {
  return helpers.withMessage(
    "Duplicate Sub Category Name. Please enter a unique name to save.",
    (value) => {
      // Return true if the field is valid (i.e., when the condition for being invalid is false)
      if (!value) return true; // This line might be kept or adjusted based on how you want to handle empty values.
      return !data_subCategory.some(
        (subCategory: any) =>
          subCategory.name.toLowerCase() === value.toLowerCase()
      );
    }
  );
};

export const passwordMinLength = (min: number) =>
  helpers.withMessage(
    `At least ${min} characters long.`,
    (value: any) => !helpers.req(value) || value.length >= min
  );

export const containsUppercase = helpers.withMessage(
  "Include at least one uppercase letter.",
  (value: any) => !helpers.req(value) || /[A-Z]/.test(value)
);

export const containsLowercase = helpers.withMessage(
  "Include at least one lowercase letter.",
  (value: any) => !helpers.req(value) || /[a-z]/.test(value)
);

export const containsNumber = helpers.withMessage(
  "Include at least one digit.",
  (value: any) => !helpers.req(value) || /\d/.test(value)
);

export const containsSpecialChar = helpers.withMessage(
  "Include at least one special character.",
  (value: any) => !helpers.req(value) || /[\W_]/.test(value)
);
