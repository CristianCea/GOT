export interface Characters {
    url:         string;
    name:        string;
    gender:      string;
    culture:     string;
    born:        string;
    died:        string;
    titles:      string[];
    aliases:     string[];
    father:      string;
    mother:      string;
    spouse:      string;
    allegiances: string[];
    books:       string[];
    povBooks:    string[];
    tvSeries:    string[];
    playedBy:    string[];
}

// Converts JSON strings to/from your types
export class Convert {
    public static toCharacters(json: string): Characters {
        return JSON.parse(json);
    }

    public static charactersToJson(value: Characters): string {
        return JSON.stringify(value);
    }
}
