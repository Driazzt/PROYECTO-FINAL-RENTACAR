export const CHANGE_MENU_OPTION = "CHANGE_MENU_OPTION";

export const changeMenuOption = (payload) => {
  return {
    type: CHANGE_MENU_OPTION,
    payload,
  };
};
