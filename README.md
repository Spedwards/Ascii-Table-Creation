<h1>Ascii Table Creation</h1>

Create an Ascii Table easily with Javascript

<h1>Using the Function</h1>

Call the function using <code>createAsciiTable(<em>headers</em>, <em>rows</em>);</code>

`headers` must be an array and all elements within the array must be type string or type number.

`rows` must be an array and all elements within the array must be type array. Each array within `rows` must have the same length as `headers` and each elements within the arrays in `rows` must be type string or type number.

<h2>Example:</h2>

Demo: http://spedwards.github.io/projects/asciiTables/

    createAsciiTable(["headerColumn1","h2","headerColumn3"],[["row1column1","row1column2","1.3"],["row2column1","2.2","row2column3"],["3.1","row3column2","row3column3"]]);

<br />

    +-----------------+---------------+-----------------+
    |  headerColumn1  |      h2       |  headerColumn3  |
    +-----------------+---------------+-----------------+
    |   row1column1   |  row1column2  |       1.3       |
    |   row2column1   |      2.2      |   row2column3   |
    |       3.1       |  row3column2  |   row3column3   |
    +-----------------+---------------+-----------------+
