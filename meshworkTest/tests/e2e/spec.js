var MeshworkHomepage = function () {
    this.get = function () {
        browser.get('http://meshwork.tma.com.vn/');
    };
};

describe('meshwork homepage', function () {
    it("should load homepage", function () {
        var meshworkHomepage = new MeshworkHomepage();
        meshworkHomepage.get();
        expect(browser.getTitle()).toBe('Meshwork');
    });
});