import React from 'react'
import { useState, useEffect } from 'react'
import * as C from './app.styles'
import { CategorieType } from './types/Categorie'
import { ItemType } from './types/Item'
import { categories } from './data/categories'
import { items } from './data/items'
import { getCurrentMonth, filterListByMonth } from './utilities/dateFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'
import { FormArea } from './components/FormArea'

function App() {

  const [list, setList] = useState<ItemType[]>(items);
  const [filteredList, setFilteredList] = useState<ItemType[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  //setFilteredList returns a new ItemType List with items froms that month.
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))

  }, [list, currentMonth])

  //to get values from filteredMonth
  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount = expenseCount + filteredList[i].value;
      } else {
        incomeCount = incomeCount + filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount)

  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: ItemType) => {

    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        {<InfoArea currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />}

        {<FormArea onAdd={handleAddItem} />}

        <TableArea list={filteredList}></TableArea>

      </C.Body>
    </C.Container>
  )
}

export default App