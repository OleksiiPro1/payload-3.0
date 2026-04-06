import * as migration_20260330_124518 from './20260330_124518';
import * as migration_20260330_171500 from './20260330_171500';
import * as migration_20260330_173200 from './20260330_173200';
import * as migration_20260401_143600 from './20260401_143600';
import * as migration_20260401_153900 from './20260401_153900';
import * as migration_20260401_160800 from './20260401_160800';
import * as migration_20260401_161900 from './20260401_161900';
import * as migration_20260406_171528 from './20260406_171528';

export const migrations = [
  {
    up: migration_20260330_124518.up,
    down: migration_20260330_124518.down,
    name: '20260330_124518',
  },
  {
    up: migration_20260330_171500.up,
    down: migration_20260330_171500.down,
    name: '20260330_171500',
  },
  {
    up: migration_20260330_173200.up,
    down: migration_20260330_173200.down,
    name: '20260330_173200',
  },
  {
    up: migration_20260401_143600.up,
    down: migration_20260401_143600.down,
    name: '20260401_143600',
  },
  {
    up: migration_20260401_153900.up,
    down: migration_20260401_153900.down,
    name: '20260401_153900',
  },
  {
    up: migration_20260401_160800.up,
    down: migration_20260401_160800.down,
    name: '20260401_160800',
  },
  {
    up: migration_20260401_161900.up,
    down: migration_20260401_161900.down,
    name: '20260401_161900',
  },
  {
    up: migration_20260406_171528.up,
    down: migration_20260406_171528.down,
    name: '20260406_171528'
  },
];
