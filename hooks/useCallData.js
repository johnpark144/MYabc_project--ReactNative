import { useEffect, useState } from 'react';
import { dbService } from '../lib/fBase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

export default function useCallData(
  collectionName,
  dataField,
  order_by = 'asc'
) {
  const [dataArr, setDataArr] = useState('');
  useEffect(() => {
    const q = query(
      collection(dbService, collectionName),
      orderBy(dataField, order_by)
    );
    // Output all datas that is called in array
    onSnapshot(q, (snapshot) => {
      setDataArr(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    });
  }, [collectionName, dataField, order_by]);

  return dataArr;
}
