function count() {
    var n = document.getElementById("inputN").value;
    var c = 0;
    var o = "1";
    if (n <= 0) {
        document.querySelector("p").innerHTML = "Vui lòng nhập số lớn hơn 0";
    } else {
        for (var i = 2; i <= n; i++) {
            for (var j = 1; j <= i; j++) {
                if (i % j == 0) {
                    c ++;
                }
            }
            if (c < 3) {
                o += ", " + i;
            }
            c = 0;
        }
        document.querySelector("p").innerHTML = "Dãy số nguyên tố từ 1 đến " + n + ": " + o;
    }
}