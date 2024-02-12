import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Text, TextInput, View } from 'react-native'
import * as yup from 'yup'

interface IFormInput {
  email: string
  password: string
  confirmPassword?: string
}

const schema = yup.object().shape({
  email: yup.string().email().required('Email is a required field'),
  password: yup.string().required('Password is a required field'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match'),
})

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) })

  const [isRegister, setIsRegister] = useState(true)
  const [error, setError] = useState('')

  const onSubmit = async (data: IFormInput) => {
    if (data) {
      if (isRegister) {
        // Custom logic for sign in
      } else {
        // Custom logic for sign up
        setIsRegister(true)
      }
    }
  }

  return (
    <View
      style={{
        backgroundColor: '#4338ca',
        padding: 42,
        borderRadius: 8,
        marginVertical: 16,
        gap: 20,
      }}
    >
      <View style={{ gap: 10 }}>
        <Text style={{ color: 'white', fontSize: 14 }}>Email</Text>
        <TextInput
          placeholder="Email"
          style={{ backgroundColor: 'white', padding: 12, borderRadius: 8 }}
          {...register('email', { required: true })}
        />
        {errors.email && (
          <Text style={{ color: 'white' }}>{errors.email.message}</Text>
        )}
      </View>
      <View style={{ gap: 10 }}>
        <Text style={{ color: 'white', fontSize: 14 }}>Password</Text>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={{
            backgroundColor: 'white',
            padding: 12,
            borderRadius: 8,
          }}
          {...register('password', { required: true })}
        />
        {errors.password && (
          <Text style={{ color: 'white' }}>{errors.password.message}</Text>
        )}
      </View>

      {!isRegister && (
        <View style={{ gap: 10 }}>
          <Text style={{ color: 'white', fontSize: 14 }}>Confirm password</Text>
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={{
              backgroundColor: 'white',
              padding: 12,
              borderRadius: 8,
            }}
            {...register('confirmPassword', { required: true })}
          />
          {errors.confirmPassword && (
            <Text style={{ color: 'white' }}>
              {errors.confirmPassword.message}
            </Text>
          )}
        </View>
      )}

      <Button title="Login" onPress={handleSubmit(onSubmit)} />

      <Text style={{ color: 'white', textAlign: 'center', marginTop: 8 }}>
        {!isRegister ? 'Already have an account?' : "Don't have an account?"}
        <Text
          style={{ color: '#add8e6' }}
          onPress={() => setIsRegister(!isRegister)}
        >
          {isRegister ? ' Sign up' : ' Sign in'}
        </Text>
      </Text>
    </View>
  )
}

export default LoginForm
