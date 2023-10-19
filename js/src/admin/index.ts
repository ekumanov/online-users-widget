import registerWidget from '../common/registerWidget';

app.initializers.add('afrux/online-users-widget', () => {
  registerWidget(app);

  app.extensionData.for('ekumanov-online-users-widget').registerSetting({
    setting: 'ekumanov-online-users-widget.max_users',
    label: app.translator.trans('ekumanov-online-users-widget.admin.settings.max_users'),
    default: 15,
    type: 'number',
  });
});
