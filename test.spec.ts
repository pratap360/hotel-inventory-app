
import { Calculator } from './testservice';

describe('testservice', () => {

    it('should add 2 numbers', () => {
        const service = new Calculator();
        expect(service.add(1, 2)).toBe(3);
    });
    it('should sub 2 numbers', () => {
        const service = new Calculator();
        expect(service.subtract(3, 2)).toBe(1);
    });

})