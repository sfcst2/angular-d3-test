import { AngularD3TestPage } from './app.po';

describe('angular-d3-test App', function() {
  let page: AngularD3TestPage;

  beforeEach(() => {
    page = new AngularD3TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
