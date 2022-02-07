let palindrome = require('./palindrome');
let palindrome2 = require('./palindrome2');
let expect = require( 'chai' ).expect;

describe( 'Test palindrome', () => {

    it( '"kerala" is not a palindrome', () => {
        expect( palindrome( "kerala" ) ).to.eql( 'It is not a palindrome' );
    });

    it( '"mom" is a palindrome', () => {
        expect( palindrome( "mom" ) ).to.eql( 'It is a palindrome' );
    });

    it( '"malayalam" is a palindrome', () => {
        expect( palindrome( "malayalam" ) ).to.eql( 'It is not a palindrome' );
    });
});

describe( 'Test palindrome2', () => {

    it( '"kerala" is not a palindrome', () => {
        expect( palindrome2( "kerala is beautiful" ) ).to.eql( false );
    });

    it( '"malayalam" is a palindrome', () => {
        expect( palindrome2( "malayalam" ) ).to.eql( true );
    });

    it( '"mothalali" is a palindrome', () => {
        expect( palindrome2( "mothalali" ) ).to.eql( true );
    });
});