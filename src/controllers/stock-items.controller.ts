import { Controller, Get } from '@nestjs/common';

@Controller('stock-items')
export class StockItemsController {

  @Get()
  async listStockItems(): Promise<any[]> {
    return [];
  }
}
