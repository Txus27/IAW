// src/productos/productos.service.ts
import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  private productos: Producto[] = [
    { id: 1, nombre: 'Pintura Roja', precio: 55 },
    { id: 2, nombre: 'Pintura Azul', precio: 49 },
    { id: 3, nombre: 'Pintura Verde', precio: 39 },
    { id: 4, nombre: 'Pintura Amarilla', precio: 59 },
  ];

  create(createProductoDto: CreateProductoDto): Producto {
    const nuevoId = this.productos.length + 1;
    const nuevoProducto: Producto = {
      id: nuevoId,
      ...createProductoDto,
    };
    this.productos.push(nuevoProducto);
    return nuevoProducto;
  }

  findAll(): Producto[] {
    return this.productos;
  }

  findOne(id: number): Producto | null {
    const producto = this.productos.find((prod) => prod.id === id);
    return producto || null; // si no existe, null
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
    const productoEliminado = this.productos.splice(index, 1);
    return productoEliminado[0];
  }
  

  filter(articulo: string, precio: number): Producto[] {
    const articuloLower = articulo.toLowerCase();
    return this.productos.filter(
      (prod) =>
        prod.nombre.toLowerCase().includes(articuloLower) &&
        prod.precio <= precio,
    );
  }
}
