var capsLock = false;
var shift = false;

function addToInput(val) {
    var input = document.getElementById('typed').value;
    if (shift === false && capsLock === false) {
        input += val;
        document.getElementById('typed').value = input
        console.log(input)
    }
    else if (shift === false && capsLock === true) {
        val = val.toUpperCase();
        input += val;
        document.getElementById('typed').value = input
        console.log(input)
    }
    else if (shift === true && capsLock === true) {
        input += val;
        document.getElementById('typed').value = input
        console.log(input)
    }
    else if (shift === true && capsLock === false) {
        val = val.toUpperCase();
        input += val;
        document.getElementById('typed').value = input
        console.log(input)
    }
    shift = false;
}

function deleteOne() {
    var input = document.getElementById('typed').value;
    input = input.slice(0, -1);
    document.getElementById('typed').value = input
}

function shiftOn() {
    shift = true;
}

function capsLockChange() {
    if (capsLock === false) {
        capsLock = true;
    }
    else {
        capsLock = false;
    }
}

