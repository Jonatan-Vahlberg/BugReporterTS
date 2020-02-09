import React from 'react';
import { StatusBar } from 'react-native';
import * as firebase from 'firebase';

import Profile from './src/models/Profile';
import Team from './src/models/Team';
import { ApplicationContext } from './src/context/ApplicationContext';
import BugReport from './src/models/BugReport';
import Navigator from './src/navigation';

const firebaseConfig = {
  apiKey: 'AIzaSyBhvEvFrGhYXHeLUn6VEEfaPATvjfLXo4I',
  authDomain: 'bug-tracker-17906.firebaseapp.com',
  databaseURL: 'https://bug-tracker-17906.firebaseio.com',
  projectId: 'bug-tracker-17906',
  storageBucket: 'bug-tracker-17906.appspot.com',
  messagingSenderId: '825475753127',
  appId: '1:825475753127:web:c6ba0b8f33187bb76ae782',
  measurementId: 'G-S4CNHEGYH4',
};
firebase.initializeApp(firebaseConfig);

type AppProps = {};

type AppState = {
  profile?: Profile;
  teams?: Team[];
  featuredTeam?: Team;
  settings?: object;
};

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      profile: null,
      teams: [],
      featuredTeam: null,
      settings: {},
    };
  }

  render() {
    return (
      <ApplicationContext.Provider
        value={{
          profile: this.state.profile,
          teams: this.state.teams,
          featuredTeam: this.state.featuredTeam,
          profileActions: {
            registerUser: this.registerUser,
            createProfile: this.createProfile,
            getProfile: this.getProfile,
            updateProfile: this.updateProfile,
            login: this.login,
            logout: this.logout,
          },
          teamsActions: {
            joinTeam: this.joinTeam,
            leaveTeam: this.leaveTeam,
            createTeam: this.createTeam,
          },
          teamActions: {
            createReport: this.createReport,
            updateReport: this.updateReport,
            viewReport: this.viewReport,
            requestAddTeamMember: this.requestAddTeamMember,
          },
          settings: this.state.settings,
        }}
      >
        <StatusBar barStyle="dark-content" />
        <Navigator />
      </ApplicationContext.Provider>
    );
  }

  //* PROFILE ACTIONS
  registerUser = async (
    email: string,
    password: string,
    setLocalState?: Function,
  ) => {
    //setLocalState();
    const {
      user,
    }: firebase.auth.UserCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(user);
  };
  createProfile = async (profile: Profile) => {
    this.setState({ profile });
    //TODO: firebase setProfile
  };
  getProfile = async (uuid: string) => {
    //TODO: firebase getProfile
  };
  updateProfile = async (updatedProfile: Profile) => {
    this.setState({ profile: updatedProfile });
    //TODO: firebase update profile
  };
  login = async (email: string, password: string) => {
    //TODO: firebase LOGIN
  };
  logout = async () => {
    //TODO: firebase LOGOUT
  };

  //*TEAMS ACTIONS
  joinTeam = async (code: string) => {
    //TODO: firebase LOGOUT
  };
  leaveTeam = async () => {
    //TODO: firebase LOGOUT
  };
  createTeam = async (team: Team) => {
    //TODO: firebase LOGOUT
  };

  //* TEAM ACTIONS
  createReport = async (bugReport: BugReport) => {
    //TODO: firebase Add report
  };

  updateReport = async (bugReport: BugReport) => {
    //TODO: firebase Add report
  };

  viewReport = async (bugReport: BugReport) => {
    //TODO: firebase Add report
  };
  requestAddTeamMember = async (
    identifier: string,
    typeOfidentifier: string,
  ) => {
    //TODO: firebase Add report
  };
}
