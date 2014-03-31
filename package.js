Package.describe({
  summary: "Bootstrap styled version of login widgets"
});

Package.on_use(function (api) {
<<<<<<< HEAD
  api.use(['deps', 'service-configuration', 'accounts-base',
         'underscore', 'templating',
         'handlebars', 'spark', 'session'], 'client');

  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  // Allow us to call Accounts.oauth.serviceNames, if there are any OAuth
  // services.
  api.use('accounts-oauth', {weak: true});
  // Allow us to directly test if accounts-password (which doesn't use
  // Accounts.oauth.registerService) exists.
  api.use('accounts-password', {weak: true});
=======
  api.use(['session', 'handlebars', 'stylus', 'accounts-base', 'underscore', 'templating'], 'client');
>>>>>>> e8b1d1f9a2518dd91562f8096bd0831ae27e4e41

  api.add_files([
    'accounts_ui.js',

    'login_buttons_images.css',
    'login_buttons_dropdown.styl',

    'login_buttons.html',
    'login_buttons_single.html',
    'login_buttons_dropdown.html',
    'login_buttons_dialogs.html',

    'login_buttons_session.js',

    'login_buttons.js',
    'login_buttons_single.js',
    'login_buttons_dropdown.js',
    'login_buttons_dialogs.js',
    'accounts_ui.styl'], 'client');
});

Package.on_test(function (api) {
  //api.use('meteor-accounts-ui-bootstrap');
  //api.use('tinytest');
  //api.add_files('accounts_ui_tests.js', 'client');
});
