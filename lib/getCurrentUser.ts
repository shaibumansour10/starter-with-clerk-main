import { auth, currentUser } from '@clerk/nextjs/server'

export default async function getCurrentUser() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } =  auth()
  const user = await currentUser()
return{
    id:userId,
    email: user?.emailAddresses[0].emailAddress,
    username: user?.username,
    firstname: user?.firstName,
    lastname: user?.lastName,
}
}