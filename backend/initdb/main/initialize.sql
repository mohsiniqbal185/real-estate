create Database realEstate;
use realEstate;
CREATE TABLE `admin_user` (
  `Id` varchar(100) NOT NULL,
  `admin_fname` varchar(100) NOT NULL,
  `admin_lname` varchar(100) NOT NULL,
  `admin_password` varchar(100) NOT NULL,
  `admin_contact` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_user`
--

INSERT INTO `admin_user` (`Id`, `admin_fname`, `admin_lname`, `admin_password`, `admin_contact`) VALUES
('mehdikashif@gmail.com', 'Mehdi', 'Kashif', '*022DDBEC990A8FD8DD1D818A6567749FF2AEA89C', '03332090956'),
('mohsiniqbal185@gmail.com', 'Mohsin', 'Iqbal', '*5DAB9AC6CB7029E80EE894147583CF2BDA9C5FD7', '03342090953');

-- --------------------------------------------------------

--
-- Table structure for table `rental_property`
--

CREATE TABLE `rental_property` (
  `rental_prop_id` int(11) NOT NULL,
  `prop_type` varchar(100) NOT NULL,
  `prop_location` varchar(100) NOT NULL,
  `prop_title` varchar(100) NOT NULL,
  `prop_area` int(11) NOT NULL,
  `prop_description` varchar(200) NOT NULL,
  `prop_rent` int(11) NOT NULL,
  `prop_rating` int(11) DEFAULT NULL,
  `no_of_bedrooms` int(11) DEFAULT NULL,
  `no_of_baths` int(11) DEFAULT NULL,
  `prop_images` varchar(500) NOT NULL,
  `prop_owner_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rental_property`
--

INSERT INTO `rental_property` (`rental_prop_id`, `prop_type`, `prop_location`, `prop_title`, `prop_area`, `prop_description`, `prop_rent`, `prop_rating`, `no_of_bedrooms`, `no_of_baths`, `prop_images`, `prop_owner_id`) VALUES
(1, 'Flat', 'North Nazimabad, Block N', 'Ideal flat for rent in posh area of karachi.', 120, 'Flat Available For Rent Vip Block West Open,\r\nPrime Location Secure Investment,\r\nOpen Plot Block N (160 Square Yard)\r\nPrice View Contact Detail North Nazimabad\r\n', 20000, NULL, 3, 4, 'assets\\img\\property-1.jpg', 'mehdizafar@gmail.com'),
(2, 'House', 'Kesc society, Scheme 33', 'House for rent in best society of Karachi', 200, 'good society\r\n40 ft main street plot.\r\n', 80000, NULL, 5, 5, 'C:\\Users\\Mohsin\\Downloads\\real-estate-46f9b2e9a06119f0cfeeaa04899999f01fb34f11\\public\\assets\\img\\agent-3.jpg', 'hamzajunaid69@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `reported_rental_property`
--

CREATE TABLE `reported_rental_property` (
  `reported_prop_id` int(11) NOT NULL,
  `rental_prop_id` int(11) NOT NULL,
  `reporting_reason` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reported_rental_property`
--

INSERT INTO `reported_rental_property` (`reported_prop_id`, `rental_prop_id`, `reporting_reason`) VALUES
(1, 2, 'The house had different features from what was described in the ad');

-- --------------------------------------------------------

--
-- Table structure for table `reported_sale_property`
--

CREATE TABLE `reported_sale_property` (
  `reported_prop_id` int(11) NOT NULL,
  `sale_prop_id` int(11) NOT NULL,
  `reporting_reason` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reported_sale_property`
--

INSERT INTO `reported_sale_property` (`reported_prop_id`, `sale_prop_id`, `reporting_reason`) VALUES
(1, 1, 'The property dealer had given wrong details about the property');

-- --------------------------------------------------------

--
-- Table structure for table `sale_property`
--

CREATE TABLE `sale_property` (
  `sale_prop_Id` int(11) NOT NULL,
  `prop_type` varchar(100) NOT NULL,
  `prop_location` varchar(100) NOT NULL,
  `prop_title` varchar(100) NOT NULL,
  `prop_area` int(11) NOT NULL,
  `prop_description` varchar(200) NOT NULL,
  `prop_price` int(20) NOT NULL,
  `prop_rating` int(10) DEFAULT NULL,
  `no_of_bedrooms` int(11) DEFAULT NULL,
  `no_of_baths` int(11) DEFAULT NULL,
  `prop_images` varchar(500) NOT NULL,
  `prop_owner_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sale_property`
--

INSERT INTO `sale_property` (`sale_prop_Id`, `prop_type`, `prop_location`, `prop_title`, `prop_area`, `prop_description`, `prop_price`, `prop_rating`, `no_of_bedrooms`, `no_of_baths`, `prop_images`, `prop_owner_id`) VALUES
(1, 'House', 'Gulistan-e-Jauhar, Block 13', 'Property for sale in the best area of pakistan', 240, 'Park Facing Good Location Plot Leased Plot For Sale\r\nget Yourself A Commercial Plot That Suits Your Needs Perfectly. The Right Property For Sale Is Just A Click Away, So Take Action Today. Your Future', 5000000, NULL, 5, 4, 'assets\\img\\property-1.jpg', 'hamzajunaid69@gmail.com'),
(2, 'Plot', 'Gulshan-e-Iqbal', 'Plot for sale in block 12, Gulshan-e-Iqbal', 160, 'Plot Available For Sale Vip Block West Open,\r\nPrime Location Secure Investment,\r\nOpen Plot Block 12 (160 Square Yard)\r\nPrice View Contact Detail Gulshan-e-Iqbal\r\nGulshan-e-Iqbal Sale Purchase & Advice', 5500000, NULL, NULL, NULL, 'assets\\img\\property-1.jpg', 'mohsiniqbal2000@yahoo.com');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `Id` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `password` varchar(20) NOT NULL,
  `contact` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`Id`, `firstname`, `lastname`, `password`, `contact`) VALUES
('hamzajunaid69@gmail.com', 'Hamza', 'Junaid', '*41327C9383345753903', '03332562566'),
('mehdizafar@gmail.com', 'Mehdi', 'Zafar', '*1EA8CA9AA6141943761', '03332000021'),
('mohsiniqbal2000@yahoo.com', 'Mohsin', 'Iqbal', '*FE1F1252156CF66C5C2', '03332000021'),
('zakawatabbas@gmail.com', 'Zakawat ', 'Abbas', '*9DEDC2A3AF68549213D', '03002905653');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_user`
--
ALTER TABLE `admin_user`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `rental_property`
--
ALTER TABLE `rental_property`
  ADD PRIMARY KEY (`rental_prop_id`),
  ADD UNIQUE KEY `FK1` (`prop_owner_id`);

--
-- Indexes for table `reported_rental_property`
--
ALTER TABLE `reported_rental_property`
  ADD PRIMARY KEY (`reported_prop_id`),
  ADD UNIQUE KEY `FK` (`rental_prop_id`);

--
-- Indexes for table `reported_sale_property`
--
ALTER TABLE `reported_sale_property`
  ADD PRIMARY KEY (`reported_prop_id`),
  ADD UNIQUE KEY `FK` (`sale_prop_id`);

--
-- Indexes for table `sale_property`
--
ALTER TABLE `sale_property`
  ADD PRIMARY KEY (`sale_prop_Id`),
  ADD UNIQUE KEY `FOREIGN` (`prop_owner_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rental_property`
--
ALTER TABLE `rental_property`
  MODIFY `rental_prop_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `reported_rental_property`
--
ALTER TABLE `reported_rental_property`
  MODIFY `reported_prop_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `reported_sale_property`
--
ALTER TABLE `reported_sale_property`
  MODIFY `reported_prop_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sale_property`
--
ALTER TABLE `sale_property`
  MODIFY `sale_prop_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `rental_property`
--
ALTER TABLE `rental_property`
  ADD CONSTRAINT `Foreign key 2` FOREIGN KEY (`prop_owner_id`) REFERENCES `user` (`Id`);

--
-- Constraints for table `reported_rental_property`
--
ALTER TABLE `reported_rental_property`
  ADD CONSTRAINT `Foreign key 3` FOREIGN KEY (`rental_prop_id`) REFERENCES `rental_property` (`rental_prop_id`);

--
-- Constraints for table `reported_sale_property`
--
ALTER TABLE `reported_sale_property`
  ADD CONSTRAINT `Foreign key 4` FOREIGN KEY (`sale_prop_id`) REFERENCES `sale_property` (`sale_prop_Id`);

--
-- Constraints for table `sale_property`
--
ALTER TABLE `sale_property`
  ADD CONSTRAINT `Foreign key ` FOREIGN KEY (`prop_owner_id`) REFERENCES `user` (`Id`);
COMMIT;