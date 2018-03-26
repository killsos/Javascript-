function test () {
    console.log(arguments.callee);
    console.log(arguments.caller);
    
}
function main(params) {
    console.log(arguments.callee);
    console.log(arguments.caller);
    test();
}

main();