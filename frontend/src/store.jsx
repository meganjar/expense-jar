import { create } from "zustand";
import { leitenRequest } from "leiten-zustand";

const baseURL = "http://localhost:8080/api";

// ✅ Clean Zustand state only
export const useStore = create(() => ({
  data: {
    receipts: [],
    user: {},
  },
}));

//reuse fetch
const fetchCollection = (endpoint) =>
  fetch(`${baseURL}/${endpoint}`).then((res) => res.json());


export const useReceiptsRequest = () =>
  leitenRequest(useStore, "data.receipts", () => fetchCollection("receipts"));


export const useUserRequest = () =>
  leitenRequest(useStore, "data.user", (userId) => fetchCollection(`users/${userId}`));

export const useDynamicRequest = (path) =>
  leitenRequest(useStore, `data.${path}`, (endpoint) => fetchCollection(endpoint));