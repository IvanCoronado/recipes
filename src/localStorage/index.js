const CREDENTIALS = "credentials";

export const getAppId = () => {
  const { appId } = recoverCredentials() || {};
  return appId;
};

export const saveCredentials = (values) =>
  window.localStorage.setItem(CREDENTIALS, JSON.stringify(values));

export const recoverCredentials = () =>
  window.localStorage.getItem(CREDENTIALS) &&
  JSON.parse(window.localStorage.getItem(CREDENTIALS));

export const clearCredenials = () =>
  window.localStorage.removeItem(CREDENTIALS);

const GROCERIES = getAppId() + "-groceries";
export const saveGroceries = (values) =>
  window.localStorage.setItem(GROCERIES, JSON.stringify(values));

export const recoverGroceries = () =>
  window.localStorage.getItem(GROCERIES) &&
  JSON.parse(window.localStorage.getItem(GROCERIES));

export const clearGroceries = () => window.localStorage.removeItem(GROCERIES);

const MEAL_PLAN = getAppId() + "-meal-plan";
export const saveMealPlan = (values) =>
  window.localStorage.setItem(MEAL_PLAN, JSON.stringify(values));

export const recoverMealPlan = () =>
  window.localStorage.getItem(MEAL_PLAN) &&
  JSON.parse(window.localStorage.getItem(MEAL_PLAN));

export const clearMealPlan = () => window.localStorage.removeItem(MEAL_PLAN);
