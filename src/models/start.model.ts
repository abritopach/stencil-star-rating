import { LabelPosition } from "../enums/enums";

export interface Star {
    value: number;
    selected: boolean;
    color?: string;
}

export interface Label {
    text: string;
    position: LabelPosition;
}