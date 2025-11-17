"use client"
import Modals from './Modals'
import useSearchModal from '@/app/hooks/useSearchModal'
import SelectCountry, {SelectCountryValue} from '../forms/SelectCountry'
import { useState } from 'react'
import CustomButton from '../forms/CustomButton'
import { Range } from 'react-date-range'
import DatePicker from '../forms/Calendar'


const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'

}

const SearchModal = () => {
    let content = (<></>)
    const searchModal = useSearchModal();
    const [numGuests, setNumGuests] = useState<string>('1');
    const [numBedrooms, setNumBedrooms] = useState<string>('0');
    const [numBathrooms, setNumBathrooms] = useState<string>('0');
    const [country, setCountry] = useState<SelectCountryValue>();
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);

    // Close and search
    // 
    const closeAndSearch = () => {
        searchModal.close();
    }
    // 
    //  Set date range
    const _setDateRange = (selection: Range) => {
        if (searchModal.step === 'checkin') {
            searchModal.open('checkout')
        } else if (searchModal.step === 'checkout') {
            searchModal.open('detail')
        }

        setDateRange(selection);
    }


    // 
    // Caontents
    

    const contentLocation = (
        <>
            <h2 className='mb-6 text-2xl'>Where do you want to go?</h2>
            <SelectCountry
                value={country}
                onChange={(value) => setCountry(value as SelectCountryValue)}
            />

            <div className="mt-6 flex flex-row  gap-4">
                <CustomButton 
                    label='Check in date ->'
                    onClick={() => searchModal.open('checkin')}
                    className='w-full'
                />
            </div>
        </>
    )

    const contentCheckIn = (
        <>
            <h2 className='mb-6 text-2xl'>When do you want to check in?</h2>

            <DatePicker
                value={dateRange}
                onChange={(value) => _setDateRange(value.selection)}
            />

            <div className="mt-6 flex flex-row  gap-4">

                <CustomButton 
                    label='<- Location>'
                    onClick={() => searchModal.open('location')}
                    className='w-1/2'
                />

                <CustomButton 
                    label='Check out date ->'
                    onClick={() => searchModal.open('checkout')}
                    className='w-1/2'
                />
            </div>
        </>
    )

    const contentCheckOut = (
        <>
            <h2 className='mb-6 text-2xl'>When do you want to check out?</h2>

            <DatePicker
                value={dateRange}
                onChange={(value) => _setDateRange(value.selection)}
            />

            <div className="mt-6 flex flex-row  gap-4">

                <CustomButton 
                    label='<- Check in date>'
                    onClick={() => searchModal.open('checkin')}
                    className='w-1/2'
                />

                <CustomButton 
                    label='Details ->'
                    onClick={() => searchModal.open('details')}
                    className='w-1/2'
                />
            </div>
        </>
    )

    const contentDetails = (
        <>
            <h2 className='mb-6 text-2xl'>Details</h2>

            <div className="space-y-4">
                <div className="space-y-4">
                    <label>Number of guests:</label>
                    <input 
                        type="number"
                        min="1"
                        placeholder='Number of guests...'
                        value={numGuests}
                        onChange={(e) => setNumGuests(e.target.value)}
                        className='w-full h-14 px-4 border border-gray-300 rounded-xl'
                    />
                </div>

                <div className="space-y-4">
                    <label>Number of bedrooms:</label>
                    <input 
                        type="number"
                        min="1"
                        placeholder='Number of bedrooms...'
                        value={numBedrooms}
                        onChange={(e) => setNumBedrooms(e.target.value)}
                        className='w-full h-14 px-4 border border-gray-300 rounded-xl'
                    />
                </div>

                <div className="space-y-4">
                    <label>Number of bathrooms:</label>
                    <input 
                        type="number"
                        min="1"
                        placeholder='Number of bathrooms...'
                        value={numBathrooms}
                        onChange={(e) => setNumBathrooms(e.target.value)}
                        className='w-full h-14 px-4 border border-gray-300 rounded-xl'
                    />
                </div>
            </div>
           

            <div className="mt-6 flex flex-row  gap-4">

                <CustomButton 
                    label='<- Check out date>'
                    onClick={() => searchModal.open('checkout')}
                    className='w-1/2'
                />

                <CustomButton 
                    label='Search'
                    onClick={closeAndSearch}
                    className='w-1/2'
                />
            </div>
        </>
    )

    if (searchModal.step == 'location') {
        content = contentLocation;
    } else if (searchModal.step == 'checkin') {
        content = contentCheckIn;
    } else if (searchModal.step == 'checkout') {
        content = contentCheckOut;
    } else if (searchModal.step == 'details') {
        content = contentDetails;
    }



  return (
    <Modals
        isOpen={searchModal.isOpen}
        close={searchModal.close}
        label="Search"
        content={content}
    />
  )
}

export default SearchModal