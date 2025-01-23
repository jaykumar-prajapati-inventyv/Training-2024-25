let arr = [
  "25 26 29 30 32 35 37 35",
  "15 16 17 20 22 24 26 26",
  "80 81 83 85 89",
  "76 77 79 82 84 87 89 95",
  "73 75 78 81 83 84 81 84",
  "9 10 11 12 11 8",
  "27 28 30 33 35 34 37 37",
  "67 70 69 72 74 78",
  "65 66 69 72 75 72 74 79",
  "22 25 25 26 27 28",
  "47 50 53 53 51",
  "67 70 70 71 74 75 77 77",
  "68 69 71 74 74 78",
  "54 56 58 58 65",
  "19 21 24 28 30 32 34 36",
  "75 78 79 80 84 81",
  "13 16 19 20 23 25 29 29",
  "66 67 69 73 75 78 79 83",
  "41 42 46 49 56",
  "86 87 90 96 97 98 99",
  "67 68 74 76 78 76",
  "64 65 66 67 69 74 75 75",
  "55 58 61 68 72",
  "44 45 48 50 53 54 60 65",
  "41 38 40 42 44 47",
  "50 48 49 52 54 56 54",
  "62 59 61 64 65 66 66",
  "29 27 29 30 31 35",
  "32 29 31 34 40",
  "27 25 27 29 28 31 33 34",
  "68 66 67 65 66 68 70 67",
  "41 38 39 40 43 42 44 44",
  "82 79 81 84 82 86",
  "78 75 74 77 78 85",
  "89 88 91 93 94 97 97 99",
  "63 61 61 62 64 63",
  "44 43 43 45 46 46",
  "86 84 85 85 89",
  "19 18 21 24 24 29",
  "18 17 20 24 25 27 28",
  "15 14 15 17 21 24 22",
  "85 83 86 90 90",
  "28 26 30 32 34 37 41",
  "78 77 78 82 85 92",
  "73 71 77 80 83",
  "12 11 12 14 20 22 24 22",
  "48 47 54 56 56",
  "37 36 41 43 47",
  "83 80 81 83 90 95",
  "53 53 55 57 60",
  "31 31 32 33 36 35",
  "86 86 87 88 91 94 94",
  "82 82 84 86 88 92",
  "17 17 18 19 21 27",
  "29 29 31 28 30 33 36",
  "70 70 71 68 65",
  "1 1 2 1 1",
  "27 27 29 27 31",
  "38 38 41 43 45 48 45 52",
  "40 40 41 43 43 46 49",
  "7 7 7 9 11 14 13",
  "3 3 6 9 10 10 10",
  "20 20 21 21 25",
  "51 51 51 53 60",
  "40 40 41 45 48 49 52",
  "73 73 74 76 79 81 85 83",
  "8 8 12 13 13",
  "40 40 41 43 45 46 50 54",
  "72 72 73 74 78 85",
  "42 42 43 50 51 53",
  "62 62 63 66 69 75 73",
  "28 28 31 32 38 40 40",
  "48 48 51 56 58 59 63",
  "39 39 41 47 50 56",
  "29 33 35 37 38",
  "20 24 27 29 31 32 35 33",
  "55 59 60 62 62",
  "38 42 43 45 47 48 50 54",
  "9 13 15 18 20 23 24 29",
  "72 76 77 80 78 80 83",
  "57 61 64 65 68 67 68 67",
  "72 76 78 79 81 82 79 79",
  "12 16 19 22 25 28 25 29",
  "33 37 38 41 42 39 45",
  "36 40 41 44 44 46",
  "65 69 70 72 75 75 72",
  "9 13 13 15 15",
  "33 37 39 42 45 45 46 50",
  "69 73 76 77 80 80 86",
  "7 11 12 16 18 19",
  "30 34 35 36 40 38",
  "34 38 39 43 45 47 47",
  "2 6 8 12 13 16 20",
  "36 40 43 46 50 55",
  "76 80 85 86 88 91 92",
  "46 50 51 52 59 60 61 60",
  "1 5 7 12 12",
  "61 65 70 71 74 75 79",
  "28 32 35 36 37 44 46 52",
  "24 30 33 35 37",
  "75 82 83 84 87 90 91 88",
  "52 59 60 61 63 65 65",
  "54 59 62 63 65 66 70",
  "17 24 25 27 29 34",
  "57 64 67 70 67 68 70 73",
  "69 76 78 81 83 82 80",
  "13 19 20 18 20 20",
  "20 27 29 28 29 33",
  "10 16 18 15 16 21",
  "66 72 74 77 77 80",
  "62 68 70 73 75 75 72",
  "84 89 89 91 92 95 96 96",
  "21 27 28 28 32",
  "32 37 39 40 43 43 50",
  "18 25 26 29 33 36 37",
  "9 15 16 20 23 25 26 25",
  "49 54 58 61 61",
  "46 52 54 55 57 61 65",
  "21 27 29 30 34 35 36 42",
  "78 83 84 90 92 95",
  "54 61 63 65 66 67 74 72",
  "1 7 9 10 11 17 20 20",
  "39 46 52 55 56 60",
  "7 12 14 16 18 20 26 32",
  "89 87 84 83 84",
  "37 36 35 32 31 29 27 27",
  "48 45 42 41 40 37 34 30",
  "23 21 20 18 17 14 12 7",
  "69 67 65 63 60 63 62",
  "93 91 88 86 89 92",
  "10 8 6 7 7",
  "28 26 24 27 26 24 23 19",
  "54 51 52 51 50 44",
  "65 64 61 60 60 59",
  "18 16 13 10 8 5 5 8",
  "80 78 76 76 76",
  "89 87 84 82 82 79 77 73",
  "27 24 24 21 19 18 11",
  "44 43 39 38 36",
  "15 14 13 10 6 3 2 3",
  "76 73 69 67 64 64",
  "53 51 50 48 44 43 39",
  "20 19 17 15 11 6",
  "50 47 40 37 36",
  "98 96 93 87 84 82 84",
  "43 42 37 34 33 31 28 28",
  "32 30 29 27 20 17 14 10",
  "66 64 62 61 59 53 52 46",
  "17 19 17 14 11 10 7 5",
  "73 76 73 72 71 73",
  "78 80 79 76 75 72 72",
  "16 18 15 13 10 6",
  "93 96 93 91 89 87 84 79",
  "53 55 52 50 48 46 47 44",
  "57 60 57 56 53 52 54 57",
  "59 60 57 58 56 56",
  "61 64 62 59 62 58",
  "36 39 38 41 39 38 33",
  "13 14 14 13 12 11",
  "76 77 74 74 77",
  "8 10 10 9 6 6",
  "55 57 57 55 53 49",
  "51 53 52 52 50 47 40",
  "18 21 19 15 12",
  "83 84 82 78 76 75 73 76",
  "35 38 34 31 31",
  "57 60 58 54 51 48 44",
  "27 30 29 25 23 21 16",
  "12 15 9 7 6 5",
  "20 23 20 15 13 10 9 11",
  "21 22 20 17 12 10 8 8",
  "59 60 57 51 49 46 42",
  "22 24 22 16 14 12 5",
  "71 71 69 68 67 66 64",
  "90 90 88 86 85 87",
  "77 77 76 73 71 71",
  "9 9 7 6 2",
  "91 91 90 88 86 84 83 77",
  "27 27 24 26 25 24 22",
  "55 55 56 54 53 54",
  "84 84 81 83 81 78 75 75",
  "60 60 58 55 56 53 50 46",
  "61 61 63 60 57 56 51",
  "59 59 58 57 57 54",
  "34 34 32 31 31 29 30",
  "33 33 30 30 30",
  "62 62 59 56 56 52",
  "24 24 24 23 16",
  "14 14 13 9 8 6",
  "20 20 19 16 15 11 10 11",
  "96 96 92 91 90 89 89",
  "93 93 89 87 84 82 81 77",
  "62 62 60 56 50",
  "72 72 69 62 60",
  "76 76 69 66 65 68",
  "96 96 89 87 87",
  "65 65 63 56 55 51",
  "76 76 75 68 61",
  "63 59 56 53 52",
  "75 71 70 68 66 67",
  "79 75 72 70 70",
  "99 95 93 90 86",
  "70 66 65 63 60 54",
  "6 2 1 4 1",
  "30 26 28 27 28",
  "64 60 57 55 57 56 56",
  "65 61 60 59 58 57 58 54",
  "67 63 62 61 59 56 57 52",
  "93 89 88 85 85 82",
  "39 35 32 29 27 27 28",
  "96 92 92 89 88 85 85",
  "71 67 67 65 63 61 58 54",
  "46 42 41 40 37 37 32",
  "68 64 63 59 58 55",
  "41 37 34 30 33",
  "71 67 63 62 60 58 58",
  "45 41 39 35 34 31 27",
  "78 74 72 69 66 62 56",
  "62 58 57 55 52 47 45 42",
  "89 85 82 76 75 72 71 74",
  "69 65 64 61 56 53 51 51",
  "73 69 64 62 58",
  "32 28 21 20 19 18 16 9",
  "94 89 87 85 83 82 79 78",
  "91 84 82 81 84",
  "41 36 33 31 30 27 27",
  "56 51 48 46 44 41 38 34",
  "85 78 77 75 72 70 68 62",
  "85 80 79 80 78 76 75",
  "30 25 27 26 29",
  "37 32 35 33 33",
  "79 74 72 73 69",
  "80 75 72 71 72 70 69 64",
  "62 57 55 55 53 51 48 45",
  "53 47 45 44 44 41 40 42",
  "40 33 31 28 28 28",
  "90 85 84 83 82 82 78",
  "95 88 85 85 84 83 82 76",
  "37 30 28 24 23 20 19 17",
  "24 19 15 14 16",
  "24 19 16 14 11 7 7",
  "62 55 52 51 49 45 44 40",
  "49 43 39 38 33",
  "88 81 78 73 71",
  "64 59 56 51 49 51",
  "19 14 11 6 6",
  "41 34 29 28 24",
  "44 39 36 33 30 23 17",
  "40 41 44 47 48 50 51 48",
  "57 59 61 64 64",
  "58 60 61 62 66",
  "79 82 84 86 92",
  "7 9 7 8 9 10 11",
  "30 32 35 38 41 38 40 38",
  "39 40 41 43 42 42",
  "76 77 79 77 79 83",
  "16 19 17 19 25",
  "79 82 83 83 84 86 87 90",
  "21 24 24 26 29 31 32 30",
  "28 31 32 35 37 37 39 39",
  "58 61 61 63 66 67 71",
  "9 10 13 13 19",
  "51 53 57 59 60 61 64",
  "80 82 84 88 90 88",
  "86 89 93 95 96 98 98",
  "72 74 76 80 81 85",
  "76 79 83 85 88 90 96",
  "76 79 85 88 91 94 97",
  "79 80 87 89 91 92 89",
  "86 87 90 95 95",
  "37 39 41 47 51",
  "29 30 32 37 40 46",
  "57 54 57 58 59 61 63 66",
  "63 60 61 64 63",
  "62 59 60 61 64 64",
  "47 45 46 49 53",
  "6 4 6 7 8 9 14",
  "35 32 33 36 38 35 38",
  "7 4 5 7 8 9 7 5",
  "51 49 52 54 55 52 53 53",
  "48 47 49 50 49 52 56",
  "17 16 19 17 18 21 26",
  "93 92 92 93 95 96 97",
  "14 12 15 15 18 16",
  "11 10 10 13 13",
  "91 90 90 93 94 95 99",
  "72 71 72 72 73 78",
  "35 34 37 40 44 47 48",
  "26 24 27 28 31 32 36 33",
  "31 29 33 34 34",
  "79 76 80 82 86",
  "54 53 57 60 63 66 69 76",
  "76 74 79 82 83 86 88 89",
  "42 41 46 47 50 49",
  "20 18 21 23 24 27 33 33",
  "51 50 52 54 59 63",
  "11 9 12 15 20 23 24 29",
  "57 57 58 61 62 63",
  "53 53 56 58 60 61 58",
  "25 25 27 29 31 33 34 34",
  "70 70 71 72 74 76 79 83",
  "70 70 73 76 79 82 83 90",
  "6 6 8 7 8",
  "24 24 26 29 28 30 33 31",
  "66 66 67 66 67 67",
  "91 91 92 90 94",
  "92 92 95 92 94 99",
  "58 58 60 62 64 67 67 68",
  "86 86 89 89 86",
  "16 16 17 17 18 21 22 22",
  "46 46 47 48 48 52",
  "87 87 89 92 92 99",
  "1 1 4 7 10 11 15 17",
  "73 73 74 75 79 81 80",
  "84 84 87 91 91",
  "74 74 76 80 84",
  "50 50 53 57 59 65",
  "74 74 80 81 84",
  "11 11 13 15 21 20",
  "47 47 54 55 55",
  "57 57 58 60 62 68 69 73",
  "41 41 48 51 56",
  "16 20 21 24 27",
  "14 18 19 22 25 23",
  "84 88 89 90 93 93",
  "59 63 65 68 69 72 75 79",
  "19 23 26 29 32 37",
  "24 28 31 30 33 35",
  "70 74 76 79 77 75",
  "66 70 73 74 72 75 75",
  "56 60 61 59 62 63 67",
  "21 25 26 24 31",
  "27 31 33 33 34",
  "2 6 6 7 6",
  "83 87 88 88 90 93 93",
  "75 79 82 82 83 84 88",
  "34 38 40 40 43 46 52",
  "64 68 72 75 76",
  "72 76 80 81 78",
  "79 83 87 89 89",
  "12 16 20 22 23 24 26 30",
  "36 40 42 46 53",
  "24 28 35 38 40",
  "7 11 13 19 21 22 21",
  "35 39 41 43 50 50",
  "63 67 70 77 81",
  "66 70 71 77 79 85",
  "61 66 69 72 75",
  "71 77 78 81 80",
  "70 76 77 78 80 81 81",
  "25 32 33 35 36 40",
  "32 39 41 44 45 50",
  "36 41 42 39 42 43 44 46",
  "8 14 17 14 12",
  "79 85 86 84 85 85",
  "20 27 29 27 31",
  "60 66 64 67 73",
  "31 37 37 38 40 43",
  "27 33 34 36 36 37 36",
  "17 22 24 24 24",
  "76 83 84 84 88",
  "72 78 79 81 82 82 87",
  "10 16 18 22 24 27",
  "77 82 84 88 90 91 93 90",
  "33 39 41 45 47 49 52 52",
  "67 74 78 81 85",
  "25 32 36 38 41 43 49",
  "44 50 52 54 59 61",
  "13 20 23 26 29 31 37 35",
  "45 50 57 60 60",
  "66 72 73 80 84",
  "18 24 27 30 32 37 42",
  "81 79 76 75 78",
  "7 5 3 2 1 1",
  "55 54 51 50 49 45",
  "45 44 41 38 35 30",
  "79 76 73 72 74 71",
  "94 92 94 91 90 93",
  "30 28 27 26 29 26 26",
  "97 94 95 92 89 86 83 79",
  "21 20 22 19 13",
  "96 94 94 91 90",
  "81 78 76 76 74 76",
  "38 35 33 33 33",
  "58 56 56 53 52 48",
  "57 55 53 51 51 49 48 43",
  "76 74 73 70 68 64 61",
  "25 22 18 16 19",
  "17 14 10 7 5 3 3",
  "41 40 38 34 33 30 26",
  "99 97 96 95 94 91 87 82",
  "95 92 85 82 81 78 77 76",
  "69 67 61 58 56 59",
  "57 54 53 48 45 44 43 43",
  "86 85 82 79 73 72 68",
  "88 85 78 76 74 67",
  "69 71 68 66 65 62 60 58",
  "48 50 49 47 44 41 42",
  "17 20 17 14 11 10 9 9",
  "79 80 77 75 72 70 66",
  "16 18 17 15 13 12 10 3",
  "67 69 67 66 68 65 62 60",
  "69 71 68 67 68 70",
  "20 22 23 20 19 19",
  "32 34 33 35 31",
  "85 88 87 86 85 86 85 80",
  "14 15 15 13 12",
  "29 31 30 30 27 24 27",
  "68 69 69 67 64 64",
  "92 93 93 90 86",
  "56 57 54 54 51 46",
  "21 22 18 15 14",
  "30 31 30 27 25 21 22",
  "60 61 58 56 55 51 51",
  "27 28 24 23 20 18 14",
  "95 97 95 92 90 86 83 77",
  "67 70 63 62 60 57 55 52",
  "32 34 28 25 28",
  "31 32 26 25 25",
  "28 31 29 22 20 16",
  "13 15 14 9 3",
  "68 68 65 64 61 59 56",
  "39 39 36 33 35",
  "29 29 26 23 23",
  "72 72 70 69 65",
  "15 15 12 11 8 7 6 1",
  "43 43 41 42 39 38 35 34",
  "52 52 49 46 47 45 47",
  "39 39 41 40 40",
  "28 28 26 27 23",
  "36 36 35 33 32 35 28",
  "19 19 19 16 15",
  "20 20 19 17 15 15 16",
  "51 51 49 49 49",
  "65 65 63 60 60 56",
  "90 90 88 86 86 81",
  "68 68 65 61 58 55",
  "34 34 32 28 25 22 25",
  "88 88 85 81 79 78 78",
  "26 26 24 23 20 16 13 9",
  "98 98 95 91 88 85 82 77",
  "29 29 26 19 16 15 14",
  "96 96 94 93 87 88",
  "62 62 57 54 54",
  "72 72 66 63 59",
  "45 45 44 41 36 35 32 25",
  "38 34 33 30 27 25 22 21",
  "74 70 67 64 62 61 60 62",
  "51 47 46 43 43",
  "62 58 55 52 48",
  "20 16 13 10 5",
  "57 53 51 53 52 51",
  "99 95 93 90 92 91 94",
  "23 19 18 15 14 15 15",
  "62 58 59 58 55 51",
  "59 55 54 55 54 51 44",
  "95 91 89 87 87 86 85",
  "31 27 26 24 24 22 25",
  "27 23 22 19 19 18 16 16",
  "96 92 92 89 85",
  "26 22 22 20 18 13",
  "27 23 19 17 16 14",
  "90 86 83 82 80 76 77",
  "86 82 80 79 77 74 70 70",
  "20 16 12 11 10 6",
  "97 93 92 88 82",
  "75 71 68 66 65 64 57 54",
  "88 84 77 76 73 72 75",
  "37 33 32 30 25 25",
  "61 57 54 47 43",
  "65 61 59 54 53 46",
  "54 47 44 42 40 38",
  "88 81 79 78 81",
  "60 55 52 50 49 48 48",
  "86 81 79 76 73 71 68 64",
  "38 32 31 29 27 25 18",
  "80 75 73 76 75 73 71",
  "34 27 29 28 27 24 23 25",
  "97 92 89 92 92",
  "57 51 52 50 49 48 44",
  "27 22 20 18 21 18 12",
  "85 80 77 77 74 71 69 66",
  "26 20 18 16 16 19",
  "82 76 74 73 71 70 70 70",
  "93 87 85 84 82 81 81 77",
  "96 89 87 85 85 84 79",
  "34 27 23 21 19 17",
  "30 25 23 19 18 20",
  "57 51 50 46 43 42 42",
  "31 26 25 21 18 17 14 10",
  "51 45 41 40 39 36 30",
  "45 39 37 35 29 28 27",
  "78 72 70 67 65 60 61",
  "78 73 68 67 65 62 62",
  "95 89 86 84 78 74",
  "75 68 65 60 58 52",
  "71 71 74 72 74 77 79 84",
  "22 19 21 22 22 24 25 30",
  "10 7 8 8 7",
  "78 76 77 76 78 81",
  "44 42 44 46 49 47",
  "2 2 3 6 8 12 14 14",
  "12 12 14 16 22 25 28 25",
  "29 34 35 38 40 41 41 44",
  "28 25 23 21 18 17 19",
  "66 60 59 56 55 57 57",
  "55 55 52 51 51 49",
  "32 28 27 26 22",
  "81 79 76 73 71 71 67",
  "94 92 91 88 84 83 80 83",
  "86 84 82 81 80 79 76 76",
  "66 60 58 55 51 49 49",
  "91 95 96 96 97 96",
  "37 33 28 26 22",
  "26 25 24 23 20 16 15 15",
  "41 41 43 45 47 49 49",
  "55 57 56 54 50 47 44 40",
  "34 32 31 29 26 20 18 12",
  "39 38 41 44 46",
  "51 47 46 44 43 43",
  "64 70 73 77 80 83",
  "46 48 54 56 59 61 64 67",
  "20 23 20 22 25 29",
  "46 52 53 54 58 59 62 68",
  "14 21 21 23 25 25",
  "57 57 57 56 53 53",
  "34 27 25 22 17 15 12 15",
  "22 26 28 29 30 31 36",
  "76 80 82 84 88 92",
  "49 50 54 57 56",
  "27 28 35 37 41",
  "70 72 71 64 63",
  "13 13 12 11 11 10 5",
  "91 87 83 81 82",
  "21 19 20 21 24 26 26",
  "78 73 76 73 70",
  "33 29 25 22 21 17",
  "1 5 7 10 12 13 10",
  "2 5 6 5 5",
  "16 18 17 16 13 13",
  "62 66 69 71 69 69",
  "43 36 34 31 29 26 20 20",
  "83 79 77 74 71 71 67",
  "58 62 66 69 72 74",
  "64 60 58 56 49",
  "56 57 54 55 55",
  "31 31 35 36 38 41 44",
  "42 36 35 33 30 30 26",
  "44 45 42 40 34 30",
  "99 96 93 90 88 86 81 83",
  "18 22 25 27 29 30 32 36",
  "79 79 78 75 71 70 67 62",
  "36 39 36 38 40 47",
  "92 89 91 94 91 92 95 92",
  "16 21 23 30 28",
  "85 86 83 80 79 76 75 70",
  "84 83 85 86 87 91 90",
  "7 9 11 14 16 20 24",
  "40 44 47 51 56",
  "60 63 66 68 71 71 75",
  "31 35 38 36 33",
  "24 24 27 31 33 31",
  "16 12 11 9 9 9",
  "24 24 23 21 18 13",
  "64 58 56 55 52 48 44",
  "50 48 51 53 55 55 57 61",
  "34 37 35 33 33 30",
  "97 97 98 98 98",
  "48 48 44 43 42 40 39 36",
  "96 95 95 96 96",
  "7 11 14 15 15 16 16",
  "82 88 91 92 92",
  "31 32 35 34 36 37",
  "33 33 31 30 27 26 19 13",
  "13 15 17 18 25 30",
  "86 88 86 83 82 78 76 76",
  "49 49 48 46 40 38 39",
  "89 82 81 78 77 70",
  "58 61 59 56 54 56 53 56",
  "38 35 42 43 44",
  "22 27 28 34 37 37",
  "47 44 44 43 41 38 39",
  "45 43 46 52 50",
  "44 40 38 36 32 25",
  "99 99 96 94 91 90 87 83",
  "61 54 51 54 51 50 46",
  "75 82 83 84 85 88 90 97",
  "20 26 28 28 32",
  "6 6 11 12 15 21",
  "88 82 82 81 78",
  "69 66 64 64 63 60",
  "2 5 7 6 4",
  "69 64 62 60 60 62",
  "19 23 23 25 30",
  "12 18 19 21 23 27",
  "67 63 65 64 66",
  "45 52 55 58 60 65 68 71",
  "54 49 48 45 41",
  "80 80 83 82 84 88",
  "91 90 90 89 86 86",
  "54 57 61 64 67 74",
  "50 53 54 56 59 60 66",
  "16 20 22 28 35",
  "82 84 84 87 88",
  "19 15 12 9 12",
  "3 9 11 12 13 15",
  "55 53 57 60 60",
  "55 52 55 52 54 55 56 62",
  "66 63 66 69 72 74 76 83",
  "68 70 73 76 79 79",
  "74 76 77 78 80 82 79",
  "93 89 86 84 81 81 80 83",
  "18 18 17 15 8 6 2",
  "42 49 50 51 51 53 50",
  "1 5 6 3 5 8",
  "46 46 45 41 37",
  "54 54 55 56 61 65",
  "57 57 55 56 53",
  "28 28 26 24 26 23 25",
  "87 87 90 89 89",
  "67 71 71 73 74 78",
  "37 33 30 29 26 23 20",
  "69 65 63 58 57 54 52",
  "28 25 24 22 24 21 20 17",
  "72 75 73 72 72 72",
  "66 66 64 66 64 63 59",
  "94 95 93 91 93",
  "42 40 42 43 44 41 44 48",
  "38 44 47 48 51 55 55",
  "50 47 46 39 36 35 32 31",
  "70 72 70 69 66 64 62",
  "12 10 7 8 4",
  "73 68 65 64 58 56 55 53",
  "10 7 4 5 5",
  "58 56 55 52 49 45 43 36",
  "37 39 41 44 46 46 44",
  "11 10 11 13 14 18 21 25",
  "88 84 81 74 68",
  "81 74 73 73 72 71 64",
  "28 28 29 30 30 31 30",
  "77 78 75 72 70 70 71",
  "37 34 35 37 41 43 49",
  "43 44 47 51 52 52",
  "71 64 61 60 57 59",
  "22 23 25 27 29",
  "64 67 69 72 75 77 80 82",
  "85 87 90 91 93 94",
  "28 26 23 22 21 18 16",
  "68 71 73 74 76 79 81 83",
  "24 25 26 28 29",
  "22 23 25 28 29",
  "29 30 31 32 35 36 39",
  "3 5 6 8 9",
  "39 36 34 33 30 28 25",
  "54 52 49 47 44 43 41",
  "82 85 87 89 90 93 96 97",
  "18 21 24 27 28 30 32",
  "8 9 10 12 14",
  "54 53 52 51 49 46",
  "67 66 65 64 61 58",
  "58 57 54 51 49 47 44",
  "25 28 29 31 33",
  "7 8 9 10 11 14 15",
  "88 87 86 85 84",
  "51 52 53 55 58 60 63",
  "38 35 32 29 27 24 22",
  "81 82 83 84 85 87 90",
  "78 77 75 72 69",
  "81 83 84 87 88 90 91",
  "31 34 35 38 39",
  "52 51 50 47 44 41",
  "79 76 73 70 69 66 64",
  "94 93 90 89 88 85 82 81",
  "34 36 38 40 43 45",
  "58 57 55 52 49 47 45",
  "24 23 21 20 19",
  "89 90 91 93 94",
  "58 59 61 64 67 69 70 71",
  "50 52 55 56 58 60",
  "63 61 59 56 53 50",
  "43 46 49 52 54 55",
  "42 40 37 36 33 30 27 24",
  "26 27 28 31 32 33",
  "66 63 62 60 58 55",
  "11 14 15 18 19 22 24 27",
  "50 49 48 46 45",
  "80 83 84 87 88 91",
  "74 75 77 79 80 82",
  "66 67 70 72 74",
  "68 69 72 75 78 81 83 84",
  "63 61 60 59 57 54 51",
  "37 38 40 41 43",
  "44 43 40 39 36 34 33",
  "84 85 87 90 92 94 95",
  "78 80 81 82 85 88 90 91",
  "38 37 35 33 30 29 27",
  "61 63 65 68 70",
  "47 49 50 52 53",
  "39 36 34 32 31",
  "70 71 72 73 74 77 80",
  "41 39 37 34 33 31 28 25",
  "30 31 33 36 37 40 42",
  "18 21 24 26 27 30 33",
  "37 38 41 44 45",
  "10 13 14 15 18 20 22",
  "96 95 94 91 90 89",
  "46 47 48 50 53",
  "83 82 79 76 75",
  "38 39 41 44 47 48 51 53",
  "73 75 76 79 80",
  "81 84 87 88 89",
  "28 27 26 25 22 19 17 15",
  "54 55 57 59 60 62 65 66",
  "69 71 73 75 76 78",
  "43 45 46 49 51 54 57",
  "56 55 52 50 47 44 41 40",
  "36 37 40 41 42 44",
  "63 66 69 71 73 74",
  "40 43 44 47 48 50 53",
  "76 77 78 81 84 85",
  "68 65 63 60 58 56",
  "59 62 64 66 67 68",
  "24 23 20 19 16 14 11",
  "27 25 23 20 18 17 14 11",
  "11 13 15 18 21 24 25",
  "17 18 19 20 22",
  "52 55 58 60 63 66",
  "55 57 59 62 63 65 68",
  "7 8 11 14 17 20 21 22",
  "84 83 81 78 77",
  "24 21 19 17 16 14 11",
  "41 38 37 35 33 30 27",
  "74 77 78 79 82 85",
  "63 61 60 57 56 55 53",
  "27 30 33 34 36 39 41 43",
  "62 65 67 69 70 73 74 77",
  "51 49 48 47 44 42 41 38",
  "22 23 24 27 28",
  "49 50 53 56 59 62 65",
  "36 33 32 31 30",
  "5 8 10 13 14 17 19",
  "38 37 36 33 31 30 27 24",
  "55 56 57 59 62",
  "43 46 48 51 53 55 57",
  "37 39 42 43 46 49",
  "45 47 50 53 56",
  "6 7 9 11 13 16 18 19",
  "57 58 61 62 63 64 67 69",
  "13 12 11 10 7 6",
  "82 79 78 76 74 71 70 67",
  "16 14 11 8 5 3",
  "13 16 19 22 25 27 29 31",
  "35 32 31 28 27 25",
  "22 25 27 29 31 33 35",
  "67 70 73 76 78 80 82",
  "20 21 22 25 27 30 31 32",
  "66 63 62 60 57 56 55 54",
  "32 31 28 27 24 21 20 18",
  "13 15 16 17 18",
  "80 81 82 84 85 86 88 89",
  "49 47 46 45 43 41",
  "69 66 65 63 60 59 56",
  "76 74 71 68 66 65 64",
  "25 22 21 19 16 13 11 8",
  "44 46 49 51 52 53",
  "33 36 37 38 40",
  "65 62 59 57 54",
  "87 84 83 82 81",
  "58 59 60 63 65 68",
  "55 58 60 62 63 64 65 67",
  "77 79 80 82 85 86 88 90",
  "26 29 30 33 35 36",
  "83 84 87 90 92",
  "42 44 47 50 52 55",
  "76 73 72 71 70",
  "38 36 34 33 30 27 25 24",
  "72 73 76 79 80",
  "83 80 79 77 74 73",
  "2 5 7 9 11 12 15",
  "33 31 28 25 24 23 21",
  "81 82 84 87 88 91 93 94",
  "80 77 74 72 71 69 66",
  "68 66 64 63 60 57 55",
  "31 30 28 26 23",
  "35 34 31 28 27 26 25",
  "76 78 80 82 84",
  "85 84 83 81 80 79 78",
  "78 80 81 82 84",
  "17 16 13 11 10 8",
  "84 85 88 91 92 93",
  "83 86 89 91 93 96 98",
  "46 43 41 40 39 37",
  "77 78 80 83 85",
  "46 47 48 51 52 55",
  "88 86 84 81 80 77 75",
  "12 13 15 18 21 22 25",
  "29 28 27 24 23 20 17 14",
  "8 7 6 5 2",
  "88 87 85 82 79 77 75",
  "47 50 52 54 57",
  "78 80 83 84 85 88 90",
  "67 70 72 74 75 78",
  "10 11 14 16 19 21 22 25",
  "41 44 46 47 48",
  "37 35 33 30 27 24 23",
  "29 28 26 23 22 21",
  "24 27 30 31 33",
  "16 18 19 21 22 25 26 27",
  "97 94 92 91 88 87",
  "4 7 10 12 14 15 18 21",
  "1 4 7 9 11 13 16",
  "80 78 76 73 70 69",
  "59 57 56 54 52",
  "53 56 57 59 62 65",
  "47 44 43 41 38 36 33",
  "10 11 12 14 16 17 18",
  "94 91 90 87 86 83",
  "96 95 94 93 90 87 86",
  "27 30 32 35 38 41",
  "35 37 38 39 40 41",
  "88 89 92 94 96",
  "59 61 64 67 68 71 72 73",
  "2 5 6 8 9 12 15 17",
  "71 74 75 76 79 81 82",
  "40 41 44 47 48 51 53",
  "60 63 64 66 67",
  "21 24 27 29 31 33 36 39",
  "11 13 14 16 18",
  "74 75 76 79 82",
  "24 26 28 31 33",
  "59 56 53 51 50 49",
  "60 61 63 65 67 70 72 73",
  "94 92 90 87 84 82 80 79",
  "67 66 63 60 58",
  "25 22 21 20 18 16 15 13",
  "1 3 4 6 9 12 13 16",
  "38 37 35 34 32",
  "30 31 32 34 35 38 40",
  "64 65 66 68 70",
  "3 4 5 6 7 9",
  "85 84 81 79 78 76 74 71",
  "39 36 34 33 31 30 29 27",
  "70 67 65 64 61 58 56",
  "81 78 76 73 71 68 67",
  "13 15 18 21 22 25 27 28",
  "82 81 79 76 75 74 72",
  "42 44 47 49 52",
  "40 41 44 47 49 52 53",
  "73 76 79 80 82",
  "83 84 86 89 91",
  "45 42 41 38 37",
  "62 60 57 56 53 52",
  "25 27 29 31 34",
  "32 34 36 39 40 42 43",
  "41 38 36 35 32 29 26 23",
  "28 30 33 35 36 38 41 42",
  "37 38 41 42 44 45 46",
  "28 25 22 19 17 14 11",
  "74 72 69 67 66",
  "65 66 67 69 70",
  "21 22 24 27 28 29 31 34",
  "51 50 47 46 43 40 39",
  "27 28 30 33 34 37 38 39",
  "82 83 86 89 92 94 97 99",
  "98 97 94 92 91 90 89",
  "85 83 82 81 80 78",
  "87 85 84 82 81",
  "70 72 74 75 78 80 83 85",
  "18 19 22 23 24 27",
  "11 13 15 16 19 22 24 25",
  "55 58 59 61 64 66 68 70",
  "29 26 24 23 21 18 17 15",
  "50 51 52 53 56 57",
  "88 87 86 83 81 79",
  "35 38 39 42 45 47 48",
  "67 70 71 74 75",
  "91 90 89 88 86",
  "21 18 17 15 13",
  "37 36 34 31 30 27 25",
  "67 66 65 63 61 60 58",
  "76 73 70 68 67 65 64 63",
  "37 39 42 44 45",
  "6 7 10 11 13 14 16 18",
  "25 24 21 20 18 15 14 11",
  "84 83 80 79 77 76 74 72",
  "19 17 15 12 10",
  "83 85 86 89 91 92 93 94",
  "13 14 15 16 17 19",
  "97 95 92 91 90 88 87",
  "62 65 67 70 71 74 75 78",
  "19 17 14 11 9",
  "2 5 6 7 9 11 12 15",
  "30 32 34 35 38 40",
  "30 33 34 37 40",
  "76 77 80 83 86 87",
  "15 12 10 8 7",
  "22 20 18 15 13",
  "16 15 13 12 10 8 5 4",
  "36 38 41 43 44 46",
  "55 52 49 46 45 43",
  "15 12 9 7 5 4 3 2",
  "54 55 57 60 63 66",
  "64 61 59 56 54 53 50",
  "37 40 43 46 47 48 51",
  "70 69 66 64 61 60 59 57",
  "21 18 15 14 13 12 10",
  "49 47 46 43 41 39 36 33",
  "33 36 37 39 41 44",
  "87 89 90 93 95",
  "99 96 94 92 90",
  "59 56 54 53 50 48 46",
  "92 90 89 87 84 83 80",
  "2 4 7 9 11",
  "28 25 24 22 19 17",
  "99 96 95 92 89",
  "76 73 71 69 67 64",
  "88 90 92 95 97",
  "25 26 27 28 29 30 33",
  "37 34 33 31 30 29 27",
  "1 2 5 6 7 9 11 13",
  "26 24 22 21 20 18",
  "33 31 30 27 25 24 22 20",
  "68 69 71 73 76 77 80",
  "42 40 39 37 34 32 29 27",
  "67 66 63 62 61",
  "24 21 18 15 14",
  "67 64 61 59 57",
  "80 83 85 87 88 89 91 92",
  "29 32 35 38 40 43 46",
  "42 41 40 37 36",
  "68 69 71 74 75",
  "45 44 41 38 37 34 31 30",
  "59 58 56 54 51 48 47 46",
  "39 41 42 44 46 49 52",
  "67 65 63 61 58 57",
  "71 73 75 76 79 82 85",
  "93 92 91 88 86 84 81 79",
  "32 29 28 26 25 23",
  "52 55 57 58 60 62 64 66",
  "51 53 55 57 58 59 60",
  "35 32 30 29 27 24 21",
  "69 71 73 75 76",
  "26 28 30 33 34 36",
  "26 24 21 18 17 16 14 12",
  "57 59 62 64 66 67 69",
  "23 20 18 17 15",
  "33 34 37 38 39 40 42",
  "85 86 87 88 90 93 96 97",
  "43 41 40 37 36 34 32 29",
  "23 26 27 28 29 31 34 35",
  "26 23 20 18 17 16 15 12",
  "54 57 59 62 64 65 67 68",
  "88 85 84 82 81 79 77 76",
  "88 86 84 83 81 80 78",
  "94 91 88 85 84 81 78 77",
  "62 61 58 57 55 53 50",
  "47 45 43 42 40",
  "23 22 21 19 17 16 15",
  "34 36 38 41 42 45",
  "15 13 11 9 7",
  "41 44 45 47 48 50 52 53",
  "82 79 77 76 75 72 70 67",
  "71 72 74 77 79 80 81",
  "56 53 50 47 44",
  "33 34 37 39 40 42",
  "60 58 55 52 51 48",
  "67 64 62 60 57 55 53 50",
  "27 26 23 21 18 16 13 11",
  "72 69 68 66 63 62",
  "61 64 66 69 70 72 74",
  "9 12 14 16 18 21 22",
  "42 39 38 36 34 31 29",
  "77 76 73 71 68 66",
  "10 7 6 4 2",
  "39 37 35 32 29 28 27 26",
  "68 71 74 76 79 80 81",
  "45 47 48 51 54 56 59",
  "91 90 89 87 86 85 83 82",
  "42 44 47 49 51 52 53",
  "24 23 22 20 18 16 13",
  "14 12 11 8 6 3 2",
  "45 42 40 39 36",
  "32 34 36 39 42 43 44",
  "89 87 86 85 82 81 80",
  "10 12 15 16 19",
  "62 59 57 55 53 51 48",
  "99 98 96 93 90 87 86",
  "56 58 59 60 61 64 66 69",
  "49 50 53 56 59 62 64",
  "79 76 74 71 70 67",
  "66 63 61 59 57 55 54 52",
  "32 31 30 29 28 25 23",
  "88 91 94 96 97 99",
  "72 74 76 79 82",
  "14 16 18 19 22 23 26 29",
  "51 49 48 46 45 43 41",
  "58 59 61 63 66 68 70",
  "13 10 9 6 3 2",
  "77 75 73 70 68 67",
  "62 60 59 57 54 53 50",
];

//Jo loop ni andar ni aek pn if condition ae "false" return karyu to ae demo() mathi j bahar jatu rehse.
function demo(singleArr) {
  let numArr = singleArr.split(" ").map(Number);
  console.log("Checking array:", numArr);

  // Determine if the sequence is increasing or decreasing
  let isIncreasing = numArr[1] > numArr[0];
  let isDecreasing = numArr[1] < numArr[0];

  for (let i = 0; i < numArr.length - 1; i++) {
    let diff = numArr[i + 1] - numArr[i];

    // Check if the difference is within the allowed range
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }

    // Ensure consistency in direction
    if ((isIncreasing && diff < 0) || (isDecreasing && diff > 0)) {
      return false;
    }

    // Check for mixed sequences (neither strictly increasing nor decreasing)
    if (!isIncreasing && !isDecreasing) {
      return false;
    }
  }

  return true;
}

let totalSafeArr = 0;
let totalUnsafeArr = 0;

arr.forEach((singleArr) => {
  if (demo(singleArr)) {
    totalSafeArr++;
  } else {
    totalUnsafeArr++;
  }
});

console.log("Total safe arrays:", totalSafeArr);
console.log("Total unsafe arrays:", totalUnsafeArr);
