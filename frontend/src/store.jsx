import { create } from 'zustand';
import receipts from '../../backend/model/receipts.mjs';
export { useStore };
const baseURL = 'http://localhost:8080/api'
const receipts = '/receipts'



const useStore = create((set, get) => ({
receipts: [],
    fetchReceipts: async() => {
        try {
                const { query } = get();
                if (!query) return;
                const encodedQuery = encodeURIComponent(query)
                const response = await fetch(`${baseURL}${receipts}`);
              
                const data = await response.json();
                console.log(data.items)
                set({ receipts: data.items});
                console.log(get().searchResults)
                
             } catch (error) {
                console.error("Error fetching results:", error);
                set({ searchResults: [] });
          }
    }
  }))