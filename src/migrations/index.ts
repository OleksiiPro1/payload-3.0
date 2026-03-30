import * as migration_20260330_124518 from './20260330_124518';
import * as migration_20260330_171500 from './20260330_171500';

export const migrations = [
  {
    up: migration_20260330_124518.up,
    down: migration_20260330_124518.down,
    name: '20260330_124518'
  },
  {
    up: migration_20260330_171500.up,
    down: migration_20260330_171500.down,
    name: '20260330_171500'
  },
];
