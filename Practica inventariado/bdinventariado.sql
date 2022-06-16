-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-06-2022 a las 23:21:13
-- Versión del servidor: 10.1.35-MariaDB
-- Versión de PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdinventariado`
--

-- --------------------------------------------------------

drop database if exists bdinventariado;

CREATE DATABASE IF NOT EXISTS `bdinventariado` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bdinventariado`;

--
-- Estructura de tabla para la tabla `ubicacion`
--

CREATE TABLE `ubicacion` (
  `id` int(9) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ubicacion`
--

INSERT INTO `ubicacion` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Sevilla', 'Calle Juan, 13'),
(2, 'Madrid', 'Calle Ramon, 87'),
(3, 'Zaragoza', 'Avenida de la Paz, 65'),
(4, 'Murcia', 'Calle Julian, 113');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(9) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellidos` varchar(60) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `telefono` int(9) NOT NULL,
  `departamento` varchar(30) NOT NULL,
  `anotaciones` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellidos`, `correo`, `telefono`, `departamento`, `anotaciones`) VALUES
(1, 'Carlos', 'Montoya', 'carmon@empresa1.com', 675489123, 'Produccion', ''),
(2, 'Juan', 'Martin', 'juamar@empresa1.com', 678945123, 'Administracion', 'Buen trabajador'),
(3, 'Alfredo', 'Perez', 'Alfper@empresa.com', 632145789, 'RRPP', 'Buen trato al publico'),
(4, 'Francisco', 'Aguilar', 'fraagu@empresa1.com', 654789123, 'Produccion', ''),
(5, 'Rafa', 'Gutierrez', 'rafgut@empresa1.com', 654789123, 'RRPP', 'Un poco flojo'),
(6, 'Elena', 'Delgado', 'eledel@empresa1.com', 654789123, 'Produccion', ''),
(7, 'Manuel', 'Sanchez', 'Mansan@empresa1.com', 654789123, 'Administracion', ''),
(8, 'Javier', 'Gonzalez', 'javgon@empresa1.com', 634512789, 'Produccion', ''),
(9, 'Francisco', 'Garcia', 'fragar@empresa1.com', 654879321, 'Marketing', ''),
(10, 'Paco', 'Jimenez', 'pacjim@empresa1.com', 645789123, 'Financiero', ''),
(11, 'Julian', 'Del pino', 'juldel@empresa1.com', 645123789, 'Produccion', '');

--
-- Estructura de tabla para la tabla `equipo`
--

CREATE TABLE `equipo` (
  `id` int(9) NOT NULL,
  `ip` varchar(15) NOT NULL,
  `mac` varchar(17) NOT NULL,
  `procesador` varchar(60) NOT NULL,
  `ram` varchar(60) NOT NULL,
  `almacenamiento` varchar(60) NOT NULL,
  `servidor` varchar(2) NOT NULL,
  `anotaciones` varchar(255) NOT NULL,
  `fkusuario` int(9) NOT NULL,
  `fkubicacion` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `equipo`
--

INSERT INTO `equipo` (`id`, `ip`, `mac`, `procesador`, `ram`, `almacenamiento`, `servidor`, `anotaciones`, `fkusuario`, `fkubicacion`) VALUES
(1, '192.168.100.10', '00:00:00:00:00:01', 'AMD Ryzen 5 3600', '8GB HyperX DDR4 a 2400Mhz', 'Seagate 500MB HDD', 'No', '', 3, 2),
(2, '192.168.100.11', '00:00:00:00:00:02', 'Intel core i5 6600', 'Kingston FURY Beast RGB DDR4 3200 Mhz 8 GB', 'Seagate 1TB HDD', 'No', '', 10, 2),
(3, '192.168.100.12', '00:00:00:00:00:03', 'Intel core i3 8100', '16GB Corsair Vengeance LPX DDR4 a 3200Mhz', 'Seagate 1TB HDD', 'No', '', 5, 2),
(4, '192.168.100.13', '00:00:00:00:00:04', 'AMD Ryzen 7 5800X', '32GB Team Group DDR4 3200 MHz', '512GB Nfortec M2 y Seagate 4TB HDD', 'Si', '', 6, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `instala`
--

CREATE TABLE `instala` (
  `idequipo` int(9) NOT NULL,
  `idsoftware` int(9) NOT NULL,
  `fechainstalacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `instala`
--

INSERT INTO `instala` (`idequipo`, `idsoftware`, `fechainstalacion`) VALUES
(1, 1, '2022-06-01'),
(2, 2, '2022-06-01'),
(2, 3, '2022-06-02'),
(2, 5, '2022-06-03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `software`
--

CREATE TABLE `software` (
  `id` int(9) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `software`
--

INSERT INTO `software` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Chrome', 'Navegador'),
(2, 'Firefox', 'Navegador'),
(3, 'XAMPP', 'Software que hace muchas cosas'),
(4, 'Opera', 'Navegador'),
(5, 'Visual studio code', 'Software para codificar'),
(6, 'Sublime Text', 'Software para codificar');

-- --------------------------------------------------------

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkusuario` (`fkusuario`) USING BTREE,
  ADD KEY `fkubicacion` (`fkubicacion`) USING BTREE;

--
-- Indices de la tabla `instala`
--
ALTER TABLE `instala`
  ADD PRIMARY KEY (`idequipo`,`idsoftware`),
  ADD KEY `fksoftware` (`idsoftware`) USING BTREE,
  ADD KEY `fkequipo` (`idequipo`) USING BTREE;

--
-- Indices de la tabla `software`
--
ALTER TABLE `software`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `equipo`
--
ALTER TABLE `equipo`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `software`
--
ALTER TABLE `software`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD CONSTRAINT `fkubicacion` FOREIGN KEY (`fkubicacion`) REFERENCES `ubicacion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkusuario` FOREIGN KEY (`fkusuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `instala`
--
ALTER TABLE `instala`
  ADD CONSTRAINT `fkequipo` FOREIGN KEY (`idequipo`) REFERENCES `equipo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fksoftware` FOREIGN KEY (`idsoftware`) REFERENCES `software` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
