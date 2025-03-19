import { create } from "zustand";
import { leitenRequest } from "leiten-zustand";

const baseURL = "http://localhost:8080/api" ;


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


export const useDeleteReceiptRequest = (receiptID) =>
  leitenRequest(useStore, "data.receipt", (receiptID) => fetchCollection(`receipts/${receiptID}`));

export const useDynamicRequest = (path) =>
  leitenRequest(useStore, `data.${path}`, (endpoint) => fetchCollection(endpoint));