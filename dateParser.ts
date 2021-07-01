function date(field: string): string {
  if (field === 'null') return field;
  const d = new Date(field);
  const f = `${d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()}/
  ${d.getMonth() < 9 ? `0${d.getMonth() + 1}` : d.getMonth() + 1}/${d.getFullYear()}`;

  return f;
}

export const dateParser = (e: Record<string, string>): Record<string, string> => {
  for (const item in e) {
    if (item.includes('DATA')) e[item] = date(e[item]);
  }
  return e;
};
