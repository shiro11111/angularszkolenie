import { Cwiczenie2Module } from './cwiczenie2.module';

describe('Cwiczenie2Module', () => {
  let czwiczenie2Module: Cwiczenie2Module;

  beforeEach(() => {
    czwiczenie2Module = new Cwiczenie2Module();
  });

  it('should create an instance', () => {
    expect(czwiczenie2Module).toBeTruthy();
  });
});
