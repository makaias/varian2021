interface IdValuePair<T> {
    id: number;
    value: T;
}

export interface Badge {
    id: number;
    type: "STARTED" | "ONE_MONTH" | "TWO_MONTH" | "THREE_MONTH" | "FINISHED";
}

export interface Statistic {
    badges: Badge[];
    daysGone: number;
    eatingBehavior: IdValuePair<number>[];
    lifeStatisfaction: IdValuePair<number>[];
    physicalActivity: IdValuePair<number>[];
    socialInteraction: IdValuePair<number>[];
    sleeping: IdValuePair<number>[];
    
}