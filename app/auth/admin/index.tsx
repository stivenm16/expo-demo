import { CustomButton } from '@/components'
import { View } from '@/components/Themed'
import { Link, router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, Platform, SafeAreaView, Text, StyleSheet } from 'react-native'
import Request from './components/Request'
import { getAdminRequests } from 'samm-frontend-resources-test/services'
import { Notificacion } from 'samm-frontend-resources-test/models'

const Admin = () => {
  const [requests, setRequests] = useState<Notificacion[]>()

  const handleRequest = (id: number) =>
    setRequests((prev) => prev?.filter((req) => req.id !== id))

  const signOut = () => {
    if (Platform.OS === 'web') localStorage.removeItem('token')
    console.log('Signing out...')
    router.replace('/')
  }

  const fetchFields = async () =>
    await getAdminRequests().then((res) => setRequests(res))

  useEffect(() => {
    fetchFields()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
  
      <Image
        source={require('@/assets/images/logo-dark.jpeg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Solicitudes</Text>
        <FlatList
          numColumns={1}
          contentContainerStyle={styles.listContainer}
          data={requests}
          renderItem={({ item }) => <Request req={item} handleRequest={handleRequest} />}
          keyExtractor={(item) => item.id.toString()}
        />
        <Link style={styles.button} href={'/'}>
          <CustomButton title="Cerrar Sesion" onPress={signOut} />
        </Link>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212d3c',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    opacity: 0.4,
    marginTop: 400,
    marginLeft: 10
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  heading: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  listContainer: {
    flexGrow: 1,
    gap: 10,
    minWidth: '100%',
    alignItems:'center', 
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
})

export default Admin
