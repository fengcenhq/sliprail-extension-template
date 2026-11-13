/**
 * @type {import('@sliprail/sdk').Extension}
 */
export default {
  shortcuts: [
    {
      id: 'Alert',
      displayName: {
        en: 'Shortcut Example - Alert',
        'zh-hans': '命令示例 - 提示框',
      },
      /**
       * @param context {import('@sliprail/sdk').ShortcutContext}
       */
      handle: (context) => {
        context.showAlert('Alert');
      },
    },
    {
      id: 'Notification',
      displayName: {
        en: 'Shortcut Example - Notification',
        'zh-hans': '命令示例 - 通知',
      },
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
      displayName: {
        en: 'Shortcut Example - Get Parameter',
        'zh-hans': '命令示例 - 获取参数',
      },
      acceptsParameter: true,
      /**
       * @param context {import('@sliprail/sdk').ShortcutContext}
       */
      handle: (context) => {
        const value = context.parameter;
        const formatted =
          typeof value === 'string' ? value : JSON.stringify(value, null, 2);
        context.showAlert(formatted ?? '');
      },
    },
    {
      id: 'Window',
      displayName: {
        en: 'Shortcut Example - Window',
        'zh-hans': '命令示例 - 窗口',
      },
      /**
       * @param context {import('@sliprail/sdk').ShortcutContext}
       */
      handle: async (context) => {
        const channel = context.createWindowChannel();
        channel.on('getMessage', () => {
          channel.emit('message', 'Hello from Window Shortcut!');
        });

        await context.createWindow({
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
      displayName: {
        en: 'Shortcut Example - Singleton Window',
        'zh-hans': '命令示例 - 单例窗口',
      },
      /**
       * @param context {import('@sliprail/sdk').ShortcutContext}
       */
      handle: async (context) => {
        const singletonWindow = context.getWindows()[0];
        if (singletonWindow != null) {
          singletonWindow.show();
          return;
        }

        const channel = context.createWindowChannel();
        channel.on('getMessage', () => {
          channel.emit('message', 'Hello from Singleton Window Shortcut!');
        });

        await context.createWindow({
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
};
