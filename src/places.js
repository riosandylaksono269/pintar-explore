import planetariumPhoto from './assets/planetarium.jpg'
import tamanAirPhoto from './assets/taman-air.jpg'
import bahariPhoto from './assets/wisata-bahari.jpg'
import lukisKaosImg from './assets/lukis-kaos.jpg'
import membatikImg from './assets/membatik.jpg'
import rumahGerabahImg from './assets/rumah-gerabah.jpg'
import tamanMenariPhoto from './assets/taman-menari.jpg'
import lalin1 from './assets/lalin-1.jpg'
import lalin2 from './assets/lalin-2.jpg'
import lalin3 from './assets/lalin-3.jpg'
import paudBarat1 from './assets/paud-barat-1.jpg'
import paudBarat2 from './assets/paud-barat-2.jpg'
import paudBarat3 from './assets/paud-barat-3.jpg'
import paudBarat4 from './assets/paud-barat-4.jpg'
import paudBarat5 from './assets/paud-barat-5.jpg'
import paudBarat6 from './assets/paud-barat-6.jpg'
import sampahOrganik from './assets/sampah-organik.jpg'
import perpus1 from './assets/perpus-1.jpg'
import perpus2 from './assets/perpus-2.jpg'
import perpus3 from './assets/perpus-3.jpg'
import perpus4 from './assets/perpus-4.jpg'
import paudTimur1 from './assets/paud-timur-1.jpg'
import paudTimur2 from './assets/paud-timur-2.jpg'
import paudTimur3 from './assets/paud-timur-3.jpg'
import paudTimur4 from './assets/paud-timur-4.jpg'
import paudTimur5 from './assets/paud-timur-5.jpg'
import paudTimur6 from './assets/paud-timur-6.jpg'
import paudTimur7 from './assets/paud-timur-7.jpg'
import oval1 from './assets/gedung-oval-1.jpg'
import oval2 from './assets/gedung-oval-2.jpg'
import oval3 from './assets/gedung-oval-3.jpg'
import oval4 from './assets/gedung-oval-4.jpg'
import oval5 from './assets/gedung-oval-5.jpeg'
import oval6 from './assets/gedung-oval-6.jpeg'
import oval7 from './assets/gedung-oval-7.jpg'
import oval8 from './assets/gedung-oval-8.jpg'
import oval9 from './assets/gedung-oval-9.jpg'
import kotak1 from './assets/gedung-kotak-1.jpg'
import kotak2 from './assets/gedung-kotak-2.jpeg'
import kotak3 from './assets/gedung-kotak-3.jpg'
import kotak4 from './assets/gedung-kotak-4.jpg'
import kotak5 from './assets/gedung-kotak-5.jpg'
import kotak6 from './assets/gedung-kotak-6.jpg'
import kotak7 from './assets/gedung-kotak-7.jpeg'
import kotak8 from './assets/gedung-kotak-8.jpg'
import kotak9 from './assets/gedung-kotak-9.jpg'
// ukuran peta asli (dipakai sebagai koordinat area klik)
export const MAP_W = 2048
export const MAP_H = 1258

