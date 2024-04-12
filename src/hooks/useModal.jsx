import { useState } from 'react';

function useModal(initialState = false) {
    const [displayModal,setDisplayModal] = useState(initialState);

    const handleModal = ()=>{
        setDisplayModal(!displayModal);
    };

    return [displayModal, handleModal];
}

export default useModal;