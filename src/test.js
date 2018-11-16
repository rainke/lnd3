var Test;
(function (Test) {
    // const scale = d3.scaleLinear()
    //     .domain([0, 10])
    //     .range([0, 30]);
    Test.h = d3.histogram()
        .domain([0, 10])
        .thresholds(5);
    // .value(3);
    var bins = Test.h([3, 4, 5, 4, 3]);
    console.log(bins);
})(Test || (Test = {}));
