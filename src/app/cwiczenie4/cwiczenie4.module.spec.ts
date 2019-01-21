import { Cwiczenie4Module } from './cwiczenie4.module';

describe('Cwiczenie4Module', () => {
  let cwiczenie4Module: Cwiczenie4Module;

  beforeEach(() => {
    cwiczenie4Module = new Cwiczenie4Module();
  });

  it('should create an instance', () => {
    expect(cwiczenie4Module).toBeTruthy();
  });
});
