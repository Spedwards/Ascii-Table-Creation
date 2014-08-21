function createAsciiTable ( headers , rows ) {
	//	 createAsciiTable ( array headers , array rows )
	
	// Validate input
	if ( !Object.prototype.toString.call(headers) === '[object Array]' ) return 'headers not array';
	for ( var i = 0; i < headers.length; i++ ) {
		if ( !typeof(headers[i]) == 'string' || !typeof(headers[i]) == 'number' ) return 'headers['+i+'] not string or number';
	}
	if ( !Object.prototype.toString.call(rows) === '[object Array]' ) return 'rows not array';
	if ( rows.length < 1 ) return 'rows is empty';
	for ( var i = 0; i < rows.length; i++ ) {
		if ( !Object.prototype.toString.call(rows[i]) == '[object Array]' ) return 'rows['+i+'] not array';
		if ( rows[i].length !== headers.length ) return 'rows['+i+'].length does not match headers length';
	}
	
	// Headers
	var table = '+', temp = '';
	for ( var i = 0; i < headers.length; i++ ) {
		for ( var j = 0; j < headers[i].length + 4; j++ ) {
			table += '-';
		}
		table += '+';
	}
	for ( var i = 0; i < headers.length; i++ ) {
		temp += '|  ' + headers[i] + '  ';
	}
	temp += '|';
	table = table + '\n' + temp + '\n' + table;
	
	temp = '';
	
	return table;
	
}