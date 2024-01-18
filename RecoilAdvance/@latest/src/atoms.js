import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 104,
});

export const messageAtom = atom({
  key: "messageAtom",
  default: 101,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 104,
});

export const totalSelector = selector({
  key: "totalvalue",
  get: ({ get }) => {
    const network = get(networkAtom);
    const message = get(messageAtom);
    const notifications = get(notificationsAtom);
    const jobs = get(jobsAtom);

    return network + message + notifications + jobs;
  },
});
