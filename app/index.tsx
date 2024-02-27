import { DynamicForm, LoginForm } from '@/components'
import { View } from '@/components/Themed'
import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput } from 'react-native'

export default function SignIn() {
  const [isRegister, setIsRegister] = useState(true)
  return (
    <View style={{ flexGrow: 1, paddingTop: 30, backgroundColor: '#212d3c', justifyContent: 'space-evenly', gap: 20 }}>
      <Image
        source={require('@/assets/images/logo-dark.jpeg')}
        style={{
          alignSelf: 'center',
          marginHorizontal: 'auto',
        }}
      />
      

      <ScrollView
        
      >
        <View style={{
          borderRadius: 10,
          width:300,
          backgroundColor: '#1f789c',
          padding: 22,
          paddingVertical: 15,
          
          
          
          alignSelf: 'center',
          
        }}>

          {isRegister ? <LoginForm /> : <DynamicForm />}
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              
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
