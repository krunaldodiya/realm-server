import { BasicServer, auth, User, errors } from 'realm-object-server'
import { post } from 'superagent'
​
export class OtpAuthProvider extends auth.AuthProvider {
  name = "otp"
​
  authenticateOrCreateUser(body: any): Promise<any> {
    return this.service.createOrUpdateUser(
        "1234",
        this.name, // this is the name of the provider,
        false, // this is if the user should or should not be an admin
      )
  }
}