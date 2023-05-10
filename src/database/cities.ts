import Image from '../assets/img';

export interface City {
  id: number;
  img: string;
  title: string;
  summary: string;
  location: string;
}

export const cities: City[] = [
  {
    id: 0,
    img: Image.img1,
    title: 'O Python do vovô não sobe mais',
    summary: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    location: 'São Paulo - SP',
  },
  {
    id: 1,
    img: Image.img2,
    title: ' Todo mundo null',
    summary: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    location: 'Rio de Janeiro - RJ',
  },
  {
    id: 2,
    img: Image.img3,
    title: 'Hoje dou exception',
    summary: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    location: 'Curitiba - PR',
  },
  {
    id: 3,
    img: Image.img4,
    title: 'Manda Node',
    summary: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    location: 'Curitiba - PR',
  },
  {
    id: 4,
    img: Image.img5,
    title: 'Só no back-end',
    summary: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    location: 'São Paulo - SP',
  },
  {
    id: 5,
    img: Image.img6,
    title: 'Esse anel não é de Ruby',
    summary: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    location: 'Rio de Janeiro - RJ',
  },
  {
    id: 6,
    img: Image.img7,
    title: 'Typesperando ?',
    summary: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    location: 'Curitiba - PR',
  },
  {
    id: 7,
    img: Image.img8,
    title: 'EnCACHE aqui',
    summary: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    location: 'Rio de Janeiro - RJ',
  },
  {
    id: 8,
    img: Image.img9,
    title: 'Não valho nada mas JAVA li',
    summary: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    location: 'São Paulo - SP',
  },
];
