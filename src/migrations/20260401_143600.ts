import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "pages_blocks_kategorie_leiste" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "_path" text NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "ueberschrift" varchar,
      "block_name" varchar
    );

    CREATE TABLE IF NOT EXISTS "pages_blocks_kategorie_leiste_kategorien" (
      "_order" integer NOT NULL,
      "_parent_id" varchar NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "titel" varchar,
      "link" varchar DEFAULT '#',
      "icon_id" integer,
      "background_color" varchar
    );

    CREATE TABLE IF NOT EXISTS "_pages_v_blocks_kategorie_leiste" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "_path" text NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "ueberschrift" varchar,
      "_uuid" varchar,
      "block_name" varchar
    );

    CREATE TABLE IF NOT EXISTS "_pages_v_blocks_kategorie_leiste_kategorien" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "titel" varchar,
      "link" varchar DEFAULT '#',
      "icon_id" integer,
      "background_color" varchar,
      "_uuid" varchar
    );

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'pages_blocks_kategorie_leiste_parent_id_fk'
      ) THEN
        ALTER TABLE "pages_blocks_kategorie_leiste"
          ADD CONSTRAINT "pages_blocks_kategorie_leiste_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'pages_blocks_kategorie_leiste_kategorien_parent_id_fk'
      ) THEN
        ALTER TABLE "pages_blocks_kategorie_leiste_kategorien"
          ADD CONSTRAINT "pages_blocks_kategorie_leiste_kategorien_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_kategorie_leiste"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'pages_blocks_kategorie_leiste_kategorien_icon_id_media_id_fk'
      ) THEN
        ALTER TABLE "pages_blocks_kategorie_leiste_kategorien"
          ADD CONSTRAINT "pages_blocks_kategorie_leiste_kategorien_icon_id_media_id_fk"
          FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id")
          ON DELETE set null ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = '_pages_v_blocks_kategorie_leiste_parent_id_fk'
      ) THEN
        ALTER TABLE "_pages_v_blocks_kategorie_leiste"
          ADD CONSTRAINT "_pages_v_blocks_kategorie_leiste_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = '_pages_v_blocks_kategorie_leiste_kategorien_parent_id_fk'
      ) THEN
        ALTER TABLE "_pages_v_blocks_kategorie_leiste_kategorien"
          ADD CONSTRAINT "_pages_v_blocks_kategorie_leiste_kategorien_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_kategorie_leiste"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = '_pages_v_blocks_kategorie_leiste_kategorien_icon_id_media_id_fk'
      ) THEN
        ALTER TABLE "_pages_v_blocks_kategorie_leiste_kategorien"
          ADD CONSTRAINT "_pages_v_blocks_kategorie_leiste_kategorien_icon_id_media_id_fk"
          FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id")
          ON DELETE set null ON UPDATE no action;
      END IF;
    END $$;

    CREATE INDEX IF NOT EXISTS "pages_blocks_kategorie_leiste_order_idx"
      ON "pages_blocks_kategorie_leiste" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "pages_blocks_kategorie_leiste_parent_id_idx"
      ON "pages_blocks_kategorie_leiste" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "pages_blocks_kategorie_leiste_path_idx"
      ON "pages_blocks_kategorie_leiste" USING btree ("_path");
    CREATE INDEX IF NOT EXISTS "pages_blocks_kategorie_leiste_kategorien_order_idx"
      ON "pages_blocks_kategorie_leiste_kategorien" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "pages_blocks_kategorie_leiste_kategorien_parent_id_idx"
      ON "pages_blocks_kategorie_leiste_kategorien" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "pages_blocks_kategorie_leiste_kategorien_icon_idx"
      ON "pages_blocks_kategorie_leiste_kategorien" USING btree ("icon_id");

    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_kategorie_leiste_order_idx"
      ON "_pages_v_blocks_kategorie_leiste" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_kategorie_leiste_parent_id_idx"
      ON "_pages_v_blocks_kategorie_leiste" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_kategorie_leiste_path_idx"
      ON "_pages_v_blocks_kategorie_leiste" USING btree ("_path");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_kategorie_leiste_kategorien_order_idx"
      ON "_pages_v_blocks_kategorie_leiste_kategorien" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_kategorie_leiste_kategorien_parent_id_idx"
      ON "_pages_v_blocks_kategorie_leiste_kategorien" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "_pages_v_blocks_kategorie_leiste_kategorien_icon_idx"
      ON "_pages_v_blocks_kategorie_leiste_kategorien" USING btree ("icon_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "pages_blocks_kategorie_leiste_kategorien" CASCADE;
    DROP TABLE IF EXISTS "pages_blocks_kategorie_leiste" CASCADE;
    DROP TABLE IF EXISTS "_pages_v_blocks_kategorie_leiste_kategorien" CASCADE;
    DROP TABLE IF EXISTS "_pages_v_blocks_kategorie_leiste" CASCADE;
  `)
}
