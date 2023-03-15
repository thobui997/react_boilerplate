import { Menu, MenuProps } from 'antd';
import { Board, Dashboard, Device, Dot, Fire, FireShield, Map, Report, User, Work } from 'assets/icons';
import { PATH_NAME } from 'core/constants/path-name';
import { Link, useLocation } from 'react-router-dom';

const FIRE_PROTECTION_UNIT = {
  key: PATH_NAME.FIRE_PROTECTION_UNIT.BASE,
  label: 'Đơn vị PCCC',
  icon: <FireShield />,
  children: [
    {
      key: PATH_NAME.FIRE_PROTECTION_UNIT.UNIT_MANAGEMENT,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.FIRE_PROTECTION_UNIT.UNIT_MANAGEMENT }}>Quản lý đơn vị</Link>,
    },
    {
      key: PATH_NAME.FIRE_PROTECTION_UNIT.UNIT_DETAIL,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.FIRE_PROTECTION_UNIT.UNIT_DETAIL }}>Chi tiết đơn vị</Link>,
    },
    {
      key: PATH_NAME.FIRE_PROTECTION_UNIT.DUTY_SCHEDULE,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.FIRE_PROTECTION_UNIT.DUTY_SCHEDULE }}>Lịch trực</Link>,
    },
  ],
};

const FIRE_PREVENTION_WORK = {
  key: PATH_NAME.FIRE_PREVENTION_WORK.BASE,
  label: 'Công tác phòng cháy',
  icon: <Work />,
  children: [
    {
      key: PATH_NAME.FIRE_PREVENTION_WORK.CONSTRUCTION_MANAGEMENT,
      icon: <Dot />,
      label: (
        <Link to={{ pathname: PATH_NAME.FIRE_PREVENTION_WORK.CONSTRUCTION_MANAGEMENT }}>Quản lý cơ sở công trình</Link>
      ),
    },
    {
      key: PATH_NAME.FIRE_PREVENTION_WORK.CERTIFICATION_ASSESSMENT,
      icon: <Dot />,
      label: (
        <Link to={{ pathname: PATH_NAME.FIRE_PREVENTION_WORK.CERTIFICATION_ASSESSMENT }}>Thẩm duyệt chứng nhận</Link>
      ),
    },
    {
      key: PATH_NAME.FIRE_PREVENTION_WORK.SO_CU_KIEM_TRA,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.FIRE_PREVENTION_WORK.SO_CU_KIEM_TRA }}>Sở cứ kiểm tra</Link>,
    },
    {
      key: PATH_NAME.FIRE_PREVENTION_WORK.TEST_PLAN,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.FIRE_PREVENTION_WORK.TEST_PLAN }}>Kế hoạch kiểm tra</Link>,
    },
    {
      key: PATH_NAME.FIRE_PREVENTION_WORK.TRANINING_PROPAGANDA,
      icon: <Dot />,
      label: (
        <Link to={{ pathname: PATH_NAME.FIRE_PREVENTION_WORK.TRANINING_PROPAGANDA }}>Tuyên truyền huấn luyện</Link>
      ),
    },
    {
      key: PATH_NAME.FIRE_PREVENTION_WORK.HANDLING_VIOLATIONS,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.FIRE_PREVENTION_WORK.HANDLING_VIOLATIONS }}>Xử lý vi phạm</Link>,
    },
  ],
};

const FIRE_FIGHTING_WORK = {
  key: PATH_NAME.FIRE_FIGHTING_WORK.BASE,
  icon: <Fire />,
  label: 'Công tác chữa cháy',
  children: [
    {
      key: PATH_NAME.FIRE_FIGHTING_WORK.LIST_OF_FIRE_SPOTS,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.FIRE_FIGHTING_WORK.LIST_OF_FIRE_SPOTS }}>Danh sách điểm cháy</Link>,
    },
    {
      key: PATH_NAME.FIRE_FIGHTING_WORK.PRACTICE_BUILDING_FIRE_FIGHTING_PLANS,
      icon: <Dot />,
      label: (
        <Link to={{ pathname: PATH_NAME.FIRE_FIGHTING_WORK.PRACTICE_BUILDING_FIRE_FIGHTING_PLANS }} title='Xây dựng phương án thực tập'>
          Xây dựng phương án thực tập
        </Link>
      ),
    },
    {
      key: PATH_NAME.FIRE_FIGHTING_WORK.RESCUE_WORK,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.FIRE_FIGHTING_WORK.RESCUE_WORK }}>Công tác cứu nạn cứu hộ</Link>,
    },
  ],
};

