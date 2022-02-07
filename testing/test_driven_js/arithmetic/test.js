let arithmetic = require('./calculator');
let expect = require( 'chai' ).expect;


describe( 'Test arithmetic', () => {

    beforeEach( () => {
        x = 10, y = 20;
    })

    it( '10 + 30 should be 30', () => {
        expect( arithmetic.add( x,y ) ).to.eql( 30 );
    });

    it( '10 - 20 should be -10', () => {
        expect( arithmetic.subtract( x,y ) ).to.eql( -10 );
    });

    it( '10 * 20 should be 200', () => {
        expect( arithmetic.multiply( x,y ) ).to.eql( 200 );
    });

    it( '10 / 20 should be 0.5', () => {
        expect( arithmetic.divide( x,y ) ).to.eql( 0.5 );
    });
});