enum LabelPosition {
    TOP = 'top',
    RIGHT = 'right',
    BOTTOM = 'bottom',
    LEFT = 'left'
}

export interface Star {
    value: number;
    selected: boolean;
    color?: string;
}

export interface Label {
    text: string;
    position: LabelPosition;
}