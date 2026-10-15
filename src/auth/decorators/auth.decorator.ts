import { applyDecorators, UseGuards } from '@nestjs/common';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { AuthGuard } from '../auth/guards/auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { ROLES } from '../constants/roles.constants.js';

export const Auth = (...roles: ROLES[]) => {
  roles.push(ROLES.ADMIN);

  return applyDecorators(
    Roles(roles),
    UseGuards(AuthGuard, RolesGuard)
  );
}