import { setCredentials } from 'app/auth/auth.slice';
import { useAppDispatch } from 'app/hooks';
import useLocalStorage from 'hooks/useLocalStorage';
import { AuthService } from 'services';

const useRefreshToken = () => {
  const dispatch = useAppDispatch();
  const [refreshToken, setRefreshToken] = useLocalStorage('refreshToken', '');

  const refresh = async () => {
    if (!refreshToken) return;
    const response = await AuthService.refreshToken({ RefreshToken: refreshToken });
    const { AccessToken: newAccessToken, RefreshToken: newRefreshToken } = response.data;
    dispatch(setCredentials({ token: newAccessToken }));
    setRefreshToken(newRefreshToken);

    return newAccessToken;
  };

  return refresh;
};

export default useRefreshToken;
