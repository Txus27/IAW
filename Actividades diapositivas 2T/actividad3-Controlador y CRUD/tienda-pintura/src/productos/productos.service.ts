import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {

  private productos: Producto[] = [
    { id: 1, nombre: 'Pintura Roja', marca: 'Titanlux', precio: 55 },
    { id: 2, nombre: 'Pintura Azul', marca: 'Paint', precio: 49 },
    { id: 3, nombre: 'Pintura Verde', marca: 'Titanlux', precio: 39 },
    { id: 4, nombre: 'Pintura Amarilla', marca: 'Paint', precio: 59 },
  ];


create(createProductoDto: CreateProductoDto): Producto {
  const nuevoId = this.productos.length + 1;
  const nuevoProducto: Producto = {
    id: nuevoId,
    nombre: createProductoDto.nombre,
    precio: createProductoDto.precio,
    marca: createProductoDto.marca,
  };
  this.productos.push(nuevoProducto);
  return nuevoProducto;
}



  findAll(): Producto[] {
    return this.productos;
  }

 
  findOne(id: number): Producto | null {
    const producto = this.productos.find((prod) => prod.id === id);
    return producto || null;
  }

 
  update(id: number, updateProductoDto: UpdateProductoDto): Producto | null {
    const index = this.productos.findIndex((prod) => prod.id === id);
    if (index === -1) {
      return null;
    }
    this.productos[index] = {
      ...this.productos[index],
      ...updateProductoDto,
    };
    return this.productos[index];
  }

 
  remove(id: number): Producto | null {
    const index = this.productos.findIndex((prod) => prod.id === id);
    if (index === -1) {
      return null;
    }
    const [productoEliminado] = this.productos.splice(index, 1);
    return productoEliminado;
  }

 
  filter(articulo: string, precio: number): Producto[] {
    const articuloLower = articulo.toLowerCase();
    return this.productos.filter(
      (prod) =>
        prod.nombre.toLowerCase().includes(articuloLower) &&
        prod.precio <= precio,
    );
  }


  searchByColor(color: string): string {
    return `Buscando las pinturas de color ${color}`;
  }
}
