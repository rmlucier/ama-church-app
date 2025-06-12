export async function fetchCsv<T = Record<string, string>>(url: string): Promise<T[]> {
  const res = await fetch(url);
  const text = await res.text();

  const lines = text.trim().split('\n');
  const headers = parseCsvLine(lines[0]);

  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    const entry = {} as T;
    headers.forEach((header, i) => {
      (entry as Record<string, string>)[header] = values[i] ?? '';
    });
    return entry;
  });
}

function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"' && insideQuotes && nextChar === '"') {
      current += '"';
      i++; // skip escaped quote
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
} 