const report = (arg, n = 0) => {
    const bar = document.getElementsByClassName("bar")[0];
    bar.innerHTML +=
        `<div class="${String(arg)}">${String(arg)} #${String(n)}</div>`;
};

// testResults is an array of boolean values
const reportAll = testResults => {

    testResults.forEach( report );

    if (testResults.every( result => result )) {
        document.writeln("All " + testResults.length + " tests ok.");
    } else {
        document.writeln("Not all tests ok.");
    }
};
