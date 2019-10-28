function call(return5) {
  return5();
}

function callTwice(return5) {
  call(return5);
  call(return5);
}

function callXTimes(func, callTimes) {
  let count = 0;
  while (count < callTimes) {
    func();
    count++;
  }
}

function returnFromFunc(return5) {
  return return5();
}

function modifyString(str, func) {
  return func(str);
}

function modifyNumber(num, func) {
  return func(num);
}

function modifyAnything(anything, func) {
  return func(anything);
}

function twoFuncs(sayHello, addQuestionMark) {
  return addQuestionMark(sayHello());
}

function twoValues(val1, val2, func) {
  return func(val1, val2);
}

function twoValuesRTL(val1, val2, func) {
  return func(val2, val1);
}


module.exports = {
  call,
  callTwice,
  callXTimes,
  returnFromFunc,
  modifyString,
  modifyNumber,
  modifyAnything,
  twoFuncs,
  twoValues,
  twoValuesRTL,
}