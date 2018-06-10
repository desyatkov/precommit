var p = new Proxy(target, {
    construct: function(target, argumentsList, newTarget) {
        return false;
    }
});