// poly = titik-titik [x, y] yang membentuk area klik di atas peta
export const PLACES = [
  {
    "id": "p1",
    "num": 1,
    "label": "Kampung Kerajinan",
    "icon": "🧶",
    "fill": "#ffe3bf",
    "stroke": "#3fbf7f",
    "desc": "Tempat mengenal dan mencoba kerajinan tangan bareng teman-teman.",
    "poly": [
      [
        218,
        585
      ],
      [
        335,
        572
      ],
      [
        355,
        690
      ],
      [
        300,
        765
      ],
      [
        228,
        742
      ]
    ]
  },
  {
    "id": "p2",
    "num": 2,
    "label": "Perpustakaan dan Perfilman",
    "icon": "📚",
    "fill": "#d6f5e3",
    "stroke": "#3fbf7f",
    "desc": "Sudut membaca buku dan menonton film edukasi yang seru.",
    "poly": [
      [
        335,
        290
      ],
      [
        516,
        290
      ],
      [
        500,
        330
      ],
      [
        462,
        385
      ],
      [
        297,
        392
      ],
      [
        315,
        330
      ]
    ]
  },
  {
    "id": "p3",
    "num": 3,
    "label": "Gedung Oval",
    "icon": "🏛️",
    "fill": "#fff3c4",
    "stroke": "#3fbf7f",
    "desc": "Gedung berbentuk oval yang jadi salah satu ikon kawasan Taman Pintar.",
    "poly": [
      [
        505,
        330
      ],
      [
        570,
        160
      ],
      [
        700,
        112
      ],
      [
        828,
        150
      ],
      [
        830,
        330
      ],
      [
        785,
        480
      ],
      [
        520,
        470
      ]
    ]
  },
  {
    "id": "p4",
    "num": 4,
    "label": "Taman Air",
    "icon": "⛲",
    "fill": "#d6eefa",
    "stroke": "#3fbf7f",
    "desc": "Area taman dengan permainan air untuk bermain sambil belajar.",
    "poly": [
      [
        638,
        522
      ],
      [
        745,
        568
      ],
      [
        742,
        630
      ],
      [
        660,
        770
      ],
      [
        560,
        845
      ],
      [
        548,
        690
      ],
      [
        552,
        585
      ]
    ]
  },
  {
    "id": "p5",
    "num": 5,
    "label": "Gedung Kotak",
    "icon": "🧪",
    "fill": "#e6e0ff",
    "stroke": "#3fbf7f",
    "desc": "Gedung utama berbentuk kotak, tempat berbagai pameran sains dan teknologi.",
    "poly": [
      [
        865,
        95
      ],
      [
        880,
        55
      ],
      [
        1490,
        20
      ],
      [
        1580,
        160
      ],
      [
        1640,
        260
      ],
      [
        1620,
        375
      ],
      [
        1345,
        385
      ],
      [
        855,
        415
      ],
      [
        850,
        290
      ]
    ]
  },
  {
    "id": "p6",
    "num": 6,
    "label": "Area Food Court",
    "icon": "🍜",
    "fill": "#ffe0ec",
    "stroke": "#3fbf7f",
    "desc": "Area makan dan istirahat untuk mengisi tenaga setelah berkeliling.",
    "poly": [
      [
        1345,
        385
      ],
      [
        1630,
        375
      ],
      [
        1795,
        460
      ],
      [
        1800,
        520
      ],
      [
        1560,
        545
      ],
      [
        1340,
        470
      ]
    ]
  },
  {
    "id": "p7",
    "num": 7,
    "label": "Wahana Bahari",
    "icon": "⚓",
    "fill": "#d6eefa",
    "stroke": "#3fbf7f",
    "desc": "Wahana air bertema bahari untuk bermain dan mengenal dunia laut.",
    "poly": [
      [
        1000,
        590
      ],
      [
        1045,
        545
      ],
      [
        1095,
        525
      ],
      [
        1135,
        560
      ],
      [
        1140,
        620
      ],
      [
        1110,
        660
      ],
      [
        1035,
        668
      ],
      [
        1005,
        640
      ]
    ]
  },
  {
    "id": "p8",
    "num": 8,
    "label": "Taman Air Menari",
    "icon": "💦",
    "fill": "#d6f5e3",
    "stroke": "#3fbf7f",
    "desc": "Air mancur menari yang bergerak seru, asyik untuk dilihat bersama.",
    "poly": [
      [
        1195,
        672
      ],
      [
        1210,
        630
      ],
      [
        1250,
        607
      ],
      [
        1325,
        610
      ],
      [
        1375,
        640
      ],
      [
        1385,
        690
      ],
      [
        1350,
        730
      ],
      [
        1290,
        745
      ],
      [
        1230,
        735
      ],
      [
        1200,
        705
      ]
    ]
  },
  {
    "id": "p9",
    "num": 9,
    "label": "PAUD Timur",
    "icon": "🧒",
    "fill": "#ffe3bf",
    "stroke": "#3fbf7f",
    "desc": "Ruang belajar dan bermain untuk anak usia dini di sisi timur.",
    "poly": [
      [
        1410,
        790
      ],
      [
        1490,
        790
      ],
      [
        1480,
        700
      ],
      [
        1530,
        680
      ],
      [
        1590,
        690
      ],
      [
        1630,
        780
      ],
      [
        1780,
        860
      ],
      [
        1788,
        935
      ],
      [
        1725,
        1000
      ],
      [
        1560,
        1010
      ],
      [
        1520,
        985
      ],
      [
        1450,
        945
      ],
      [
        1405,
        900
      ]
    ]
  },
  {
    "id": "p10",
    "num": 10,
    "label": "Planetarium",
    "icon": "🔭",
    "fill": "#e6e0ff",
    "stroke": "#3fbf7f",
    "desc": "Kubah planetarium untuk menjelajahi bintang dan planet.",
    "poly": [
      [
        1170,
        790
      ],
      [
        1230,
        775
      ],
      [
        1300,
        765
      ],
      [
        1370,
        790
      ],
      [
        1397,
        860
      ],
      [
        1380,
        930
      ],
      [
        1300,
        975
      ],
      [
        1230,
        960
      ],
      [
        1190,
        910
      ]
    ]
  },
  {
    "id": "p11",
    "num": 11,
    "label": "PAUD Barat",
    "icon": "🧸",
    "fill": "#fff3c4",
    "stroke": "#3fbf7f",
    "desc": "Ruang belajar dan bermain untuk anak usia dini di sisi barat.",
    "poly": [
      [
        850,
        712
      ],
      [
        1000,
        692
      ],
      [
        1085,
        690
      ],
      [
        1122,
        770
      ],
      [
        1115,
        930
      ],
      [
        1090,
        960
      ],
      [
        1000,
        950
      ],
      [
        850,
        920
      ]
    ]
  },
  {
    "id": "p12",
    "num": 12,
    "label": "Zona Keselamatan Lalu Lintas",
    "icon": "🚦",
    "fill": "#ffe0ec",
    "stroke": "#3fbf7f",
    "desc": "Wahana belajar rambu dan aturan lalu lintas lewat lintasan mini.",
    "poly": [
      [
        820,
        1100
      ],
      [
        880,
        1035
      ],
      [
        980,
        1010
      ],
      [
        1060,
        1030
      ],
      [
        1075,
        1090
      ],
      [
        1040,
        1160
      ],
      [
        900,
        1185
      ],
      [
        835,
        1140
      ]
    ]
  },
  {
    "id": "p13",
    "num": 13,
    "label": "Toilet",
    "icon": "🚻",
    "fill": "#d6eefa",
    "stroke": "#3fbf7f",
    "desc": "Fasilitas toilet untuk kenyamanan pengunjung selama berkeliling Taman Pintar.",
    "poly": [
      [
        330,
        375
      ],
      [
        455,
        375
      ],
      [
        462,
        440
      ],
      [
        432,
        482
      ],
      [
        330,
        485
      ],
      [
        272,
        525
      ],
      [
        268,
        425
      ],
      [
        305,
        430
      ]
    ]
  },
  {
    "id": "p14",
    "num": 14,
    "label": "Zona Pengolahan Sampah",
    "icon": "♻️",
    "fill": "#d6f5e3",
    "stroke": "#3fbf7f",
    "desc": "Zona belajar mengolah sampah agar lingkungan tetap bersih.",
    "poly": [
      [
        372,
        208
      ],
      [
        522,
        212
      ],
      [
        514,
        292
      ],
      [
        335,
        292
      ],
      [
        355,
        250
      ]
    ]
  }
]

