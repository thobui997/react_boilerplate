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
const OnlineMonitoring = lazy(() => import('pages/OnlineMonitoring/OnlineMonitoring'));

// Đơn vị PCCC
const FireProtectionUnit = lazy(() => import('pages/FireProtectionUnit/FireProtectionUnit'));
const UnitManagement = lazy(() => import('pages/FireProtectionUnit/children/UnitManagement'));
const UnitDetail = lazy(() => import('pages/FireProtectionUnit/children/UnitDetail'));
const DutySchedule = lazy(() => import('pages/FireProtectionUnit/children/DutySchedule'));

const FIRE_PROTECTION_UNIT_ROUTE = {
  path: `${PATH_NAME.FIRE_PROTECTION_UNIT.BASE}/*`,
  element: (
    <Suspense fallback={'Đang tải...'}>
      <FireProtectionUnit />
    </Suspense>
  ),
  children: [
    { index: true, element: <UnitManagement /> },
    {
      path: 'quan-ly-don-vi',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <UnitManagement />
        </Suspense>
      ),
    },
    {
      path: 'chi-tiet-don-vi',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <UnitDetail />
        </Suspense>
      ),
    },
    {
      path: 'lich-truc',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <DutySchedule />
        </Suspense>
      ),
    },
  ],
};

// Công tác phòng cháy
const FirePreventionWork = lazy(() => import('pages/FirePreventionWork/FirePreventionWork'));
const ConstructionManagement = lazy(() => import('pages/FirePreventionWork/children/ConstructionManagement'));
const CertificationAssessment = lazy(() => import('pages/FirePreventionWork/children/CertificationAssessment'));
const SoCuKiemTra = lazy(() => import('pages/FirePreventionWork/children/SoCuKiemTra'));
const TestPlan = lazy(() => import('pages/FirePreventionWork/children/TestPlan'));
const TrainingPropaganda = lazy(() => import('pages/FirePreventionWork/children/TrainingPropaganda'));
const HandlingViolations = lazy(() => import('pages/FirePreventionWork/children/HandlingViolations'));

const FIRE_PREVENTION_WORK_ROUTE = {
  path: `${PATH_NAME.FIRE_PREVENTION_WORK.BASE}/*`,
  element: (
    <Suspense fallback={'Đang tải...'}>
      <FirePreventionWork />
    </Suspense>
  ),
  children: [
    { index: true, element: <ConstructionManagement /> },
    {
      path: 'quan-ly-co-so-cong-trinh',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <ConstructionManagement />
        </Suspense>
      ),
    },
    {
      path: 'tham-duyet-chung-nhan',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <CertificationAssessment />
        </Suspense>
      ),
    },
    {
      path: 'so-cu-kiem-tra',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <SoCuKiemTra />
        </Suspense>
      ),
    },
    {
      path: 'ke-hoach-kiem-tra',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <TestPlan />
        </Suspense>
      ),
    },
    {
      path: 'tuyen-truyen-huan-luyen',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <TrainingPropaganda />
        </Suspense>
      ),
    },
    {
      path: 'xu-ly-vi-pham',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <HandlingViolations />
        </Suspense>
      ),
    },
  ],
};

// Công tác chữa cháy
const FireFightingWork = lazy(() => import('pages/FireFightingWork/FireFightingWork'));
const ListOfFireSpots = lazy(() => import('pages/FireFightingWork/children/ListOfFireSpots'));
const PracticeBuildingFireFightingPlans = lazy(
  () => import('pages/FireFightingWork/children/PracticeBuildingFireFightingPlans'),
);
const RescueWork = lazy(() => import('pages/FireFightingWork/children/RescueWork'));

const FIRE_FIGHTING_WORK_ROUTE = {
  path: `${PATH_NAME.FIRE_FIGHTING_WORK.BASE}/*`,
  element: (
    <Suspense fallback={'Đang tải...'}>
      <FireFightingWork />
    </Suspense>
  ),
  children: [
    { index: true, element: <ListOfFireSpots /> },
    {
      path: 'danh-sach-diem-chay',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <ListOfFireSpots />
        </Suspense>
      ),
    },
    {
      path: 'xay-dung-phuong-an-thuc-tap',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <PracticeBuildingFireFightingPlans />
        </Suspense>
      ),
    },
    {
      path: 'cong-tac-cuu-nan-cuu-ho',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <RescueWork />
        </Suspense>
      ),
    },
  ],
};

// Quản lý thiết bị
const DeviceManagement = lazy(() => import('pages/DeviceManagement/DeviceManagement'));
const DeviceCenter = lazy(() => import('pages/DeviceManagement/children/DeviceCenter'));
const Sensor = lazy(() => import('pages/DeviceManagement/children/Sensor'));

