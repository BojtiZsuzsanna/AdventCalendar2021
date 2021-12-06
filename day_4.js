'use strict'

let numbers = [90, 4, 2, 96, 46, 1, 62, 97, 3, 52, 7, 35, 50, 28, 31, 37, 74, 26, 59, 53, 82, 47, 83, 80, 19, 40, 68, 95, 34, 55, 54, 73, 12, 78, 30, 63, 57, 93, 72, 77, 56, 91, 23, 67, 64, 79, 85, 84, 76, 10, 58, 0, 29, 13, 94, 20, 32, 25, 11, 38, 89, 21, 98, 92, 42, 27, 14, 99, 24, 75, 86, 51, 22, 48, 9, 33, 49, 18, 70, 8, 87, 61, 39, 16, 66, 71, 5, 69, 15, 43, 88, 45, 6, 81, 60, 36, 44, 17, 41, 65];

let boards = [[[76, 82, 2, 92, 53], [74, 33, 8, 89, 3], [80, 27, 72, 26, 91], [30, 83, 7, 16, 4], [20, 56, 48, 5, 13]], [[67, 7, 75, 66, 4], [35, 97, 21, 29, 95], [58, 98, 56, 71, 65], [55, 61, 19, 64, 9], [38, 34, 42, 30, 2]], [[79, 97, 63, 98, 75], [1, 13, 0, 76, 46], [56, 59, 58, 55, 86], [43, 27, 73, 67, 31], [33, 81, 26, 19, 3]], [[3, 37, 33, 8, 19], [34, 69, 82, 9, 51], [56, 45, 15, 85, 79], [32, 55, 81, 22, 12], [42, 20, 48, 7, 75]], [[16, 68, 45, 31, 54], [57, 40, 77, 5, 76], [67, 24, 84, 14, 41], [21, 23, 27, 36, 7], [56, 8, 86, 50, 22]], [[28, 53, 81, 26, 40], [59, 29, 49, 89, 48], [10, 44, 3, 42, 7], [79, 87, 32, 31, 54], [15, 23, 65, 69, 56]], [[86, 20, 47, 1, 94], [3, 91, 77, 14, 83], [79, 93, 4, 92, 65], [0, 67, 30, 36, 7], [6, 48, 59, 35, 73]], [[75, 87, 7, 28, 25], [31, 71, 35, 52, 32], [47, 99, 0, 80, 33], [41, 59, 24, 50, 17], [93, 58, 26, 81, 53]], [[41, 77, 15, 55, 86], [20, 5, 54, 79, 93], [3, 61, 57, 47, 7], [85, 98, 91, 39, 13], [, 4, 81, 63, 72, 24]], [[27, 37, 57, 38, 72], [86, 99, 14, 2, 15], [94, 25, 73, 13, 54], [19, 26, 56, 3, 7], [1, 49, 33, 24, 21]], [[11, 79, 12, 89, 1], [23, 98, 49, 66, 48], [15, 30, 90, 57, 31], [55, 47, 61, 9, 74], [76, 93, 81, 63, 95]], [[51, 92, 84, 77, 26], [85, 42, 80, 89, 25], [82, 41, 73, 58, 49], [6, 36, 75, 4, 40], [62, 11, 56, 24, 69]], [[19, 79, 35, 75, 18], [7, 4, 12, 78, 70], [44, 52, 26, 94, 60], [71, 65, 61, 89, 87], [83, 95, 73, 93, 13]], [[36, 79, 62, 91, 58], [12, 46, 9, 55, 93], [98, 32, 68, 87, 69], [27, 90, 51, 45, 2], [15, 43, 29, 26, 40]], [[29, 47, 78, 54, 31], [98, 65, 71, 8, 72], [75, 51, 13, 80, 2], [93, 69, 20, 52, 96], [33, 91, 3, 37, 62]], [[94, 74, 2, 23, 71], [16, 95, 52, 31, 80], [3, 4, 28, 9, 50], [6, 40, 47, 62, 48], [97, 43, 85, 11, 99]], [[20, 64, 23, 36, 39], [22, 31, 75, 45, 24], [53, 19, 17, 58, 51], [66, 4, 81, 72, 37], [34, 82, 42, 91, 48]], [[22, 15, 43, 97, 13], [73, 71, 88, 1, 48], [84, 4, 29, 87, 95], [90, 40, 11, 67, 6], [23, 10, 12, 64, 99]], [[29, 61, 2, 34, 89], [93, 87, 10, 42, 65], [13, 45, 88, 30, 69], [71, 78, 1, 20, 19], [44, 75, 9, 84, 37]], [[48, 89, 80, 68, 45], [81, 12, 1, 64, 77], [79, 87, 21, 26, 40], [44, 82, 46, 78, 54], [33, 63, 8, 0, 98]], [[0, 62, 13, 43, 93], [11, 66, 99, 86, 55], [27, 89, 51, 98, 46], [39, 76, 73, 24, 37], [23, 68, 72, 80, 64]], [[37, 89, 58, 78, 76], [41, 9, 22, 97, 82], [40, 39, 73, 96, 8], [91, 4, 84, 35, 34], [70, 12, 79, 75, 7]], [[26, 18, 12, 88, 97], [10, 51, 62, 53, 79], [24, 47, 31, 89, 21], [57, 96, 1, 17, 80], [58, 92, 7, 14, 60]], [[12, 23, 6, 71, 64], [82, 40, 15, 18, 29], [53, 21, 76, 52, 84], [32, 86, 89, 22, 91], [74, 58, 80, 2, 63]], [[71, 96, 10, 39, 87], [45, 68, 94, 76, 33], [59, 60, 11, 62, 88], [13, 37, 63, 47, 7], [44, 79, 24, 21, 16]], [[80, 71, 39, 36, 1], [9, 23, 55, 58, 91], [65, 60, 19, 25, 22], [0, 88, 98, 83, 93], [82, 69, 43, 78, 8]], [[67, 80, 42, 49, 97], [7, 18, 92, 98, 89], [21, 95, 61, 8, 64], [76, 63, 52, 68, 87], [47, 34, 84, 45, 96]], [[40, 0, 45, 33, 79], [18, 56, 83, 6, 58], [66, 7, 4, 25, 61], [91, 46, 60, 22, 99], [62, 65, 64, 84, 17]], [[68, 18, 96, 88, 61], [89, 55, 81, 20, 70], [60, 76, 17, 69, 40], [37, 63, 41, 54, 11], [43, 94, 58, 47, 31]], [[60, 63, 64, 26, 21], [87, 99, 49, 11, 16], [70, 41, 50, 1, 38], [45, 98, 94, 67, 62], [13, 34, 61, 92, 40]], [[56, 64, 37, 26, 34], [69, 16, 72, 75, 77], [19, 8, 50, 38, 98], [0, 2, 99, 48, 20], [68, 35, 88, 57, 90]], [[17, 41, 40, 48, 54], [67, 52, 63, 25, 78], [95, 26, 12, 85, 37], [69, 93, 58, 62, 11], [47, 33, 14, 35, 81]], [[26, 51, 80, 31, 64], [2, 7, 59, 37, 57], [70, 78, 52, 91, 50], [86, 0, 15, 20, 25], [85, 79, 41, 98, 83]], [[91, 86, 31, 63, 4], [81, 37, 77, 94, 74], [45, 95, 88, 23, 40], [29, 46, 79, 18, 70], [75, 14, 20, 51, 68]], [[30, 59, 37, 56, 99], [74, 14, 4, 21, 53], [61, 49, 84, 40, 33], [20, 51, 79, 66, 27], [58, 23, 88, 17, 75]], [[46, 64, 31, 6, 61], [38, 14, 77, 83, 59], [13, 81, 91, 17, 24], [11, 96, 90, 10, 49], [73, 82, 1, 69, 45]], [[21, 57, 79, 10, 41], [67, 74, 96, 20, 94], [29, 40, 78, 9, 85], [23, 25, 49, 0, 39], [59, 88, 58, 86, 92]], [[1, 22, 49, 43, 32], [47, 56, 18, 16, 25], [42, 57, 48, 53, 46], [78, 20, 89, 36, 96], [24, 28, 76, 39, 29]], [[53, 66, 38, 11, 94], [49, 27, 25, 1, 82], [12, 72, 50, 61, 51], [97, 92, 96, 4, 89], [47, 44, 21, 24, 81]], [[16, 70, 78, 12, 63], [87, 32, 95, 99, 64], [68, 54, 85, 53, 94], [88, 22, 52, 3, 23], [48, 27, 1, 58, 31]], [[71, 62, 41, 44, 49], [67, 98, 61, 48, 46], [47, 9, 24, 30, 51], [29, 76, 57, 53, 34], [23, 96, 42, 5, 73]], [[50, 72, 56, 97, 2], [20, 5, 3, 55, 93], [24, 7, 22, 9, 96], [58, 60, 38, 17, 36], [11, 54, 79, 28, 53]], [[13, 21, 35, 79, 91], [8, 28, 68, 54, 6], [0, 25, 82, 78, 1], [29, 99, 41, 46, 95], [66, 72, 17, 55, 76]], [[43, 42, 7, 85, 90], [91, 80, 79, 72, 8], [34, 77, 44, 30, 92], [48, 49, 40, 70, 86], [28, 69, 27, 84, 73]], [[17, 94, 67, 26, 63], [68, 77, 71, 23, 13], [6, 96, 11, 21, 73], [53, 33, 80, 62, 99], [60, 36, 38, 32, 75]], [[75, 83, 50, 32, 29], [61, 94, 4, 35, 51], [52, 77, 54, 69, 5], [36, 89, 76, 26, 71], [74, 19, 13, 33, 18]], [[29, 24, 28, 5, 54], [56, 86, 37, 45, 83], [34, 77, 42, 58, 76], [82, 1, 4, 39, 64], [61, 26, 99, 72, 89]], [[25, 80, 23, 88, 2], [76, 93, 90, 86, 52], [17, 62, 55, 83, 7], [57, 81, 24, 0, 99], [67, 44, 27, 4, 94]], [[71, 26, 62, 63, 31], [4, 15, 38, 0, 89], [41, 77, 34, 42, 19], [39, 90, 45, 30, 73], [3, 33, 8, 50, 55]], [[65, 26, 20, 8, 70], [96, 24, 88, 29, 46], [22, 6, 21, 4, 72], [59, 32, 18, 49, 61], [28, 58, 66, 67, 92]], [[68, 45, 62, 77, 40], [53, 1, 21, 11, 83], [44, 88, 81, 56, 89], [29, 32, 47, 0, 50], [26, 74, 78, 59, 6]], [[52, 56, 23, 84, 74], [64, 21, 45, 35, 75], [82, 86, 60, 97, 83], [69, 78, 15, 20, 37], [68, 36, 17, 43, 28]], [[92, 33, 36, 48, 34], [75, 77, 79, 39, 88], [61, 28, 21, 2, 94], [84, 89, 17, 22, 67], [38, 41, 7, 80, 12]], [[27, 34, 91, 21, 87], [5, 65, 7, 70, 36], [31, 3, 38, 49, 61], [96, 62, 50, 97, 20], [47, 37, 16, 59, 76]], [[39, 50, 3, 25, 31], [37, 36, 88, 40, 14], [26, 70, 75, 30, 9], [97, 42, 86, 90, 20], [38, 66, 22, 4, 69]], [[62, 64, 72, 11, 79], [50, 0, 89, 30, 70], [83, 53, 93, 39, 22], [90, 20, 80, 55, 32], [, 6, 12, 19, 27, 2]], [[17, 85, 24, 50, 13], [12, 41, 75, 74, 35], [3, 88, 69, 73, 1], [77, 34, 71, 32, 44], [96, 26, 37, 46, 9]], [[84, 20, 33, 4, 21], [5, 22, 19, 91, 51], [23, 56, 44, 43, 68], [6, 50, 70, 47, 46], [75, 81, 34, 32, 13]], [[6, 36, 27, 32, 59], [4, 75, 63, 86, 48], [81, 49, 44, 7, 25], [0, 69, 11, 43, 91], [87, 39, 23, 47, 98]], [[53, 16, 97, 94, 69], [4, 43, 9, 67, 33], [21, 83, 32, 87, 35], [55, 78, 68, 28, 75], [51, 19, 82, 54, 24]], [[50, 84, 63, 21, 92], [51, 52, 97, 66, 1], [22, 44, 31, 64, 49], [83, 24, 2, 35, 45], [15, 16, 71, 60, 58]], [[54, 83, 48, 63, 2], [43, 82, 65, 20, 42], [52, 86, 58, 27, 75], [7, 76, 64, 18, 11], [77, 93, 67, 0, 25]], [[12, 60, 93, 99, 37], [29, 44, 47, 4, 89], [30, 63, 52, 66, 91], [2, 38, 72, 84, 6], [1, 96, 5, 18, 33]], [[76, 61, 58, 41, 43], [21, 69, 55, 18, 79], [40, 59, 9, 7, 36], [77, 82, 47, 84, 89], [92, 13, 49, 6, 62]], [[33, 68, 74, 92, 24], [28, 3, 15, 77, 37], [83, 72, 21, 71, 29], [88, 64, 47, 35, 44], [51, 18, 31, 95, 99]], [[71, 50, 97, 18, 77], [29, 30, 0, 88, 49], [98, 99, 95, 11, 1], [46, 83, 64, 55, 56], [9, 6, 59, 87, 19]], [[71, 41, 13, 33, 4], [23, 22, 26, 28, 82], [95, 62, 7, 34, 64], [10, 68, 14, 21, 37], [73, 53, 88, 81, 1]], [[16, 87, 61, 58, 95], [90, 27, 3, 65, 38], [35, 17, 85, 6, 47], [69, 22, 54, 83, 82], [28, 67, 96, 48, 88]], [[17, 47, 81, 13, 77], [64, 86, 82, 62, 24], [40, 41, 52, 50, 15], [4, 71, 2, 90, 22], [61, 38, 20, 78, 34]], [[65, 51, 54, 10, 16], [52, 28, 68, 75, 8], [26, 97, 96, 49, 73], [95, 17, 64, 80, 34], [5, 76, 25, 66, 77]], [[30, 10, 42, 72, 75], [67, 85, 36, 64, 25], [61, 48, 59, 96, 98], [81, 89, 3, 4, 46], [33, 84, 32, 78, 80]], [[93, 24, 5, 21, 95], [18, 1, 66, 57, 31], [2, 17, 62, 8, 28], [73, 10, 38, 25, 63], [91, 71, 48, 44, 4]], [[92, 54, 34, 5, 74], [8, 31, 94, 24, 44], [43, 2, 64, 49, 21], [73, 19, 99, 60, 78], [0, 23, 16, 86, 85]], [[25, 34, 6, 67, 71], [79, 76, 39, 81, 32], [23, 36, 82, 92, 50], [10, 51, 55, 40, 80], [20, 44, 30, 24, 28]], [[74, 22, 58, 26, 10], [36, 43, 76, 93, 15], [87, 55, 6, 91, 37], [81, 86, 8, 99, 30], [78, 62, 50, 44, 54]], [[16, 14, 79, 80, 42], [27, 83, 26, 82, 29], [43, 76, 9, 66, 5], [75, 77, 99, 45, 10], [2, 61, 32, 73, 91]], [[16, 60, 83, 81, 47], [23, 27, 59, 85, 24], [75, 33, 36, 86, 15], [70, 91, 55, 93, 63], [25, 32, 53, 14, 82]], [[98, 87, 40, 52, 0], [86, 58, 74, 2, 84], [24, 99, 61, 41, 92], [77, 17, 1, 43, 57], [62, 70, 94, 89, 19]], [[7, 18, 19, 85, 98], [40, 0, 99, 45, 63], [59, 49, 37, 42, 5], [58, 82, 25, 53, 4], [2, 1, 62, 68, 33]], [[21, 87, 18, 29, 34], [53, 24, 26, 67, 25], [49, 77, 4, 64, 59], [52, 12, 97, 2, 36], [66, 76, 9, 74, 95]], [[92, 44, 14, 18, 48], [31, 74, 79, 86, 58], [68, 12, 33, 55, 56], [97, 94, 25, 41, 65], [29, 36, 53, 60, 62]], [[23, 26, 85, 88, 7], [96, 1, 75, 76, 9], [49, 44, 18, 78, 59], [64, 83, 19, 30, 74], [52, 95, 66, 62, 22]], [[43, 99, 38, 73, 33], [36, 46, 24, 32, 91], [47, 68, 15, 5, 81], [37, 20, 0, 97, 50], [12, 30, 53, 4, 55]], [[26, 33, 49, 91, 30], [61, 22, 7, 12, 82], [4, 36, 1, 6, 11], [96, 14, 35, 90, 50], [97, 25, 28, 32, 58]], [[92, 36, 56, 10, 62], [73, 35, 60, 25, 34], [96, 24, 16, 53, 84], [37, 51, 30, 58, 1], [20, 80, 43, 63, 45]], [[39, 68, 53, 30, 91], [11, 97, 10, 12, 55], [6, 76, 57, 77, 48], [56, 51, 98, 71, 82], [46, 27, 54, 33, 5]], [[19, 38, 63, 64, 61], [48, 28, 29, 60, 72], [99, 94, 55, 25, 76], [98, 37, 7, 3, 80], [10, 2, 16, 35, 50]], [[16, 68, 75, 19, 58], [28, 21, 56, 11, 46], [60, 25, 32, 88, 30], [53, 62, 69, 7, 91], [73, 94, 24, 6, 38]], [[69, 4, 37, 70, 54], [67, 17, 2, 57, 16], [72, 30, 43, 58, 1], [, 6, 56, 28, 86, 18], [, 7, 94, 55, 35, 77]], [[73, 32, 57, 79, 1], [89, 17, 26, 44, 29], [11, 86, 94, 38, 74], [49, 98, 54, 76, 6], [67, 45, 87, 21, 51]], [[14, 73, 22, 48, 69], [78, 89, 4, 32, 18], [96, 59, 26, 43, 92], [68, 33, 97, 53, 35], [61, 52, 87, 57, 31]], [[86, 1, 22, 31, 20], [14, 84, 23, 38, 18], [57, 67, 5, 90, 6], [91, 21, 52, 65, 36], [61, 56, 3, 51, 25]], [[60, 5, 98, 31, 76], [3, 44, 24, 16, 63], [0, 96, 56, 25, 84], [88, 18, 71, 93, 19], [26, 77, 86, 23, 65]], [[62, 58, 11, 34, 26], [35, 56, 97, 67, 90], [20, 65, 27, 73, 77], [4, 84, 19, 82, 45], [43, 92, 18, 68, 55]], [[33, 46, 21, 41, 75], [98, 73, 67, 80, 81], [84, 16, 44, 93, 94], [1, 9, 26, 97, 52], [88, 74, 12, 95, 99]], [[46, 83, 30, 22, 79], [72, 26, 42, 74, 33], [54, 41, 94, 86, 82], [27, 81, 31, 34, 12], [77, 6, 38, 56, 71]], [[22, 80, 82, 60, 24], [20, 49, 51, 58, 59], [47, 35, 67, 92, 78], [15, 8, 71, 97, 63], [37, 27, 98, 16, 38]], [[71, 94, 59, 27, 83], [81, 68, 58, 61, 43], [12, 75, 93, 70, 56], [19, 28, 99, 39, 20], [18, 22, 34, 78, 13]], [[43, 70, 54, 13, 60], [17, 24, 31, 47, 84], [88, 15, 40, 45, 76], [7, 78, 63, 75, 56], [23, 66, 96, 26, 46]], [[2, 16, 13, 57, 32], [26, 70, 37, 50, 68], [58, 17, 3, 96, 67], [33, 95, 72, 59, 42], [94, 43, 51, 20, 60]]];


