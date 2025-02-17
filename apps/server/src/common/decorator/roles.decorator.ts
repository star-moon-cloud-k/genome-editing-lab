import { SetMetadata } from '@nestjs/common';
import { RoleType } from '@root/common/const/roles.enum';

export const Roles = (...roles: RoleType[]) => SetMetadata('roles', roles);
