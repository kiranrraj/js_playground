let assert = require('assert');
let http = require('http');
let server = require('./server');

describe('HTTP Server Testing Using Mocha', function() {

	before(() => { server.listen(3000); });
	after(() => { server.close(); });

	describe('Testing HTTP Server', function() {
        
		it('Getting home page', function(done) {
            this.retries(2)
			http.get('http://127.0.0.1:3000', (res) => {
				assert.equal(res.statusCode, 200);

                let body = '';
				res.on('data', function(msg) { body += msg; });
				res.on('end', function() { 
                    assert.equal(body, 'Hello World');
					done();
				});
			});
		});
	});
});