'use strict'

let input = [[3, 3, 2, 2, 8, 7, 4, 6, 5, 2], [5, 6, 3, 6, 5, 8, 8, 8, 5, 7], [7, 7, 5, 5, 1, 1, 7, 5, 4, 8], [5, 8, 5, 4, 1, 2, 1, 8, 3, 3], [2, 8, 5, 6, 6, 8, 2, 4, 7, 7], [3, 1, 2, 4, 8, 7, 3, 8, 1, 2], [1, 5, 4, 1, 3, 7, 2, 2, 5, 4], [8, 6, 3, 4, 3, 8, 3, 2, 3, 6], [2, 4, 2, 4, 3, 2, 3, 3, 4, 8], [2, 2, 6, 5, 6, 3, 5, 8, 4, 2]];

function countFlashes(input, rounds) {
    let allFlashes = 0;
    for (let k = 0; k < rounds; k++) {
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input[i].length; j++) {
                input[i][j]++;
            }
        }

        for (let b = 0; b < 100; b++) {
            for (let i = 0; i < input.length; i++) {
                for (let j = 0; j < input[i].length; j++) {

                    if (input[i][j] === 10) {
                        if (input[i][j + 1] && input[i][j + 1] < 10) {
                            input[i][j + 1]++;
                        }
                        if (input[i][j - 1] && input[i][j - 1] < 10) {
                            input[i][j - 1]++;
                        }
                        if (i !== input.length - 1) {
                            if (input[i + 1][j] && input[i + 1][j] < 10) {
                                input[i + 1][j]++;
                            }
                            if (input[i + 1][j + 1] && input[i + 1][j + 1] < 10) {
                                input[i + 1][j + 1]++;
                            }
                            if (input[i + 1][j - 1] && input[i + 1][j - 1] < 10) {
                                input[i + 1][j - 1]++;
                            }
                        }
                        if (i !== 0) {
                            if (input[i - 1][j - 1] && input[i - 1][j - 1] < 10) {
                                input[i - 1][j - 1]++;
                            }
                            if (input[i - 1][j + 1] && input[i - 1][j + 1] < 10) {
                                input[i - 1][j + 1]++;
                            }
                            if (input[i - 1][j] && input[i - 1][j] < 10) {
                                input[i - 1][j]++;
                            }
                        }
                        input[i][j] = 11;
                    }
                }
            }
        }

        let lights = 0;
        for (let l = 0; l < input.length; l++) {
            for (let m = 0; m < input[l].length; m++) {
                if (input[l][m] >= 10) {
                    lights++
                    allFlashes++
                    input[l][m] = 0;
                }
            }
        }
        
        if (lights < 100) {
            rounds++
        } else if (lights === 100) {
            //Ansewr for PART 2
            console.log('Rounds to flash together:',rounds);
            break
        }
    }

    
    // answer for PART 1
    // console.log('Number of flashes during 100 rounds: ', allFlashes)
    return
}

// PART 1
// countFlashes (input, 100);

//PART 2
countFlashes(input, 1);
