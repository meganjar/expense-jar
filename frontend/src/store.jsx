import { create } from 'zustand';

const baseURL = 'http://localhost:8080/api';

const useStore = create((set, get) => ({
  receipts: [],
  fetchReceipts: async () => {
    try {
      const response = await fetch(`${baseURL}/receipts`, { method: 'GET' });
      const data = await response.json();
      console.log(await response.json());
      set({ receipts: data.items });
    } catch (error) {
      console.error("Error fetching receipts:", error);
      set({ receipts: [] });
    }
  },
}));

export default useStore;