import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../src/app.module';

describe('stock-item.controller', () => {

    let app: INestApplication;
    beforeEach(async () => {
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
            test('then return 200 status', async () => {
                return request(app.getHttpServer()).get('/stock-items').expect(200);
            });

            test('then should return an empty array', async () => {
                return request(app.getHttpServer()).get('/stock-items').expect([]);
            });
        });
    });
});
