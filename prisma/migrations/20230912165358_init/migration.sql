-- CreateTable
CREATE TABLE "Person" (
    "user_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("user_id")
);
