import { Controller, Delete, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {

  // Elimina todos los productos
  @Delete()
  deleteAll(): string {
    return `Hemos borrado todos los productos`;
  }

  // Eliminar un producto en específico por su ID
  @Delete(':id')
  deleteOne(@Param('id') id: string): string {
    return `Hemos borrado el producto ${id}`;
  }
}
