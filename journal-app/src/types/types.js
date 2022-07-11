export const types = {
  // types for authentication
  login: '[Auth] Login',
  logout: '[Auth] Logout',

  // types for UI errors
  uiSetError: '[UI] Set Error',
  uiRemoveError: '[UI] Remove Error',

  // types for the loading state
  uiStartLoading: '[UI] Start loading',
  uiFinishLoading: '[UI] Finish loading',

  notesAddNew: '[Notes] New note',
  notesActive: '[Notes] Set active note',
  notesLoad: '[Notes] Load notes',
  notesUpdated: '[Notes] Update saved notes',
  notesFileUrl: '[Notes] Updated image url',
  notesDelete: '[Notes] Delete note',
  notesLogoutCleaning: '[Notes] Logout cleaning',
};
