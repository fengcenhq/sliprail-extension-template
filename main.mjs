export default {
  shortcuts: [
    {
      id: 'Alert',
      displayName: 'ShortcutExample - Single Extension Repository',
        /**
         * @param context {import('@sliprail/sdk').ShortcutContext}
         */
      handle: (context) => {
        context.showAlert('Single Extension Repository');
      },
    },
  ],
  settings: [],
};
