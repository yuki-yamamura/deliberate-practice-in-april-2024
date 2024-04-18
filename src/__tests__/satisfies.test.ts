/* eslint-disable jest/expect-expect */
describe('understand `satisfies` operator', () => {
  test('the code that is quoted from the doc', () => {
    // see: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html
    type Colors = 'red' | 'green' | 'blue';
    type RGB = [red: number, green: number, blue: number];

    // type annotation causes an unexpected error: Property 'toUpperCase' does not exist on type 'string | RGB'.
    // const palette: Record<Colors, RGB | string> = {
    //   red: '#ff0000',
    //   green: [0, 50, 0],
    //   blue: [0, 0, 255],
    // };

    // satisfies operator solves this problem!
    const palette = {
      red: '#ff0000',
      green: [0, 50, 0],
      blue: [0, 0, 255],
    } satisfies Record<Colors, RGB | string>;

    expect(palette.red.toUpperCase()).toBe('#FF0000');
  });

  test('think over the usage', () => {
    const steps = {
      first: () => console.log('first step'),
      second: (value: string) => console.log(`second step is ${value}`),
      third: () => console.log('finished!'),
    } satisfies Record<string, (() => void) | ((value: string) => void)>;

    steps.first();
    steps.second('greeting');
    steps.third();
  });
});
