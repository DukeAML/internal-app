import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import {View} from 'react-native';
import MembersScreen from './MembersScreen'
import ProjectScreen from './ProjectScreen';

export default class DirectoryScreen extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Members" >
            <MembersScreen />
          </Tab>
          <Tab heading="Projects">
            <ProjectScreen/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}