import { yupResolver } from '@hookform/resolvers/yup'
import { router } from 'expo-router'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Pressable, Text, TextInput, View } from 'react-native'
import * as yup from 'yup'

interface IFormInput {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().email().required('Email is a required field'),
  password: yup.string().required('Password is required').min(6),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match'),
})

export const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) })

  const onSubmit = async (data: IFormInput) => {
    if (data) router.replace('/auth/admin/')
  }

  return (
    <View style={{ gap: 10 }}>
      <Controller
        control={control}
        render={({ field }) => (
          <View style={{ gap: 10 }}>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '500' }}>
              Email
            </Text>
            <TextInput
              {...field}
              placeholder="Email"
              style={{ backgroundColor: 'white', padding: 12, borderRadius: 8 }}
              value={field.value || ''}
            />
            {errors.email && (
              <Text style={{ color: 'white', marginLeft: 10 }}>
                {errors.email.message}
              </Text>
            )}
          </View>
        )}
        name="email"
        rules={{
          required: 'You must enter your email',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Enter a valid email address',
          },
        }}
      />

      <Controller
        control={control}
        render={({ field }) => (
          <View style={{ gap: 10 }}>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '500' }}>
              Password
            </Text>
            <TextInput
              {...field}
              placeholder="Password"
              style={{ backgroundColor: 'white', padding: 12, borderRadius: 8 }}
              secureTextEntry
              value={field.value || ''}
            />
            {errors.password && (
              <Text style={{ color: 'white', marginLeft: 10 }}>
                {errors.password.message}
              </Text>
            )}
          </View>
        )}
        name="password"
        rules={{
          required: 'You must enter your password',
        }}
      />

      <Pressable
        style={{
          backgroundColor: '#add8e6',
          padding: 12,
          borderRadius: 8,
          marginTop: 20,
        }}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={{ alignSelf: 'center' }}>{'Sign in'}</Text>
      </Pressable>
    </View>
  )
}
