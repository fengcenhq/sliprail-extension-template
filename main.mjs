/**
 * @type {import('@sliprail/sdk').Extension}
 */
export default {
  shortcuts: [
    {
      id: 'Alert',
      displayName: 'Shortcut Example - Alert',
      /**
       * @param context {import('@sliprail/sdk').ShortcutContext}
       */
      handle: (context) => {
        context.showAlert('Alert');
      },
    },
    {
      id: 'Notification',
      displayName: 'Shortcut Example - Notification',
      /**
       * @param context {import('@sliprail/sdk').ShortcutContext}
       */
      handle: (context) => {
        context.showNotification({
          title: 'Test Notification Title',
          message: 'Test Notification Message',
        });
      },
    },
    {
      id: 'GetParameter',
      displayName: 'Shortcut Example - Get Parameter',
      /**
       * @param context {import('@sliprail/sdk').ShortcutContext}
       */
      handle: (context) => {
        const value = context.parameter;
        const formatted = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
        context.showAlert(formatted ?? '');
      },
    },
    {
      id: 'Window',
      displayName: 'Shortcut Example - Window',
      /**
       * @param context {import('@sliprail/sdk').ShortcutContext}
       */
      handle: (context) => {
        const channel = context.createWindowChannel();
        channel.on('getMessage', () => {
          channel.emit('message', 'Hello from Window Shortcut!');
        });

        context.createWindow({
          channel,
          htmlFile: 'index.html',
          title: 'Window Example',
          width: 600,
          height: 500,
          maximize: false,
          parameters: {
            initialParameter: 'test',
          },
          resizable: true,
          onClose: () => {},
        });
      },
    },
    {
      id: 'SingletonWindow',
      displayName: 'Shortcut Example - Singleton Window',
      /**
       * @param context {import('@sliprail/sdk').ShortcutContext}
       */
      handle: (context) => {
        const singletonWindow = context.getWindows()[0];
        if (singletonWindow != null) {
          singletonWindow.show();
          return;
        }

        const channel = context.createWindowChannel();
        channel.on('getMessage', () => {
          channel.emit('message', 'Hello from Singleton Window Shortcut!');
        });

        context.createWindow({
          channel,
          htmlFile: 'index.html',
          title: 'Window Example',
          width: 600,
          height: 500,
          maximize: false,
          parameters: {
            initialParameter: 'test',
          },
          resizable: true,
          onClose: () => {},
        });
      },
    },
  ],
  settings: [],
};
