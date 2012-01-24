define( function(){
    var toString = Object.prototype.toString;

    return {
        array : function( o ){ return toString.call( o ) === '[object Array]'; },
        string: function( o ){ return toString.call( o ) === '[object String]'; },
        number: function( o ){ return toString.call( o ) === '[object Number]'; },
        object: function( o ){ return toString.call( o ) === '[object Object]'; }
    };
});