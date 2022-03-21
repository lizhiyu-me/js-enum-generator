import generateEnum from "./generateEnum.mjs"
/**
 * @typedef {import("./type").ENUM_CMD_FN} ENUM_CMD_FN 
 */
/** 
 * @type ENUM_CMD_FN
 */
const ENUM_CMD_FN = generateEnum(
    [
        "ready_C2S",
        "dealCards_S2C",
        "competeForLandLordRole_C2S",
        "playTurn",
        "playCards_C2S",
        "playCards_S2C",
        "notAllowedByRule_S2C",
        "gameEnd_S2C"
    ]);

console.log(ENUM_CMD_FN.dealCards_S2C);