// foto & keterangan resmi (tambahkan bangunan lain di sini)
const byId = (id) => PLACES.find((p) => p.id === id)
Object.assign(byId('p8'), { desc: "Taman Air Menari adalah halaman terbuka dengan lantai bergaris biru, tosca, dan putih tempat air mancur menari mengikuti irama. Tulisan besar warna-warni di tepi kolam menjadi tanda masuknya, sementara tiang-tiang biru dan atap pelindung berdiri di sekelilingnya, dinaungi pepohonan rindang. Di sini anak-anak bisa berlari, melompat, dan bermain percikan air sambil bersenang-senang bersama teman.", photo: tamanMenariPhoto })
Object.assign(byId('p12'), {
  desc: "Wahana Lalu Lintas adalah jalan raya mini yang teduh dan aman untuk belajar tertib berlalu lintas. Di sini ada zebra cross, marka jalan, lampu lalu lintas, dan berbagai rambu larangan serta peringatan yang tertata di papan berwarna kuning. Ada juga pos jaga bergaris biru-putih, taman kecil di tengah jalan, dan pepohonan rindang yang membuat suasananya sejuk. Anak-anak diajak mengenal arti lampu, rambu, dan cara menyeberang dengan benar sambil bermain.",
  gallery: [lalin1, lalin2, lalin3],
})
Object.assign(byId('p11'), {
  desc: "PAUD Barat adalah ruang belajar dan bermain untuk anak usia dini, sekitar 4 sampai 6 tahun. Di dalamnya ada dinding mural langit, awan, dan pelangi, rumah balok raksasa dengan meja dan kursi mungil untuk menyusun mainan, serta poster tentang makanan bergizi seperti lauk, sayuran, dan vitamin. Ada pojok baca dengan rak buku dan pesawat mainan, ruang bermain peran seperti pos pemadam kebakaran dan rumah sakit, juga dinding warna-warni yang ceria. Semuanya dibuat agar anak senang mencoba, membangun, dan belajar sambil bermain.",
  gallery: [paudBarat1, paudBarat2, paudBarat3, paudBarat4, paudBarat5, paudBarat6],
})
Object.assign(byId('p14'), {
  desc: "Zona Pengolahan Sampah Organik adalah lorong tempat belajar bahwa sampah bisa diolah menjadi sesuatu yang berguna. Di sisi kanan, pagar jaring besi dipenuhi pot gantung dari botol plastik bekas berwarna merah, oranye, biru, dan hijau, lengkap dengan tanaman hijau yang merambat. Di sisi kiri ada tong-tong biru dan wadah pemilahan sampah. Dari sini anak-anak mengenal cara memilah sampah, memakai kembali barang bekas, dan ikut menjaga lingkungan tetap bersih dan asri.",
  gallery: [sampahOrganik],
})
Object.assign(byId('p2'), {
  desc: "Perpustakaan dan Perfilman adalah sudut tenang untuk membaca buku sekaligus menonton film edukasi. Di bagian depan ada Science Theater, tempat pemutaran film ilmu pengetahuan, berdampingan dengan perpustakaan yang berisi rak-rak buku warna-warni, meja baca panjang, dan kursi berwarna cerah. Ada meja layanan dengan maskot burung hantu dan globe, serta panggung boneka untuk bercerita. Anak-anak diajak mencintai buku, bertanya, dan belajar hal baru dengan suasana yang nyaman.",
  gallery: [perpus1, perpus2, perpus3, perpus4],
})
Object.assign(byId('p9'), {
  desc: "PAUD Timur adalah ruang belajar dan bermain khusus anak usia dini, dengan dinding penuh mural warna-warni dan langit-langit berbentuk awan. Di dalamnya ada panggung kecil untuk tampil, sudut musik dengan angklung, gong, dan drum, area bermain perosotan dengan lantai empuk, serta dinding peta makanan khas Indonesia dan mural dunia pembangunan. Semua dirancang supaya anak-anak bebas bergerak, bernyanyi, dan belajar sambil bermain.",
  gallery: [paudTimur2, paudTimur1, paudTimur3, paudTimur4, paudTimur5, paudTimur6, paudTimur7],
})
Object.assign(byId('p10'), { desc: "Planetarium Taman Pintar, memiliki keistimewaan yaitu penggunaan proyektor digital untuk memperagakan benda-benda langit, dalam setiap pertunjukan menampilkan simulasi suasana langit kota Yogyakarta pada malam hari beserta berbagai macam benda angkasa dan susunan bintang yang tampak pada saat itu.\n\nPertunjukan dilanjutkan dengan pemutaran film tentang perjalanan manusia di Bulan. Semua diproyeksikan pada media kubah berbentuk setengah lingkaran, dilengkapi dengan kursi penonton bersandaran yang bisa direbahkan, sehingga seluruh pertunjukan bisa dinikmati dengan nyaman.", photo: planetariumPhoto })
Object.assign(byId('p4'), { desc: "Taman Air menghadirkan air mancur yang memancar melengkung di antara tiang-tiang logam mengilap, dengan kolam bulat bertepi batu hitam di bagian tengahnya. Suasananya sejuk dan asri karena dikelilingi tanaman hijau dan pepohonan, cocok untuk berhenti sejenak, menikmati gemericik air, dan berfoto bersama sebelum melanjutkan keliling Taman Pintar.", photo: tamanAirPhoto })
Object.assign(byId('p7'), { desc: "Wahana Bahari menghadirkan permainan di atas air, dengan dermaga kecil beratap dan perahu-perahu mungil berwarna cerah, merah, kuning, dan hijau, yang siap mengajak pengunjung berkeliling kolam. Suasananya teduh karena dikelilingi pepohonan rindang, cocok untuk bermain air sambil mengenal dunia bahari.", photo: bahariPhoto })

