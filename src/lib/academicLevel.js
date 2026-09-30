/**
 * Dynamic academic level calculator.
 * Current baseline: 2025–2026 academic year = Licence 3.
 * Automatically advances level every academic year (starting around October).
 */
export function getAcademicInfo() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0 = Jan, 8 = Sept, 9 = Oct

  // Academic year in Senegal/France starts around Oct (month 9)
  const academicStartYear = currentMonth < 9 ? currentYear - 1 : currentYear;
  const startYear = 2023; // 2023-2024 = Licence 1
  const yearIndex = academicStartYear - startYear + 1; // 1 = L1, 2 = L2, 3 = L3, 4 = M1, 5 = M2

  let levelName = 'Licence 3';
  if (yearIndex <= 1) levelName = 'Licence 1';
  else if (yearIndex === 2) levelName = 'Licence 2';
  else if (yearIndex === 3) levelName = 'Licence 3';
  else if (yearIndex === 4) levelName = 'Master 1';
  else if (yearIndex === 5) levelName = 'Master 2';
  else levelName = 'Master 2 & Recherche';

  const academicPeriod = `${academicStartYear}–${academicStartYear + 1}`;

  // Timeline list for About section
  const timeline = [
    {
      period: '2023–2024',
      level: 'Licence 1',
      detail: 'Fondations scientifiques, biologie médicale & premières lignes de code.',
      isCurrent: yearIndex === 1,
    },
    {
      period: '2024–2025',
      level: 'Licence 2',
      detail: 'Approfondissement des sciences médicales, algorithmique et projets web.',
      isCurrent: yearIndex === 2,
    },
    {
      period: '2025–2026',
      level: 'Licence 3',
      detail: 'Spécialisation, développement de SaaS, projets concrets & IA médicale.',
      isCurrent: yearIndex === 3,
    },
  ];

  if (yearIndex >= 4) {
    timeline.push({
      period: '2026–2027',
      level: 'Master 1',
      detail: 'Spécialisation avancée en bio-informatique, IA & architecture logicielle.',
      isCurrent: yearIndex === 4,
    });
  }

  if (yearIndex >= 5) {
    timeline.push({
      period: '2027–2028',
      level: 'Master 2',
      detail: 'Expertise, recherche appliquée et entrepreneuriat tech & santé.',
      isCurrent: yearIndex === 5,
    });
  }

  return {
    academicStartYear,
    yearIndex,
    levelName,
    academicPeriod,
    timeline,
  };
}
