import { GoscieModule } from './goscie.module';

describe('GoscieModule', () => {
  let goscieModule: GoscieModule;

  beforeEach(() => {
    goscieModule = new GoscieModule();
  });

  it('should create an instance', () => {
    expect(goscieModule).toBeTruthy();
  });
});
