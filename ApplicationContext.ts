import * as React from 'react';

export type ContextProps = {
  profile: Object;
  teams: Object;
  currentTeam?: Object;
};

export const ApplicationContext = React.createContext<Partial<ContextProps>>(
  {},
);
