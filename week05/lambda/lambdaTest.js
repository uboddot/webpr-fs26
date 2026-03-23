// requires lambda.js

const lambdaOk = [];

lambdaOk.push( id(id) === id );

lambdaOk.push( konst(5)(1)           === 5 );
lambdaOk.push( konst(true)(null)     === true );
lambdaOk.push( konst(id)(undefined)  === id );

lambdaOk.push( F(1)(5)           === 5 );
lambdaOk.push( F(null)(true)     === true );
lambdaOk.push( F(undefined)(id)  === id );

const p = pair(1)(2);
lambdaOk.push( fst(p) === 1 );
lambdaOk.push( snd(p) === 2 );


reportAll(lambdaOk);
