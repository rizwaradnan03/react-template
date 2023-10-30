import Swal from 'sweetalert2';

export const Alert = ({title,text,icon,confirmButton}) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButton: confirmButton,
  })
};
