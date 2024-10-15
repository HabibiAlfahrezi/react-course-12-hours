import UpdateUser from "./components/Context/UpdateUser"
import { UserProvider } from "./components/Context/UserContext"
import UserProfile from "./components/Context/UserProfile"

const App = () => {
  return (
	<UserProvider>
		<UserProfile/>
		<UpdateUser/>
	</UserProvider>
  )
}

export default App