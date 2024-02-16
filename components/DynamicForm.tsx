import { DynamicFormFieldProps } from '@/app/models'
import { createRequest, getFormFields } from '@/app/services'
import { createSchema, removeEmptyFields } from '@/app/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Pressable, Text, TextInput, View } from 'react-native'

interface FormStructure {
  email: string
  nombre?: string
  profesion?: string
  telefono?: string
}

export const DynamicForm = () => {
  const [fields, setFields] = useState([] as any)

  // const fetchFields = async () => await getFormFields().then((res) => setFields(res.data.data.columnas))
  const fetchFields = async () =>
    await getFormFields().then((res) => setFields(res))

  useEffect(() => {
    fetchFields()
  }, [])

  const onSubmit = async (data: any) => {
    if (data) {
      const filteredData: FormStructure = removeEmptyFields(data)
      createRequest({
        description: filteredData.email,
        data: filteredData.email,
      })
    }
  }
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createSchema(fields)) })
  return (
    <View>
      {fields.length > 0 ? (
        fields.map((fieldForm: DynamicFormFieldProps, index: number) => {
          return (
            <Controller
              key={index}
              control={control}
              render={({ field }) => (
                <View style={{ gap: 10, marginVertical: 5 }}>
                  <Text
                    style={{ color: 'white', fontSize: 14, fontWeight: '500' }}
                  >
                    {fieldForm.columna}
                  </Text>
                  <TextInput
                    {...field}
                    placeholder={fieldForm.columna}
                    style={{
                      backgroundColor: 'white',
                      padding: 12,
                      borderRadius: 8,
                    }}
                    value={field.value || ''}
                  />
                  {errors[fieldForm.columna] && (
                    <Text style={{ color: 'white', marginLeft: 10 }}>
                      {errors[fieldForm.columna]?.message as string}
                    </Text>
                  )}
                </View>
              )}
              name={fieldForm.columna}
              rules={{
                required: fieldForm.requerido
                  ? `${fieldForm.columna} is a required field`
                  : undefined,
              }}
            />
          )
        })
      ) : (
        <Text>Cargando...</Text>
      )}
      <Pressable
        style={{
          backgroundColor: '#add8e6',
          padding: 12,
          borderRadius: 8,
          marginTop: 20,
        }}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={{ alignSelf: 'center' }}>{'Registrarse'}</Text>
      </Pressable>
    </View>
  )
}
