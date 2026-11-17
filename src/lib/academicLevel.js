export function getAcademicInfo() {
  const timeline = [
    {
      period: '2023–2024',
      level: 'Licence 1',
      detail: 'Fondations scientifiques, biologie médicale & premières lignes de code.',
      isCurrent: false,
    },
    {
      period: '2024–2025',
      level: 'Licence 2',
      detail: 'Approfondissement des sciences médicales, algorithmique et projets web.',
      isCurrent: false,
    },
    {
      period: 'Aujourd’hui',
      level: 'Licence 3',
      detail: 'Développement web, projets concrets et création de produits numériques.',
      isCurrent: true,
    },
  ];

  return {
    levelName: 'Licence 3',
    timeline,
  };
}
