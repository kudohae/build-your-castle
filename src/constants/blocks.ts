export const BLOCK_SIZE = 32; // px

export const BLOCK_PHYSICS = {
  dry_sand: {
    mass: 1.0,
    friction: 0.4,
    restitution: 0.1,
    color: '#E8C87A',
  },
  wet_sand: {
    mass: 2.5,
    friction: 0.9,
    restitution: 0.05,
    color: '#B8956A',
  },
  wood_plank: {
    mass: 1.5,
    friction: 0.6,
    restitution: 0.2,
    color: '#8B6914',
  },
  stone: {
    mass: 5.0,
    friction: 0.8,
    restitution: 0.0,
    color: '#8A8A8A',
  },
  shell: {
    mass: 0.5,
    friction: 0.3,
    restitution: 0.3,
    color: '#F0E0D0',
  },
} as const;

export type BlockType = keyof typeof BLOCK_PHYSICS;

export interface Block {
  id: string;
  type: BlockType;
  x: number;
  y: number;
  plotId: string;
  isWet: boolean;
  health: number;
  // pixelMask added in Phase 2 (T17)
}
