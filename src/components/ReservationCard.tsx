import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/reservationsSlice'

interface ReservationCardProps {
    name: string,
    index: number,
}

const ReservationCard: React.FC<ReservationCardProps> = ({name, index}) => {
    const dispatch = useDispatch()
    return <div onClick={() =>{
        dispatch(removeReservation(index))
    }} className="reservation-card-container">{name}</div>
}

export default ReservationCard