// kegiatan di dalam satu ruang (tampil sebagai grid, klik untuk lihat penjelasan)
byId('p1').activities = [
  { id: "kaos", name: "Lukis Kaos", icon: "👕", photo: lukisKaosImg,
    desc: "Tempat berkreasi melukis di atas kaos dengan warna dan gambar pilihan sendiri. Cocok untuk menyalurkan imajinasi sambil bermain warna." },
  { id: "batik", name: "Membatik", icon: "🎨", photo: membatikImg,
    desc: "Tempat mengenal batik, warisan budaya Indonesia, sambil mencoba membuat motif batik sendiri dengan cara yang menyenangkan." },
  { id: "gerabah", name: "Rumah Gerabah", icon: "🏺", photo: rumahGerabahImg,
    desc: "Tempat mengenal gerabah, kerajinan dari tanah liat, dan mencoba membentuk tanah liat menjadi benda yang cantik." },
]
//gedung oval
byId('p3').activities = [
  {
    id: 'oval-1',
    name: 'Zona Listrik',
    icon: '⚡',
    photo: oval1,
    desc: 'Zona Listrik terletak di Lantai 2 Gedung Oval Taman Pintar. Zona ini berisi berbagai alat peraga kelistrikan yang dapat disentuh dan dimainkan seperti generator pedal, generator van de graaf, halilintar, dan sebagainya. Semua alat peraga dilengkapi dengan penjelasan dan cara memainkannya.'
  },

 {
    id: 'oval-2',
    name: 'Zona Jembatan Sains',
    icon: '🌉',
    photo: oval2,
    desc: 'Zona Jembatan Sains terletak di Lantai 2 Gedung Oval yang merupakan penghubung antara Gedung Oval dan Gedung Kotak. Zona ini menyediakan berbagai peraga sains tentang Matematika dan Ilmu Pengetahuan Alam (MIPA) seperti Penjumlahan Putar, Slot Hiperbolik, Kesetimbangan Bola, Lintasan Cycloid dan masih banyak lagi. Alat-alat peraga ini dilengkapi dengan penjelasan dan cara memainkannya.'
  },
  {
    id: 'oval-3',
    name: 'Zona Biologi',
    icon: '🧬',
    photo: oval3,
    desc: 'Zona Biologi terletak di Lantai 2 Gedung Oval Taman Pintar. Sesuai dengan namanya, zona ini berisi berbagai alat peraga ilmu biologi yang dapat disentuh dan dimainkan seperti meja anatomi, aquarium digital, ICT metamorfosis, dan sebagainya. Semua alat peraga dilengkapi dengan penjelasan dan cara memainkannya.'
  },
   {
    id: 'oval-4',
    name: 'Zona Fisika',
    icon: '🔬',
    photo: oval4,
    desc: 'Zona Fisika terletak di Lantai 2 Gedung Oval Taman Pintar. Sesuai dengan namanya, zona ini berisi berbagai alat peraga ilmu fisika yang dapat disentuh dan dimainkan seperti paku ajaib, cermin silindris, gaya tak tampak, dan sebagainya. Semua alat peraga dilengkapi dengan penjelasan dan cara memainkannya. '
  },
  {
    id: 'oval-5',
    name: 'Zona Fosil',
    icon: '🦖',
    photo: oval5,
    desc: 'Zona Fosil terletak di Lantai 1 Gedung Oval Taman Pintar. Di dalam zona, saat ini terdapat 2 alat peraga dinosaurus yaitu Brachiosaurus setinggi 5 meter dan Triceratops. Dengan teknologi robotik, alat peraga ini dapat bergerak pada leher, kepala, dan ekor sembari mulut membuka dan menutup serta mengeluarkan suara. Rangkaian gerakan ini secara otomatis akan berulang. '
  },
  {
    id: 'oval-6',
    name: 'Zona Paleozoic',
    icon: '🦕',
    photo: oval6,
    desc: 'Zona Paleozoic terletak di area penyambutan lantai 1 Gedung Oval Taman Pintar Yogyakarta. Zona ini menggambarkan Periode Paleozoikum, yaitu era geologi yang berlangsung sekitar 541 hingga 252 juta tahun yang lalu, ditandai dengan munculnya kehidupan laut yang kompleks dan diversifikasi awal tumbuhan serta hewan darat'
  },
  {
    id: 'oval-7',
    name: 'Zona Cuaca, Iklim & Gempa Bumi',
    icon: '🌪️',
    photo: oval7,
    desc: 'Zona Cuaca, Iklim dan Gempa Bumi, merupakan Zona baru yang hadir diTaman Pintar Yogyakarta, didalam Zona ini terdapat Simulator gempa yang sudah terkomputerisasi sehingga dapat menghadirkan guncangan gempa bumi dengan tingkatan skala menyerupai aslinya. Simulasi menggunakan 10 data gempa bumi yang terjadi di Indonesia, salah satunya gempa Yogya 27 Mei 2006. Selain itu, di Zona cuaca, iklim dan gempa bumi juga terdapat desiminasi informasi gempa bumi dan tsunami, ICT Pembelajaran Cuaca, ICT Pembelajaran Iklim, ICT Pembelajaran Gempa Bumi serta ICT informasi online BMKG yang dapat memberikan informasi mengenai kondisi cuaca, iklim dan data gempa bumi secara real time kepada pengunjung.'
  },
  {
    id: 'oval-8',
    name: 'Akuarium Taman Pintar',
    icon: '🐠',
    photo: oval8,
    desc: 'Aquarium air tawar adalah zona pertama di Gedung Oval. Aquarium dibangun berbentuk setengah lingkaran sehingga pengunjung Taman Pintar dapat berjalan di lorong Aquarium dan merasakan sensasi khusus karena dikelilingi oleh ikan-ikan air tawar baik disamping maupun di atasnya.'
  },
  {
    id: 'oval-9',
    name: 'Zona Tata Surya',
    icon: ' 🪐',
    photo: oval9,
    desc: 'Zona Tata Surya adalah tempat dimana para pengunjung dapat melihat dan belajar tentang tata surya. Display tentang planet dan semesta tertempel pada zona yang terletak di lantai 2 ini. Zona ini juga telah dilengkapi dengan ICT sehingga pengunjung dapat “berpetualang” ke sebuah planet dalam sistem tata surya dan menggali pengetahuan tentang planet yang dikunjungi.'
  },
  
]

