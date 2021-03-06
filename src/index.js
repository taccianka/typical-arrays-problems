
exports.min = function min (array) {
    let min;

    if (arr.length > 0)
    {
        arr.forEach(element => {
        if (element < max) max = element;
        });
    } else return 0;

    return min;
}

exports.max = function max (array) {
  
   let max;

    if (arr.length > 0)
    {
        arr.forEach(element => {
        if (element > max) max = element;
        });
    } else return 0;

  return max;

}

exports.avg = function avg (array) {
    let avg = 0;

    if (arr.length > 0)
    {
        arr.forEach(element => {
            avg += element;
        });
    } else return 0;

    avg = avg/arr.length;

    return avg;
}
