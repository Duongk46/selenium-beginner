class CommonFunc {
    logError = (errs) => {
        errs.forEach(log => {
            console.log(log.level.name + ': ' + log.message);
        });
    }
}
const commonFunc = new CommonFunc();
module.exports = commonFunc;