import {Instance, types} from 'mobx-state-tree';
import {ProgramStore} from '../ProgramStore';
import {UserDto} from '../dto/user.dto';

export const User = types.model("User", {
  id: types.number,
  firstName: types.string,
  lastName: types.string,
  email: types.string,
  programsOwner: types.optional(types.array(ProgramStore), []),
  workouts: types.optional(types.array(ProgramStore), []),
});

export function constructUser(dto: UserDto) {
  return User.create(dto)
}

export type UserModel = Instance<typeof User>;
