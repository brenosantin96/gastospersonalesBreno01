import React from 'react'
import { ItemType } from '../../types/Item'
import * as C from './styles'

type FormAreaProps = {
    onAdd: (item: ItemType) => void
}

export const FormArea = ({ onAdd }: FormAreaProps) => {

    const handleAddEvent = () => {
        let newItem: ItemType = {
            date: new Date(2022, 9, 27),
            category: 'food',
            title: 'item teste',
            value: 360
        };

        onAdd(newItem)
        console.log("O item foi adicionado", newItem)

    }


    return (
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    )
}