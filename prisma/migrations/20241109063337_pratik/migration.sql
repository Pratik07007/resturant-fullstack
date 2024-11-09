-- CreateEnum
CREATE TYPE "MenuCategory" AS ENUM ('DRINK', 'DESSERT', 'VEG', 'NON_VEG', 'APPETIZER', 'MAIN_COURSE', 'SALAD', 'SOUP', 'SNACK', 'SEAFOOD', 'PASTA', 'PIZZA', 'GRILL', 'BEVERAGE');

-- CreateTable
CREATE TABLE "Menu" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "desciption" TEXT NOT NULL,
    "category" "MenuCategory" NOT NULL DEFAULT 'DRINK',

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);
