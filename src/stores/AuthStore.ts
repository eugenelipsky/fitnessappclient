import {Instance, types} from 'mobx-state-tree'
import { constructUser, User } from './models/user.model'
import { UserDto } from './dto/user.dto'

export const AuthStore = types
  .model('User', {
    user: types.maybe(User),
  })

  .views((self) => ({
    get isLoggedIn() {
      return !!self.user
    },
  }))

  .actions((self) => ({
    setUser(userDto: UserDto) {
      self.user = constructUser(userDto)
      // localStorage.setItem('token', userDto.token)
    },

    async register(registerData: object) {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      })

      if (response.ok) {
        const userDto: UserDto = await response.json()
        this.setUser(userDto)
      }
    },

    async login(email: string, password: string) {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        const userDto: UserDto = await response.json()
        this.setUser(userDto)
        // localStorage.setItem('user', JSON.stringify(userDto))
      }
    },

    async logout() {
      self.user = undefined
      // localStorage.removeItem('token')
      // localStorage.removeItem('user')
    },

    // async updateUserProfile(updateData: object) {
    //   const response = await fetch("http://localhost:3000/user", {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(updateData),
    //   });
    //
    //   if (response.ok) {
    //     authStore.setUser({ ...updateData });
    //     console.log(authStore.getUser());
    //   }
    // },
  }))
export interface AuthStoreType extends Instance<typeof AuthStore> {}
