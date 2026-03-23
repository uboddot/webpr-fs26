// requires function.js

const functionOk = [];

functionOk.push( hasNoReturn(1)    === undefined);
functionOk.push( hasReturn(1)      === 1);

functionOk.push( lambdaFun1(1)     === 1);
functionOk.push( lambdaFun2(1,1)   === 2);
functionOk.push( lambdaFun3(1)(1)  === 2);
functionOk.push( lambdaFun4(1)(1)  === 2);
functionOk.push( any(1)(1)         === 2);


reportAll(functionOk);
