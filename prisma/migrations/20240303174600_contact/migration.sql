-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "urlLinkedin" TEXT NOT NULL,
    "urlGmail" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contact_teacherId_key" ON "Contact"("teacherId");

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
