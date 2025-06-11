export async function fetchCsv(url: string): Promise<any[]> {
  const res = await fetch(url);
  const text = await res.text();

  const [headerLine, ...lines] = text.trim().split('\n');
  const headers = headerLine.split(',');

  return lines.map((line) => {
    const values = line.split(',');
    const entry: any = {};
    headers.forEach((h, i) => {
      entry[h.trim()] = values[i]?.trim();
    });
    return entry;
  });
} 