import { yupResolver } from '@hookform/resolvers/yup'
import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Pressable, Text, TextInput, View } from 'react-native'
import * as yup from 'yup'

interface IFormInput {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('El email debe ser ser válido')
    .required('El email es requerido'),
  password: yup
    .string()
    .required('La contraseña es requerida')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Las contraseñas no coinciden'),
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
      />

      <Controller
        control={control}
        render={({ field }) => (
          <View style={{ gap: 10 }}>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '500' }}>
              Contraseña
            </Text>
            <TextInput
              {...field}
              placeholder="Contraseña"
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
        <Text style={{ alignSelf: 'center' }}>{'Ingresar'}</Text>
      </Pressable>
    </View>
  )
}
