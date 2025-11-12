"use client"
import { useState, useEffect } from 'react'
import PropertyListItem from './PropertyListItem'
import apiService from '@/app/services/apiService'

export type PropertyType = {
    id: string;
    title: string;
    description: string;
    price_per_night: number;
    address: string;
    image_url: string;
    is_favorite: boolean;
}

interface PropertyListProps {
  landlord_id? : string | null;
  favorites?: boolean;
}

const PropertyList: React.FC<PropertyListProps> = ({landlord_id, favorites}) => {

  const [properties, setProperties] = useState<PropertyType[]>([])

  const markFavorite = (id: string, is_favorite: boolean) => {
    const tmpProperties = properties.map((property: PropertyType) => {
      if (property.id == id) {
        property.is_favorite = is_favorite

        if (is_favorite) {
          console.log('added to list of favorited properties')
        } else {
          console.log('removed from list')
        }
      }

      return property;
    })

    setProperties(tmpProperties);
  }
  
  const getProperties = async () => {
      let url = 'api/properties/';

      if (landlord_id) {
        url +=  `?landlord_id=${landlord_id}`
      } else if (favorites) {
        url += '?favorites=true'
      }

      const tmpProperties = await apiService.get(url)

      setProperties(tmpProperties.data.map((property: PropertyType) => {
        if (tmpProperties.favorites.includes(property.id)) {
            property.is_favorite = true
        } else {
            property.is_favorite = false
        }
        return property
      }));
      
  };

  useEffect(() => {
    getProperties();

  }, []);


  return (
    <>
        {properties.map((property) => {
            return (
                <PropertyListItem 
                  key={property.id}
                  property={property}
                  markFavorite={(is_favorite: any) => markFavorite(property.id, is_favorite)}
                />
            )
        })}
    </>
    
  )
}

export default PropertyList


// "use client";
// import { useState, useEffect } from "react";
// import PropertyListItem from "./PropertyListItem";
// import apiService from "@/app/services/apiService";

// export type PropertyType = {
//   id: string;
//   title: string;
//   description: string;
//   price_per_night: number;
//   address: string;
//   image_url: string;
//   is_favorite: boolean;
// };

// interface PropertyListProps {
//   landlord_id?: string | null;
// }

// const PropertyList: React.FC<PropertyListProps> = ({ landlord_id }) => {
//   const [properties, setProperties] = useState<PropertyType[]>([]);

//   const markFavorite = (id: string, is_favorite: boolean) => {
//     const updated = properties.map((property) =>
//       property.id === id ? { ...property, is_favorite } : property
//     );
//     setProperties(updated);
//     console.log(is_favorite ? "added to list of favorited properties" : "removed from list");
//   };

//   const getProperties = async () => {
//     let url = "api/properties/";
//     if (landlord_id) url += `?landlord_id=${landlord_id}`;

//     const response = await apiService.get(url);
//     const { data, favorites } = response; // adjust based on actual API shape

//     setProperties(
//       data.map((property: PropertyType) => ({
//         ...property,
//         is_favorite: favorites?.includes(property.id) ?? false,
//       }))
//     );
//   };

//   useEffect(() => {
//     getProperties();
//   }, [landlord_id]);

//   return (
//     <>
//       {properties.map((property) => (
//         <PropertyListItem
//           key={property.id}
//           property={property}
//           markFavorite={(is_favorite: boolean) => markFavorite(property.id, is_favorite)}
//         />
//       ))}
//     </>
//   );
// };

// export default PropertyList;
