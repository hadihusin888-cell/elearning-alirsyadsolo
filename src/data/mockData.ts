import { Class, Subject, Teacher, Student, Material, Assignment, Grade } from '../types';

export const INITIAL_CLASSES: Class[] = [
  { id: '7A', name: 'Kelas 7A' },
  { id: '7B', name: 'Kelas 7B' },
  { id: '8A', name: 'Kelas 8A' },
  { id: '8B', name: 'Kelas 8B Putra' },
  { id: '9A', name: 'Kelas 9A' },
  { id: '9B', name: 'Kelas 9B' }
];

export const INITIAL_SUBJECTS: Subject[] = [
  { id: 'PAI', name: 'Pendidikan Agama Islam & Budi Pekerti' },
  { id: 'MTK', name: 'Matematika' },
  { id: 'ING', name: 'Bahasa Inggris' },
  { id: 'IPA', name: 'Ilmu Pengetahuan Alam' },
  { id: 'IND', name: 'Bahasa Indonesia' },
  { id: 'IPS', name: 'Ilmu Pengetahuan Sosial' }
];

export const INITIAL_TEACHERS: Teacher[] = [
  {
    id: '19810201',
    nik: '19810201',
    name: 'Ustadz Ahmad Fauzi, S.Pd.I.',
    password: '19810201',
    subjectsTaught: [
      { subjectId: 'PAI', classIds: ['7A', '7B', '8A'] }
    ]
  },
  {
    id: '19830512',
    nik: '19830512',
    name: 'Ustadzah Fatimah Azzahra, M.Pd.',
    password: '19830512',
    subjectsTaught: [
      { subjectId: 'MTK', classIds: ['7A', '7B'] },
      { subjectId: 'ING', classIds: ['7A'] }
    ]
  },
  {
    id: '19870915',
    nik: '19870915',
    name: 'Ustadz Budi Utomo, S.Si.',
    password: '19870915',
    subjectsTaught: [
      { subjectId: 'IPA', classIds: ['8A', '8B'] }
    ]
  }
];

export const INITIAL_STUDENTS: Student[] = [
  {
    id: '202401',
    nis: '202401',
    name: 'Muhammad Ali Ba\'abduh',
    classId: '7A',
    password: '202401'
  },
  {
    id: '202402',
    nis: '202402',
    name: 'Siti Aminah Al-Habsyi',
    classId: '7A',
    password: '202402'
  },
  {
    id: '202403',
    nis: '202403',
    name: 'Rizky Ramadhan Mulya',
    classId: '7B',
    password: '202403'
  },
  {
    id: '202404',
    nis: '202404',
    name: 'Aisyah Humaira',
    classId: '8A',
    password: '202404'
  },
  {
    id: '202405',
    nis: '202405',
    name: 'Yusuf Al-Fatih Al-Anshori',
    classId: '8B',
    password: '202405'
  },
  {
    id: '4789',
    nis: '4789',
    name: 'Ahmad Fathir Rabbani',
    classId: '7A',
    password: '4789'
  }
];

export const INITIAL_MATERIALS: Material[] = [
  {
    id: 'mat_1',
    title: 'Adab Menuntut Ilmu dan Menghormati Guru',
    description: 'Ringkasan adab fundamental bagi penuntut ilmu berdasarkan kitab Ta\'lim Muta\'allim.',
    link: 'https://canva.com/design/example-adab',
    classId: '7A',
    subjectId: 'PAI',
    teacherId: '19810201',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() // 3 days ago
  },
  {
    id: 'mat_2',
    title: 'Konsep Dasar Operasi Hitung Aljabar',
    description: 'Materi pengenalan variabel, koefisien, dan konstanta serta penyederhanaan bentuk aljabar.',
    link: 'https://docs.google.com/document/d/example-aljabar',
    classId: '7A',
    subjectId: 'MTK',
    teacherId: '19830512',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() // 2 days ago
  },
  {
    id: 'mat_3',
    title: 'Sistem Pencernaan Manusia & Nutrisi Makanan',
    description: 'Pelajaran interaktif tentang organ pencernaan serta jenis zat makanan yang dibutuhkan tubuh.',
    link: 'https://canva.com/design/example-digestive',
    classId: '8A',
    subjectId: 'IPA',
    teacherId: '19870915',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString() // 1 day ago
  },
  {
    id: 'mat_4',
    title: 'Greetings & Introduction in English Expression',
    description: 'Praktik percakapan menyapa dan memperkenalkan diri dalam Bahasa Inggris formal dan kasual.',
    link: 'https://docs.google.com/presentation/d/example-greetings',
    classId: '7A',
    subjectId: 'ING',
    teacherId: '19830512',
    createdAt: new Date().toISOString() // today
  }
];

