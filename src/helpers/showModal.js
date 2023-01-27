import Swal from "sweetalert2"

export const showModal = text => {
  let prediction = parseFloat(text).toFixed(2)
  
  
  Swal.fire({
    title:"Prediccion C.A.C. :",
    text:'El costo de adquisión de ese cliente fue de '+prediction+' dolares',
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