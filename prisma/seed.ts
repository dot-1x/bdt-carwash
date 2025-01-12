import { JenisKendaraan, PrismaClient, Role } from "@prisma/client"
import bcrypt, { genSalt } from "bcryptjs"

const prisma = new PrismaClient()
async function main() {
  const password = "superadmin"
  const salt = await genSalt(6)
  const hashed = await bcrypt.hash(password, salt)
  await prisma.admin.create({
    data: {
      nama: "superadmin",
      username: "superadmin",
      password: hashed,
      role: Role.SUPERADMIN,
    },
  })
  await prisma.customer.createMany({
    data: [
      {
        nama: "Alice Wonderland",
        alamat: "10 Downing Street",
        telephon: "555-0001",
      },
      {
        nama: "Bob Marley",
        alamat: "420 Green Street",
        telephon: "555-0420",
      },
      {
        nama: "Charlie Chaplin",
        alamat: "22 Baker Street",
        telephon: "555-1920",
      },
    ],
  })

  await prisma.karyawan.createMany({
    data: [
      {
        nama: "John Worker",
        status: "Full-time",
        shift: "Morning",
      },
      {
        nama: "Jane Helper",
        status: "Part-time",
        shift: "Evening",
      },
      {
        nama: "Dave Supervisor",
        status: "Full-time",
        shift: "Night",
      },
    ],
  })

  await prisma.kendaraan.createMany({
    data: [
      {
        merk: "Toyota",
        jenis: JenisKendaraan.MOBIL,
        plat: "B1234ABC",
        id_customer: 1,
      },
      {
        merk: "Honda",
        jenis: JenisKendaraan.MOTOR,
        plat: "B5678DEF",
        id_customer: 2,
      },
      {
        merk: "Suzuki",
        jenis: JenisKendaraan.BUS,
        plat: "B9012GHI",
        id_customer: 3,
      },
    ],
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
