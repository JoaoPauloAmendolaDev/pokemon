-- CreateTable
CREATE TABLE "pokemon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pokedex_id" INTEGER NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team" (
    "id" SERIAL NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemon_team" (
    "id" SERIAL NOT NULL,
    "pokemon_id" INTEGER NOT NULL,
    "team_id" INTEGER NOT NULL,

    CONSTRAINT "pokemon_team_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_pokedex_id_key" ON "pokemon"("pokedex_id");

-- CreateIndex
CREATE INDEX "pokemon_pokedex_id_idx" ON "pokemon"("pokedex_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_owner_key" ON "team"("owner");

-- CreateIndex
CREATE INDEX "pokemon_team_pokemon_id_team_id_idx" ON "pokemon_team"("pokemon_id", "team_id");

-- AddForeignKey
ALTER TABLE "pokemon_team" ADD CONSTRAINT "pokemon_team_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("pokedex_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_team" ADD CONSTRAINT "pokemon_team_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
