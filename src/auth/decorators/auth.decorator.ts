import { applyDecorators, UseGuards } from '@nestjs/common';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { AuthGuard } from '../auth/guards/auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';

export const Auth = (...roles: string[]) => {
  roles.push("Admin");

  return applyDecorators(
    Roles(roles),
    UseGuards(AuthGuard, RolesGuard)
  );
}