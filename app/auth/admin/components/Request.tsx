import { getAdminRequests } from '@/app/services'
import { Text, View } from '@/components/Themed'
import React, { useEffect } from 'react'

const Request = () => {
  const [requests, setRequests] = React.useState<any>()

  useEffect(() => {
    const adminReqs = getAdminRequests()
    setRequests(adminReqs)
  }, [])
  return (
    <View>
      <Text>Request</Text>
    </View>
  )
}

export default Request
