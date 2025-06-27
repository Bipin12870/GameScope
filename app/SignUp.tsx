import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ValidIndicator } from '@/components/ui/ValidIndicator';
import React, { useEffect, useState } from 'react';
import { Platform, Pressable, StyleSheet, TextInput, View } from 'react-native';

export default function SignUpScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const emailIsValid = email.includes('@') && email.includes('.');
  const passwordIsValid = password.length >= 6;

  //const user = useUser();

  useEffect(() => {
    setIsValid(emailIsValid && passwordIsValid);
  }, [emailIsValid, passwordIsValid]);

  const handleSignUp = () => {
    console.log('Signing up with:', email, password);
    // Future: Firebase or backend call
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}> Sign Up</ThemedText>

      <ThemedView style={styles.form}>
        {/* Email */}
        <ThemedText style={styles.label}>Email</ThemedText>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="abc@gmail.com"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.iconRight}>
            <ValidIndicator valid={emailIsValid} />
          </View>
        </View>

        {/* Password */}
        <ThemedText style={styles.label}>Password</ThemedText>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View style={styles.iconRight}>
            <ValidIndicator valid={passwordIsValid} />
          </View>
        </View>
      </ThemedView>

      {isValid && (
        <Pressable style={styles.button} onPress={handleSignUp}>
          <ThemedText style={styles.buttonText}>Create Account</ThemedText>
        </Pressable>
      )}
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
    gap: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    height: 48,
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingRight: 40, // enough space for the icon
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    color: '#000',
  },
  iconRight: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: [{ translateY: -9 }], // centers the icon vertically
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