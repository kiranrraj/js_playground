let expect = require( 'chai' ).expect;
describe( 'util tests', () => {
    it( 'should pass this canary test', () => {
        expect( true ).to.eql( true );
    });
    it( 'should not pass this canary test', () => {
        expect( true ).to.eql( false );
    });
});