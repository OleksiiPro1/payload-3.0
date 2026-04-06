import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DO $$ BEGIN
    CREATE TYPE "public"."_locales" AS ENUM('de', 'en');
  EXCEPTION
    WHEN duplicate_object THEN NULL;
  END $$;
  DO $$ BEGIN
    CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('de', 'en');
  EXCEPTION
    WHEN duplicate_object THEN NULL;
  END $$;
  DO $$ BEGIN
    CREATE TYPE "public"."enum__posts_v_published_locale" AS ENUM('de', 'en');
  EXCEPTION
    WHEN duplicate_object THEN NULL;
  END $$;
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta_locales" (
  	"rich_text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_archive_locales" (
  	"intro_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_form_block_locales" (
  	"intro_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_kategorie_raster_locales" (
  	"ueberschrift" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_kategorie_leiste_locales" (
  	"ueberschrift" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_info_sektion_locales" (
  	"dachzeile" varchar,
  	"ueberschrift" varchar,
  	"beschreibung" varchar,
  	"link_label" varchar,
  	"link_url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_service_info_section_locales" (
  	"eyebrow" varchar DEFAULT 'IHR SPEZIALIST FUR ORTHOPADIE',
  	"intro_heading" varchar,
  	"intro_description" varchar,
  	"reason_heading" varchar,
  	"reason_body" varchar,
  	"doctor_card_image_id" integer,
  	"doctor_card_name" varchar,
  	"doctor_card_specialty" varchar,
  	"doctor_card_subtitle" varchar,
  	"doctor_card_description" varchar,
  	"doctor_card_link_label" varchar DEFAULT 'Uber Dr. Lorem Ipsum',
  	"doctor_card_link_url" varchar DEFAULT '#',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_service_text_section_locales" (
  	"eyebrow" varchar DEFAULT 'IHR SPEZIALIST FÜR ORTHOPÄDIE',
  	"heading" varchar,
  	"body" varchar,
  	"list_heading" varchar,
  	"button_label" varchar,
  	"button_url" varchar DEFAULT '#',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_service_f_a_q_locales" (
  	"eyebrow" varchar DEFAULT 'Häufig gestellte Fragen',
  	"heading" varchar DEFAULT 'Häufig gestellte Fragen',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_service_split_list_locales" (
  	"heading" varchar,
  	"body" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_about_section_locales" (
  	"eyebrow" varchar DEFAULT 'IHR SPEZIALIST FÜR ORTHOPÄDIE',
  	"heading" varchar,
  	"description" varchar,
  	"doctor_button_label" varchar,
  	"doctor_button_link" varchar DEFAULT '#',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_therapie_optionen_locales" (
  	"eyebrow" varchar DEFAULT 'BEHANDLUNGSMÖGLICHKEITEN',
  	"heading" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_contact_section_locales" (
  	"eyebrow" varchar DEFAULT 'OrthoMed',
  	"heading" varchar DEFAULT 'Wir freuen uns auf Ihre Kontaktaufnahme!',
  	"subtext" varchar DEFAULT 'ALLE KASSEN UND PRIVAT',
  	"primary_button_label" varchar DEFAULT 'Online Termin vereinbaren',
  	"primary_button_link" varchar DEFAULT '#',
  	"phone_label" varchar DEFAULT '+12 345 67 89',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_locales" (
  	"title" varchar,
  	"hero_heading" varchar,
  	"hero_eyebrow" varchar,
  	"hero_description" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_locales" (
  	"rich_text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_archive_locales" (
  	"intro_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form_block_locales" (
  	"intro_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_kategorie_raster_locales" (
  	"ueberschrift" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_kategorie_leiste_locales" (
  	"ueberschrift" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_info_sektion_locales" (
  	"dachzeile" varchar,
  	"ueberschrift" varchar,
  	"beschreibung" varchar,
  	"link_label" varchar,
  	"link_url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_service_info_section_locales" (
  	"eyebrow" varchar DEFAULT 'IHR SPEZIALIST FUR ORTHOPADIE',
  	"intro_heading" varchar,
  	"intro_description" varchar,
  	"reason_heading" varchar,
  	"reason_body" varchar,
  	"doctor_card_image_id" integer,
  	"doctor_card_name" varchar,
  	"doctor_card_specialty" varchar,
  	"doctor_card_subtitle" varchar,
  	"doctor_card_description" varchar,
  	"doctor_card_link_label" varchar DEFAULT 'Uber Dr. Lorem Ipsum',
  	"doctor_card_link_url" varchar DEFAULT '#',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_service_text_section_locales" (
  	"eyebrow" varchar DEFAULT 'IHR SPEZIALIST FÜR ORTHOPÄDIE',
  	"heading" varchar,
  	"body" varchar,
  	"list_heading" varchar,
  	"button_label" varchar,
  	"button_url" varchar DEFAULT '#',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_service_f_a_q_locales" (
  	"eyebrow" varchar DEFAULT 'Häufig gestellte Fragen',
  	"heading" varchar DEFAULT 'Häufig gestellte Fragen',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_service_split_list_locales" (
  	"heading" varchar,
  	"body" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_about_section_locales" (
  	"eyebrow" varchar DEFAULT 'IHR SPEZIALIST FÜR ORTHOPÄDIE',
  	"heading" varchar,
  	"description" varchar,
  	"doctor_button_label" varchar,
  	"doctor_button_link" varchar DEFAULT '#',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_therapie_optionen_locales" (
  	"eyebrow" varchar DEFAULT 'BEHANDLUNGSMÖGLICHKEITEN',
  	"heading" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_contact_section_locales" (
  	"eyebrow" varchar DEFAULT 'OrthoMed',
  	"heading" varchar DEFAULT 'Wir freuen uns auf Ihre Kontaktaufnahme!',
  	"subtext" varchar DEFAULT 'ALLE KASSEN UND PRIVAT',
  	"primary_button_label" varchar DEFAULT 'Online Termin vereinbaren',
  	"primary_button_link" varchar DEFAULT '#',
  	"phone_label" varchar DEFAULT '+12 345 67 89',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_locales" (
  	"version_title" varchar,
  	"version_hero_heading" varchar,
  	"version_hero_eyebrow" varchar,
  	"version_hero_description" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "posts_locales" (
  	"title" varchar,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_locales" (
  	"version_title" varchar,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "categories_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_country_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_email_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_message_locales" (
  	"message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_number_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_options_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_state_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_text_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_textarea_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_emails_locales" (
  	"subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL,
  	"message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_locales" (
  	"submit_button_label" varchar,
  	"confirmation_message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_locales" (
  	"phone" varchar DEFAULT '+43 123 456 789',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_locales" (
  	"address" varchar,
  	"phone" varchar,
  	"email" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  DROP TABLE IF EXISTS "pages_blocks_service_info_section_opening_hours" CASCADE;
  DROP TABLE IF EXISTS "_pages_v_blocks_service_info_section_opening_hours" CASCADE;
  ALTER TABLE "pages_blocks_service_info_section" DROP CONSTRAINT IF EXISTS "pages_blocks_service_info_section_doctor_card_image_id_media_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT IF EXISTS "pages_meta_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_service_info_section" DROP CONSTRAINT IF EXISTS "_pages_v_blocks_service_info_section_doctor_card_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT IF EXISTS "_pages_v_version_meta_image_id_media_id_fk";
  
  ALTER TABLE "posts" DROP CONSTRAINT IF EXISTS "posts_meta_image_id_media_id_fk";
  
  ALTER TABLE "_posts_v" DROP CONSTRAINT IF EXISTS "_posts_v_version_meta_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "pages_blocks_service_info_section_doctor_card_doctor_car_idx";
  DROP INDEX IF EXISTS "pages_meta_meta_image_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_service_info_section_doctor_card_doctor__idx";
  DROP INDEX IF EXISTS "_pages_v_version_meta_version_meta_image_idx";
  DROP INDEX IF EXISTS "posts_meta_meta_image_idx";
  DROP INDEX IF EXISTS "_posts_v_version_meta_version_meta_image_idx";
  DROP INDEX IF EXISTS "pages_rels_pages_id_idx";
  DROP INDEX IF EXISTS "pages_rels_posts_id_idx";
  DROP INDEX IF EXISTS "pages_rels_categories_id_idx";
  DROP INDEX IF EXISTS "_pages_v_rels_pages_id_idx";
  DROP INDEX IF EXISTS "_pages_v_rels_posts_id_idx";
  DROP INDEX IF EXISTS "_pages_v_rels_categories_id_idx";
  DROP INDEX IF EXISTS "header_rels_pages_id_idx";
  DROP INDEX IF EXISTS "header_rels_posts_id_idx";
  ALTER TABLE "pages_hero_links" ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
  ALTER TABLE "pages_blocks_cta_links" ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
  ALTER TABLE "pages_blocks_content_columns" ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
  ALTER TABLE "pages_blocks_kategorie_raster_kategorien" ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
  ALTER TABLE "pages_blocks_about_section_card_options" ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
  ALTER TABLE "pages_blocks_therapie_optionen_options" ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
  ALTER TABLE "pages_rels" ADD COLUMN IF NOT EXISTS "locale" "_locales";
  ALTER TABLE "_pages_v_version_hero_links" ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
  ALTER TABLE "_pages_v_blocks_cta_links" ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
  ALTER TABLE "_pages_v_blocks_content_columns" ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
  ALTER TABLE "_pages_v_blocks_kategorie_raster_kategorien" ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
  ALTER TABLE "_pages_v_blocks_about_section_card_options" ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
  ALTER TABLE "_pages_v_blocks_therapie_optionen_options" ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
  ALTER TABLE "_pages_v" ADD COLUMN IF NOT EXISTS "snapshot" boolean;
  ALTER TABLE "_pages_v" ADD COLUMN IF NOT EXISTS "published_locale" "enum__pages_v_published_locale";
  ALTER TABLE "_pages_v_rels" ADD COLUMN IF NOT EXISTS "locale" "_locales";
  ALTER TABLE "_posts_v" ADD COLUMN IF NOT EXISTS "snapshot" boolean;
  ALTER TABLE "_posts_v" ADD COLUMN IF NOT EXISTS "published_locale" "enum__posts_v_published_locale";
  ALTER TABLE "header_nav_items" ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
  ALTER TABLE "header_rels" ADD COLUMN IF NOT EXISTS "locale" "_locales";
  ALTER TABLE "footer_opening_hours" ADD COLUMN IF NOT EXISTS "_locale" "_locales" NOT NULL DEFAULT 'de';
  -- Constraints, indexes, and old-column cleanup are intentionally skipped here
  -- to make this localization migration safe for partially-migrated production databases.
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
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
  
  ALTER TABLE "pages_blocks_cta_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_archive_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_form_block_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_kategorie_raster_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_kategorie_leiste_kategorien" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_kategorie_leiste" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_kategorie_leiste_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_info_sektion_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_service_info_section_reason_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_service_info_section_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_service_text_section_list_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_service_text_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_service_text_section_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_service_f_a_q_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_service_f_a_q" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_service_f_a_q_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_service_split_list_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_service_split_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_service_split_list_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_about_section_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_therapie_optionen_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_contact_section_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_archive_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_form_block_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_kategorie_raster_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_kategorie_leiste_kategorien" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_kategorie_leiste" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_kategorie_leiste_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_info_sektion_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_service_info_section_reason_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_service_info_section_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_service_text_section_list_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_service_text_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_service_text_section_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_service_f_a_q_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_service_f_a_q" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_service_f_a_q_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_service_split_list_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_service_split_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_service_split_list_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_about_section_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_therapie_optionen_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_contact_section_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "categories_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_checkbox_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_country_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_email_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_message_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_number_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_select_options_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_select_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_state_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_text_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_textarea_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_emails_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_cta_locales" CASCADE;
  DROP TABLE "pages_blocks_archive_locales" CASCADE;
  DROP TABLE "pages_blocks_form_block_locales" CASCADE;
  DROP TABLE "pages_blocks_kategorie_raster_locales" CASCADE;
  DROP TABLE "pages_blocks_kategorie_leiste_kategorien" CASCADE;
  DROP TABLE "pages_blocks_kategorie_leiste" CASCADE;
  DROP TABLE "pages_blocks_kategorie_leiste_locales" CASCADE;
  DROP TABLE "pages_blocks_info_sektion_locales" CASCADE;
  DROP TABLE "pages_blocks_service_info_section_reason_list" CASCADE;
  DROP TABLE "pages_blocks_service_info_section_locales" CASCADE;
  DROP TABLE "pages_blocks_service_text_section_list_items" CASCADE;
  DROP TABLE "pages_blocks_service_text_section" CASCADE;
  DROP TABLE "pages_blocks_service_text_section_locales" CASCADE;
  DROP TABLE "pages_blocks_service_f_a_q_items" CASCADE;
  DROP TABLE "pages_blocks_service_f_a_q" CASCADE;
  DROP TABLE "pages_blocks_service_f_a_q_locales" CASCADE;
  DROP TABLE "pages_blocks_service_split_list_items" CASCADE;
  DROP TABLE "pages_blocks_service_split_list" CASCADE;
  DROP TABLE "pages_blocks_service_split_list_locales" CASCADE;
  DROP TABLE "pages_blocks_about_section_locales" CASCADE;
  DROP TABLE "pages_blocks_therapie_optionen_locales" CASCADE;
  DROP TABLE "pages_blocks_contact_section_locales" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_archive_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_form_block_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_kategorie_raster_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_kategorie_leiste_kategorien" CASCADE;
  DROP TABLE "_pages_v_blocks_kategorie_leiste" CASCADE;
  DROP TABLE "_pages_v_blocks_kategorie_leiste_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_info_sektion_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_service_info_section_reason_list" CASCADE;
  DROP TABLE "_pages_v_blocks_service_info_section_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_service_text_section_list_items" CASCADE;
  DROP TABLE "_pages_v_blocks_service_text_section" CASCADE;
  DROP TABLE "_pages_v_blocks_service_text_section_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_service_f_a_q_items" CASCADE;
  DROP TABLE "_pages_v_blocks_service_f_a_q" CASCADE;
  DROP TABLE "_pages_v_blocks_service_f_a_q_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_service_split_list_items" CASCADE;
  DROP TABLE "_pages_v_blocks_service_split_list" CASCADE;
  DROP TABLE "_pages_v_blocks_service_split_list_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_about_section_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_therapie_optionen_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_section_locales" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "posts_locales" CASCADE;
  DROP TABLE "_posts_v_locales" CASCADE;
  DROP TABLE "categories_locales" CASCADE;
  DROP TABLE "forms_blocks_checkbox_locales" CASCADE;
  DROP TABLE "forms_blocks_country_locales" CASCADE;
  DROP TABLE "forms_blocks_email_locales" CASCADE;
  DROP TABLE "forms_blocks_message_locales" CASCADE;
  DROP TABLE "forms_blocks_number_locales" CASCADE;
  DROP TABLE "forms_blocks_select_options_locales" CASCADE;
  DROP TABLE "forms_blocks_select_locales" CASCADE;
  DROP TABLE "forms_blocks_state_locales" CASCADE;
  DROP TABLE "forms_blocks_text_locales" CASCADE;
  DROP TABLE "forms_blocks_textarea_locales" CASCADE;
  DROP TABLE "forms_emails_locales" CASCADE;
  DROP TABLE "forms_locales" CASCADE;
  DROP TABLE "header_locales" CASCADE;
  DROP TABLE "footer_locales" CASCADE;
  DROP INDEX "pages_hero_links_locale_idx";
  DROP INDEX "pages_blocks_cta_links_locale_idx";
  DROP INDEX "pages_blocks_content_columns_locale_idx";
  DROP INDEX "pages_blocks_kategorie_raster_kategorien_locale_idx";
  DROP INDEX "pages_blocks_about_section_card_options_locale_idx";
  DROP INDEX "pages_blocks_therapie_optionen_options_locale_idx";
  DROP INDEX "pages_rels_locale_idx";
  DROP INDEX "_pages_v_version_hero_links_locale_idx";
  DROP INDEX "_pages_v_blocks_cta_links_locale_idx";
  DROP INDEX "_pages_v_blocks_content_columns_locale_idx";
  DROP INDEX "_pages_v_blocks_kategorie_raster_kategorien_locale_idx";
  DROP INDEX "_pages_v_blocks_about_section_card_options_locale_idx";
  DROP INDEX "_pages_v_blocks_therapie_optionen_options_locale_idx";
  DROP INDEX "_pages_v_snapshot_idx";
  DROP INDEX "_pages_v_published_locale_idx";
  DROP INDEX "_pages_v_rels_locale_idx";
  DROP INDEX "_posts_v_snapshot_idx";
  DROP INDEX "_posts_v_published_locale_idx";
  DROP INDEX "header_nav_items_locale_idx";
  DROP INDEX "header_rels_locale_idx";
  DROP INDEX "footer_opening_hours_locale_idx";
  DROP INDEX "pages_rels_pages_id_idx";
  DROP INDEX "pages_rels_posts_id_idx";
  DROP INDEX "pages_rels_categories_id_idx";
  DROP INDEX "_pages_v_rels_pages_id_idx";
  DROP INDEX "_pages_v_rels_posts_id_idx";
  DROP INDEX "_pages_v_rels_categories_id_idx";
  DROP INDEX "header_rels_pages_id_idx";
  DROP INDEX "header_rels_posts_id_idx";
  ALTER TABLE "pages_blocks_cta" ADD COLUMN "rich_text" jsonb;
  ALTER TABLE "pages_blocks_archive" ADD COLUMN "intro_content" jsonb;
  ALTER TABLE "pages_blocks_form_block" ADD COLUMN "intro_content" jsonb;
  ALTER TABLE "pages_blocks_kategorie_raster" ADD COLUMN "ueberschrift" varchar;
  ALTER TABLE "pages_blocks_info_sektion" ADD COLUMN "dachzeile" varchar;
  ALTER TABLE "pages_blocks_info_sektion" ADD COLUMN "ueberschrift" varchar;
  ALTER TABLE "pages_blocks_info_sektion" ADD COLUMN "beschreibung" varchar;
  ALTER TABLE "pages_blocks_info_sektion" ADD COLUMN "link_label" varchar;
  ALTER TABLE "pages_blocks_info_sektion" ADD COLUMN "link_url" varchar;
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "eyebrow" varchar DEFAULT 'IHR SPEZIALIST FUR ORTHOPADIE';
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "intro_heading" varchar;
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "intro_description" varchar;
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "reason_heading" varchar;
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "reason_body" varchar;
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "doctor_card_image_id" integer;
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "doctor_card_name" varchar;
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "doctor_card_specialty" varchar;
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "doctor_card_subtitle" varchar;
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "doctor_card_description" varchar;
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "doctor_card_link_label" varchar DEFAULT 'Uber Dr. Lorem Ipsum';
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "doctor_card_link_url" varchar DEFAULT '#';
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "primary_button_label" varchar DEFAULT 'Jetzt Beratungstermin vereinbaren';
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "primary_button_link" varchar DEFAULT '#';
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "opening_hours_heading" varchar DEFAULT 'Ordinationszeiten';
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "contact_heading" varchar DEFAULT 'Kontakt';
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "address" varchar;
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "phone" varchar;
  ALTER TABLE "pages_blocks_service_info_section" ADD COLUMN "email" varchar;
  ALTER TABLE "pages_blocks_about_section" ADD COLUMN "eyebrow" varchar DEFAULT 'IHR SPEZIALIST FÜR ORTHOPÄDIE';
  ALTER TABLE "pages_blocks_about_section" ADD COLUMN "heading" varchar;
  ALTER TABLE "pages_blocks_about_section" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_blocks_about_section" ADD COLUMN "doctor_button_label" varchar;
  ALTER TABLE "pages_blocks_about_section" ADD COLUMN "doctor_button_link" varchar DEFAULT '#';
  ALTER TABLE "pages_blocks_therapie_optionen" ADD COLUMN "eyebrow" varchar DEFAULT 'BEHANDLUNGSMÖGLICHKEITEN';
  ALTER TABLE "pages_blocks_therapie_optionen" ADD COLUMN "heading" varchar;
  ALTER TABLE "pages_blocks_therapie_optionen" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_blocks_contact_section" ADD COLUMN "eyebrow" varchar DEFAULT 'OrthoMed';
  ALTER TABLE "pages_blocks_contact_section" ADD COLUMN "heading" varchar DEFAULT 'Wir freuen uns auf Ihre Kontaktaufnahme!';
  ALTER TABLE "pages_blocks_contact_section" ADD COLUMN "subtext" varchar DEFAULT 'ALLE KASSEN UND PRIVAT';
  ALTER TABLE "pages_blocks_contact_section" ADD COLUMN "primary_button_label" varchar DEFAULT 'Online Termin vereinbaren';
  ALTER TABLE "pages_blocks_contact_section" ADD COLUMN "primary_button_link" varchar DEFAULT '#';
  ALTER TABLE "pages_blocks_contact_section" ADD COLUMN "phone_label" varchar DEFAULT '+12 345 67 89';
  ALTER TABLE "pages" ADD COLUMN "title" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_heading" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_eyebrow" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "pages" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "pages" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "_pages_v_blocks_cta" ADD COLUMN "rich_text" jsonb;
  ALTER TABLE "_pages_v_blocks_archive" ADD COLUMN "intro_content" jsonb;
  ALTER TABLE "_pages_v_blocks_form_block" ADD COLUMN "intro_content" jsonb;
  ALTER TABLE "_pages_v_blocks_kategorie_raster" ADD COLUMN "ueberschrift" varchar;
  ALTER TABLE "_pages_v_blocks_info_sektion" ADD COLUMN "dachzeile" varchar;
  ALTER TABLE "_pages_v_blocks_info_sektion" ADD COLUMN "ueberschrift" varchar;
  ALTER TABLE "_pages_v_blocks_info_sektion" ADD COLUMN "beschreibung" varchar;
  ALTER TABLE "_pages_v_blocks_info_sektion" ADD COLUMN "link_label" varchar;
  ALTER TABLE "_pages_v_blocks_info_sektion" ADD COLUMN "link_url" varchar;
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "eyebrow" varchar DEFAULT 'IHR SPEZIALIST FUR ORTHOPADIE';
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "intro_heading" varchar;
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "intro_description" varchar;
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "reason_heading" varchar;
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "reason_body" varchar;
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "doctor_card_image_id" integer;
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "doctor_card_name" varchar;
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "doctor_card_specialty" varchar;
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "doctor_card_subtitle" varchar;
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "doctor_card_description" varchar;
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "doctor_card_link_label" varchar DEFAULT 'Uber Dr. Lorem Ipsum';
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "doctor_card_link_url" varchar DEFAULT '#';
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "primary_button_label" varchar DEFAULT 'Jetzt Beratungstermin vereinbaren';
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "primary_button_link" varchar DEFAULT '#';
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "opening_hours_heading" varchar DEFAULT 'Ordinationszeiten';
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "contact_heading" varchar DEFAULT 'Kontakt';
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "address" varchar;
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "phone" varchar;
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD COLUMN "email" varchar;
  ALTER TABLE "_pages_v_blocks_about_section" ADD COLUMN "eyebrow" varchar DEFAULT 'IHR SPEZIALIST FÜR ORTHOPÄDIE';
  ALTER TABLE "_pages_v_blocks_about_section" ADD COLUMN "heading" varchar;
  ALTER TABLE "_pages_v_blocks_about_section" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_blocks_about_section" ADD COLUMN "doctor_button_label" varchar;
  ALTER TABLE "_pages_v_blocks_about_section" ADD COLUMN "doctor_button_link" varchar DEFAULT '#';
  ALTER TABLE "_pages_v_blocks_therapie_optionen" ADD COLUMN "eyebrow" varchar DEFAULT 'BEHANDLUNGSMÖGLICHKEITEN';
  ALTER TABLE "_pages_v_blocks_therapie_optionen" ADD COLUMN "heading" varchar;
  ALTER TABLE "_pages_v_blocks_therapie_optionen" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_blocks_contact_section" ADD COLUMN "eyebrow" varchar DEFAULT 'OrthoMed';
  ALTER TABLE "_pages_v_blocks_contact_section" ADD COLUMN "heading" varchar DEFAULT 'Wir freuen uns auf Ihre Kontaktaufnahme!';
  ALTER TABLE "_pages_v_blocks_contact_section" ADD COLUMN "subtext" varchar DEFAULT 'ALLE KASSEN UND PRIVAT';
  ALTER TABLE "_pages_v_blocks_contact_section" ADD COLUMN "primary_button_label" varchar DEFAULT 'Online Termin vereinbaren';
  ALTER TABLE "_pages_v_blocks_contact_section" ADD COLUMN "primary_button_link" varchar DEFAULT '#';
  ALTER TABLE "_pages_v_blocks_contact_section" ADD COLUMN "phone_label" varchar DEFAULT '+12 345 67 89';
  ALTER TABLE "_pages_v" ADD COLUMN "version_title" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_heading" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_eyebrow" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_image_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_description" varchar;
  ALTER TABLE "posts" ADD COLUMN "title" varchar;
  ALTER TABLE "posts" ADD COLUMN "content" jsonb;
  ALTER TABLE "posts" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "posts" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "posts" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_title" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_content" jsonb;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_image_id" integer;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_description" varchar;
  ALTER TABLE "categories" ADD COLUMN "title" varchar NOT NULL;
  ALTER TABLE "forms_blocks_checkbox" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_country" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_email" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_message" ADD COLUMN "message" jsonb;
  ALTER TABLE "forms_blocks_number" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_select_options" ADD COLUMN "label" varchar NOT NULL;
  ALTER TABLE "forms_blocks_select" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_select" ADD COLUMN "default_value" varchar;
  ALTER TABLE "forms_blocks_state" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_text" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_text" ADD COLUMN "default_value" varchar;
  ALTER TABLE "forms_blocks_textarea" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_textarea" ADD COLUMN "default_value" varchar;
  ALTER TABLE "forms_emails" ADD COLUMN "subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL;
  ALTER TABLE "forms_emails" ADD COLUMN "message" jsonb;
  ALTER TABLE "forms" ADD COLUMN "submit_button_label" varchar;
  ALTER TABLE "forms" ADD COLUMN "confirmation_message" jsonb;
  ALTER TABLE "header" ADD COLUMN "phone" varchar DEFAULT '+43 123 456 789';
  ALTER TABLE "footer" ADD COLUMN "address" varchar;
  ALTER TABLE "footer" ADD COLUMN "phone" varchar;
  ALTER TABLE "footer" ADD COLUMN "email" varchar;
  ALTER TABLE "pages_blocks_service_info_section_opening_hours" ADD CONSTRAINT "pages_blocks_service_info_section_opening_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_service_info_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_info_section_opening_hours" ADD CONSTRAINT "_pages_v_blocks_service_info_section_opening_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_service_info_section"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX IF NOT EXISTS "pages_blocks_service_info_section_opening_hours_order_idx" ON "pages_blocks_service_info_section_opening_hours" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_service_info_section_opening_hours_parent_id_idx" ON "pages_blocks_service_info_section_opening_hours" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_info_section_opening_hours_order_idx" ON "_pages_v_blocks_service_info_section_opening_hours" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_info_section_opening_hours_parent_id_idx" ON "_pages_v_blocks_service_info_section_opening_hours" USING btree ("_parent_id");
  ALTER TABLE "pages_blocks_service_info_section" ADD CONSTRAINT "pages_blocks_service_info_section_doctor_card_image_id_media_id_fk" FOREIGN KEY ("doctor_card_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_info_section" ADD CONSTRAINT "_pages_v_blocks_service_info_section_doctor_card_image_id_media_id_fk" FOREIGN KEY ("doctor_card_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX IF NOT EXISTS "pages_blocks_service_info_section_doctor_card_doctor_car_idx" ON "pages_blocks_service_info_section" USING btree ("doctor_card_image_id");
  CREATE INDEX IF NOT EXISTS "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_service_info_section_doctor_card_doctor__idx" ON "_pages_v_blocks_service_info_section" USING btree ("doctor_card_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "posts_meta_meta_image_idx" ON "posts" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_categories_id_idx" ON "_pages_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id");
  ALTER TABLE "pages_hero_links" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "pages_blocks_cta_links" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "pages_blocks_content_columns" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "pages_blocks_kategorie_raster_kategorien" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "pages_blocks_about_section_card_options" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "pages_blocks_therapie_optionen_options" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "locale";
  ALTER TABLE "_pages_v_version_hero_links" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "_pages_v_blocks_cta_links" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "_pages_v_blocks_content_columns" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "_pages_v_blocks_kategorie_raster_kategorien" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "_pages_v_blocks_about_section_card_options" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "_pages_v_blocks_therapie_optionen_options" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "snapshot";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "published_locale";
  ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "locale";
  ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "snapshot";
  ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "published_locale";
  ALTER TABLE "header_nav_items" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "header_rels" DROP COLUMN IF EXISTS "locale";
  ALTER TABLE "footer_opening_hours" DROP COLUMN IF EXISTS "_locale";
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."enum__posts_v_published_locale";`)
}
