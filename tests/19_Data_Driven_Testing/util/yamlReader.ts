import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

export interface TestDataRow {
    [key: string]: string;
}

export function readYAML(filePath: string): TestDataRow[] {
    const fullPath = path.resolve(filePath);
    const parsed = yaml.load(fs.readFileSync(fullPath, 'utf-8'));

    if (!Array.isArray(parsed)) {
        throw new Error(`Expected a YAML list of rows in ${fullPath}`);
    }

    return parsed.map((row: Record<string, unknown>) => {
        const normalized: TestDataRow = {};
        for (const [key, value] of Object.entries(row)) {
            normalized[key.trim()] = String(value ?? '').trim();
        }
        return normalized;
    });
}
