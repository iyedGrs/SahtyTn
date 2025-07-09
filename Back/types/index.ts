// Common types shared across all services
export * from "../common-libs/types";

// Re-export user types for backward compatibility (temporary)
export {
  IUser,
  IUserResponse,
  IUserRegistration,
  IUserLogin,
  IAuthResponse,
  IJwtPayload,
} from "../user-service/types";

// Re-export messaging types for backward compatibility (temporary)
export { IContactRequest } from "../messaging-service/types";
