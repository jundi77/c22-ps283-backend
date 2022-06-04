const axios = require('axios')

/**
 * 
 * @param {import('@hapi/hapi'.Request)} req 
 * @param {import('@hapi/hapi').ResponseToolkit} h 
 */
module.exports = async (req, h) => {
  return h.response({
    "angka": {
      "learnCategories": {
        "learnCourse": [
          {
            "learns": [
              {
                "answer": "0",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/cwMkQo.gif",
                "name": "belajar angka 0"
              },
              {
                "answer": "1",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/KyAufF.gif",
                "name": "belajar angka 1"
              },
              {
                "answer": "2",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/qtesC6.gif",
                "name": "belajar angka 2"
              },
              {
                "answer": "3",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/KKEUBV.gif",
                "name": "belajar angka 3"
              },
              {
                "answer": "4",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/qvAioX.gif",
                "name": "belajar angka 4"
              },
              {
                "answer": "5",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/_K_AIY.gif",
                "name": "belajar angka 5"
              },
              {
                "answer": "6",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/5KZCnR.gif",
                "name": "belajar angka 6"
              },
              {
                "answer": "7",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/FlbeZl.gif",
                "name": "belajar angka 7"
              },
              {
                "answer": "8",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/TnILa8.gif",
                "name": "belajar angka 8"
              },
              {
                "answer": "9",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/taJzbW.gif",
                "name": "belajar angka 9"
              }
            ],
            "name": "Belajar Angka Dasar"
          }
        ],
        "name": "Belajar Angka"
      },
      "name": "ANGKA",
      "trainCategories": {
        "name": "Latihan Angka",
        "trainCourse": [
          {
            "name": "Latihan Angka Dasar",
            "trainQuestion": [
              {
                "name": "Latihan 1",
                "trains": [
                  {
                    "answer": "0",
                    "name": "belajar angka 0",
                    "question": "0"
                  },
                  {
                    "answer": "1",
                    "name": "belajar angka 1",
                    "question": "1"
                  },
                  {
                    "answer": "2",
                    "name": "belajar angka 2",
                    "question": "2"
                  },
                  {
                    "answer": "3",
                    "name": "belajar angka 3",
                    "question": "3"
                  },
                  {
                    "answer": "4",
                    "name": "belajar angka 4",
                    "question": "4"
                  },
                  {
                    "answer": "5",
                    "name": "belajar angka 5",
                    "question": "5"
                  },
                  {
                    "answer": "6",
                    "name": "belajar angka 6",
                    "question": "6"
                  },
                  {
                    "answer": "7",
                    "name": "belajar angka 7",
                    "question": "7"
                  },
                  {
                    "answer": "8",
                    "name": "belajar angka 8",
                    "question": "8"
                  },
                  {
                    "answer": "9",
                    "name": "belajar angka 9",
                    "question": "9"
                  }
                ]
              }
            ]
          },
          {
            "name": "Latihan Angka Puluhan",
            "trainQuestion": [
              {
                "name": "Latihan 1",
                "trains": [
                  {
                    "answer": "10",
                    "name": "belajar angka 10",
                    "question": "10"
                  },
                  {
                    "answer": "20",
                    "name": "belajar angka 20",
                    "question": "20"
                  },
                  {
                    "answer": "30",
                    "name": "belajar angka 30",
                    "question": "30"
                  },
                  {
                    "answer": "40",
                    "name": "belajar angka 40",
                    "question": "40"
                  },
                  {
                    "answer": "50",
                    "name": "belajar angka 50",
                    "question": "50"
                  },
                  {
                    "answer": "60",
                    "name": "belajar angka 60",
                    "question": "60"
                  },
                  {
                    "answer": "70",
                    "name": "belajar angka 70",
                    "question": "70"
                  },
                  {
                    "answer": "80",
                    "name": "belajar angka 80",
                    "question": "80"
                  },
                  {
                    "answer": "90",
                    "name": "belajar angka 90",
                    "question": "90"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    "hitung": {
      "learnCategories": {
        "learnCourse": [
          {
            "learns": [
              {
                "answer": "2",
                "gifLink": "https://i.makeagif.com/media/8-16-2020/mDO6C4.gif",
                "name": "belajar 1+1"
              },
              {
                "answer": "3",
                "gifLink": "https://i.makeagif.com/media/8-16-2020/mDO6C4.gif",
                "name": "belajar 1+2"
              },
              {
                "answer": "4",
                "gifLink": "https://i.makeagif.com/media/8-16-2020/mDO6C4.gif",
                "name": "belajar 2+2"
              }
            ],
            "name": "Belajar Hitung Dasar"
          }
        ],
        "name": "Belajar Hitung"
      },
      "name": "HITUNG",
      "trainCategories": {
        "name": "Latihan Hitung",
        "trainCourse": [
          {
            "name": "Latihan Hitung Dasar",
            "trainQuestion": [
              {
                "name": "Latihan 1",
                "trains": [
                  {
                    "answer": "A",
                    "name": "belajar huruf A",
                    "question": "A"
                  },
                  {
                    "answer": "B",
                    "name": "belajar huruf B",
                    "question": "B"
                  },
                  {
                    "answer": "C",
                    "name": "belajar huruf C",
                    "question": "C"
                  },
                  {
                    "answer": "D",
                    "name": "belajar huruf D",
                    "question": "D"
                  },
                  {
                    "answer": "E",
                    "name": "belajar huruf E",
                    "question": "E"
                  },
                  {
                    "answer": "F",
                    "name": "belajar huruf F",
                    "question": "F"
                  },
                  {
                    "answer": "G",
                    "name": "belajar huruf G",
                    "question": "G"
                  },
                  {
                    "answer": "H",
                    "name": "belajar huruf H",
                    "question": "H"
                  },
                  {
                    "answer": "I",
                    "name": "belajar huruf I",
                    "question": "I"
                  },
                  {
                    "answer": "J",
                    "name": "belajar huruf J",
                    "question": "J"
                  },
                  {
                    "answer": "K",
                    "name": "belajar huruf K",
                    "question": "K"
                  },
                  {
                    "answer": "L",
                    "name": "belajar huruf L",
                    "question": "L"
                  },
                  {
                    "answer": "M",
                    "name": "belajar huruf M",
                    "question": "M"
                  },
                  {
                    "answer": "N",
                    "name": "belajar huruf N",
                    "question": "N"
                  },
                  {
                    "answer": "O",
                    "name": "belajar huruf O",
                    "question": "O"
                  },
                  {
                    "answer": "P",
                    "name": "belajar huruf P",
                    "question": "P"
                  },
                  {
                    "answer": "Q",
                    "name": "belajar huruf Q",
                    "question": "Q"
                  },
                  {
                    "answer": "R",
                    "name": "belajar huruf R",
                    "question": "R"
                  },
                  {
                    "answer": "S",
                    "name": "belajar huruf S",
                    "question": "S"
                  },
                  {
                    "answer": "T",
                    "name": "belajar huruf T",
                    "question": "T"
                  },
                  {
                    "answer": "U",
                    "name": "belajar huruf U",
                    "question": "U"
                  },
                  {
                    "answer": "V",
                    "name": "belajar huruf V",
                    "question": "V"
                  },
                  {
                    "answer": "W",
                    "name": "belajar huruf W",
                    "question": "W"
                  },
                  {
                    "answer": "X",
                    "name": "belajar huruf X",
                    "question": "X"
                  },
                  {
                    "answer": "Y",
                    "name": "belajar huruf Y",
                    "question": "Y"
                  },
                  {
                    "answer": "Z",
                    "name": "belajar huruf Z",
                    "question": "Z"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    "huruf": {
      "learnCategories": {
        "learnCourse": [
          {
            "learns": [
              {
                "answer": "A",
                "gifLink": "https://i.makeagif.com/media/8-16-2020/mDO6C4.gif",
                "name": "belajar huruf A"
              },
              {
                "answer": "B",
                "gifLink": "https://i.makeagif.com/media/8-16-2020/wFpIjL.gif",
                "name": "belajar huruf B"
              },
              {
                "answer": "C",
                "gifLink": "https://i.makeagif.com/media/8-16-2020/jbWU5c.gif",
                "name": "belajar huruf C"
              },
              {
                "answer": "D",
                "gifLink": "https://i.makeagif.com/media/8-16-2020/NkDVgE.gif",
                "name": "belajar huruf D"
              },
              {
                "answer": "E",
                "gifLink": "https://i.makeagif.com/media/8-16-2020/-YL5Qw.gif",
                "name": "belajar huruf E"
              },
              {
                "answer": "F",
                "gifLink": "https://i.makeagif.com/media/8-16-2020/yW0_Cc.gif",
                "name": "belajar huruf F"
              },
              {
                "answer": "G",
                "gifLink": "https://i.makeagif.com/media/8-16-2020/audR-q.gif",
                "name": "belajar huruf G"
              },
              {
                "answer": "H",
                "gifLink": "https://i.makeagif.com/media/8-16-2020/6x4hvN.gif",
                "name": "belajar huruf H"
              },
              {
                "answer": "I",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/PCZ0Wm.gif",
                "name": "belajar huruf I"
              },
              {
                "answer": "J",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/FPommW.gif",
                "name": "belajar huruf J"
              },
              {
                "answer": "K",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/HLKM3Y.gif",
                "name": "belajar huruf K"
              },
              {
                "answer": "L",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/WTb06j.gif",
                "name": "belajar huruf L"
              },
              {
                "answer": "M",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/o81JLN.gif",
                "name": "belajar huruf M"
              },
              {
                "answer": "N",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/SVOWe6.gif",
                "name": "belajar huruf N"
              },
              {
                "answer": "O",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/L3UmCC.gif",
                "name": "belajar huruf O"
              },
              {
                "answer": "P",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/SMswht.gif",
                "name": "belajar huruf P"
              },
              {
                "answer": "Q",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/sR_V2n.gif",
                "name": "belajar huruf Q"
              },
              {
                "answer": "R",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/Ylojjb.gif",
                "name": "belajar huruf R"
              },
              {
                "answer": "S",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/IQULBS.gif",
                "name": "belajar huruf S"
              },
              {
                "answer": "T",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/XDOuSx.gif",
                "name": "belajar huruf T"
              },
              {
                "answer": "U",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/ywoc9I.gif",
                "name": "belajar huruf U"
              },
              {
                "answer": "V",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/An0JS3.gif",
                "name": "belajar huruf V"
              },
              {
                "answer": "W",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/vfTjNK.gif",
                "name": "belajar huruf W"
              },
              {
                "answer": "X",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/K-eTOA.gif",
                "name": "belajar huruf X"
              },
              {
                "answer": "Y",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/eRVTTQ.gif",
                "name": "belajar huruf Y"
              },
              {
                "answer": "Z",
                "gifLink": "https://i.makeagif.com/media/8-17-2020/XrbiDG.gif",
                "name": "belajar huruf Z"
              }
            ],
            "name": "Belajar Alfabet"
          }
        ],
        "name": "Belajar Huruf"
      },
      "name": "HURUF",
      "trainCategories": {
        "name": "Latihan Huruf",
        "trainCourse": [
          {
            "name": "Latihan Alphabet",
            "trainQuestion": [
              {
                "name": "number one",
                "trains": [
                  {
                    "answer": "A",
                    "name": "belajar huruf A",
                    "question": "A"
                  },
                  {
                    "answer": "B",
                    "name": "belajar huruf B",
                    "question": "B"
                  },
                  {
                    "answer": "C",
                    "name": "belajar huruf C",
                    "question": "C"
                  }
                ]
              }
            ]
          },
          {
            "name": "Latihan Nama Anggota Keluarga",
            "trainQuestion": [
              {
                "name": "number one",
                "trains": [
                  {
                    "answer": "KAKEK",
                    "name": "belajar kata KAKEK",
                    "question": "KAKEK"
                  },
                  {
                    "answer": "NENEK",
                    "name": "belajar kata NENEK",
                    "question": "NENEK"
                  },
                  {
                    "answer": "PAMAN",
                    "name": "belajar kata PAMAN",
                    "question": "PAMAN"
                  },
                  {
                    "answer": "BIBI",
                    "name": "belajar kata BIBI",
                    "question": "BIBI"
                  },
                  {
                    "answer": "IBU",
                    "name": "belajar kata IBU",
                    "question": "IBU"
                  },
                  {
                    "answer": "AYAH",
                    "name": "belajar kata AYAH",
                    "question": "AYAH"
                  },
                  {
                    "answer": "ADIK",
                    "name": "belajar kata ADIK",
                    "question": "ADIK"
                  },
                  {
                    "answer": "OM",
                    "name": "belajar kata OM",
                    "question": "OM"
                  },
                  {
                    "answer": "TANTE",
                    "name": "belajar kata TANTE",
                    "question": "TANTE"
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  });
}