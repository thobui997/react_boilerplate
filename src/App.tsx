import { PATH_NAME } from 'core/constants/path-name';
import { AppLayout } from 'layouts';
import Login from 'pages/Auth/Login';
import PersistLogin from 'pages/Auth/PersistLogin';
import ProtectedRoute from 'pages/Auth/ProtectedRoute';
import ResultComponent from 'pages/ResultComponent';
import { lazy, Suspense } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import './App.less';
import './assets/scss/main.scss';

const Dashboard = lazy(() => import('pages/Dashboard/Dashboard'));

// parent routes
const routes: RouteObject[] = [
  // public router
  { path: '/dang-nhap', element: <Login /> },

  { index: true, element: <Navigate to={PATH_NAME.DASHBOARD} replace /> },

  // private router
  {
    element: <PersistLogin />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <AppLayout />,
            children: [
              
            ],
          },
        ],
      },
    ],
  },

  // internal server
  { path: '/500', element: <ResultComponent status={500} title='500' subTitle='Xin lỗi, Có lỗi xảy ra.' /> },
  // not unauthorized
  {
    path: '/403',
    element: (
      <ResultComponent
        status={403}
        title='403'
        subTitle='Xin lỗi, Bạn không có quyền truy cập tới trang này, Vui lòng liên hệ Quản trị viên để được cấp quyền truy cập.'
      />
    ),
  },
  //  catch all routes
  {
    path: '*',
    element: <ResultComponent status={404} title='404' subTitle='Xin lỗi, Trang truy cập không tồn tại.' />,
  },
];

function App() {
  const element = useRoutes(routes);

  return <>{element}</>;
}

export default App;
