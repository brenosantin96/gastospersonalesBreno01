import React from 'react'
import { useState, useEffect } from 'react'
import * as C from './app.styles'
import { CategorieType } from './types/Categorie'
import { ItemType } from './types/Item'
import { categories } from './data/categories'
import { items } from './data/items'
import { getCurrentMonth } from './utilities/dateFilter'

function App() {

  const [list, setList] = useState<ItemType[]>(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        {/* área de informacoes */}

        {/* área de inserção */}

        {/* área de lista */}

      </C.Body>
    </C.Container>
  )
}

export default App