"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const realm_object_server_1 = require("realm-object-server");
class OtpAuthProvider extends realm_object_server_1.auth.AuthProvider {
    constructor() {
        super(...arguments);
        this.name = "otp";
    }
    authenticateOrCreateUser(body) {
        return this.service.createOrUpdateUser("1234", this.name, false);
    }
}
exports.OtpAuthProvider = OtpAuthProvider;
//# sourceMappingURL=otp.js.map