const DEVICE_MANAGEMENT_ROUTE = {
  path: `${PATH_NAME.DEVICE_MANAGEMENT.BASE}/*`,
  element: (
    <Suspense fallback={'Đang tải...'}>
      <DeviceManagement />
    </Suspense>
  ),
  children: [
    { index: true, element: <DeviceCenter /> },
    {
      path: 'thiet-bi-trung-tam',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <DeviceCenter />
        </Suspense>
      ),
    },
    {
      path: 'cam-bien',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <Sensor />
        </Suspense>
      ),
    },
  ],
};

// Report
const Report = lazy(() => import('pages/Report/Report'));
const Construction = lazy(() => import('pages/Report/children/Construction'));
const DeviceInstallation = lazy(() => import('pages/Report/children/DeviceInstallation'));
const Vehicle = lazy(() => import('pages/Report/children/Vehicle'));
const FirePoint = lazy(() => import('pages/Report/children/FirePoint'));

const REPORT_ROUTE = {
  path: `${PATH_NAME.REPORT.BASE}/*`,
  element: (
    <Suspense fallback={'Đang tải...'}>
      <Report />
    </Suspense>
  ),
  children: [
    { index: true, element: <DeviceInstallation /> },
    {
      path: 'thiet-bi-lap-dat',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <DeviceInstallation />
        </Suspense>
      ),
    },
    {
      path: 'co-so-cong-trinh',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <Construction />
        </Suspense>
      ),
    },
    {
      path: 'phuong-tien',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <Vehicle />
        </Suspense>
      ),
    },
    {
      path: 'diem-chay',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <FirePoint />
        </Suspense>
      ),
    },
  ],
};

// User
const User = lazy(() => import('pages/User/User'));
const UserManagement = lazy(() => import('pages/User/children/UserManagement'));
const CustomerManagement = lazy(() => import('pages/User/children/CustomerManagement'));
const LoginHistory = lazy(() => import('pages/User/children/LoginHistory'));
const PermissionManagement = lazy(() => import('pages/User/children/PermissionManagement'));

const USER_ROUTE = {
  path: `${PATH_NAME.USER.BASE}/*`,
  element: (
    <Suspense fallback={'Đang tải...'}>
      <User />
    </Suspense>
  ),
  children: [
    { index: true, element: <UserManagement /> },
    {
      path: 'quan-ly-nguoi-dung',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <UserManagement />
        </Suspense>
      ),
    },
    {
      path: 'quan-ly-khach-hang',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <CustomerManagement />
        </Suspense>
      ),
    },
    {
      path: 'lich-su-dang-nhap',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <LoginHistory />
        </Suspense>
      ),
    },
    {
      path: 'quan-ly-phan-quyen',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <PermissionManagement />
        </Suspense>
      ),
    },
  ],
};

// Quản lý chất lượng
const QualityManagement = lazy(() => import('pages/QualityManagement/QualityManagement'));
const ErrorManagement = lazy(() => import('pages/QualityManagement/children/ErrorManagement'));
const DeviceTypeManagement = lazy(() => import('pages/QualityManagement/children/DeviceTypeManagement'));
const ProductionReport = lazy(() => import('pages/QualityManagement/children/ProductionReport'));
const DetailReport = lazy(() => import('pages/QualityManagement/children/DetailReport'));
const Summary = lazy(() => import('pages/QualityManagement/children/Summary'));

const QUALITY_MANAGEMENT_ROUTE = {
  path: `${PATH_NAME.QUALITY_MANAGEMENT.BASE}/*`,
  element: (
    <Suspense fallback={'Đang tải...'}>
      <QualityManagement />
    </Suspense>
  ),
  children: [
    { index: true, element: <ErrorManagement /> },
    {
      path: 'quan-ly-loi',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <ErrorManagement />
        </Suspense>
      ),
    },
    {
      path: 'quan-ly-loai-thiet-bi',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <DeviceTypeManagement />
        </Suspense>
      ),
    },
    {
      path: 'bao-cao-ket-qua-san-xuat',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <ProductionReport />
        </Suspense>
      ),
    },
    {
      path: 'bao-cao-chi-tiet',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <DetailReport />
        </Suspense>
      ),
    },
    {
      path: 'tong-hop',
      element: (
        <Suspense fallback={'Đang tải...'}>
          <Summary />
        </Suspense>
      ),
    },
  ],
};

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
              {
                path: PATH_NAME.DASHBOARD,
                element: (
                  <Suspense fallback={'Đang tải...'}>
                    <Dashboard />
                  </Suspense>
                ),
              },

              {
                path: PATH_NAME.ONLINE_MONITORING,
                element: (
                  <Suspense fallback={'Đang tải...'}>
                    <OnlineMonitoring />
                  </Suspense>
                ),
              },

              FIRE_PROTECTION_UNIT_ROUTE,

              FIRE_PREVENTION_WORK_ROUTE,

              FIRE_FIGHTING_WORK_ROUTE,

              DEVICE_MANAGEMENT_ROUTE,

              REPORT_ROUTE,

              USER_ROUTE,

              QUALITY_MANAGEMENT_ROUTE,
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
