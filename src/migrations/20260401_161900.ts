import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages_blocks_service_info_section"
      DROP COLUMN IF EXISTS "contact_heading",
      DROP COLUMN IF EXISTS "address",
      DROP COLUMN IF EXISTS "phone",
      DROP COLUMN IF EXISTS "email";

    ALTER TABLE "_pages_v_blocks_service_info_section"
      DROP COLUMN IF EXISTS "contact_heading",
      DROP COLUMN IF EXISTS "address",
      DROP COLUMN IF EXISTS "phone",
      DROP COLUMN IF EXISTS "email";
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages_blocks_service_info_section"
      ADD COLUMN IF NOT EXISTS "contact_heading" varchar DEFAULT 'Kontakt',
      ADD COLUMN IF NOT EXISTS "address" varchar,
      ADD COLUMN IF NOT EXISTS "phone" varchar,
      ADD COLUMN IF NOT EXISTS "email" varchar;

    ALTER TABLE "_pages_v_blocks_service_info_section"
      ADD COLUMN IF NOT EXISTS "contact_heading" varchar DEFAULT 'Kontakt',
      ADD COLUMN IF NOT EXISTS "address" varchar,
      ADD COLUMN IF NOT EXISTS "phone" varchar,
      ADD COLUMN IF NOT EXISTS "email" varchar;
  `)
}
