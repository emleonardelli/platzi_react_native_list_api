import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    Keyboard,
} from 'react-native'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { user, userDetails } from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
  const [error, setError] = useState('');
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (data) => {
      setError('');
      const { username, password } = data;
      if (username != user.username || password != user.password) {
        setError('El usuario o la contraseña no son correctos');
        console.log();
      }else{
        login(userDetails);
        setError('');
      }
    }
  });
  return (
    <View>
      <Text style={styles.title}>Iniciar sesion</Text>
      <TextInput
        name="username"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
        placeholder='Nombre de usuario'
        style={styles.input}
        autoCapitalize='none'
      />
      <TextInput
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
        placeholder='Contraseña'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
      />
      <Button
        title='Entrar'
        onPress={formik.handleSubmit}
      />
      {formik.errors.username && <Text style={styles.error}>{formik.errors.username}</Text>}
      {formik.errors.password && <Text style={styles.error}>{formik.errors.password}</Text>}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

const initialValues = {
    username: '',
    password: '',
}

function validationSchema() {
  return {
    username: Yup.string().required('El usuario es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
  }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15,
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    error: {
      textAlign: 'center',
      color: '#ff0000',
      marginTop: 20
    },
});