export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
          { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
          { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' },
          { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
          { route: 'panels', name: 'panels', moduleId: 'panels', nav: true, title: 'Panel Layout' },
          { route: 'map', name: 'map', moduleId: 'map', nav: true, title: 'Map' },
          { route: 'chart', name: 'chart', moduleId: 'chart', nav: true, title: 'Chart' }
    ]);

    this.router = router;
  }
}
