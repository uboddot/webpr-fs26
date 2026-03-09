const test = (arg, n = 0) => {
    const bar = document.getElementsByClassName("bar")[0];
    bar.innerHTML +=
        `<div class="${String(arg)}">${String(arg)} #${String(n)}</div>`;
};

// ok is an array of boolean values
const reportAll = ok => {

    let allTestsOk = true;
    for (let i = 0; i < ok.length; i++) { // not nice, yet. Needs improvement
        test(ok[i], i);
        if( ! ok[i]) {
            allTestsOk = false;
        }
    }
    if (allTestsOk) {
        document.writeln("All " + ok.length + " tests ok.");
    } else {
        document.writeln("Not all tests ok.");
    }

};