function bingoFirst(numbers, boards) {
    let markingBoards = JSON.parse(JSON.stringify(boards));

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < markingBoards.length; j++) {
            for (let k = 0; k < markingBoards[0].length; k++) {
                for (let l = 0; l < markingBoards[0].length; l++) {
                    if (numbers[i] === markingBoards[j][k][l]) {
                        markingBoards[j][k][l] = 'ok';
                    }
                }
            }
        }

        for (let j = 0; j < markingBoards.length; j++) {
            for (let k = 0; k < markingBoards[0].length; k++) {
                let matchesInRow = 0;
                let matchesInColumn = 0;
                for (let l = 0; l < markingBoards[0].length; l++) {
                    if (markingBoards[j][k][l] === 'ok') {
                        matchesInRow++;
                    }

                    if (markingBoards[j][l][k] === 'ok') {
                        matchesInColumn++;
                    }
                }

                if (matchesInRow === 5 || matchesInColumn === 5) {
                    let valueOfNumber = numbers[i];
                    let elementsOfWinBoard = [];
                    for (let i = 0; i < 5; i++) {
                        for (let h = 0; h < 5; h++) {
                            if (typeof (markingBoards[j][i][h]) === 'number') {
                                elementsOfWinBoard.push(boards[j][i][h]);
                            }
                        }
                    }

                    let sumOfWinBoard = elementsOfWinBoard.reduce((a, b) => a + b, 0);
                    return sumOfWinBoard * valueOfNumber;
                }
            }
        }
    }
}

