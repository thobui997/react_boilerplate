import { notification } from 'antd';

const showNotification = (type: 'success' | 'error' | 'info', message: string, desc: string) => {
	notification[type]({
		message: message,
		description: desc,
		style: { cursor: 'pointer' },
	});
};

export default showNotification;
