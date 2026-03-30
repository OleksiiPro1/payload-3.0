import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "pages_blocks_service_info_section" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "_path" text NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "eyebrow" varchar DEFAULT 'IHR SPEZIALIST FUR ORTHOPADIE',
      "intro_heading" varchar,
      "intro_description" varchar,
      "reason_heading" varchar,
      "reason_body" varchar,
      "main_image_id" integer,
      "doctor_card_image_id" integer,
      "doctor_card_name" varchar,
      "doctor_card_specialty" varchar,
      "doctor_card_subtitle" varchar,
      "doctor_card_description" varchar,
      "doctor_card_link_label" varchar DEFAULT 'Uber Dr. Lorem Ipsum',
      "doctor_card_link_url" varchar DEFAULT '#',
      "primary_button_label" varchar DEFAULT 'Jetzt Beratungstermin vereinbaren',
      "primary_button_link" varchar DEFAULT '#',
      "opening_hours_heading" varchar DEFAULT 'Ordinationszeiten',
      "contact_heading" varchar DEFAULT 'Kontakt',
      "address" varchar,
      "phone" varchar,
      "email" varchar,
      "block_name" varchar
    );

    CREATE TABLE IF NOT EXISTS "pages_blocks_service_info_section_opening_hours" (
      "_order" integer NOT NULL,
      "_parent_id" varchar NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "day" varchar,
      "hours" varchar
    );

    CREATE TABLE IF NOT EXISTS "_pages_v_blocks_service_info_section" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "_path" text NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "eyebrow" varchar DEFAULT 'IHR SPEZIALIST FUR ORTHOPADIE',
      "intro_heading" varchar,
      "intro_description" varchar,
      "reason_heading" varchar,
      "reason_body" varchar,
      "main_image_id" integer,
      "doctor_card_image_id" integer,
      "doctor_card_name" varchar,
      "doctor_card_specialty" varchar,
      "doctor_card_subtitle" varchar,
      "doctor_card_description" varchar,
      "doctor_card_link_label" varchar DEFAULT 'Uber Dr. Lorem Ipsum',
      "doctor_card_link_url" varchar DEFAULT '#',
      "primary_button_label" varchar DEFAULT 'Jetzt Beratungstermin vereinbaren',
      "primary_button_link" varchar DEFAULT '#',
      "opening_hours_heading" varchar DEFAULT 'Ordinationszeiten',
      "contact_heading" varchar DEFAULT 'Kontakt',
      "address" varchar,
      "phone" varchar,
      "email" varchar,
      "_uuid" varchar,
      "block_name" varchar
    );

    CREATE TABLE IF NOT EXISTS "_pages_v_blocks_service_info_section_opening_hours" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "day" varchar,
      "hours" varchar,
      "_uuid" varchar
    );

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'pages_blocks_service_info_section_parent_id_fk'
      ) THEN
        ALTER TABLE "pages_blocks_service_info_section"
          ADD CONSTRAINT "pages_blocks_service_info_section_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'pages_blocks_service_info_section_main_image_id_media_id_fk'
      ) THEN
        ALTER TABLE "pages_blocks_service_info_section"
          ADD CONSTRAINT "pages_blocks_service_info_section_main_image_id_media_id_fk"
          FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id")
          ON DELETE set null ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'pages_blocks_service_info_section_doctor_card_image_id_media_id_fk'
      ) THEN
        ALTER TABLE "pages_blocks_service_info_section"
          ADD CONSTRAINT "pages_blocks_service_info_section_doctor_card_image_id_media_id_fk"
          FOREIGN KEY ("doctor_card_image_id") REFERENCES "public"."media"("id")
          ON DELETE set null ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'pages_blocks_service_info_section_opening_hours_parent_id_fk'
      ) THEN
        ALTER TABLE "pages_blocks_service_info_section_opening_hours"
          ADD CONSTRAINT "pages_blocks_service_info_section_opening_hours_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_service_info_section"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = '_pages_v_blocks_service_info_section_parent_id_fk'
      ) THEN
        ALTER TABLE "_pages_v_blocks_service_info_section"
          ADD CONSTRAINT "_pages_v_blocks_service_info_section_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = '_pages_v_blocks_service_info_section_main_image_id_media_id_fk'
      ) THEN
        ALTER TABLE "_pages_v_blocks_service_info_section"
          ADD CONSTRAINT "_pages_v_blocks_service_info_section_main_image_id_media_id_fk"
          FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id")
          ON DELETE set null ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = '_pages_v_blocks_service_info_section_doctor_card_image_id_media_id_fk'
      ) THEN
        ALTER TABLE "_pages_v_blocks_service_info_section"
          ADD CONSTRAINT "_pages_v_blocks_service_info_section_doctor_card_image_id_media_id_fk"
          FOREIGN KEY ("doctor_card_image_id") REFERENCES "public"."media"("id")
          ON DELETE set null ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = '_pages_v_blocks_service_info_section_opening_hours_parent_id_fk'
      ) THEN
        ALTER TABLE "_pages_v_blocks_service_info_section_opening_hours"
          ADD CONSTRAINT "_pages_v_blocks_service_info_section_opening_hours_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_service_info_section"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    CREATE INDEX IF NOT EXISTS "pages_blocks_service_info_section_order_idx"
      ON "pages_blocks_service_info_section" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "pages_blocks_service_info_section_parent_id_idx"
      ON "pages_blocks_service_info_section" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "pages_blocks_service_info_section_path_idx"
      ON "pages_blocks_service_info_section" USING btree ("_path");
    CREATE INDEX IF NOT EXISTS "pages_blocks_service_info_section_main_image_idx"
      ON "pages_blocks_service_info_section" USING btree ("main_image_id");
    CREATE INDEX IF NOT EXISTS "pages_blocks_service_info_section_doctor_card_image_idx"
      ON "pages_blocks_service_info_section" USING btree ("doctor_card_image_id");
    CREATE INDEX IF NOT EXISTS "pages_blocks_service_info_section_opening_hours_order_idx"
      ON "pages_blocks_service_info_section_opening_hours" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "pages_blocks_service_info_section_opening_hours_parent_id_idx"
      ON "pages_blocks_service_info_section_opening_hours" USING btree ("_parent_id");

    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_info_section_order_idx"
      ON "_pages_v_blocks_service_info_section" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_info_section_parent_id_idx"
      ON "_pages_v_blocks_service_info_section" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_info_section_path_idx"
      ON "_pages_v_blocks_service_info_section" USING btree ("_path");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_info_section_main_image_idx"
      ON "_pages_v_blocks_service_info_section" USING btree ("main_image_id");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_info_section_doctor_card_image_idx"
      ON "_pages_v_blocks_service_info_section" USING btree ("doctor_card_image_id");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_info_section_opening_hours_order_idx"
      ON "_pages_v_blocks_service_info_section_opening_hours" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_info_section_opening_hours_parent_id_idx"
      ON "_pages_v_blocks_service_info_section_opening_hours" USING btree ("_parent_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "pages_blocks_service_info_section_opening_hours" CASCADE;
    DROP TABLE IF EXISTS "pages_blocks_service_info_section" CASCADE;
    DROP TABLE IF EXISTS "_pages_v_blocks_service_info_section_opening_hours" CASCADE;
    DROP TABLE IF EXISTS "_pages_v_blocks_service_info_section" CASCADE;
  `)
}
