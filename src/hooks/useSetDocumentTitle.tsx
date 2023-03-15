import { useEffect } from 'react';

const useSetDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, []);
};

export default useSetDocumentTitle;
