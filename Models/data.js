import Categorie from './categorie';
import Livre from './livre';

export const CATEGORIES = [
  new Categorie('all', 'Tous', '#888888'), // Catégorie "Tous"

  new Categorie('c1', 'historique', '#f5428d'),
  new Categorie('c2', 'policier', '#f54242'),
  new Categorie('c3', 'SF', '#f5a442'),
  new Categorie('c4', 'romance', '#f5d142'),
  // new Categorie('c5', 'Thriller', '#f5d142'),

  // new Categorie('c6', 'Science', '#f5d142'),

  // new Categorie('c7', 'Aventure', '#f5d142'),

  // new Categorie('c8', 'romance', '#f5d142'),

];

export const LIVRES = [
  new Livre(
    'm1',
    ['c2'],
    'Detective conan',
    "Le manga retrace le parcours de Shinichi Kudo, détective lycéen rajeuni à la suite de l'ingestion d'une mystérieuse drogue qui le fait rajeunir au stade d'écolier de 7 ans. Hébergé chez son amie d'enfance Ran et son père Kogoro Mouri, il va devoir, secrètement, chercher à retrouver son corps d'antan et mettre l'Organisation responsable de son état sous les verrous…",
    100,
    'https://upload.wikimedia.org/wikipedia/fr/thumb/0/06/Logo_D%C3%A9tective_Conan.svg/langfr-2880px-Logo_D%C3%A9tective_Conan.svg.png',
    true,
  ),
  new Livre(
    'm2',
    ['c1', 'c2'],
    "Les disparus de Blackmore",
    "Octobre 1925. À Blackmore, une île coupée du monde au large de Guernesey, meurtres et disparitions sèment la terreur. Alors que la police piétine, Lorraine Chapelle, première femme diplômée de l’Institut de criminologie de Paris, est appelée en renfort. Cette cartésienne irréductible va devoir mener l’enquête aux côtés d’Edward Pierce, un Britannique spécialisé dans les sciences occultes qui se présente comme « détective de l’étrange ».",
    1,
    "https://www.xoeditions.com/wp-content/uploads/2023/02/LES-DISPARUS-DE-BLACKMORE-copie-654x1024.jpg",
    false
  ),
  new Livre(
    'm3',
    ['c3'],
    "Metro 2033",
    "Vingt années se sont écoulées depuis l'apocalypse nucléaire qui a ravagé la planète, obligeant les quelques survivants à se mettre à l'abri sous terre pour fuir une surface désormais inhabitable. Réfugiés dans les souterrains du métro de Moscou, ils se sont organisés en micro-sociétés et survivent tant bien que mal aux pénuries, maladies et aux guerres pour la possession des dernières ressources.",
    1,
    "https://images.epagine.fr/213/9782367930213_1_75.jpg",
    false
  ),
  new Livre(
    'm4',
    ['c3'],
    "Dune",
    "Le duc Leto Atréides, chef de la Maison Atréides, règne sur son fief planétaire de Caladan, une planète constituée de jungles et de vastes océans dont il tire sa puissance. Sa concubine officielle, Dame Jessica, est une adepte du Bene Gesserit, une école exclusivement féminine qui poursuit de mystérieuses visées politiques et qui enseigne des capacités non moins étranges.",
    2,
    "https://images.noosfere.org/couv/p/pp5069-1981.jpg",
    false
  ),
  new Livre(
    'm5',
    ['c4'],
    "La rose écarlate",
    "Dans le Périgord, Maud mène une vie paisible avec son père forgeron et ses amis. Mais un soir, son père se fait assassiner par un inconnu venant de Paris, et qui convoitait le carnet de voyage de son père dans l'Empire ottoman ; elle réussit cependant à infliger une balafre au meurtrier. Très vite, elle apprend qu'elle a un grand-père, un noble, qui vit près de la capitale, et décide donc de le rejoindre dans le but de venger son père.",
    19,
    "https://static.wikia.nocookie.net/bestlecture/images/6/63/La_Rose_%C3%A9carlate%2C_tome_1_Je_savais_que_je_te_rencontrerais_de_Patricia_Lyfoung.jpg/revision/latest?cb=20150112131040&path-prefix=fr",
    true
),
];