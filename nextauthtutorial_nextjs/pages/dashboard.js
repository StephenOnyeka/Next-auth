import { useState, useEffect } from "react"
import { getSession, signIn } from "next-auth/react"

function Dashboard() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession()
      if (!session) {
        signIn()
      } else {
        setloading(false)
      }
    }
    securePage()
  }, [])
  
  if (loading) {
    return (
      <h2>Loading...</h2>
    )
  }
  return (
    <div>Dashboard Page</div>
  )
}

export default Dashboard