import React, { createContext, useState } from 'react';
import { historyCollectionRef } from '../plugins/firebase';
import { getDocs } from 'firebase/firestore';

interface History {
  id: string,
  title: string,
  createdAt: string,
}

const historiesData = getDocs(historyCollectionRef)
.then(d => d.docs.map(doc => ({ ...doc.data() })));

export const HistoryContext = createContext();

export default function HistoryProvider ({ children }) {
  const [histories, setHistories] = useState(historiesData);
  return (
    <HistoryContext.Provider value={{ histories, setHistories }}>
      { children }
    </HistoryContext.Provider>
  )
}