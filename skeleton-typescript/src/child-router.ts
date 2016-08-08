import {Router, RouterConfiguration} from 'aurelia-router'

export class ChildRouter {
  heading = 'Child Router';
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: ['', 'welcome'], name: 'welcome',       moduleId: 'welcome',       nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',         moduleId: 'users',         nav: true, title: 'Github Users' },
      { route: ':id', href: '',  name: 'child-router',  moduleId: 'child-router',  nav: true, title: 'Child Router', navigationStrategy: (instruction) => {
          if ( instruction.config.moduleId === 'child-router') {
            instruction.config.moduleId = 'child-router2';
          } else {
            instruction.config.moduleId = 'child-router';
          }

      } }
    ]);

    this.router = router;
  }
}
