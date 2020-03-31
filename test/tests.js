import isYes from '../src/isYes.js';

const test = QUnit.test;

test('yes, y, yasss is yes', function(assert) {
    const result = isYes('Y');
    const result1 = isYes('YES');
    const result2 = isYes('yes');
    const result3 = isYes('yAsSs');
    const result4 = isYes('yasss');

    assert.equal(result, true);
    assert.equal(result1, true);
    assert.equal(result2, true);
    assert.equal(result3, true);
    assert.equal(result4, true);
});