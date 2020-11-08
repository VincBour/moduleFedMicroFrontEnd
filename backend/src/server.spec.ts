import {app} from './server';
import request from 'supertest';

describe('Get /', () => {
    it('should response', async () => {
        await request(app).get('/').expect(200,'Express + TypeScript Server');
    });

    it('should return ', async () => {
        await request(app).get('/api/articles/learn-node').expect(200, {"_id":"5f9b1e92586abd86883f1a2a","name":"learn-node","upvotes":7,"comments":[{"username":"shawn","text":"Me too"}]})
    })
});