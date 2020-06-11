import { Requeststate } from './requeststatus';
import { Productions } from './productions';

export class RequestBatches {
    constructor(
        public code: number,
        public requestDate: string,
        public production: Productions,
        public state: Requeststate

    ){}
}
