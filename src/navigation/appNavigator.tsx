import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import OnboardingScreen   from '../screens/auth/OnboardingScreen';
import FirstAidCenter     from '../screens/Home/firstAidCenter';
import ChapterListScreen  from '../components/chapterListScreen';
import QuizScreen, { QuizQuestion } from '../components/QuizScreen';
import MainTabNavigator   from './mainTabNavigator';
import AnnouncementScreen from '../screens/Home/announcementScreen';
import { CourseConfig, Chapter } from '../data/courseConfig';

export type RootStackParamList = {
  Onboarding:    undefined;
  MainTabs:      undefined;
  FirstAid:      undefined;
  Courses:       undefined;
  Tests:         undefined;
  Announcements: undefined;
  ChapterList: {
    course?:      CourseConfig;
    chapter?:     Chapter;
    courseColor?: string;
    courseName?:  string;
  };
  QuizScreen: {
    quizTitle:   string;
    courseColor: string;
    courseIcon?: string;
    questions:   QuizQuestion[];
  };
};

export type RootNavProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const CoursesScreen = () => null;
const TestsScreen   = () => null;

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: '#0F1923' },
        }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen
          name="MainTabs"
          component={MainTabNavigator}
          options={{ animation: 'fade' }}
        />
        <Stack.Screen name="ChapterList"   component={ChapterListScreen}  />
        <Stack.Screen name="QuizScreen"    component={QuizScreen}         />
        <Stack.Screen name="Announcements" component={AnnouncementScreen} />
        <Stack.Screen name="FirstAid"      component={FirstAidCenter}     />
        <Stack.Screen name="Courses"       component={CoursesScreen}      />
        <Stack.Screen name="Tests"         component={TestsScreen}        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
