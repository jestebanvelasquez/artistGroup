/*
  Warnings:

  - You are about to drop the column `isAvaliable` on the `Usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Persona" ADD COLUMN     "isAvaliable" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "isAvaliable";
