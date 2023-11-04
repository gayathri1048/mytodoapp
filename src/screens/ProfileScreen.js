import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { getUserDetails } from '../utils/api'; // Assuming there's a function for fetching user details

const ProfileScreen = ({ navigation, access_token, onLogout }) => {
  const [userDetails, setUserDetails] = useState({});

  const fetchUserDetails = async () => {
    try {
      const data = await getUserDetails(access_token);
      setUserDetails(data);
    } catch (error) {
      // Handle errors
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <View>
      <Text>Profile Page</Text>
      <Text>Name: {userDetails.name}</Text>
      <Text>Email: {userDetails.email}</Text>
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};

export default ProfileScreen;
