const id = x => x;
const konst = x => y => x;
const snd = x => y => y;

const T = konst;
const F = snd;

const and = a => b => a (b) (a);
const or = a => a (a);

const Pair = x => y => selector => selector(x)(y);
const firstname = konst;
const lastname  = snd;

const first = p => p(T);
const second = p => p(F);
const oneTwo = Pair(1)(2);

// first(oneTwo) = 0; // 1
const pairEq = a => b => first(a) === first(b) && second(a) === second(b);
const pairPlus = a => b => Pair( first(a) + first(b) ) ( second(a) + second(b) );
const pairMap = f => p => Pair(f(first(p))) (f(second(p)));

const square = x => x * x;
const result = pairMap(square)(oneTwo);
const sum = pairMap(square)(oneTwo);

// Q8:y
const s1 = x => y => z => x;
const s2 = x => y => z => y;
const s3 = x => y => z => z;

const triple = x => y => z => selector => selector(x)(y)(z);
const a = t => t(s1);
const b = t => t(s2);
const c = t => t(s3);

const bran = triple("Brendan");
const raven = bran("Stark")(16);
const oneTwoThree = triple("Brendan");
// console.log("hulu ", a(raven) === "Brendan", a(raven));

const Left = x => f => g => f(x);
const Right = x => f => g => g(x);
// const either = e => f => g => e (f) (g);
const either = id;

// ----- special -----

const Tuple = n => [
    parmStore (n + 1) ( [] ) (parms => parms.reduce( (accu, it) => accu(it), parms.pop() ) ), // ctor
    ...Array.from( {length:n}, (it, idx) => iOfN (n) (idx) () )                    // selectors
];

const iOfN = n => i => value => // from n curried params, take argument at position i,
    n === 0
    ? value
    : x => iOfN (n-1) (i-1) ( i === 0 ? x : value );


const parmStore = n => args => onDone =>  // n args to come
    n === 0
    ? onDone(args)
    : arg => parmStore(n - 1)([...args, arg]) (onDone); // store parms in array

const Choice = n => [
    ...Array.from( {length:n}, (it, idx) => parmStore(n+1) ([]) (parms => parms[idx+1] (parms[0]) ) ), // ctors
    id
];




