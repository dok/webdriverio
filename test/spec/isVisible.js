/*jshint expr: true*/
describe('isVisible', function() {

    before(h.setup());

    it('should check if a single element is visible', function(done) {
        this.client
            .isVisible('.searchinput', function(err, isVisible) {
                assert.equal(err, null);
                isVisible.should.be.true;
            })
            .isVisible('.invisible', function(err, isVisible) {
                assert.equal(err, null);
                isVisible.should.be.false;
            })
            .call(done);
    });

    it('should throw an error when an invalid selector has been passed', function (done) {
        this.client
            .isVisible('#1234 invalid selector', function(err) {
                assert.notEqual(err, null);
            })
            .call(done);
    });

    it('should check multiple elements are visible', function(done) {
        this.client
            .isVisible('.visibletest', function(err, isVisible) {
                assert.equal(err, null);
                isVisible.should.be.an.instanceOf(Array);
                isVisible.should.have.length(2);
                isVisible.should.containEql(false);
            })
            .call(done);
    });

});