import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkSpaces() {}

  @Post()
  createWorkSpaces() {}

  @Get(':url/members')
  getAllMembersFromWorkspaces() {}

  @Post(':url/members')
  inviteMembersToWorkspace() {}

  @Delete(':url/members/:id')
  kickMemberToWorkspace() {}

  @Get(':url/members/:id')
  getMemberInfoInWorkspace() {}
}
