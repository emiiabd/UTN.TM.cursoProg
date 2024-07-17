import productos from "../Data/productsData";
export const obtenerProductoPorId = (id) => {
  return productos.find(producto => Number(producto.id) === Number(id));
}