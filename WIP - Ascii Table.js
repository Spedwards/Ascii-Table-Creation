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
		for ( var j = 0; j < rows[i].length; j++ ) {
			if ( !typeof(rows[i][j]) == 'string' ) return 'rows['+i+']['+j+'] not string or number';
		}
	}
	
	// Adjust Array Elements Length
	for ( var i = 0; i < rows.length; i++ ) {
		for ( var j = 0; j < rows[i].length; j++ ) {
			var k = 1;
			if ( rows[i][j].length > headers[j].length ) {
				while ( rows[i][j].length > headers[j].length ) {
					if ( k % 2 == 0 ) {
						headers[j] = ' ' + headers[j];
					} else {
						headers[j] += ' ';
					}
					k++;
				}
			} else if ( rows[i][j].length < headers[j].length ) {
				while ( rows[i][j].length < headers[j].length ) {
					if ( k % 2 == 0 ) {
						rows[i][j] = ' ' + rows[i][j];
					} else {
						rows[i][j] += ' ';
					}
					k++;
				}
			}
		}
	}
	
	// Headers
	var table = '', temp = '', header = '', body = '', line = '+';
	for ( var i = 0; i < headers.length; i++ ) {
		for ( var j = 0; j < headers[i].length + 4; j++ ) {
			line += '-';
		}
		line += '+';
	}
	for ( var i = 0; i < headers.length; i++ ) {
		temp += '|  ' + headers[i] + '  ';
	}
	temp += '|';
	table = line + '\n' + temp + '\n' + line;
	
	header = table;
	table = '';
	temp = '';
	
	// Body
	for ( var i = 0; i < rows.length; i++ ) {
		for ( var j = 0; j < rows[i].length; j++ ) {
			body += '|  ' + rows[i][j].substr(0, headers[j].length) + '  ';
		}
		body += '|\n';
	}
	
	// Completion
	table = header + '\n' + body + line;
	
	return table;
	
}