/*
  Warnings:

  - Added the required column `plaid_id` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "plaid_id" INTEGER NOT NULL,
ALTER COLUMN "user_id" SET DATA TYPE TEXT;
