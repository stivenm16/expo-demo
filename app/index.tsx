import { DynamicForm, LoginForm } from '@/components'
import { View } from '@/components/Themed'
import React, { useState } from 'react'
import { Image, Text } from 'react-native'

export default function SignIn() {
  const [isRegister, setIsRegister] = useState(true)
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('@/assets/images/logo-dark.jpeg')}
        style={{
          left: '37.5%',
          zIndex: 1,
          position: 'absolute',
          top: '5%',
        }}
      />
      <View
        style={{
          backgroundColor: '#1f789c',
          padding: 42,
          borderRadius: 8,
          marginVertical: 'auto',
          width: '25%',
          gap: 20,
          alignSelf: 'center',
          marginTop: 180,
        }}
      >
        {isRegister ? <LoginForm /> : <DynamicForm />}
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            marginTop: 8,
          }}
        >
          {!isRegister ? '¿Ya tienes una cuenta?' : '¿No tienes aun cuenta?'}
          <Text
            style={{ color: '#add8e6' }}
            onPress={() => setIsRegister(!isRegister)}
          >
            {isRegister ? ' Registrase' : ' Ingresar'}
          </Text>
        </Text>
      </View>
    </View>
  )
}
