/*
  Warnings:

  - Added the required column `slug` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
