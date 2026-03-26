import * as migration_20260326_193947_add_media_prefix from './20260326_193947_add_media_prefix';

export const migrations = [
  {
    up: migration_20260326_193947_add_media_prefix.up,
    down: migration_20260326_193947_add_media_prefix.down,
    name: '20260326_193947_add_media_prefix'
  },
];
