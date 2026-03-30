
// requires util.js


// extending the prototype of many objects
( () => {
    const ok = [];

    const collect = [];

    (10).times( n => collect.push(n) );

    ok.push(collect.length === 10);
    ok.push(collect[0] === 0);
    ok.push(collect[9] === 9);

    reportAll(ok);
}) ();

( () => {
    const ok = [];

    const collect = (10).times( n => n+1 );

    ok.push(collect.length === 10);
    ok.push(collect[0] === 1);
    ok.push(collect[9] === 10);

    reportAll(ok);
}) ();
