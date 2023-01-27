import Swal from "sweetalert2"

export const showModal = text => {
  Swal.fire({
    title:"Prediccion C.A.C. :",
    text,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    customClass: {
      confirmButton: 'bg-transparent hover:bg-[#6adf26] text-[#6adf26] font-semibold hover:text-white py-2 px-4 border border-[#6adf26] hover:border-transparent rounded'
    },
    buttonsStyling: false,
    confirmButtonText:"REGRESAR"

  })
}