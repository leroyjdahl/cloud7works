export type NavLink = {
  label: string;
  href: string;
  links?: NavLink[];
};

export const routes: any = {
  // home: { path: '/', name: 'Home' },
  dashboard: { path: '/dashboard', name: 'Dashboard' },
  lorem: {
    path: '/lorem',
    name: 'Lorem Ipsum',
    subroutes: [
      { path: '/lorem/donec', name: 'Donec Lorem Magna' },
    ]
  },
  dolor: { path: '/dolor', name: 'Dolor' },
  sit: {
    path: '/sit',
    name: 'Sit Amet',
    subroutes: [
      { path: '/sit/first', name: 'First Page' },
      { path: '/sit/second', name: 'Second Page' },
    ],
  },
  ullamcorper: {
    path: '/ullamcorper',
    name: 'Ullamcorper',
    subroutes: [
      { path: '/first', name: 'First Page' },
      { path: '/ullamcorper/second', name: 'Second Page' },
    ],
  },
  morbiRutrum: {
    path: '/morbi-rutrum',
    name: 'Morbi Rutrum',
    subroutes: [
      { path: '/morbi-rutrum/first', name: 'First Page' },
      { path: '/morbi-rutrum/second', name: 'Second Page' },
    ],
  },
};
// Extract main navigation links
export const mainNavLinks: NavLink[] = Object.values(routes)
  .filter((route: any) => !route.subroutes)
  .map((route: any) => ({
    label: route.name,
    href: route.path,
  }));

// Convert the routes for dropdown navigation links
export const dropdownNavLinks: NavLink[] = Object.values(routes)
  .filter((route: any) => route.subroutes)
  .map((route: any) => ({
    label: route.name,
    href: route.path,
    subroutes: route.subroutes,
  }));

export const getFriendlyName = (path: string): string => {
  for (const key in routes) {
    const route = routes[key];

    // Check if the path matches the main route
    if (route.path === path) {
      return route.name;
    }

    // Check for subroutes
    if (route.subroutes) {
      for (const subKey in route.subroutes) {
        const subroute = route.subroutes[subKey];
        if (subroute.path === path) {
          return subroute.name;
        }
      }
    }
  }
  return path.split('/').pop() || '';
};
