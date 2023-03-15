import { selectCurrentToken } from 'app/auth/auth.slice';
import { useRefreshToken } from 'hooks';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const PersistLogin = () => {
  const token = useSelector(selectCurrentToken);
  const refresh = useRefreshToken();

  // states
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    !token ? verifyRefreshToken() : setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, []);

  return isLoading ? <p>Đang tải...</p> : <Outlet />;
};

export default PersistLogin;
