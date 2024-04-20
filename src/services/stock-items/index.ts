import {Provider} from "@nestjs/common";

import { StockItemsApi } from './stock-items.api';
import { StockItemsMockService } from './stock-items-mock.service';

export { StockItemsMockService, StockItemsApi };

export const provider: Provider = {
  provide: StockItemsApi,
  useClass: StockItemsMockService,
};
