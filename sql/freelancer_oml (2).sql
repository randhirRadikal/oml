-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 12, 2019 at 05:14 PM
-- Server version: 10.1.8-MariaDB
-- PHP Version: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `freelancer_oml`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profile_img` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `first_name`, `last_name`, `email`, `password`, `profile_img`, `status`) VALUES
(1, 'Randhir', 'Jha', 'randhirjha2212@gmail.com', '123456', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `key_value` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `key_value`, `created`, `status`) VALUES
(1, 'Demo', 'demo', '2019-02-09 23:46:25', 1),
(2, 'Category 1', '', '2019-02-09 18:18:03', 1);

-- --------------------------------------------------------

--
-- Table structure for table `health_condition_options`
--

CREATE TABLE `health_condition_options` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `health_condition_options`
--

INSERT INTO `health_condition_options` (`id`, `name`, `created`, `status`) VALUES
(1, 'Fat loss 1', '2019-02-07 00:01:11', 1),
(2, 'weight gain', '2019-02-07 00:01:11', 1),
(3, 'Cancer', '2019-02-07 00:01:45', 0),
(4, 'Diabetes', '2019-02-07 00:01:45', 0),
(6, 'czxc', '2019-02-09 02:26:21', 0);

-- --------------------------------------------------------

--
-- Table structure for table `kitchens`
--

CREATE TABLE `kitchens` (
  `id` bigint(20) NOT NULL,
  `vender_id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `profile_icon` varchar(255) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '0 for Inactive, 1 for Active'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kitchens`
--

INSERT INTO `kitchens` (`id`, `vender_id`, `name`, `address`, `phone_number`, `profile_icon`, `created`, `status`) VALUES
(1, 1, 'Alberto Timóteo', 'Unknow St', '8002592912', '', '2019-02-03 19:02:35', 1),
(9, 1, 'Alberto Timóteo', 'Unknow St', '8002592912', 'C:\\fakepath\\Untitled.png', '2019-02-04 01:59:48', 1);

-- --------------------------------------------------------

--
-- Table structure for table `kitchen_users`
--

CREATE TABLE `kitchen_users` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `kitchen_id` bigint(20) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kitchen_users`
--

INSERT INTO `kitchen_users` (`id`, `user_id`, `kitchen_id`, `created`) VALUES
(8, 8, 1, '2019-02-04 13:10:41'),
(9, 3, 1, '2019-02-04 13:43:04');

-- --------------------------------------------------------

--
-- Table structure for table `prep_style_options`
--

CREATE TABLE `prep_style_options` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prep_style_options`
--

INSERT INTO `prep_style_options` (`id`, `name`, `created`, `status`) VALUES
(1, 'Continental', '2019-02-06 23:57:33', 1),
(2, 'Chinese', '2019-02-06 23:57:33', 1),
(3, 'Hakka', '2019-02-06 23:57:59', 1),
(4, 'Hokkien', '2019-02-06 23:57:59', 1),
(5, 'Indian', '2019-02-06 23:59:07', 1),
(6, 'Malay', '2019-02-06 23:59:07', 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `vender_id` bigint(20) NOT NULL,
  `kitchen_id` int(11) NOT NULL,
  `product_type_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(50) NOT NULL,
  `image` varchar(255) NOT NULL,
  `more_image` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `product_location_id` int(11) NOT NULL,
  `product_time_id` int(11) NOT NULL,
  `is_in_stock` int(11) NOT NULL DEFAULT '0',
  `is_veg` int(11) NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL DEFAULT '1',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `vender_id`, `kitchen_id`, `product_type_id`, `name`, `price`, `image`, `more_image`, `description`, `product_location_id`, `product_time_id`, `is_in_stock`, `is_veg`, `status`, `created`, `is_deleted`) VALUES
(1, 3, 9, 1, 'Roll', '50', '', '', 'Test', 1, 1, 0, 0, 1, '2019-01-30 08:34:55', 0);

-- --------------------------------------------------------

--
-- Table structure for table `product_categories`
--

