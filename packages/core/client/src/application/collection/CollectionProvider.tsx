import React, { FC, ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Spin } from 'antd';

import { useCollectionManagerV2 } from './CollectionManagerProvider';
import { DeletedPlaceholder } from './DeletedPlaceholder';
import type { CollectionV2, GetCollectionFieldPredicate } from './Collection';

export const CollectionContextV2 = createContext<CollectionV2>(null);
CollectionContextV2.displayName = 'CollectionContextV2';

export interface CollectionProviderProps {
  name: string;
  ns?: string;
  children?: ReactNode;
}

export const CollectionProviderV2: FC<CollectionProviderProps> = (props) => {
  const { name, ns, children } = props;
  const collectionManager = useCollectionManagerV2();
  const [loading, setLoading] = useState(false);
  const [collection, setCollection] = useState<CollectionV2>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await collectionManager.getCollection(name, { ns });
        setCollection(res);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    load();
  }, [collectionManager, name, ns]);

  if (loading) return <Spin />;

  if (!collection) return <DeletedPlaceholder />;

  return <CollectionContextV2.Provider value={collection}>{children}</CollectionContextV2.Provider>;
};

export const useCollectionV2 = () => {
  const context = useContext(CollectionContextV2);
  if (!context) {
    throw new Error('useCollection() must be used within a CollectionProviderV2');
  }

  return context;
};

export const useCollectionFieldsV2 = (predicate?: GetCollectionFieldPredicate) => {
  const collection = useCollectionV2();
  const fields = useMemo(() => collection.getFields(predicate), [collection, predicate]);
  return fields;
};