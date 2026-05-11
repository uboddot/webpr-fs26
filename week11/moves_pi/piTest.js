import { TestSuite } from "../../src/kolibri/util/test.js";

/*
    https://webengineering-fhnw.github.io/Kolibri/src/examples/sequence/CheatSheet.html
    Nilakantha Series,
    PI: 3. 1415926535 8979323846 2643383279

          4       4       4       4
    3 +  ---  -  ---  +  ---  -  ---     ...
        2*3*4   4*5*6   6*7*8   8*9*10
 */


const suite = TestSuite("pi");

suite.add("nilakatha", assert => {

    assert.is(true,   false);
});

suite.run();
