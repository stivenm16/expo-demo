import { Notificacion } from '@/app/models'
import { CustomButton } from '@/components'

import { Text, View } from '@/components/Themed'
import React, { useState } from 'react'
import { FlatList, TextInput } from 'react-native'

interface Props {
  req: Notificacion
  handleRequest: (id: number) => void
}

const Request = ({ req, handleRequest }: Props) => {
  const [note, setNote] = useState('')

  const handleNoteChange = (text: string) => {
    setNote(text)
  }
  return (
    <View
      style={{
        height: 180,
        padding: 20,
        width: 220,
        backgroundColor: '#4338ca',
        borderRadius: 8,
        marginHorizontal: 10,
        justifyContent: 'space-between',
      }}
    >
      <Text>{req.notificacion}</Text>

      <TextInput
        style={{
          height: 30,
          padding: 10,
          marginBottom: 10,
          backgroundColor: 'white',
          borderRadius: 5,
          flexWrap: 'wrap',
        }}
        onChangeText={handleNoteChange}
        value={note}
        placeholder="Agregar un mensaje..."
      />

      <FlatList
        numColumns={3}
        data={req.tipoNotificacion.accionesNotificacion}
        contentContainerStyle={{
          gap: 10,
          padding: 10,
          margin: 10,
        }}
        renderItem={({ item, index }) => (
          <CustomButton
            key={index}
            title={item.accionNotificacion}
            onPress={() => {
              console.log(
                req,
                note,
                req.notificacion,
                'req, note, req.notificacion',
              )
              handleRequest(req.id)
            }}
          />
        )}
      />
    </View>
  )
}

export default Request
