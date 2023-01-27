const Abstract = () => {
  return (
    <>
      <div className="bg-[url('https://myconvenient.net/wordpress/wp-content/uploads/2014/07/Convenient-On-Sunset-1.jpg')] bg-no-repeat bg-center bg-cover backdrop-blur-md">
        <div className="container mx-auto py-28">
          <div className="bg-white rounded-lg py-6">
          <h2 className="text-4xl font-bold text-center mb-4">Abstract</h2>
          <div className="flex-columns px-2">
          <p className="text-xl text-justify mx-10 py-6 px-3">El problema de negocio es determinar el costo de adquisición de nuevos clientes (CAC) en la cadena de supermercados Convenient Food Mart (CFM) con base en el historial de compra de los productos, las instalaciones e información de los clientes recopilados con anterioridad.
El CAC es una métrica importante para las empresas en el tema de publicidad y mercadeo ya que mide el costo que la empresa debe pagar para atraer a un nuevo cliente a cada instalación dependiendo de distintos factores que se mencionan en los formularios
</p>
          <p className="text-xl text-justify  py-6 px-12">Este front-end está desarrollado con React JS y utiliza la librería de estilos CSS Tailwind para predecir el costo de adquisición de un nuevo cliente en la cadena de supermercados Convenient Foodmark. La aplicación se conectará con un backend hecho en Python que utiliza la librería de FastAPI, que alimenta un modelo de machine learning entrenado con los valores asignados a cada una de las variables. Luego, traerá la predicción del modelo de machine learning. </p>
          <p  className="text-xl text-justify  py-6 px-12 italic font-semibold">Este proyecto fue desarrollado por
           <span className="text-[#fe00009f]"> Juan Pablo Montoya Vallejo </span> 
           como el proyecto final de la especialización en la Universidad de Antioquia.</p>
           </div>
</div>
        </div>
      </div>
    </>
  )
} 
export default Abstract;