const DEVICE_MANAGEMENT = {
  key: PATH_NAME.DEVICE_MANAGEMENT.BASE,
  icon: <Device />,
  label: 'Quản lý thiết bị',
  children: [
    {
      key: PATH_NAME.DEVICE_MANAGEMENT.DEVICE_CENTER,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.DEVICE_MANAGEMENT.DEVICE_CENTER }}>Thiết bị trung tâm</Link>,
    },
    {
      key: PATH_NAME.DEVICE_MANAGEMENT.SENSOR,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.DEVICE_MANAGEMENT.SENSOR }}>Cảm biến</Link>,
    },
  ],
};

const REPORT = {
  key: PATH_NAME.REPORT.BASE,
  icon: <Report />,
  label: 'Báo cáo',
  children: [
    {
      key: PATH_NAME.REPORT.DEVICE_INSTALLATION,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.REPORT.DEVICE_INSTALLATION }}>Thiết bị lắp đặt</Link>,
    },
    {
      key: PATH_NAME.REPORT.CONSTRUCTION,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.REPORT.CONSTRUCTION }}>Cơ sở công trình</Link>,
    },
    {
      key: PATH_NAME.REPORT.VEHICLE,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.REPORT.VEHICLE }}>Phương tiện</Link>,
    },
    {
      key: PATH_NAME.REPORT.FIRE_POINT,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.REPORT.FIRE_POINT }}>Điểm cháy</Link>,
    },
  ],
};

const USER = {
  key: PATH_NAME.USER.BASE,
  icon: <User />,
  label: 'Người dùng',
  children: [
    {
      key: PATH_NAME.USER.USER_MANAGEMENT,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.USER.USER_MANAGEMENT }}>Quản lý người dùng</Link>,
    },
    {
      key: PATH_NAME.USER.CUSTOMER_MANAGEMENT,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.USER.CUSTOMER_MANAGEMENT }}>Quản lý khách hàng</Link>,
    },
    {
      key: PATH_NAME.USER.LOGIN_HISTORY,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.USER.LOGIN_HISTORY }}>Lịch sử đăng nhập</Link>,
    },
    {
      key: PATH_NAME.USER.PERMISSION_MANAGEMENT,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.USER.PERMISSION_MANAGEMENT }}>Quản lý phân quyền</Link>,
    },
  ],
};

const QUALITY_MANAGEMENT = {
  key: PATH_NAME.QUALITY_MANAGEMENT.BASE,
  icon: <Board />,
  label: 'Quản lý chất lượng',
  children: [
    {
      key: PATH_NAME.QUALITY_MANAGEMENT.ERROR_MANAGEMENT,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.QUALITY_MANAGEMENT.ERROR_MANAGEMENT }}>Quản lý lỗi</Link>,
    },
    {
      key: PATH_NAME.QUALITY_MANAGEMENT.DEVICE_TYPE_MANAGEMENT,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.QUALITY_MANAGEMENT.DEVICE_TYPE_MANAGEMENT }}>Quản lý loại thiết bị</Link>,
    },
    {
      key: PATH_NAME.QUALITY_MANAGEMENT.PRODUCTION_REPORT,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.QUALITY_MANAGEMENT.PRODUCTION_REPORT }}>Báo cáo kết quả sản xuất</Link>,
    },
    {
      key: PATH_NAME.QUALITY_MANAGEMENT.DETAIL_REPORT,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.QUALITY_MANAGEMENT.DETAIL_REPORT }}>Báo cáo chi tiết</Link>,
    },
    {
      key: PATH_NAME.QUALITY_MANAGEMENT.SUMMARY,
      icon: <Dot />,
      label: <Link to={{ pathname: PATH_NAME.QUALITY_MANAGEMENT.SUMMARY }}>Tổng hợp</Link>,
    },
  ],
};

const MENU_ITEMS: MenuProps['items'] = [
  {
    key: PATH_NAME.DASHBOARD,
    icon: <Dashboard />,
    label: <Link to={{ pathname: PATH_NAME.DASHBOARD }}>Trung tâm chỉ huy</Link>,
  },

  {
    key: PATH_NAME.ONLINE_MONITORING,
    icon: <Map />,
    label: <Link to={{ pathname: PATH_NAME.ONLINE_MONITORING }}>Giám sát trực tuyến</Link>,
  },

  FIRE_PROTECTION_UNIT,

  FIRE_PREVENTION_WORK,

  FIRE_FIGHTING_WORK,

  DEVICE_MANAGEMENT,

  REPORT,

  USER,

  QUALITY_MANAGEMENT,
];

const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <Menu
      className='sidebar-menu'
      theme='light'
      mode='inline'
      defaultSelectedKeys={[PATH_NAME.DASHBOARD]}
      selectedKeys={[pathname]}
      defaultOpenKeys={[`/${pathname.split('/')[1]}`]}
      items={MENU_ITEMS}
    />
  );
};

export default SideBar;
