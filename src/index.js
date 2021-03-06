
exports.min = function min (array) {
    let min;

    if (array.length > 0)
    {
        array.forEach(element => {
        if (element < min) min = element;
        });
    } else return 0;

    return min;
}

exports.max = function max (array) {
  
   let max;

    if (array.length > 0)
    {
        array.forEach(element => {
        if (element > max) max = element;
        });
    } else return 0;

  return max;

}

exports.avg = function avg (array) {
    let avg = 0;

    if (array.length > 0)
    {
        array.forEach(element => {
            avg += element;
        });
    } else return 0;

    avg = avg/array.length;

    return avg;
}