CREATE TABLE `product_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created` datetime NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_locations`
--

CREATE TABLE `product_locations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `key_name` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_locations`
--

INSERT INTO `product_locations` (`id`, `name`, `key_name`, `created`, `status`) VALUES
(1, 'Kolkata', '', '2019-01-30 08:33:30', 1),
(2, 'Randhir', '', '2019-02-09 02:40:30', 0);

-- --------------------------------------------------------

--
-- Table structure for table `product_times`
--

CREATE TABLE `product_times` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `key_name` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_times`
--

INSERT INTO `product_times` (`id`, `name`, `key_name`, `created`, `status`) VALUES
(1, '9:30-10:30', '', '2019-01-30 08:33:08', 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_types`
--

CREATE TABLE `product_types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_types`
--

INSERT INTO `product_types` (`id`, `name`, `created`, `status`) VALUES
(1, 'Randhir1', '2019-01-28 17:56:17', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `id` bigint(20) NOT NULL,
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `key_name` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sub_categories`
--

INSERT INTO `sub_categories` (`id`, `category_id`, `name`, `key_name`, `created`, `status`) VALUES
(1, 1, 'sub Demo', 'sub_demo', '2019-02-09 23:47:32', 1);

-- --------------------------------------------------------

--
-- Table structure for table `times`
--

CREATE TABLE `times` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `key_name` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `vender_id` bigint(20) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(100) NOT NULL,
  `profile_pic` varchar(255) NOT NULL,
  `access_token` varchar(255) NOT NULL,
  `verification_code` varchar(255) NOT NULL,
  `type` enum('Buyer','Seller','Kitchen') NOT NULL DEFAULT 'Seller',
  `otp` int(11) NOT NULL,
  `last_login_ip` varchar(100) NOT NULL,
  `last_login_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` tinyint(4) NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `vender_id`, `name`, `email`, `password`, `phone_number`, `profile_pic`, `access_token`, `verification_code`, `type`, `otp`, `last_login_ip`, `last_login_time`, `is_deleted`, `status`) VALUES
(1, 0, 'Vender', 'randhirjha2212@gmail.com', '123456', '8002592912', '', 's', '', 'Seller', 0, '', '2019-01-26 14:25:34', 0, 1),
(2, 0, 'User', 'randhir@radikal-labs.com', '123456', '8002592912', '', 'b', '', 'Buyer', 0, '', '2019-01-26 14:25:42', 0, 1),
(3, 1, 'Kitchen', 'randhir1@radikal-labs.com', '123456', '8002592912', '', 'k', '', 'Kitchen', 0, '', '2019-02-04 13:43:04', 0, 0),
(8, 1, 'Alberto Timóteo', 'randhirjha2212@gmail.com', '123456', '8002592912', '', '', '', 'Kitchen', 0, '', '2019-02-04 02:40:09', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_addresses`
--

CREATE TABLE `user_addresses` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `address1` varchar(255) NOT NULL,
  `address2` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `zip_code` varchar(50) NOT NULL,
  `title` varchar(100) NOT NULL,
  `is_deleted` tinyint(4) NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `health_condition_options`
--
ALTER TABLE `health_condition_options`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kitchens`
--
ALTER TABLE `kitchens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kitchen_users`
--
ALTER TABLE `kitchen_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prep_style_options`
--
ALTER TABLE `prep_style_options`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_locations`
--
ALTER TABLE `product_locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_times`
--
ALTER TABLE `product_times`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_types`
--
ALTER TABLE `product_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `times`
--
ALTER TABLE `times`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_addresses`
--
ALTER TABLE `user_addresses`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `health_condition_options`
--
ALTER TABLE `health_condition_options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `kitchens`
--
ALTER TABLE `kitchens`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `kitchen_users`
--
ALTER TABLE `kitchen_users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `prep_style_options`
--
ALTER TABLE `prep_style_options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `product_locations`
--
ALTER TABLE `product_locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `product_times`
--
ALTER TABLE `product_times`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `product_types`
--
ALTER TABLE `product_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `times`
--
ALTER TABLE `times`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `user_addresses`
--
ALTER TABLE `user_addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
