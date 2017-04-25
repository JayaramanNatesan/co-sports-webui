export class corporateEventsSchemas {
    allEvents: Array <allEvent>;
}

export class allEvent {
    eventId: number;
    eventName: string;
    eventVenue: string;
    eventDate: string;
}

export class participantListSchemas {
    participantsList: Array<eventParticipants>;
}

export class eventParticipants {
    employeeName: string;
    employeeId: string;
    mobileNo: string;
    eventId: number;
}