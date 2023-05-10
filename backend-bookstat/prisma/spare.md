generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider          = "postgresql"
  url               = env("DATABASE_URL")
  shadowDatabaseUrl = env("SHADOW_DATABASE_URL")
}

enum ReadStatus {
    READ
    NOT_READ
    TO-BE_READ
    CURRENTLY_READING
}

model User {
  id            Int             @id @default(autoincrement())
  email         String          @unique
  password      String
  profile       Profile?   
  reviews       Reviews[]
  ratedBooks    Ratings[]
}

model Profile {
  id        Int     @id @default(autoincrement())
  userId    Int     @unique
  user      User    @relation(fields: [userId], references: [id])
  firstName String
  lastName  String
  bio       String?
}

model Book {
  id            Int             @id @default(autoincrement())
  title
  authorFirstName
  authorLastName
  cover_url
  numPages
  ReadStatus
  createdAt  DateTime   @default(now())
  updatedAt  DateTime   @updatedAt
}

model Tags {
  id            Int             @id @default(autoincrement())
  tag           String
}

model Reviews {
  id            Int             @id @default(autoincrement())
  content       String
  userId        Int
  user          User            @relation(fields; [userId], references: [id])
  book          Book            @relation(fields; [bookId], references: [id])
  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt
}

model Ratings {
  id            Int             @id @default(autoincrement())
  rating        Int
}

model TagOnBook {
  userId    Int
  user      User     @relation(fields: [userId], references: [id])
  postId    Int
  post      Post     @relation(fields: [postId], references: [id])
  createdAt DateTime @default(now())

  @@id([userId, postId])
}

model RatingOfBook {
 userId    Int
  user      User     @relation(fields: [userId], references: [id])
  bookId    Int
  book      Book     @relation(fields: [bookId], references: [id])
  createdAt DateTime @default(now())

  @@id([userId, bookId])
}