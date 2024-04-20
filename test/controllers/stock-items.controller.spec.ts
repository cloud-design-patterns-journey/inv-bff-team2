import * as request from 'supertest';
import { Container } from 'typescript-ioc';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import Mock = jest.Mock;

import { AppModule } from '../../src/app.module';
import { StockItemsMockService } from '../../src/services';


describe('stock-item.controller', () => {

    let app: INestApplication;
    let serviceListStockItems: Mock;

    beforeEach(async () => {

        serviceListStockItems = jest.fn();
        Container.bind(StockItemsMockService).factory(
            () => ({
                listStockItems: serviceListStockItems
            }),
        );

        const moduleFixture: TestingModule = await Test.createTestingModule({
          imports: [AppModule],
        }).compile();
    
        app = moduleFixture.createNestApplication();
        await app.init();
    });

    test('canary verifies test infrastructure', () => {
        expect(true).toEqual(true);
    });

    describe('given GET /stock-items', () => {
        describe('when service is successful', () => {
            const expectedResult = [{ value: 'val' }];
            beforeEach(() => {
                serviceListStockItems.mockResolvedValue(expectedResult);
            });

            test('then return 200 status', async () => {
                return request(app.getHttpServer()).get('/stock-items').expect(200);
            });
        });
    });
});
