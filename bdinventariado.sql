-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-10-2022 a las 21:54:54
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

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `id` int(9) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Administracion', 'Departamento que se encarga de organizar el trabajo de la empresa'),
(2, 'Produccion', 'Departamento que se encarga de la produccion de la empresa'),
(3, 'RRPP', 'Departamento que se encarga de la relaciones publicas de la empresa'),
(4, 'Financiero', 'Departamento que se encarga de llevar las cuentas de la empresa'),
(5, 'Marketing', 'Departamento que se encarga de crear campañas comerciales');

-- --------------------------------------------------------

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
  `fkSede` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `equipo`
--

INSERT INTO `equipo` (`id`, `ip`, `mac`, `procesador`, `ram`, `almacenamiento`, `servidor`, `anotaciones`, `fkusuario`, `fkSede`) VALUES
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
(2, 3, '2022-06-02'),
(2, 5, '2022-06-08'),
(3, 5, '2022-06-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sede`
--

CREATE TABLE `sede` (
  `id` int(9) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sede`
--

INSERT INTO `sede` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Sevilla', 'Calle Juan, 13'),
(2, 'Madrid', 'Calle Ramon, 87'),
(3, 'Zaragoza', 'Avenida de la Paz, 65'),
(4, 'Murcia', 'Calle Julian, 113');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `software`
--

CREATE TABLE `software` (
  `id` int(9) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `Version` varchar(20) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `software`
--

INSERT INTO `software` (`id`, `nombre`, `descripcion`, `Version`) VALUES
(1, 'Chrome', 'Navegador', 'Version 10.0'),
(2, 'Firefox', 'Navegador', ''),
(3, 'XAMPP', 'Software que hace muchas cosas', ''),
(4, 'Opera', 'Navegador', ''),
(5, 'Visual studio code', 'Software para codificar', ''),
(6, 'Sublime Text', 'Software para codificar', '');

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
  `departamento` int(9) NOT NULL,
  `anotaciones` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellidos`, `correo`, `telefono`, `departamento`, `anotaciones`) VALUES
(1, 'Carlos', 'Montoya', 'carmon@empresa1.com', 675489123, 2, ''),
(2, 'Juan', 'Martin', 'juamar@empresa1.com', 678945123, 1, 'Buen trabajador'),
(3, 'Alfredo', 'Perez', 'Alfper@empresa.com', 632145789, 3, 'Buen trato al publico'),
(4, 'Francisco', 'Aguilar', 'fraagu@empresa1.com', 654789123, 2, ''),
(5, 'Rafa', 'Gutierrez', 'rafgut@empresa1.com', 654789123, 3, 'Un poco flojo'),
(6, 'Elena', 'Delgado', 'eledel@empresa1.com', 654789123, 2, ''),
(7, 'Manuel', 'Sanchez', 'Mansan@empresa1.com', 654789123, 1, ''),
(8, 'Javier', 'Gonzalez', 'javgon@empresa1.com', 634512789, 2, ''),
(9, 'Francisco', 'Garcia', 'fragar@empresa1.com', 654879321, 4, ''),
(10, 'Paco', 'Jimenez', 'pacjim@empresa1.com', 645789123, 5, ''),
(11, 'Julian', 'Del pino', 'juldel@empresa1.com', 645123789, 2, '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkusuario` (`fkusuario`) USING BTREE,
  ADD KEY `fkSede` (`fkSede`) USING BTREE;

--
-- Indices de la tabla `instala`
--
ALTER TABLE `instala`
  ADD PRIMARY KEY (`idequipo`,`idsoftware`),
  ADD KEY `fksoftware` (`idsoftware`) USING BTREE,
  ADD KEY `fkequipo` (`idequipo`) USING BTREE;

--
-- Indices de la tabla `sede`
--
ALTER TABLE `sede`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `software`
--
ALTER TABLE `software`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkdepartamento` (`departamento`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `departamento`
--
ALTER TABLE `departamento`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `equipo`
--
ALTER TABLE `equipo`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `sede`
--
ALTER TABLE `sede`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `software`
--
ALTER TABLE `software`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD CONSTRAINT `fkubicacion` FOREIGN KEY (`fkSede`) REFERENCES `sede` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkusuario` FOREIGN KEY (`fkusuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `instala`
--
ALTER TABLE `instala`
  ADD CONSTRAINT `fkequipo` FOREIGN KEY (`idequipo`) REFERENCES `equipo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fksoftware` FOREIGN KEY (`idsoftware`) REFERENCES `software` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fkdepartamento` FOREIGN KEY (`departamento`) REFERENCES `departamento` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