console.log(bingoFirst(numbers, boards));


// PART 2

function bingoLast(numbers, boards) {
    let markingBoards = JSON.parse(JSON.stringify(boards));
    let winnerBoards = 0;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < markingBoards.length; j++) {
            for (let k = 0; k < markingBoards[0].length; k++) {
                for (let l = 0; l < markingBoards[0].length; l++) {
                    if (numbers[i] === markingBoards[j][k][l]) {
                        markingBoards[j][k][l] = 'ok';
                    }
                }
            }
        }


        for (let j = 0; j < markingBoards.length; j++) {
            for (let k = 0; k < markingBoards[0].length; k++) {
                let matchesInRow = 0;
                let matchesInColumn = 0;
                for (let l = 0; l < markingBoards[0].length; l++) {
                    if (markingBoards[j][k][l] === 'ok') {
                        matchesInRow++;
                    }

                    if (markingBoards[j][l][k] === 'ok') {
                        matchesInColumn++;
                    }
                }

                if (matchesInRow === 5 || matchesInColumn === 5) {
                    winnerBoards++;

                    if (winnerBoards !== (boards.length)) {
                        for (let l = 0; l < markingBoards[0].length; l++) {
                            for (let p = 0; p < markingBoards[0].length; p++) {
                                markingBoards[j][l][p] = 'no'
                            }
                        }
                    }

                    if (winnerBoards === (boards.length)) {
                        let valueOfNumber = numbers[i];
                        let elementsOfWinBoard = [];
                        for (let i = 0; i < 5; i++) {
                            for (let h = 0; h < 5; h++) {
                                if (typeof (markingBoards[j][i][h]) === 'number') {
                                    elementsOfWinBoard.push(boards[j][i][h]);
                                }
                            }
                        }

                        let sumOfWinBoard = elementsOfWinBoard.reduce((a, b) => a + b, 0);
                        return sumOfWinBoard * valueOfNumber;
                    }
                }
            }
        }
    }
}

console.log(bingoLast(numbers, boards));
