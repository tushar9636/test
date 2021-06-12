


const minWindow = function (s) {
    let t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let [left, right] = [0, 0];
    const wordMap = (str) => {
        const map = {};
        for (let c of str) {
            if (map[c]) map[c] += 1;
            else map[c] = 1
        }
        return map;
    }
    const tMap = wordMap(t);
    let tMapCopy = Object.assign({}, tMap);
    let keysCount = 0;
    let min = null;
    while (left < s.length && right < s.length) {
        if (s[right] in tMap) {
            tMapCopy[s[right]] -= 1;
            if (tMapCopy[s[right]] == 0) keysCount += 1
        }
        if (keysCount >= Object.keys(tMap).length) {
            while (left < right) {
                let key = s[left];
                if (tMapCopy[key] == 0) {
                    break;
                }
                else {
                    tMapCopy[key] += 1;
                }
                left += 1;
            }
            if (min == null || min[1] - min[0] > right - left) {
                min = [left, right];
            }
        }
        right += 1;
    }
    if (min !== null) return s.substr(min[0], min[1] - min[0] + 1).length;
    return 0;

}

//console.log(minWindow("FORCESABCDEFDIVGHIJKLMNOPQRSTUVWXYZ"))
