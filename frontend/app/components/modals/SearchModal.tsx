"use client"
import Modals from './Modals'
import useSearchModal from '@/app/hooks/useSearchModal'

const SearchModal = () => {
    let content = (<></>)
    const SearchModal = useSearchModal();


  return (
    <Modals
        isOpen={SearchModal.isOpen}
        close={SearchModal.close}
        label="Search"
        content={content}
    />
  )
}

export default SearchModal