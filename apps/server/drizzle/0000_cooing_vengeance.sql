CREATE TYPE "public"."type" AS ENUM('stock');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('active', 'disabled');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('user', 'manager', 'admin');--> statement-breakpoint
CREATE TABLE "images" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"key" text,
	"url" text NOT NULL,
	"type" "type",
	"order" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "lab" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"professor" varchar,
	"major" varchar,
	"school_name" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "stock" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"importer_company" varchar(100),
	"order_type" varchar(30),
	"vendor" varchar(100),
	"catalog_id" varchar,
	"quantity" integer,
	"image" uuid,
	"minimum_quantity" integer,
	"maximum_quantity" integer,
	"description" varchar(400),
	"lab" integer,
	"extra" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "supplier" (
	"id" serial PRIMARY KEY NOT NULL,
	"vendor" varchar,
	"description" varchar,
	"lab" integer
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"student_number" varchar(15) NOT NULL,
	"password" varchar(40),
	"role" "role",
	"status" "status",
	"lab" integer,
	"last_login_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp,
	CONSTRAINT "users_student_number_lab_unique" UNIQUE("student_number","lab")
);
--> statement-breakpoint
ALTER TABLE "stock" ADD CONSTRAINT "stock_image_images_id_fk" FOREIGN KEY ("image") REFERENCES "public"."images"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "stock" ADD CONSTRAINT "stock_lab_lab_id_fk" FOREIGN KEY ("lab") REFERENCES "public"."lab"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "supplier" ADD CONSTRAINT "supplier_lab_lab_id_fk" FOREIGN KEY ("lab") REFERENCES "public"."lab"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_lab_lab_id_fk" FOREIGN KEY ("lab") REFERENCES "public"."lab"("id") ON DELETE no action ON UPDATE no action;