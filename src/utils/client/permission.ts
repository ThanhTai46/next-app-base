import { User } from "next-auth";

type ValidateUserPermissionsParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
};

export function validateUserPermissions({ user, roles }: ValidateUserPermissionsParams) {
  if (roles?.length) {
    return roles.includes(user.role);
  }

  return true;
}
