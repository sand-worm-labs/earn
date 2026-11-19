import { BountyEntity } from './bounty.entity';
import { BountyEntryEntity } from './bounty-entry.entity';
import { NotebookAttestationEntity } from './notebook-attestation.entity';

export * from './bounty.entity';
export * from './bounty-entry.entity';
export * from './notebook-attestation.entity';

export const entities = [BountyEntity, BountyEntryEntity, NotebookAttestationEntity];
