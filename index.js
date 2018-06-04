let handler = {
    set: function (target, name, value) {
        target[name] = value * 10;
    },
    has: function (target, key) {
        if (key in target && key.includes("ar")) {
            return true;
        }
        return false;
    },
    apply: function (target, thisArg, argumentsList) {
        return target(argumentsList[0], argumentsList[1]) + 1;
    }
}

let obj = {
    a: 1,
    b: 2
};

let proxyObj = new Proxy(obj, handler);

proxyObj.c = 3;
console.log(proxyObj.a)
console.log(proxyObj.b)
console.log(proxyObj.c)