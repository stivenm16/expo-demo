import { Pressable, Text } from 'react-native'

interface CustomProps {
  onPress: () => void
  title: string
}

export const CustomButton = ({ title, onPress }: CustomProps, { ...props }) => {
  return (
    <Pressable
      onPress={onPress}
      {...props}
      style={{
        backgroundColor: 'blue',
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginRight: 5,
        borderRadius: 5,
      }}
    >
      <Text style={{ color: 'white' }}>{title}</Text>
    </Pressable>
  )
}
