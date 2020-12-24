-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 24, 2020 at 08:07 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotelmanagement`
--

-- --------------------------------------------------------

--
-- Table structure for table `conference`
--

CREATE TABLE `conference` (
  `cid` varchar(255) NOT NULL,
  `crtype` varchar(255) NOT NULL,
  `capacity` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `conference`
--

INSERT INTO `conference` (`cid`, `crtype`, `capacity`, `amount`) VALUES
('R0001', 'Bоаrdrооm Style', '1-25', 100000),
('R0002', 'Bоаrdrооm Style', '1-25', 100000),
('R0003', 'Banquet Style', '1-25', 10000),
('R0004', 'Bоаrdrооm Style', '1-25', 100000);

-- --------------------------------------------------------

--
-- Table structure for table `conferencereservation`
--

CREATE TABLE `conferencereservation` (
  `cid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `mobile` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `time` time NOT NULL,
  `rtype` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `capacity` varchar(11) NOT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `conferencereservation`
--

INSERT INTO `conferencereservation` (`cid`, `name`, `mobile`, `email`, `date`, `time`, `rtype`, `amount`, `capacity`, `status`) VALUES
('RE001', 'lakshan', 123456789, 'akjnfbh', '2020-12-18', '12:00:00', 'Bоаrdrооm Style', 100000, '1-25', 'Reservied'),
('RE002', 'lakshan', 123456789, 'lakshan@gmail.com', '2020-12-10', '12:00:00', 'Bоаrdrооm Style', 100000, '1-25', 'Reservied');

-- --------------------------------------------------------

--
-- Table structure for table `function`
--

CREATE TABLE `function` (
  `fid` varchar(255) NOT NULL,
  `ftype` varchar(255) NOT NULL,
  `htype` varchar(255) NOT NULL,
  `hfeature` varchar(255) NOT NULL,
  `capacity` varchar(255) NOT NULL,
  `amount` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `function`
--

INSERT INTO `function` (`fid`, `ftype`, `htype`, `hfeature`, `capacity`, `amount`) VALUES
('R0002', 'Ceremony', 'Banquet / Wedding Style ', 'Dj', 'Less Than 25', 'RS :27000'),
('R0003', 'Birthday Celebrations', 'Banquet / Wedding Style ', 'Air Conditioned', '26 to 50', 'RS :10000'),
('R0005', 'Birthday Celebrations', 'Banquet / Wedding Style ', 'Liqure-Served', 'Less Than 25', 'RS :50000');

-- --------------------------------------------------------

--
-- Table structure for table `functionreservation`
--

CREATE TABLE `functionreservation` (
  `rsid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `mobile` int(12) NOT NULL,
  `idnum` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `htype` varchar(255) NOT NULL,
  `ftype` varchar(255) NOT NULL,
  `hfeature` varchar(255) NOT NULL,
  `capacity` varchar(255) NOT NULL,
  `amount` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `functionreservation`
--

INSERT INTO `functionreservation` (`rsid`, `name`, `mobile`, `idnum`, `date`, `time`, `htype`, `ftype`, `hfeature`, `capacity`, `amount`) VALUES
('RE001', 'Lakshan', 716821742, '981951840V', '2020-12-12', '12:00:00', 'Banquet / Wedding Style ', 'Ceremony', 'Dj', 'Less Than 25', '20000'),
('RE002', 'lakshan', 123456789, '12345789', '2020-12-11', '12:20:00', 'Banquet / Wedding Style ', 'Ceremony', 'Dj', 'Less Than 25', 'RS :27000'),
('RE003', 'lakshan', 1234567, '2345678', '2020-12-04', '12:00:00', 'Banquet / Wedding Style ', 'Ceremony', 'Dj', 'Less Than 25', 'RS :50000');

-- --------------------------------------------------------

--
-- Table structure for table `guestlogin`
--

CREATE TABLE `guestlogin` (
  `gid` int(11) NOT NULL,
  `Fname` varchar(255) NOT NULL,
  `Lname` varchar(255) NOT NULL,
  `login_user` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `repassword` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `guestlogin`
--

INSERT INTO `guestlogin` (`gid`, `Fname`, `Lname`, `login_user`, `password`, `repassword`) VALUES
(1, 'priyankara', 'priyankara', 'priyankara', '1998', '1998');

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE `reservation` (
  `reid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `mobile` int(255) NOT NULL,
  `checkin` varchar(255) NOT NULL,
  `checkout` varchar(255) NOT NULL,
  `bedtype` varchar(255) NOT NULL,
  `roomno` varchar(255) NOT NULL,
  `rtype` varchar(255) NOT NULL,
  `amount` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`reid`, `name`, `address`, `mobile`, `checkin`, `checkout`, `bedtype`, `roomno`, `rtype`, `amount`) VALUES
('RE001', 'lakshan', 'kandy', 716821742, '2020-12-09', '2020-12-16', 'Standard Double Room with AC', 'R0004', 'twin beds', 20000),
('RE002', 'yasantha', 'welimad', 716821742, '2020-12-05', '2020-12-25', 'Business Twin Room AC', 'R0002', 'Twin Bed', 150000),
('RE003', 'lakshan', 'welimda', 12345678, '2020-12-11', '2020-12-18', 'Standard Double Room with NON/AC', 'R0001', 'Quean Bed', 15000);

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `rid` varchar(255) NOT NULL,
  `rtype` varchar(255) NOT NULL,
  `btype` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`rid`, `rtype`, `btype`, `amount`) VALUES
('R0001', 'Standard Double Room with NON/AC', 'Quean Bed', 11000),
('R0003', 'Standard Twin Room NONAC', 'Twin Bed', 2000);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `uid` int(11) NOT NULL,
  `Fname` varchar(255) NOT NULL,
  `Lname` varchar(255) NOT NULL,
  `login_user` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `repassword` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uid`, `Fname`, `Lname`, `login_user`, `password`, `repassword`) VALUES
(4, 'lakshan', 'Didulantha', 'lakshan', '1998', '1998'),
(8, '', '', '', '', ''),
(9, 'priyankara', 'tharaka', 'priyankara', '1997', '1997'),
(10, 'tharushi', 'tharushi', 'tharushi', '1998', '1998'),
(11, 'nipuni', 'poorinma', 'nipuni', '1998', '1998'),
(12, 'kapila ', 'kapila', 'kapila', '1998', '1998'),
(13, 'lakshan', 'didulantha', 'lakshandidulantha', '1998', '1998');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `conference`
--
ALTER TABLE `conference`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `conferencereservation`
--
ALTER TABLE `conferencereservation`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `function`
--
ALTER TABLE `function`
  ADD PRIMARY KEY (`fid`);

--
-- Indexes for table `functionreservation`
--
ALTER TABLE `functionreservation`
  ADD PRIMARY KEY (`rsid`);

--
-- Indexes for table `guestlogin`
--
ALTER TABLE `guestlogin`
  ADD PRIMARY KEY (`gid`);

--
-- Indexes for table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`reid`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`rid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `guestlogin`
--
ALTER TABLE `guestlogin`
  MODIFY `gid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
