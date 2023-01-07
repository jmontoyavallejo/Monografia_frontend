import image from "../assets/foto.png";
import foodmart from "../assets/foodmart.jpg";
function Abstract() {
  return (
    <div className='w-full   text-black py 2'>
      <div className="max-w-screen p-4 mx-auto flex  justify-center w-full h-full ">
        <img
          className="w-1/4  " 
          src={image}
          alt="/"
        />
        
        <p className="text-xl w-2/4  px-2 py-20 ">
        Este front-end está desarrollado con React JS y utiliza la librería de estilos CSS Tailwind para predecir el costo de adquisición de un nuevo cliente en la cadena de supermercados Convenient Foodmark. La aplicación se conectará con un backend que utiliza FastAPI y una imagen de Docker, que alimenta un modelo de machine learning entrenado con los valores asignados a cada una de las variables. Luego, traerá la predicción del modelo de machine learning. Este proyecto fue desarrollado por Juan Pablo Montoya como el proyecto final de la especialización en la Universidad de Antioquia. documentacion del backend https://test-api-pr1g.onrender.com/docs , link repositorios  https://github.com/jmontoyavallejo?tab=repositories        </p>
        <img
          className="w-1/4  " 
          src={foodmart}
          alt="/"
        />
      </div>
    </div>
  );
}

export default Abstract;
