export const GROUND_Y = 520; // px from top — blocks rest here
export const MAP_HEIGHT = 600; // total canvas height px

export const MAP_ZONES = {
  BEACH: {
    id: 'beach',
    label: '백사장',
    startX: 0,
    width: 800,
    bgColor: '#F5E6C8',
    groundColor: '#E8C87A',
  },
  SHORELINE: {
    id: 'shoreline',
    label: '해안',
    startX: 800,
    width: 400,
    bgColor: '#B8DFF0',
    groundColor: '#7EC8E3',
  },
  CASTLE_ZONE: {
    id: 'castle',
    label: '성 구역',
    startX: 1200,
    width: Infinity, // dynamically expands with plot purchases
    bgColor: '#D4E8C2',
    groundColor: '#C8A96E',
  },
} as const;

export type ZoneId = (typeof MAP_ZONES)[keyof typeof MAP_ZONES]['id'];

export function getZoneAtX(worldX: number): ZoneId {
  if (worldX < MAP_ZONES.BEACH.startX + MAP_ZONES.BEACH.width) return 'beach';
  if (worldX < MAP_ZONES.SHORELINE.startX + MAP_ZONES.SHORELINE.width) return 'shoreline';
  return 'castle';
}
