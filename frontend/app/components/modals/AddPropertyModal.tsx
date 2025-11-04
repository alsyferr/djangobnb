'use client'

import Image from "next/image"
import Modals from "./Modals"
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal"
import LoginModal from "./LoginModal"
import CustomButton from "../forms/CustomButton"
import { useState } from "react"
import Categories from "../addproperty/Categories"

const AddPropertyModal = () => {
    // states
    const [currentStep, setCurrentStep] = useState(1);
    const [dataCategory, setDataCategory] = useState('');
    const [dataTitle, setDataTitle] = useState('');
    const [dataDescription, setDataDescription] = useState('');
    const [dataPrice, setDataPrice] = useState('');
    const [dataBedrooms, setDataBedrooms] = useState('');
    const [dataBathroom, setDataBathrooms] = useState('');
    const [dataGuests, setDataGuests] = useState('');
    
    // 
    // 
    const addPropertyModal = useAddPropertyModal();

    // set datas
    const setCategory = (category: string) => {
        setDataCategory(category)
    } 

    // 
    // 
    const content = (
        <>  
            {currentStep == 1 ? (
                <>
                    <h2 className="mb-6 text-2xl">Choose Category</h2>

                    <Categories 
                        dataCategory={dataCategory}
                        setCategory={(category) => setCategory(category)}
                    />

                    <CustomButton 
                        label="Next"
                        onClick={() => setCurrentStep(2) }
                    />
                </>
            ) : currentStep == 2 ?  (
                <>
                    <h2 className="mb-6 text-2xl">Describe your place</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Title</label>
                            <input 
                                type="text"
                                value={dataTitle}
                                onChange={(e) => setDataTitle(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Description</label>
                            <textarea
                                value={dataDescription}
                                onChange={(e) => setDataDescription(e.target.value)}
                                className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
                            >
                            </textarea>
                        </div>
                    </div>

                     <CustomButton 
                        label="Previous"
                        className="mb-2 bg-black hover:bg-gray-800"
                        onClick={() => setCurrentStep(1) }
                    />

                     <CustomButton 
                        label="Next"
                        onClick={() => setCurrentStep(3) }
                    />
                </>
            ) : currentStep == 3 ?  (
                <> 
                    <h2 className="mb-6 text-2xl">Details</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Price per night</label>
                            <input 
                                type="number"
                                value={dataPrice}
                                onChange={(e) => setDataPrice(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Bedrooms</label>
                            <input 
                                type="number"
                                value={dataBedrooms}
                                onChange={(e) => setDataBedrooms(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Bathrooms</label>
                            <input 
                                type="number"
                                value={dataBathroom}
                                onChange={(e) => setDataBathrooms(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Maximum number of guests</label>
                            <input 
                                type="number"
                                value={dataGuests}
                                onChange={(e) => setDataGuests(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                    </div>

                      <CustomButton 
                        label="Previous"
                        className="mb-2 bg-black hover:bg-gray-800"
                        onClick={() => setCurrentStep(2) }
                    />

                     <CustomButton 
                        label="Next"
                        onClick={() => setCurrentStep(4) }
                    />
                </>
            ) : currentStep == 4 ?  (
                <> 
                    <h2 className="mb-6 text-2xl">Location</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        
                    </div>

                    <CustomButton 
                        label="Previous"
                        className="mb-2 bg-black hover:bg-gray-800"
                        onClick={() => setCurrentStep(3) }
                    />

                    <CustomButton 
                        label="Next"
                        onClick={() => setCurrentStep(5) }
                    />
                </>
            ) : ( 
                <> 
                </>
            )}
           
        </>
    )

  return (
    <>
        <Modals 
            isOpen={addPropertyModal.isOpen}
            close={addPropertyModal.close}
            label = "Add property"
            content={content}
        />
    </>
  )
}

export default AddPropertyModal