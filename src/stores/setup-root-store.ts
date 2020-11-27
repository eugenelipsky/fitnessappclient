import { RootStoreModel } from "./RootStore";
import { onSnapshot } from "mobx-state-tree";

export const setupRootStore = () => {
  const rootStore = RootStoreModel.create({
    authStore: {
      user: {
        id: 1,
        firstName: 'Eugene',
        lastName: 'Lipsky',
        email: 'abc@ab.com',
        programsOwner: [],
        workouts: []
      }
    },
    programStore: {},
  });

  onSnapshot(rootStore, (snapshot) => console.log("snapshot: ", snapshot));
  return { rootStore };
};
