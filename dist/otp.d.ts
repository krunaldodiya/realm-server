import { auth } from 'realm-object-server';
export declare class OtpAuthProvider extends auth.AuthProvider {
    name: string;
    authenticateOrCreateUser(body: any): Promise<any>;
}
