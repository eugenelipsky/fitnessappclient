import {Instance, types} from "mobx-state-tree";

export const Program = types.model("Program", {
  id: types.number,
  title: types.string,
  shortDescription: types.string,
  description: types.string,
  owner: types.number,
});

export const ProgramStore = types
  .model("ProgramStore", {
    program: types.maybe(Program),
  })
  .actions((self) => ({
    async createProgram(payload: object) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Program created: ${JSON.stringify(payload, null, 2)}`)
        }, 1000)
      })
    },

    async updateProgram(id: number, payload: object) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const program = Program.create({...payload });
          resolve(`Updated program id: ${id} \n With data: ${program}`)
        }, 1000)
      })
    },

    async removeProgram (id: number) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Program with id: ${id} removed`)
        }, 1000)
      })
    }


  }));

export interface ProgramStoreType extends Instance<typeof ProgramStore> {}
