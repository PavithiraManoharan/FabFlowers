import { NewsitemFactory } from './newsitem-factory';

describe('NewsitemFactory', () => {
  it('should create an instance', () => {
    expect(new NewsitemFactory()).toBeTruthy();
  });
});
