function printLog(response) {
    console.log(" \* response.body completo: ");
    console.log(JSON.stringify(response.body, null, 2));
    
}

module.exports = {
    printLog
};
  