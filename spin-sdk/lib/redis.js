//@ts-ignore
import * as spinRedis from "fermyon:spin/redis@2.0.0";
export const Redis = {
    open: (address) => {
        return spinRedis.Connection.open(address);
    }
};
