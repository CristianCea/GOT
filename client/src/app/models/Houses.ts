export interface Houses {
    url:              string;
    name:             string;
    region:           string;
    coatOfArms:       string;
    words:            string;
    titles:           string[];
    seats:            string[];
    currentLord:      string;
    heir:             string;
    overlord:         string;
    founded:          string;
    founder:          string;
    diedOut:          string;
    ancestralWeapons: string[];
    cadetBranches:    any[];
    swornMembers:     any[];
}

// Converts JSON strings to/from your types
export class Convert {
    public static toHouses(json: string): Houses {
        return JSON.parse(json);
    }

    public static housesToJson(value: Houses): string {
        return JSON.stringify(value);
    }
}
