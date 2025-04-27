import { UUID } from "crypto";
import {METHODS} from "../enums/methods.enum";
import {TYPES} from "../enums/types.enum";

interface request {
    cliet_id:UUID;
    user_id:UUID;
    method:METHODS
    type:TYPES
    payload:any
}