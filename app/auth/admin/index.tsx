import { Notificacion } from '@/app/models'
import { getAdminRequests } from '@/app/services'
import { CustomButton } from '@/components'
import { View } from '@/components/Themed'
import { Link } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, Platform, Text } from 'react-native'
import Request from './components/Request'

const admin = () => {
  const [requests, setRequests] = useState<Notificacion[]>()

  const handleRequest = (id: number) =>
    setRequests((prev) => prev?.filter((req) => req.id !== id))

  const signOut = () => {
    if (Platform.OS === 'web') localStorage.removeItem('token')
    console.log('Signing out...')
  }
  // const fetchFields = async () => await getAdminRequests().then((res) => setRequests(res.data.data.notificaciones))
  const fetchFields = async () =>
    await getAdminRequests().then((res) => setRequests(res))

  useEffect(() => {
    fetchFields()
  }, [])

  return (
    <View style={{ gap: 10, flexDirection: 'row', flex: 1 }}>
      <View
        style={{
          width: 200,
          padding: 10,
          backgroundColor: '#71b7e4',
          // overflow: 'hidden',
        }}
      >
        <Text style={{ color: 'white' }}>Admin</Text>
      </View>

      <Image
        source={require('@/assets/images/logo-dark.jpeg')}
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '45%',
          zIndex: 1,
        }}
      />
      <View style={{ flex: 1, paddingTop: 40 }}>
        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            fontSize: 20,
          }}
        >
          Solicitudes
        </Text>
        <View>
          {!!requests && (
            <FlatList
              numColumns={5}
              contentContainerStyle={{
                gap: 10,
                padding: 10,
                margin: 10,
              }}
              data={requests}
              renderItem={({ item }) => (
                <Request req={item} handleRequest={handleRequest} />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          )}
        </View>
      </View>
      <Link style={{ position: 'absolute', bottom: 20, right: 10 }} href={'/'}>
        <CustomButton title="Cerrar Sesion" onPress={signOut} />
      </Link>
    </View>
  )
}

export default admin
