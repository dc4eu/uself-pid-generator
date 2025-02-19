export enum Status {
  INIT,
  PENDING,
  SUCCESS,
  ERROR
}

export interface SSEEvent {
  id: string;
  status: Status;
  message: string;
}