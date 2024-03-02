import { ConflictError } from '@/errors/conflict-error';
import teamRepository from '@/repositories/team-repository';

export async function createUserTeam(owner: string) {
  try {
    let { id } = await teamRepository.create(owner);
    return id;
  } catch (error) {
    throw new ConflictError('Usuário já existente');
  }
}

export async function deleteUserTeamById(id: number){
    await teamRepository.deleteById(id);
}
