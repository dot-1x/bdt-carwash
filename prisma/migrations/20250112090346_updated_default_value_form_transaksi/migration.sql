-- DropForeignKey
ALTER TABLE "Kendaraan" DROP CONSTRAINT "Kendaraan_id_customer_fkey";

-- AlterTable
ALTER TABLE "Transaksi" ALTER COLUMN "tanggal" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "metode" SET DEFAULT 'tunai';

-- AddForeignKey
ALTER TABLE "Kendaraan" ADD CONSTRAINT "Kendaraan_id_customer_fkey" FOREIGN KEY ("id_customer") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
