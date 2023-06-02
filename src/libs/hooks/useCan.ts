import { useSession } from "next-auth/react";

import { validateUserPermissions } from "utils/client/permission";

type UseCanParams = {
  roles?: string[];
};

export function useCan({ roles }: UseCanParams): boolean {
  const { data: session } = useSession();

  if (!session) {
    return false;
  }

  const { user } = session;

  const userHasValidPermissions = validateUserPermissions({
    user,
    roles,
  });

  return userHasValidPermissions;
}
