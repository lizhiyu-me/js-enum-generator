export default function generateEnum(protoArr) {
    let _enum = {};
    for (let i = 0; i < protoArr.length; i++) {
        const _protoName = protoArr[i];
        const _cmdID = i;
        _enum[_enum[_protoName] = _cmdID] = _protoName;
    }
    return _enum;
}