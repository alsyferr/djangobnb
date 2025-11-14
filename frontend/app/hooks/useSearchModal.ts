import {create }from 'zustand'

export type SearchQuery = {
    country?: string;
    checkIn?: Date | null;
    checkOut?: Date | null;
    guests?: Number;
    bedrooms?: Number;
    bathrooms?: Number;
    category?: string;
}

interface SearchModalStore { 
    isOpen: boolean;
    open: () => void;
    close: () => void;
    query: SearchQuery;
    setQuery: (query: SearchQuery) => void;
}

const useSearchModal = create<SearchModalStore>((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
    setQuery: (query: SearchQuery) => set({query: query}),
    query: {
        country: '',
        checkIn: null,
        checkOut: null,
        guests: 1,
        bedrooms: 0,
        bathrooms: 0,
        category: '',
    },
}))

export default useSearchModal