-- CreateTable
CREATE TABLE "Person" (
    "person_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("person_id")
);
