import { create } from 'zustand';
import { leitenRequest } from 'leiten-zustand';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useStore = create(() => ({
  data: {
    receipts: [],
    user: {},
  },
}));

//reuse fetch
const fetchTemplate = (endpoint, options) =>
  fetch(`${baseUrl}${endpoint}`, options).then((res) =>
    res.ok
      ? res.json()
      : res.json().then((err) => {
          throw new Error(err.message);
        }),
  );

export const useReceiptsRequest = () =>
  leitenRequest(useStore, 'data.receipts', () => fetchTemplate('/receipts'));

export const useNewReceiptRequest = () =>
  leitenRequest(useStore, null, (formattedData) =>
    fetchTemplate('/receipts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formattedData),
    }),
  );

export const useDeleteReceiptRequest = () =>
  leitenRequest(useStore, null, (data) =>
    fetchTemplate(`/receipts/${data.receiptID}`, { method: 'DELETE' }),
  );
