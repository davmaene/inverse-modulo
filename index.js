function euclide(b, n, res)
{
	while ( b < 0 ) { b = parseInt(b) + parseInt(n) };
	var n0 = n;
	var b0 = b;
	var t0 = 0;
	var	t = 1;
	var q = Math.floor(n0 / b0);
	var r = n0 - q * b0;
	while (r > 0) 
	{
		temp = t0 - q * t;
		if (temp >= 0) { temp = temp % n }
		else { temp = n - ( - temp % n )};
		t0 = t;
		t = temp;
		n0 = b0;
		b0 = r;
		q = Math.floor(n0 / b0);
		r = n0 - q * b0;

	};
	if (b0 !== 1) { alert( b + " n'a pas d'inverse modulo " + n ); res.value="NaN" }
	else res.value = t
}