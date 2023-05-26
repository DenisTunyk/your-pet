import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifyError = message =>
  toast(<p style={{ fontSize: 16, color: 'red' }}>{message}</p>, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: 'error',
  });
