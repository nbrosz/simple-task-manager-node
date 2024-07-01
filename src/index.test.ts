import { greet } from './index';

describe('greet function', () => {
    const testCases = [
        { name: 'World', expected: 'Hello, World!' },
        { name: 'TypeScript', expected: 'Hello, TypeScript!' }
    ];

    testCases.forEach(({ name, expected }) => {
        it(`should return a greeting message with the provided name ${name}`, () => {
            expect(greet(name)).toBe(expected);
        });
    });
});