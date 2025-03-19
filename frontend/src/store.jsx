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
const fetchTemplate = (endpoint, options) =>
  fetch(`${baseURL}${endpoint}`, options).then((res) =>
    res.ok ? res.json() : res.json().then((err) => { throw new Error(err.message)})
  );


export const useReceiptsRequest = () =>
  leitenRequest(useStore, "data.receipts", () => fetchTemplate("/receipts"));


export const useDeleteReceiptRequest = () =>
  leitenRequest(useStore, "data.receipts", ({receiptID}) => fetchTemplate(`/receipts/${receiptID}`, { method: "DELETE" }));

export const useDynamicRequest = (path) =>
  leitenRequest(useStore, `data.${path}`, (endpoint) => fetchTemplate(endpoint));