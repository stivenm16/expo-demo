import { Notificacion } from '@/app/models'
import { getAdminRequests } from '@/app/services'
import { CustomButton } from '@/components'
import { View } from '@/components/Themed'
import { Link } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Text } from 'react-native'
import Request from './components/Request'

const admin = () => {
  const [requests, setRequests] = useState<Notificacion[]>()

  const handleRequest = (id: number) =>
    setRequests((prev) => prev?.filter((req) => req.id !== id))

  useEffect(() => {
    const adminReqs = getAdminRequests()
    setRequests(adminReqs)
  }, [])
  return (
    <View style={{ gap: 10, flexDirection: 'row', flexGrow: 1 }}>
      <View style={{ width: 200, padding: 10, backgroundColor: '#818cf8' }}>
        <Text style={{ color: 'white' }}>Admin</Text>
      </View>
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
        <CustomButton
          title="Cerrar Sesion"
          onPress={() => console.log('prueba')}
        />
      </Link>
    </View>
  )
}

export default admin
