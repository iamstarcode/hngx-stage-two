-- CreateTable
CREATE TABLE "Person" (
    "user_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("user_id")
);