//gedung kotak
byId('p5').activities = [
  {
    id: 'kotak-1',
    name: 'Zona Teknologi Populer',
    icon: '🖥️',
    photo: kotak1,
    desc: 'Zona Listrik terletak di Lantai 2 Gedung Oval Taman Pintar. Zona ini berisi berbagai alat peraga kelistrikan yang dapat disentuh dan dimainkan seperti generator pedal, generator van de graaf, halilintar, dan sebagainya. Semua alat peraga dilengkapi dengan penjelasan dan cara memainkannya.'
  },
  {
    id: 'kotak-2',
    name: 'Zona kebaikan air',
    icon: '💧',
    photo: kotak2,
    desc: 'Zona Listrik terletak di Lantai 2 Gedung Oval Taman Pintar. Zona ini berisi berbagai alat peraga kelistrikan yang dapat disentuh dan dimainkan seperti generator pedal, generator van de graaf, halilintar, dan sebagainya. Semua alat peraga dilengkapi dengan penjelasan dan cara memainkannya.'
  },
   {
    id: 'kotak-3',
    name: 'Lorong Ilusi',
    icon: '',
    photo: kotak3,
    desc: 'Zona Listrik terletak di Lantai 2 Gedung Oval Taman Pintar. Zona ini berisi berbagai alat peraga kelistrikan yang dapat disentuh dan dimainkan seperti generator pedal, generator van de graaf, halilintar, dan sebagainya. Semua alat peraga dilengkapi dengan penjelasan dan cara memainkannya.'
  },
   {
    id: 'kotak-4',
    name: 'Zona Dino Adventure dan Teater 4D',
    icon: '🦖',
    photo: kotak4,
    desc: 'Zona Listrik terletak di Lantai 2 Gedung Oval Taman Pintar. Zona ini berisi berbagai alat peraga kelistrikan yang dapat disentuh dan dimainkan seperti generator pedal, generator van de graaf, halilintar, dan sebagainya. Semua alat peraga dilengkapi dengan penjelasan dan cara memainkannya.'
  },
  {
    id: 'kotak-5',
    name: 'Zona Go Nature Go Carton',
    icon: '🌱',
    photo: kotak5,
    desc: 'Zona Listrik terletak di Lantai 2 Gedung Oval Taman Pintar. Zona ini berisi berbagai alat peraga kelistrikan yang dapat disentuh dan dimainkan seperti generator pedal, generator van de graaf, halilintar, dan sebagainya. Semua alat peraga dilengkapi dengan penjelasan dan cara memainkannya.'
  },
   {
    id: 'kotak-6',
    name: 'Zona Anti Narkoba',
    icon: '🚫',
    photo: kotak6,
    desc: 'Zona Listrik terletak di Lantai 2 Gedung Oval Taman Pintar. Zona ini berisi berbagai alat peraga kelistrikan yang dapat disentuh dan dimainkan seperti generator pedal, generator van de graaf, halilintar, dan sebagainya. Semua alat peraga dilengkapi dengan penjelasan dan cara memainkannya.'
  },
  {
    id: 'kotak-7',
    name: 'Zona Metalurgi Nusantara',
    icon: '⚒️',
    photo: kotak7,
    desc: 'Zona Listrik terletak di Lantai 2 Gedung Oval Taman Pintar. Zona ini berisi berbagai alat peraga kelistrikan yang dapat disentuh dan dimainkan seperti generator pedal, generator van de graaf, halilintar, dan sebagainya. Semua alat peraga dilengkapi dengan penjelasan dan cara memainkannya.'
  },
  {
    id: 'kotak-8',
    name: 'Zona Memorabilla',
    icon: '🖼️',
    photo: kotak8,
    desc: 'Zona Memorabilia merupakan zona edukasi di Taman Pintar Yogyakarta yang mengajak pengunjung mengenal sejarah dan tokoh-tokoh penting Indonesia. Di zona ini, pengunjung dapat mempelajari sejarah Kesultanan Yogyakarta, tokoh pendidikan nasional, serta Presiden Republik Indonesia melalui berbagai koleksi bersejarah yang menarik dan edukatif.'
  },
   {
    id: 'kotak-9',
    name: 'Zona Indonesia',
    icon: '',
    photo: kotak9,
    desc: 'Zona Teknologi dan Inovasi merupakan zona yang menampilkan berbagai inovasi teknologi terkini yang dapat diinteraksi oleh pengunjung. Di zona ini, pengunjung dapat belajar tentang robotika, pemrograman, dan berbagai teknologi lainnya.'
  },
]