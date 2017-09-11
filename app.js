$(document).ready(function() {
    $crypto = $("#crypto");
    $title = $("#title");
    $total = $("#total");
    $lambos = $("#lambos");
    $lambos.keyup(function() {
        crypto($crypto.html());
    });
    btc();
});

function btc() {
    crypto("BTC");
}
function ethereum() {
    crypto("ETH")
}
function waves() {
    crypto("WAVES");
}

function crypto(crypto) {
    $crypto.html("...");
    $.get("https://min-api.cryptocompare.com/data/price?fsym="+crypto+"&tsyms=USD", function( data ) {
        var total = (204000/data.USD)*$lambos.val();
        $total.val(total.toFixed(8));
        $crypto.html(crypto);
        $title.html(crypto);
    });
}