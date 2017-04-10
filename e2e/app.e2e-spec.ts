import { Ng4ChatPage } from './app.po';

describe('ng4-chat App', () => {
  let page: Ng4ChatPage;

  beforeEach(() => {
    page = new Ng4ChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
