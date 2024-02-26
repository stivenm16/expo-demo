import { DynamicForm, LoginForm } from '@/components'
import { View } from '@/components/Themed'
import React, { useState } from 'react'
import { Image, ScrollView, Text } from 'react-native'

export default function SignIn() {
  const [isRegister, setIsRegister] = useState(true)
  return (
    <View style={{ flex: 1, paddingTop: 50, backgroundColor: '#212d3c' }}>
      <Image
        source={require('@/assets/images/logo-dark.jpeg')}
        style={{
          alignSelf: 'center',
          marginHorizontal: 'auto',
        }}
      />
      <ScrollView
        style={{
          marginTop: 10,
        }}
      >
        <View
          style={{
            backgroundColor: '#1f789c',
            padding: 42,
            borderRadius: 8,
            marginVertical: 'auto',
            // width: 100,
            height: 'auto',

            alignSelf: 'center',
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
      </ScrollView>
    </View>
  )
}
