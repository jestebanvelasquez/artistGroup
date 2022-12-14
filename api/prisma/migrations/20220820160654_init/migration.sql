-- CreateEnum
CREATE TYPE "Tiempo" AS ENUM ('dias', 'horas', 'minutos');

-- CreateTable
CREATE TABLE "Persona" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "lastname" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "isAvaliable" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Persona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "token" TEXT,
    "idPersona" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artista" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(500),
    "img" VARCHAR(255) NOT NULL,
    "idUsuario" TEXT NOT NULL,

    CONSTRAINT "Artista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eventos" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "lugar" VARCHAR(255) NOT NULL,
    "imagesEvent" TEXT[],
    "duration" REAL NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "price" REAL NOT NULL,
    "tiempo" "Tiempo" NOT NULL DEFAULT 'horas',
    "artistaId" TEXT NOT NULL,

    CONSTRAINT "Eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioEventos" (
    "userId" TEXT NOT NULL,
    "idEvento" TEXT NOT NULL,

    CONSTRAINT "UsuarioEventos_pkey" PRIMARY KEY ("userId","idEvento")
);

-- CreateTable
CREATE TABLE "EventosCategorias" (
    "idEvento" TEXT NOT NULL,
    "idCategoria" TEXT NOT NULL,

    CONSTRAINT "EventosCategorias_pkey" PRIMARY KEY ("idEvento","idCategoria")
);

-- CreateTable
CREATE TABLE "Categorias" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Compras" (
    "id" TEXT NOT NULL,
    "code" VARCHAR(255) NOT NULL,

    CONSTRAINT "Compras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventosCompras" (
    "id" TEXT NOT NULL,
    "idEvento" TEXT NOT NULL,
    "idCompra" TEXT NOT NULL,
    "idUsuario" TEXT NOT NULL,

    CONSTRAINT "EventosCompras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" TEXT NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RolesUsuarios" (
    "idRol" TEXT NOT NULL,
    "idUsuario" TEXT NOT NULL,

    CONSTRAINT "RolesUsuarios_pkey" PRIMARY KEY ("idRol","idUsuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idPersona_key" ON "Usuario"("idPersona");

-- CreateIndex
CREATE UNIQUE INDEX "Artista_name_key" ON "Artista"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Artista_idUsuario_key" ON "Artista"("idUsuario");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idPersona_fkey" FOREIGN KEY ("idPersona") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artista" ADD CONSTRAINT "Artista_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eventos" ADD CONSTRAINT "Eventos_artistaId_fkey" FOREIGN KEY ("artistaId") REFERENCES "Artista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioEventos" ADD CONSTRAINT "UsuarioEventos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioEventos" ADD CONSTRAINT "UsuarioEventos_idEvento_fkey" FOREIGN KEY ("idEvento") REFERENCES "Eventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventosCategorias" ADD CONSTRAINT "EventosCategorias_idEvento_fkey" FOREIGN KEY ("idEvento") REFERENCES "Eventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventosCategorias" ADD CONSTRAINT "EventosCategorias_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventosCompras" ADD CONSTRAINT "EventosCompras_idEvento_fkey" FOREIGN KEY ("idEvento") REFERENCES "Eventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventosCompras" ADD CONSTRAINT "EventosCompras_idCompra_fkey" FOREIGN KEY ("idCompra") REFERENCES "Compras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventosCompras" ADD CONSTRAINT "EventosCompras_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolesUsuarios" ADD CONSTRAINT "RolesUsuarios_idRol_fkey" FOREIGN KEY ("idRol") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolesUsuarios" ADD CONSTRAINT "RolesUsuarios_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
