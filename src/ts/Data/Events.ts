export class Events {
    public static readonly oneDoorClosed: Event = {key: 'doorClosed'};
    public static readonly oneDoorOpen: Event = {key: 'doorOpen'};

    public static readonly elevatorReachedUp: Event = {key: 'elevatorReachedTop'};
    public static readonly elevatorDoorsAreClosed: Event = {key: 'elevatorDoorsClosed'};
    public static readonly elevatorDoorsAreOpen: Event = {key: 'elevatorDoorsOpen'};
    public static readonly elevatorReachedDown: Event = {key: 'elevatorReachedDown'};
}

export interface Event {
    key: string
}