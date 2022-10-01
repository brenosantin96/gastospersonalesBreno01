import { ItemType } from '../types/Item';

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const filterListByMonth = (list: ItemType[], date: string): ItemType[] => {
    let newList: ItemType[] = [];
    let [year, month] = date.split('-');

    for (let i in list) {
        if (list[i].date.getFullYear() === parseInt(year) && list[i].date.getMonth() + 1 === parseInt(month)) {
            newList.push(list[i])
        }
    }

    return newList;

}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

const addZeroToDate = (n: number): string => {
    if (n < 10) {
        return `0${n}`;
    } else {
        return `${n}`;
    }
}

export const formatCurrentMonth = (currentMonth: string): string => {

    let [year, month] = currentMonth.split('-');
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return `${months[parseInt(month) - 1]} ${year}`

}