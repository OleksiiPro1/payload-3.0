import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "pages_blocks_service_f_a_q" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "_path" text NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "eyebrow" varchar DEFAULT 'Häufig gestellte Fragen',
      "heading" varchar,
      "block_name" varchar
    );

    CREATE TABLE IF NOT EXISTS "pages_blocks_service_f_a_q_items" (
      "_order" integer NOT NULL,
      "_parent_id" varchar NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "question" varchar,
      "answer" varchar
    );

    CREATE TABLE IF NOT EXISTS "_pages_v_blocks_service_f_a_q" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "_path" text NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "eyebrow" varchar DEFAULT 'Häufig gestellte Fragen',
      "heading" varchar,
      "_uuid" varchar,
      "block_name" varchar
    );

    CREATE TABLE IF NOT EXISTS "_pages_v_blocks_service_f_a_q_items" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "question" varchar,
      "answer" varchar,
      "_uuid" varchar
    );

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'pages_blocks_service_f_a_q_parent_id_fk'
      ) THEN
        ALTER TABLE "pages_blocks_service_f_a_q"
          ADD CONSTRAINT "pages_blocks_service_f_a_q_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'pages_blocks_service_f_a_q_items_parent_id_fk'
      ) THEN
        ALTER TABLE "pages_blocks_service_f_a_q_items"
          ADD CONSTRAINT "pages_blocks_service_f_a_q_items_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_service_f_a_q"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = '_pages_v_blocks_service_f_a_q_parent_id_fk'
      ) THEN
        ALTER TABLE "_pages_v_blocks_service_f_a_q"
          ADD CONSTRAINT "_pages_v_blocks_service_f_a_q_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = '_pages_v_blocks_service_f_a_q_items_parent_id_fk'
      ) THEN
        ALTER TABLE "_pages_v_blocks_service_f_a_q_items"
          ADD CONSTRAINT "_pages_v_blocks_service_f_a_q_items_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_service_f_a_q"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    CREATE INDEX IF NOT EXISTS "pages_blocks_service_f_a_q_order_idx"
      ON "pages_blocks_service_f_a_q" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "pages_blocks_service_f_a_q_parent_id_idx"
      ON "pages_blocks_service_f_a_q" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "pages_blocks_service_f_a_q_path_idx"
      ON "pages_blocks_service_f_a_q" USING btree ("_path");
    CREATE INDEX IF NOT EXISTS "pages_blocks_service_f_a_q_items_order_idx"
      ON "pages_blocks_service_f_a_q_items" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "pages_blocks_service_f_a_q_items_parent_id_idx"
      ON "pages_blocks_service_f_a_q_items" USING btree ("_parent_id");

    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_f_a_q_order_idx"
      ON "_pages_v_blocks_service_f_a_q" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_f_a_q_parent_id_idx"
      ON "_pages_v_blocks_service_f_a_q" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_f_a_q_path_idx"
      ON "_pages_v_blocks_service_f_a_q" USING btree ("_path");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_f_a_q_items_order_idx"
      ON "_pages_v_blocks_service_f_a_q_items" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_f_a_q_items_parent_id_idx"
      ON "_pages_v_blocks_service_f_a_q_items" USING btree ("_parent_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "pages_blocks_service_f_a_q_items" CASCADE;
    DROP TABLE IF EXISTS "pages_blocks_service_f_a_q" CASCADE;
    DROP TABLE IF EXISTS "_pages_v_blocks_service_f_a_q_items" CASCADE;
    DROP TABLE IF EXISTS "_pages_v_blocks_service_f_a_q" CASCADE;
  `)
}
