import add from "./add";

describe('add test', () => {
    it('should return 3', () => {
        expect(add(12, 2)).toBe(14);
    })
});