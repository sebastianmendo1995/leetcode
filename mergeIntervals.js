var merge = function (intervals) {

    intervals.sort( (a,b) => a[0] - b[0]);

    let res = [];
    let i = 0;
    while (i < intervals.length) {
        let l = res.length;
        if (l > 0 && res[l - 1][1] >= intervals[i][0]) {
            res[l - 1][1] = Math.max(res[l - 1][1], intervals[i][1]);
        } else {
            res.push(intervals[i])
        }
        i++
    }

    return res;

};