export async function fetchCsv<T = Record<string, string>>(url: string): Promise<T[]> {
  const res = await fetch(url);
  const text = await res.text();

  const [headerLine, ...lines] = text.trim().split('\n');
  const headers = headerLine.split(',');

  return lines.map((line) => {
    const values = line.split(',');
    const entry = {} as T;
    headers.forEach((h, i) => {
      (entry as unknown as Record<string, string>)[h.trim()] = values[i]?.trim() || '';
    });
    return entry;
  });
} 