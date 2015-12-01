import { should } from 'chai';
import catatonicCircle from '../lib';

/*import assert from 'assert';
import catatonicCircle from '../lib';*/

/*describe('y', function () {
  it('should have unit test!', function () {
    assert(false, 'we expected this package author to add actual unit tests.');
  });
});*/

/*describe('catatonic-ucf', function () {
  it('should have a version number!', function () {
    assert(typeof catatonicCircle.VERSION !== 'undefined', 'The Project should have a VERSION, whatever the actual version.');
  });
});*/

should(); // Modifies objects prototype to include the 'should' property

describe('catatonic-circle', function () {
  it('should have a version number!', function () {
    catatonicCircle.should.have.property('VERSION');
  });
});
