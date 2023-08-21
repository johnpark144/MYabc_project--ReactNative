import { useEffect, useState } from 'react';
import { dbService } from '../lib/fBase';
import {
  OrderByDirection,
  collection,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';

export default function useCallData(
  collectionName: string,
  dataField: string,
  order_by: OrderByDirection = 'asc'
) {
  const [dataArr, setDataArr] = useState([]);
  useEffect(() => {
    const q = query(
      collection(dbService, collectionName),
      orderBy(dataField, order_by)
    );
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
