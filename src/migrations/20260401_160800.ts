import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "pages_blocks_service_info_section_reason_list" (
      "_order" integer NOT NULL,
      "_parent_id" varchar NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "text" varchar
    );

    CREATE TABLE IF NOT EXISTS "_pages_v_blocks_service_info_section_reason_list" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "text" varchar,
      "_uuid" varchar
    );

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'pages_blocks_service_info_section_reason_list_parent_id_fk'
      ) THEN
        ALTER TABLE "pages_blocks_service_info_section_reason_list"
          ADD CONSTRAINT "pages_blocks_service_info_section_reason_list_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_service_info_section"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = '_pages_v_blocks_service_info_section_reason_list_parent_id_fk'
      ) THEN
        ALTER TABLE "_pages_v_blocks_service_info_section_reason_list"
          ADD CONSTRAINT "_pages_v_blocks_service_info_section_reason_list_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_service_info_section"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    CREATE INDEX IF NOT EXISTS "pages_blocks_service_info_section_reason_list_order_idx"
      ON "pages_blocks_service_info_section_reason_list" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "pages_blocks_service_info_section_reason_list_parent_id_idx"
      ON "pages_blocks_service_info_section_reason_list" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_info_section_reason_list_order_idx"
      ON "_pages_v_blocks_service_info_section_reason_list" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_info_section_reason_list_parent_id_idx"
      ON "_pages_v_blocks_service_info_section_reason_list" USING btree ("_parent_id");

    ALTER TABLE "pages_blocks_service_info_section"
      DROP COLUMN IF EXISTS "primary_button_label",
      DROP COLUMN IF EXISTS "primary_button_link",
      DROP COLUMN IF EXISTS "opening_hours_heading";

    ALTER TABLE "_pages_v_blocks_service_info_section"
      DROP COLUMN IF EXISTS "primary_button_label",
      DROP COLUMN IF EXISTS "primary_button_link",
      DROP COLUMN IF EXISTS "opening_hours_heading";

    DROP TABLE IF EXISTS "pages_blocks_service_info_section_opening_hours" CASCADE;
    DROP TABLE IF EXISTS "_pages_v_blocks_service_info_section_opening_hours" CASCADE;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages_blocks_service_info_section"
      ADD COLUMN IF NOT EXISTS "primary_button_label" varchar DEFAULT 'Jetzt Beratungstermin vereinbaren',
      ADD COLUMN IF NOT EXISTS "primary_button_link" varchar DEFAULT '#',
      ADD COLUMN IF NOT EXISTS "opening_hours_heading" varchar DEFAULT 'Ordinationszeiten';

    ALTER TABLE "_pages_v_blocks_service_info_section"
      ADD COLUMN IF NOT EXISTS "primary_button_label" varchar DEFAULT 'Jetzt Beratungstermin vereinbaren',
      ADD COLUMN IF NOT EXISTS "primary_button_link" varchar DEFAULT '#',
      ADD COLUMN IF NOT EXISTS "opening_hours_heading" varchar DEFAULT 'Ordinationszeiten';

    CREATE TABLE IF NOT EXISTS "pages_blocks_service_info_section_opening_hours" (
      "_order" integer NOT NULL,
      "_parent_id" varchar NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "day" varchar,
      "hours" varchar
    );

    CREATE TABLE IF NOT EXISTS "_pages_v_blocks_service_info_section_opening_hours" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "day" varchar,
      "hours" varchar,
      "_uuid" varchar
    );

    DROP TABLE IF EXISTS "pages_blocks_service_info_section_reason_list" CASCADE;
    DROP TABLE IF EXISTS "_pages_v_blocks_service_info_section_reason_list" CASCADE;
  `)
}
