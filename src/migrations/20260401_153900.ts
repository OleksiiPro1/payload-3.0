import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "pages_blocks_service_split_list" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "_path" text NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "heading" varchar,
      "body" varchar,
      "block_name" varchar
    );

    CREATE TABLE IF NOT EXISTS "pages_blocks_service_split_list_items" (
      "_order" integer NOT NULL,
      "_parent_id" varchar NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "text" varchar
    );

    CREATE TABLE IF NOT EXISTS "_pages_v_blocks_service_split_list" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "_path" text NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "heading" varchar,
      "body" varchar,
      "_uuid" varchar,
      "block_name" varchar
    );

    CREATE TABLE IF NOT EXISTS "_pages_v_blocks_service_split_list_items" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "text" varchar,
      "_uuid" varchar
    );

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'pages_blocks_service_split_list_parent_id_fk'
      ) THEN
        ALTER TABLE "pages_blocks_service_split_list"
          ADD CONSTRAINT "pages_blocks_service_split_list_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'pages_blocks_service_split_list_items_parent_id_fk'
      ) THEN
        ALTER TABLE "pages_blocks_service_split_list_items"
          ADD CONSTRAINT "pages_blocks_service_split_list_items_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_service_split_list"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = '_pages_v_blocks_service_split_list_parent_id_fk'
      ) THEN
        ALTER TABLE "_pages_v_blocks_service_split_list"
          ADD CONSTRAINT "_pages_v_blocks_service_split_list_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = '_pages_v_blocks_service_split_list_items_parent_id_fk'
      ) THEN
        ALTER TABLE "_pages_v_blocks_service_split_list_items"
          ADD CONSTRAINT "_pages_v_blocks_service_split_list_items_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_service_split_list"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    CREATE INDEX IF NOT EXISTS "pages_blocks_service_split_list_order_idx"
      ON "pages_blocks_service_split_list" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "pages_blocks_service_split_list_parent_id_idx"
      ON "pages_blocks_service_split_list" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "pages_blocks_service_split_list_path_idx"
      ON "pages_blocks_service_split_list" USING btree ("_path");
    CREATE INDEX IF NOT EXISTS "pages_blocks_service_split_list_items_order_idx"
      ON "pages_blocks_service_split_list_items" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "pages_blocks_service_split_list_items_parent_id_idx"
      ON "pages_blocks_service_split_list_items" USING btree ("_parent_id");

    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_split_list_order_idx"
      ON "_pages_v_blocks_service_split_list" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_split_list_parent_id_idx"
      ON "_pages_v_blocks_service_split_list" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_split_list_path_idx"
      ON "_pages_v_blocks_service_split_list" USING btree ("_path");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_split_list_items_order_idx"
      ON "_pages_v_blocks_service_split_list_items" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_split_list_items_parent_id_idx"
      ON "_pages_v_blocks_service_split_list_items" USING btree ("_parent_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "pages_blocks_service_split_list_items" CASCADE;
    DROP TABLE IF EXISTS "pages_blocks_service_split_list" CASCADE;
    DROP TABLE IF EXISTS "_pages_v_blocks_service_split_list_items" CASCADE;
    DROP TABLE IF EXISTS "_pages_v_blocks_service_split_list" CASCADE;
  `)
}
