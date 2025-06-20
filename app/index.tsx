import React, { useEffect, useState } from 'react';
import { TextInput, StyleSheet, Platform } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Pressable } from 'react-native';
import { Link } from 'expo-router'


export default function SignUpScreen() {
 const [email, setEmail] = useState<string>('');
 const [password, setPassword] = useState<string>('');


 useEffect( () => {
       if (email.indexOf('@') > 0 ) {
           console.log('Valid email')
       }
       else {
           console.log('Invalid Email')
       }


 }, [email])




 const handleSignUp = () => {
   console.log('Signing up with:', email, password);
   // Future: Firebase or backend call
 };


 return (
   <ThemedView style={styles.container}>
     <ThemedText type="title" style={styles.header}>🔐 Sign Up</ThemedText>


     <ThemedView style={styles.form}>
       <ThemedText style={styles.label}>Email</ThemedText>
       <TextInput
         style={styles.input}
         placeholder="abc@gmail.com"
         placeholderTextColor="#aaa"
         value={email}
         onChangeText={(text) => setEmail(text)}
         keyboardType="email-address"
         autoCapitalize="none"
       />


       <ThemedText style={styles.label}>Password</ThemedText>
       <TextInput
         style={styles.input}
         placeholder="Enter your password"
         placeholderTextColor="#aaa"
         value={password}
         onChangeText={(text) => setPassword(text)}
         secureTextEntry
       />
     </ThemedView>


     <Pressable style={styles.button} onPress={handleSignUp}>
       <ThemedText style={styles.buttonText}>Create Account</ThemedText>
     </Pressable>
   </ThemedView>
 );
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   padding: 24,
   justifyContent: 'center',
 },
 header: {
   textAlign: 'center',
   fontSize: 30,
   marginBottom: 30,
   fontWeight: 'bold',
 },
 form: {
   marginBottom: 24,
   gap: 16, // Works in React Native 0.71+. If not, use marginBottom on each field.
 },
 label: {
   fontSize: 16,
   fontWeight: '600',
   marginBottom: 6,
 },
 input: {
   height: 48,
   borderWidth: 1.5,
   borderColor: '#ccc',
   borderRadius: 10,
   paddingHorizontal: 12,
   fontSize: 16,
   backgroundColor: '#f9f9f9',
   color: '#000',
 },
 button: {
   backgroundColor: '#e63946',
   paddingVertical: 16,
   borderRadius: 12,
   alignItems: 'center',
   shadowColor: '#000',
   shadowOpacity: 0.1,
   shadowOffset: { width: 0, height: 4 },
   shadowRadius: 6,
   elevation: Platform.OS === 'android' ? 5 : 0,
 },
 buttonText: {
   color: '#fff',
   fontWeight: '700',
   fontSize: 18,
 },
});

