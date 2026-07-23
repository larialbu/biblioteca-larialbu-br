import { describe, it, expect } from 'vitest';
import { isCPF } from './isCPF';
describe('isCPF', () => {
    it('should validate correct CPFs', () => {
        expect(isCPF('52998224725')).toBe(true);
        expect(isCPF('529.982.247-25')).toBe(true);
    });
    it('should invalidate incorrect CPFs', () => {
        expect(isCPF('12345678901')).toBe(false);
        expect(isCPF('11111111111')).toBe(false); // Known bad sequence
        expect(isCPF('123.456.789-00')).toBe(false);
    });
    it('should invalidate CPFs with wrong lengths', () => {
        expect(isCPF('123')).toBe(false);
        expect(isCPF('12345678901234')).toBe(false);
    });
});
