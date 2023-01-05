import image from "../assets/images.jpg";
import foodmart from "../assets/foodmart.jpg";
function Abstract() {
  return (
    <div className='w-full   text-black py 2'>
      <div className="max-w-screen p-4 mx-auto flex  justify-center w-full h-full ">
        <img
          className="w-1/4 max-h-[500px] object-cover" 
          src={image}
          alt="/"
        />
        
        <p className="text-xl w-2/4  px-2 py-20 ">
          El problema de negocio es determinar el costo de adquisición de nuevos
          clientes (CAC) en la cadena de supermercados Convenient Food Mart
          (CFM). El CAC es una métrica importante para las empresas, ya que mide
          el costo que la empresa incurre para atraer a un nuevo cliente a la
          empresa. Este costo puede incluir publicidad, promociones, marketing,
          incentivos y otros gastos relacionados con la adquisición de nuevos
          clientes. Conocer el CAC es importante para poder tomar decisiones
          sobre cómo invertir en la adquisición de nuevos clientes y para poder
          comparar el CAC con el valor a largo plazo que un cliente le genera a
          la empresa.
        </p>
        <img
          className="w-1/4 max-h-[500px] " 
          src={foodmart}
          alt="/"
        />
      </div>
    </div>
  );
}

export default Abstract;
