module.exports = function transform(arr) {
    if (!(Array.isArray(arr))) {
        throw new Error()
    } else
    if (arr.length == 0) {
        return []
    }
    while (arr.indexOf('--discard-next') != -1 || arr.indexOf('--discard-prev') != -1 || arr.indexOf('--double-prev') != -1 || arr.indexOf('--double-next') != -1) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '--double-prev') {
                if (i == 0) {
                    arr.splice(i, 1);

                } else
                    arr[i] = arr[i - 1];

            } else
            if (arr[i] == '--double-next') {
                if (i == arr.length - 1) {
                    arr.splice(i, 1);

                } else
                    arr[i] = arr[i + 1];
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '--discard-next') {
                if (i == arr.length - 1) {
                    arr.splice(i, 1);
                    break;
                } else
                    arr[i] = 'we_need_to_delete_thisXXXx';
                arr[i + 1] = arr[i];
                break;
            } else
            if (arr[i] == '--discard-prev') {
                if (i == 0) {
                    arr.splice(i, 1);
                    break;
                } else
                    arr[i - 1] = 'we_need_to_delete_thisXXXx';
                arr[i] = arr[i - 1];
                break;
            }
        }
        arr = arr.filter(item => item != 'we_need_to_delete_thisXXXx');

    }

    return arr;
};
/*
function discardNext (arr,item){
    while (arr.indexOf('--discard-next') != -1) {
        arr[arr.indexOf('--discard-next') + 1] = '--discard-next';
        arr = arr.filter(item => item != '--discard-next');
    }
}

function discardPrev(arr, item) {
    while (arr.indexOf('--discard-prev') != -1) {
        arr[arr.indexOf('--discard-prev') - 1] = '--discard-prev';
        arr = arr.filter(item => item != '--discard-prev');
    }
}

function doublePrev(arr, item) {
    while (arr.indexOf('--double-prev') != -1) {
        arr[arr.indexOf('--double-prev')] = arr[arr.indexOf('--double-prev') - 1];
        //arr = arr.filter(item => item != '--discard-next');
    }
}


function doublePrev(arr, item) {
    while (arr.indexOf('--double-next') != -1) {
        arr[arr.indexOf('--double-next')] = arr[arr.indexOf('--double-next') + 1];
        //arr = arr.filter(item => item != '--discard-next');
    }
}*/