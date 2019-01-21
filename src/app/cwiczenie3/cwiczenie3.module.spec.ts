import { Cwiczenie3Module } from './cwiczenie3.module';

describe('Cwiczenie3Module', () => {
  let cwiczenie3Module: Cwiczenie3Module;

  beforeEach(() => {
    cwiczenie3Module = new Cwiczenie3Module();
  });

  it('should create an instance', () => {
    expect(cwiczenie3Module).toBeTruthy();
  });
});
