/**
 * @module mod/modTest Testing how the module system works
 */

import {test}                   from "../../util/test.js";
import { pi, a, b, setA, setB } from './mod.js'

test("modTest")( assert => {

    assert.is(a, null, "a begins as null");
    assert.is(b, null, "b begins as null");

    setA("Dierk"); // there is no object exposed and so no target to attack
    setB("König");

    assert.is(a, "Dierk", "a is set");
    assert.is(b, "König", "b is set");

    // console.log(x); // newly introduced global x should not be visible but when using bundlers, it is

    // this kind of test does not work with the bundler as it checks the erroneous assignment
    // try {
    //     a = "shall not work";   // this is expected to fail ...
    //     assert.is(true, false);         // ... therefore this line is not reached ...
    // } catch (e) {
    //     assert.is(true, true);          // ... but this one
    // }

});



