-- CreateEnum
CREATE TYPE "role" AS ENUM ('user', 'manager', 'admin');

-- CreateEnum
CREATE TYPE "status" AS ENUM ('active', 'disabled');

-- CreateEnum
CREATE TYPE "type" AS ENUM ('stock');

-- CreateTable
CREATE TABLE "images" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "key" TEXT,
    "url" TEXT NOT NULL,
    "type" "type",
    "order" INTEGER DEFAULT 0,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lab" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,
    "professor" VARCHAR,
    "major" VARCHAR,
    "school_name" VARCHAR,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "lab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stock" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "importer_company" VARCHAR(100),
    "order_type" VARCHAR(30),
    "vendor" VARCHAR(100),
    "catalog_id" VARCHAR,
    "quantity" INTEGER,
    "image" UUID,
    "minimum_quantity" INTEGER,
    "maximum_quantity" INTEGER,
    "description" VARCHAR(400),
    "lab" INTEGER,
    "extra" JSONB,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplier" (
    "id" SERIAL NOT NULL,
    "vendor" VARCHAR,
    "description" VARCHAR,
    "lab" INTEGER,

    CONSTRAINT "supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "student_number" VARCHAR(15) NOT NULL,
    "password" VARCHAR(100),
    "role" "role",
    "status" "status",
    "lab" INTEGER,
    "last_login_at" TIMESTAMP(6),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_student_number_lab_unique" ON "users"("student_number", "lab");

-- AddForeignKey
ALTER TABLE "stock" ADD CONSTRAINT "stock_image_images_id_fk" FOREIGN KEY ("image") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "stock" ADD CONSTRAINT "stock_lab_lab_id_fk" FOREIGN KEY ("lab") REFERENCES "lab"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "supplier" ADD CONSTRAINT "supplier_lab_lab_id_fk" FOREIGN KEY ("lab") REFERENCES "lab"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_lab_lab_id_fk" FOREIGN KEY ("lab") REFERENCES "lab"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
