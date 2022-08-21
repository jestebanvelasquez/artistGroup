/*
  Warnings:

  - You are about to drop the column `isAvaliable` on the `Persona` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Persona" DROP COLUMN "isAvaliable";

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "isAvaliable" BOOLEAN NOT NULL DEFAULT true;
