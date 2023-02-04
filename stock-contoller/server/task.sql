-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 04 Şub 2023, 15:57:45
-- Sunucu sürümü: 10.4.27-MariaDB
-- PHP Sürümü: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `task`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `bom`
--

CREATE TABLE `bom` (
  `bomId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `materialId` int(11) NOT NULL,
  `qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Tablo döküm verisi `bom`
--

INSERT INTO `bom` (`bomId`, `productId`, `materialId`, `qty`) VALUES
(1, 1, 1, 19),
(2, 1, 2, 2),
(3, 1, 3, 25),
(4, 1, 4, 15),
(5, 1, 5, 21),
(6, 1, 6, 14),
(7, 1, 7, 11),
(8, 1, 8, 3),
(9, 2, 1, 12),
(10, 2, 2, 20),
(11, 2, 3, 14),
(12, 2, 4, 5),
(13, 2, 5, 20),
(14, 2, 6, 20),
(15, 2, 7, 8),
(16, 2, 8, 9),
(17, 3, 9, 2),
(18, 3, 10, 24),
(19, 3, 11, 18),
(20, 3, 12, 10),
(21, 3, 13, 16),
(22, 3, 14, 2),
(23, 3, 15, 14),
(24, 3, 16, 4),
(25, 3, 17, 11),
(26, 3, 18, 13),
(27, 3, 19, 19),
(28, 4, 31, 18),
(29, 4, 32, 4),
(30, 4, 33, 20),
(31, 4, 34, 10),
(32, 4, 35, 22),
(33, 5, 20, 1),
(34, 5, 21, 15),
(35, 5, 22, 18),
(36, 5, 23, 24),
(37, 5, 24, 22),
(38, 10, 29, 3),
(39, 10, 30, 11),
(40, 10, 31, 21),
(41, 10, 32, 23),
(42, 10, 33, 15),
(43, 10, 34, 23),
(44, 10, 35, 17),
(45, 10, 36, 9),
(46, 10, 37, 22),
(47, 10, 38, 11),
(48, 10, 39, 24),
(49, 10, 40, 15),
(50, 9, 11, 18),
(51, 9, 12, 16),
(52, 9, 13, 3),
(53, 9, 14, 9),
(54, 9, 15, 15),
(55, 9, 16, 7),
(56, 9, 17, 18),
(57, 9, 18, 16),
(58, 9, 19, 2),
(59, 9, 20, 12),
(60, 9, 21, 9),
(61, 6, 23, 3),
(62, 6, 24, 4),
(63, 6, 25, 2),
(64, 6, 26, 18),
(65, 6, 27, 5),
(66, 6, 28, 25),
(67, 7, 12, 17),
(68, 7, 13, 23),
(69, 7, 14, 16),
(70, 7, 15, 23),
(71, 7, 16, 11),
(72, 7, 17, 5),
(73, 7, 18, 3),
(74, 7, 19, 18),
(75, 7, 20, 1),
(76, 7, 35, 18),
(77, 7, 36, 10),
(78, 7, 37, 4),
(79, 7, 38, 12),
(80, 7, 8, 3),
(81, 7, 9, 22),
(82, 8, 10, 4),
(83, 8, 11, 1),
(84, 8, 12, 22),
(85, 8, 15, 5),
(86, 8, 16, 10),
(87, 8, 17, 3),
(88, 8, 18, 6),
(89, 8, 19, 16),
(90, 8, 20, 20),
(91, 8, 21, 24),
(92, 8, 11, 5),
(93, 8, 12, 16),
(94, 8, 14, 14),
(95, 8, 15, 4);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `materials`
--

CREATE TABLE `materials` (
  `materialId` int(11) NOT NULL,
  `materialName` varchar(50) NOT NULL,
  `materialNo` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Tablo döküm verisi `materials`
--

INSERT INTO `materials` (`materialId`, `materialName`, `materialNo`) VALUES
(1, 'Material 1', 'M-00001'),
(2, 'Material 2', 'M-00002'),
(3, 'Material 3', 'M-00003'),
(4, 'Material 4', 'M-00004'),
(5, 'Material 5', 'M-00005'),
(6, 'Material 6', 'M-00006'),
(7, 'Material 7', 'M-00007'),
(8, 'Material 8', 'M-00008'),
(9, 'Material 9', 'M-00009'),
(10, 'Material 10', 'M-00010'),
(11, 'Material 11', 'M-00011'),
(12, 'Material 12', 'M-00012'),
(13, 'Material 13', 'M-00013'),
(14, 'Material 14', 'M-00014'),
(15, 'Material 15', 'M-00015'),
(16, 'Material 16', 'M-00016'),
(17, 'Material 17', 'M-00017'),
(18, 'Material 18', 'M-00018'),
(19, 'Material 19', 'M-00019'),
(20, 'Material 20', 'M-00020'),
(21, 'Material 21', 'M-00021'),
(22, 'Material 22', 'M-00022'),
(23, 'Material 23', 'M-00023'),
(24, 'Material 24', 'M-00024'),
(25, 'Material 25', 'M-00025'),
(26, 'Material 26', 'M-00026'),
(27, 'Material 27', 'M-00027'),
(28, 'Material 28', 'M-00028'),
(29, 'Material 29', 'M-00029'),
(30, 'Material 30', 'M-00030'),
(31, 'Material 31', 'M-00031'),
(32, 'Material 32', 'M-00032'),
(33, 'Material 33', 'M-00033'),
(34, 'Material 34', 'M-00034'),
(35, 'Material 35', 'M-00035'),
(36, 'Material 36', 'M-00036'),
(37, 'Material 37', 'M-00037'),
(38, 'Material 38', 'M-00038'),
(39, 'Material 39', 'M-00039'),
(40, 'Material 40', 'M-00040');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `orderName` varchar(200) NOT NULL,
  `orderNo` varchar(40) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Tablo döküm verisi `orders`
--

INSERT INTO `orders` (`orderId`, `orderName`, `orderNo`, `productId`, `quantity`) VALUES
(1, 'Test Order 1', 'TO-0001', 5, 80),
(2, 'Test Order 2', 'TO-0002', 4, 92),
(3, 'Test Order 3', 'TO-0003', 2, 10),
(4, 'Test Order 4', 'TO-0004', 1, 20),
(5, 'Test Order 5', 'TO-0005', 5, 30),
(6, 'Test Order 6', 'TO-0006', 6, 40),
(7, 'Test Order 7', 'TO-0007', 3, 20),
(8, 'Test Order 8', 'TO-0008', 4, 10),
(9, 'Test Order 9', 'TO-0009', 7, 23),
(10, 'Test Order 10', 'TO-0010', 2, 40);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `products`
--

CREATE TABLE `products` (
  `productId` int(11) NOT NULL,
  `productNo` varchar(40) NOT NULL,
  `productName` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Tablo döküm verisi `products`
--

INSERT INTO `products` (`productId`, `productNo`, `productName`) VALUES
(1, 'P-00001', 'Product 1'),
(2, 'P-00002', 'Product 2'),
(3, 'P-00003', 'Product 3'),
(4, 'P-00004', 'Product 4'),
(5, 'P-00005', 'Product 5'),
(6, 'P-00006', 'Product 6'),
(7, 'P-00007', 'Product 7'),
(8, 'P-00008', 'Product 8'),
(9, 'P-00009', 'Product 9'),
(10, 'P-00010', 'Product 10');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `warehouses`
--

CREATE TABLE `warehouses` (
  `materialId` int(11) NOT NULL,
  `warehouseQuantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Tablo döküm verisi `warehouses`
--

INSERT INTO `warehouses` (`materialId`, `warehouseQuantity`) VALUES
(1, 45),
(2, 23),
(3, 27),
(4, 44),
(5, 6),
(6, 43),
(7, 34),
(8, 24),
(9, 48),
(10, 42),
(11, 50),
(12, 36),
(13, 14),
(14, 21),
(15, 40),
(16, 5),
(17, 14),
(18, 26),
(19, 46),
(20, 45),
(21, 30),
(22, 21),
(23, 4),
(24, 31),
(25, 8),
(26, 1),
(27, 4),
(28, 1),
(29, 8),
(30, 36),
(31, 18),
(32, 22),
(33, 10),
(34, 30),
(35, 22),
(36, 28),
(37, 39),
(38, 10),
(39, 43),
(40, 22);

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `bom`
--
ALTER TABLE `bom`
  ADD PRIMARY KEY (`bomId`);

--
-- Tablo için indeksler `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`materialId`);

--
-- Tablo için indeksler `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`);

--
-- Tablo için indeksler `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productId`);

--
-- Tablo için indeksler `warehouses`
--
ALTER TABLE `warehouses`
  ADD PRIMARY KEY (`materialId`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `bom`
--
ALTER TABLE `bom`
  MODIFY `bomId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- Tablo için AUTO_INCREMENT değeri `materials`
--
ALTER TABLE `materials`
  MODIFY `materialId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Tablo için AUTO_INCREMENT değeri `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- Tablo için AUTO_INCREMENT değeri `products`
--
ALTER TABLE `products`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Tablo için AUTO_INCREMENT değeri `warehouses`
--
ALTER TABLE `warehouses`
  MODIFY `materialId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
