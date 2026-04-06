import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages_blocks_kategorie_leiste_kategorien"
      ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
    ALTER TABLE "pages_blocks_service_info_section_reason_list"
      ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
    ALTER TABLE "pages_blocks_service_text_section_list_items"
      ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
    ALTER TABLE "pages_blocks_service_f_a_q_items"
      ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
    ALTER TABLE "pages_blocks_service_split_list_items"
      ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';

    ALTER TABLE "_pages_v_blocks_kategorie_leiste_kategorien"
      ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
    ALTER TABLE "_pages_v_blocks_service_info_section_reason_list"
      ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
    ALTER TABLE "_pages_v_blocks_service_text_section_list_items"
      ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
    ALTER TABLE "_pages_v_blocks_service_f_a_q_items"
      ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
    ALTER TABLE "_pages_v_blocks_service_split_list_items"
      ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages_blocks_kategorie_leiste_kategorien"
      DROP COLUMN IF EXISTS "_locale";
    ALTER TABLE "pages_blocks_service_info_section_reason_list"
      DROP COLUMN IF EXISTS "_locale";
    ALTER TABLE "pages_blocks_service_text_section_list_items"
      DROP COLUMN IF EXISTS "_locale";
    ALTER TABLE "pages_blocks_service_f_a_q_items"
      DROP COLUMN IF EXISTS "_locale";
    ALTER TABLE "pages_blocks_service_split_list_items"
      DROP COLUMN IF EXISTS "_locale";

    ALTER TABLE "_pages_v_blocks_kategorie_leiste_kategorien"
      DROP COLUMN IF EXISTS "_locale";
    ALTER TABLE "_pages_v_blocks_service_info_section_reason_list"
      DROP COLUMN IF EXISTS "_locale";
    ALTER TABLE "_pages_v_blocks_service_text_section_list_items"
      DROP COLUMN IF EXISTS "_locale";
    ALTER TABLE "_pages_v_blocks_service_f_a_q_items"
      DROP COLUMN IF EXISTS "_locale";
    ALTER TABLE "_pages_v_blocks_service_split_list_items"
      DROP COLUMN IF EXISTS "_locale";
  `)
}
