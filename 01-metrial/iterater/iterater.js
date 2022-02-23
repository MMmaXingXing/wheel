const iterable = (obj) => {
    obj[Symbol.iterator] = () => {
        const arr = Object.keys(obj);
        let index = 0;
        return {
            next: function () {
                if (index < arr.length) {
                    return {
                        done: false,
                        value: obj[arr[index++]],
                    };
                } else {
                    return {
                        done: true,
                        value: undefined,
                    };
                }
            },
        };
    };
};

const list = { a: 1, b: 2 };
iterable(list);
for (i of list) {
    console.log(i);
}
