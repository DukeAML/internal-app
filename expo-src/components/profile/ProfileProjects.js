import React, { Component } from "react";
import {View, StyleSheet} from "react-native"
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "fMRI Data Analysis", content: "Functional Magnetic Resonance Imaging, or fMRI, has emerged as a powerful tool in studying the function of brain regions. However, using data analysis techniques on fMRI data to predict the onset of neurodegenerative and mental illnesses has been challenging, largely due to the shortage of high-quality labeled data and the difficulty of extracting meaningful features. In this project, we utilize the Human Connectome Project, which contains a dataset of fMRI data labeled with the behavioral states of healthy subjects. By applying modern deep learning techniques on this dataset, we hope to build a classifier with strong predictive power on classifying behavioral states whose features contain significant correlations to a variety of neurodegenerative and mental illnesses." },
  { title: "Digital Fidget Patterns", content: "There is a trend of large increase in Attention Deficit Hyperactivity Disorder (ADHD). Research has shown positive impact of fidget toys on students with ADHD. By replacing fidget toys with a similar app on a wearable device, user data from device sensors (e.g. heart rate, motion, location) can be collected to identify patterns of fidgeting. The project seeks to utilize ANOVA analysis to see user behavior differences and machine learning models to classify human activities in an effort to generate user behavior time series for children with ADHD." },
  { title: "VR Sickness Prediction", content: "VR sickness is caused when the optical flow of the VR set (what people see) is different from the actual motion perceived by the subject (what people feel). The project is aimed to build a model to detect when there would be a sickness, given the input of the 360 videos simulating the usage of VR. The methods used include flowNet, decision tree, and autoencoder networks. The output could be publications, and the potential applications include pilot training, gaming, and general VR uses." }
];

export default class ProfileProjects extends Component {
  render() {
    var user_projects = dataArray.filter(project => this.props.projects.includes(project.title))
    return (
      <View  style={styles.projectsContainer} >
          <Accordion dataArray={user_projects}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    projectsContainer: {
        paddingBottom: 20
    },
  })