export const INITIAL_ASSIGNMENTS: Assignment[] = [
  {
    id: 'asg_1',
    title: 'Hafalan 5 Ayat Pertama Surat Al-Kahfi',
    description: 'Setor hafalan dalam bentuk video/audio link atau isi form dengan link rekaman suara kalian.',
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 5 days from now
    link: 'https://forms.google.com/example-kahfi',
    classId: '7A, 7B, 8A',
    subjectId: 'PAI',
    teacherId: '19810201',
    formEnabled: true,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'asg_2',
    title: 'Kuis Aljabar Sederhana (Quizizz)',
    description: 'Kerjakan kuis Aljabar berikut untuk melatih pemahaman persamaan linear satu variabel.',
    dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 2 days from now
    link: 'https://quizizz.com/join?gc=123456',
    classId: '7A, 7B',
    subjectId: 'MTK',
    teacherId: '19830512',
    formEnabled: false,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'asg_3',
    title: 'Praktikum Mandiri Fotosintesis (Uji Sachs)',
    description: 'Ikuti instruksi praktikum di rumah menggunakan daun, alkohol, dan iodin. Laporkan foto hasil uji.',
    dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    link: 'https://docs.google.com/document/d/example-fotosintesis',
    classId: '8A, 8B',
    subjectId: 'IPA',
    teacherId: '19870915',
    formEnabled: true,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'asg_4',
    title: 'Vocabulary & Self Introduction Practice',
    description: 'Tuliskan rekaman perkenalan diri dan kosa kata Bahasa Inggris sesuai topik unit 1.',
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    link: 'https://docs.google.com/document/d/example-intro',
    classId: '7A',
    subjectId: 'ING',
    teacherId: '19830512',
    formEnabled: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'asg_5',
    title: 'Laporan Pengamatan Ekosistem dan Rantai Makanan',
    description: 'Buatlah skema jaring-jaring makanan di lingkungan sekitar dan unggah file laporannya.',
    dueDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    link: 'https://docs.google.com/document/d/example-ekosistem',
    classId: '8B',
    subjectId: 'IPA',
    teacherId: '19870915',
    formEnabled: true,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  }
];

export const INITIAL_GRADES: Grade[] = [
  {
    id: 'grad_1',
    studentId: '202401', // Muhammad Ali (7A)
    assignmentId: 'asg_1', // Hafalan Kahfi
    subjectId: 'PAI',
    classId: '7A',
    grade: 90,
    feedback: 'Makhrajul huruf sudah sangat bagus, terus pertahankan kelancarannya!',
    submissionLink: 'https://drive.google.com/file/d/rec-ali',
    status: 'GRADED',
    submittedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    gradedAt: new Date().toISOString()
  },
  {
    id: 'grad_2',
    studentId: '202402', // Siti Aminah (7A)
    assignmentId: 'asg_1', // Hafalan Kahfi
    subjectId: 'PAI',
    classId: '7A',
    submissionLink: 'https://drive.google.com/file/d/rec-siti',
    status: 'SUBMITTED',
    submittedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString() // 12 hours ago
  },
  {
    id: 'grad_3',
    studentId: '202401', // Muhammad Ali (7A)
    assignmentId: 'asg_2', // Kuis Aljabar MTK
    subjectId: 'MTK',
    classId: '7A',
    submissionLink: 'https://quizizz.com/join?gc=123456&player=ali',
    status: 'SUBMITTED',
    submittedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'grad_4',
    studentId: '202402', // Siti Aminah (7A)
    assignmentId: 'asg_2', // Kuis Aljabar MTK
    subjectId: 'MTK',
    classId: '7A',
    grade: 95,
    feedback: 'Penyelesaian aljabar sangat teliti dan runtut. Bagus sekali!',
    submissionLink: 'https://quizizz.com/join?gc=123456&player=siti',
    status: 'GRADED',
    submittedAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
    gradedAt: new Date().toISOString()
  },
  {
    id: 'grad_5',
    studentId: '202405', // Yusuf Al-Fatih (8B)
    assignmentId: 'asg_3', // Praktikum IPA Fotosintesis
    subjectId: 'IPA',
    classId: '8B',
    submissionLink: 'https://drive.google.com/file/d/praktikum-fotosintesis-yusuf',
    status: 'SUBMITTED',
    submittedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'grad_6',
    studentId: '202405', // Yusuf Al-Fatih (8B)
    assignmentId: 'asg_5', // Ekosistem IPA
    subjectId: 'IPA',
    classId: '8B',
    grade: 88,
    feedback: 'Analisis rantai makanan lengkap dan gambar ilustrasi rapi.',
    submissionLink: 'https://docs.google.com/document/d/laporan-yusuf-8b',
    status: 'GRADED',
    submittedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    gradedAt: new Date().toISOString()
  },
  {
    id: 'grad_7',
    studentId: '202404', // Aisyah Humaira (8A)
    assignmentId: 'asg_3', // Praktikum IPA
    subjectId: 'IPA',
    classId: '8A',
    grade: 92,
    feedback: 'Hasil uji daun sangat jelas dan laporan disajikan sistematis.',
    submissionLink: 'https://drive.google.com/file/d/praktikum-aisyah',
    status: 'GRADED',
    submittedAt: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
    gradedAt: new Date().toISOString()
  },
  {
    id: 'grad_8',
    studentId: '202403', // Rizky Ramadhan (7B)
    assignmentId: 'asg_1', // Hafalan Kahfi
    subjectId: 'PAI',
    classId: '7B',
    submissionLink: 'https://drive.google.com/file/d/rec-rizky',
    status: 'SUBMITTED',
    submittedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'grad_9',
    studentId: '4789', // Ahmad Fathir (7A)
    assignmentId: 'asg_2', // Kuis Aljabar MTK
    subjectId: 'MTK',
    classId: '7A',
    submissionLink: 'https://quizizz.com/join?gc=123456&player=fathir4789',
    status: 'SUBMITTED',
    submittedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'grad_10',
    studentId: '4789', // Ahmad Fathir (7A)
    assignmentId: 'asg_1', // Hafalan Kahfi
    subjectId: 'PAI',
    classId: '7A',
    submissionLink: 'https://drive.google.com/file/d/rec-fathir-4789',
    status: 'SUBMITTED',
    submittedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString()
  }
];
