import axios from 'axios';

// ⚠️ GANTI dengan API URL Anda dari MockAPI!
const API_URL = 'https://6903697ad0f10a340b241f71.mockapi.io/destinations';

// Create axios instance
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

// Types
export type Destination = {
  id: string;
  title: string;
  country: string;
  imageUrl: string;
  rating: number;
  price: number;
  description: string;
  latitude: number;
  longitude: number;
};

// API Functions
export const destinationApi = {
  // GET all destinations
  getAll: async (): Promise<Destination[]> => {
    try {
      const response = await api.get('/');
      return response.data;
    } catch (error) {
      console.error('Error fetching destinations:', error);
      throw error;
    }
  },

  // GET destination by ID
  getById: async (id: string): Promise<Destination> => {
    try {
      const response = await api.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching destination ${id}:`, error);
      throw error;
    }
  },

  // POST create new destination (optional)
  create: async (data: Omit<Destination, 'id'>): Promise<Destination> => {
    try {
      const response = await api.post('/', data);
      return response.data;
    } catch (error) {
      console.error('Error creating destination:', error);
      throw error;
    }
  },

  // PUT update destination (optional)
  update: async (
    id: string,
    data: Partial<Destination>,
  ): Promise<Destination> => {
    try {
      const response = await api.put(`/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating destination ${id}:`, error);
      throw error;
    }
  },

  // DELETE destination (optional)
  delete: async (id: string): Promise<void> => {
    try {
      await api.delete(`/${id}`);
    } catch (error) {
      console.error(`Error deleting destination ${id}:`, error);
      throw error;
    }
  },
};

// Export for backward compatibility
export const getDestinations = destinationApi.getAll;
