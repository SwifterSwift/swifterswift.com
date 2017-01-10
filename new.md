---
layout: default
---

# v1.4.3

###UICollectionViewExtensions:

- Fixed a bug in **indexPathForLastItem**.
- Renamed **indexPathForLastItem(in section: Int)** to **indexPathForLastItem(inSection section: Int)** to match Apple naming conventions

###UITableViewExtensions:

- Fixed a bug in **indexPathForLastRow**.
- Renamed **indexPathForLastRow(in section: Int)** to **indexPathForLastRow(inSection section: Int)** to match Apple naming conventions

##StringExtensions:

- Fixed a bug in **count(of string: String, caseSensitive: Bool)**
- Added **slicing(from i: Int, length: Int)**: Sliced string from a start index with length.
- Added **slice(from i: Int, length: Int)**: Slice given string from a start index with length (if applicable).
- Added **slicing(from start: Int, to end: Int)**: Sliced string from a start index to an end index.
- Added **slice(from start: Int, to end: Int)**: Slice given string from a start index to an end index (if applicable).
- Added **slicing(at i: Int)**: Sliced string from a start index.
- Added **slice(at i: Int)**: Slice given string from a start index (if applicable).

##StringExtensionsTests:

- Added tests for **count(of string: String, caseSensitive: Bool)**
- Added tests for slicing methods

##Contributing:

- Added **Releases Flow**
- Updated **Adding new Extensions**

##Misc:

- Introduced new [**releases Flow**](https://github.com/omaralbeik/SwifterSwift/blob/master/CONTRIBUTING.md#releases-flow)

Thanks to [Paweł Urbanek](https://github.com/pawurb) and [Michael](https://github.com/muescha)


# v1.4.2

###CollectionExtensions:

- Added **subscript (safe index: Index)**. Thanks to [Sai Ram Kotha](https://github.com/sairamkotha)

###UIColorExtensions:

- Added **complementary**
- Added **init?(complementaryFor color: UIColor)**

Thanks to [matt](https://github.com/ythecombinator)

###SwifterSwift:

- Added **isInTestFlight**


# v1.4.1

###DateExtensions:

- Added **enum DayNameStyle**.
- Added **enum MonthNameStyle**.
- Added **isInYesterday**.
- Added **isInTomorrow**.
- Added **nearestHour**.
- Added **dayName(ofStyle style: DayNameStyle)**.
- Added **monthName(ofStyle style: MonthNameStyle)**.

###UISearchBarExtensions:
- Added **trimmedText**.

###UIColorExtensions:

- Added **cssColors**.
- Added **init?(hexString: String, transparency: CGFloat)**.
- Added **shortHexString**.
- Added **shortHexOrHexString**.

###StringExtensions:

- Added **subscript(i: Int)**.
- Added **subscript(range: CountableRange<Int>)**.
- Added **subscript(range: ClosedRange<Int>)**.


# v1.4

- Swift Package Manager support

# v1.3.9

- Extension moved to Source directory, tests moved to Tests directory for a cleaner structure

# v1.3.8

###CollectionExtensions:
- Added **forEachInParallel**. Thanks to [Siarhei Fiedartsou](https://github.com/SiarheiFedartsou) for contributing.

###TableViewExtensions:
- Added **reloadData(_ completion: () -> Void)**.

###CollectionViewExtensions:
- Added **reloadData(_ completion: () -> Void)**.

###UIButtonExtensions:
- Refactored setForAllStates methods code. Thanks to [Ronan Rodrigo Nunes](https://github.com/ronanrodrigo)

###Misc.
- Fixed typos in README.

# v1.3.7

###DateExtensions:

- Changed **nearestHourQuarter** to **nearestQuarterHour**. Thanks to [Robert Nix](https://github.com/rpural) for reporting.
- Updated initializers to be optional.

###UITabBarExtensions:

- fixed selected color in  **setColors** method.

###Tests

- Updated tests. Thanks to [Siarhei Fiedartsou](https://github.com/SiarheiFedartsou) for updating.


# v1.3.6

###UIViewExtensions:

- Fixed bugs in **fadeIn**, **fadeOut** and **rotate(byAngle)** methods. Thanks to [bastianschilbe](https://github.com/bastianschilbe) for reporting.
- Removed **isVisible** property since it was causing many problems and not working correctly.
- Added **parentViewController** property to return view's parent view controller.


# v1.3.5

### DateExtensions:

Fixed a bug in DateExtensinos where year was not set correctly. Thanks to [songhailiang](https://github.com/songhailiang) you for reporting this bug.

# v1.3.4

### UIViewExtensions:

- **func addConstraints(withFormat: String, views: UIView...)**: Add Visual Format constraints
- **func fillToSuperview()**: Anchor all sides of the view into it's superview
- **func anchor(top: NSLayoutYAxisAnchor?, left: NSLayoutXAxisAnchor?, bottom: NSLayoutYAxisAnchor?, right: NSLayoutXAxisAnchor?, topConstant: CGFloat, leftConstant: CGFloat, bottomConstant: CGFloat, rightConstant: CGFloat, widthConstant: CGFloat, heightConstant: CGFloat) -> [NSLayoutConstraint]**: Add anchors from any side of the current view into the specified anchors and returns the newly added constraints.
- **func anchorCenterXToSuperview(withConstant: CGFloat)**: Anchor center X into current view's superview with a constant margin value.
- **anchorCenterYToSuperview(constant: CGFloat)**: Anchor center Y into current view's superview with a constant margin value.
- **func anchorCenterSuperview()**: Anchor center X and Y into current view's superview

### IntExtensions:

- **kFormatted**: String formatted for values over ±1000 (example: 1k, -2k, 100k, 1kk, -5kk..)

Thanks to [Jonathan Bijos](https://github.com/Quaggie) & [zzjzz9266a](https://github.com/zzjzz9266a) for adding new extensions.


# v1.3.2

Added [CollectionViewExtensions](https://github.com/omaralbeik/SwifterSwift/wiki/uicollectionview-extensions)

# v1.3.1

### ArrayExtensions:

- removed duplicated contains method
- use of reduce to remove duplicates (Thanks to [sairamkotha](https://github.com/sairamkotha))

# v1.3

This version adds **more than 90 new extensions** making it the widest extensions library available online for Swift 3 with **more than 360 properties and methods for more than 35 type**.
This is the biggest update since library launch! we're so excited 🤓

Here are some changes:
- Updated some properties and methods names to follow [Swift API Design Guidelines](https://developer.apple.com/videos/play/wwdc2016/403/).
- Added default values to methods parameters (where possible).
- All units documentation has been re-written in xcode,
	- Now you see "**SwifterSwift:** " at the beginning of description to know the source of the extension while writing your code.
	- All method parameters and return types has been documented in xcode as well.
	- All extensions documentation has been re-written in [Wiki](https://github.com/omaralbeik/SwifterSwift/wiki), separating properties from methods in different tables.
- All extensions files re-organized in separate extensions based on type (properties, methods, initializers, ..)
- Fixed some bugs where some extensions were not public.
- New section explaining how to add new extensions in [Contributing Guidelines](https://github.com/omaralbeik/SwifterSwift/blob/master/CONTRIBUTING.md)
- And finally: new logo

## v1.2.2

### New Extensions:

- **UIColorExtensions**:
	- **struct material**: get [Google material palette colors](https://material.google.com/style/color.html) with ease

### Updated Extensions:

- **UIColorExtensions**:
	- struct socialColors -> **struct social**


## v1.2.1

### New Extensions:

- **ConvenienceExtensions**:
	- **func string(forKey: String)**: Get a string from UserDefaults
	- **func integer(forKey: String)**: Get an integer from UserDefaults
	- **func double(forKey: String)**: Get a double from UserDefaults
	- **func float(forKey: String)**: Get a float from UserDefaults
	- **func data(forKey: String)**: Get a data from UserDefaults
	- **func bool(forKey: String)**: Get a bool from UserDefaults
	- **func array(forKey: String)**: Get an array from UserDefaults
	- **func dictionary(forKey: String)**: Get a dictionary from UserDefaults

- **StringExtensions**:
	- **func toDate(withFormat format: String)**: Return Date value from string of date format (if applicable).
	- **var toURL**: Return URL from string (if applicable).

- **UIAlertControllerExtensions**:
	- **addAction(title, style, isEnabled, handler)**: Add an action to Alert.
	- **addTextField(text, placeholder, editingChangedTarget, editingChangedSelector)**: Add a text field to Alert.

- **UINavigationBarExtensions**:
	- **func setColors(background, text)**: Set Navigation Bar background and text colors.


### Updated Extensions:

- **ConvenienceExtensions**:
	- var deviceHeight -> **var screenHeight**
	- var deviceWidth -> **var screenWidth**

- **ArrayExtensions**:
	- func removeAll(item: Element) -> **func removeAll(_ item: Element))**

- **DateExtensions**:
	- func add(component: Calendar.Component, value: Int) -> **add(_ component: Calendar.Component, value: Int)**
	- func adding(component: Calendar.Component, value: Int) -> **adding(_ component: Calendar.Component, value: Int)**
	- func changing(component: Calendar.Component, value: Int) -> **changing(_ component: Calendar.Component, value: Int)**
	- func isIn(current: Calendar.Component) -> **isInCurrent(_ component: Calendar.Component)**

- **StringExtensions**:
	- func contain(string: String, caseSensitive: Bool) -> **func contain(_ string: String, caseSensitive: Bool)**
	- func lines() -> **var lines**
	- static func random(of length: Int) -> **static func random(ofLength: Int)**
	- func replace(string: String, with: String) -> **func replace(_ substring: String, with: String)**
	- func truncate(to length: Int, trailing: String?) -> **func truncate(toLength: Int, trailing: String?)**
	- func truncated(to length: Int, trailing: String? = "...") -> **func truncated(to length: Int, trailing: String?)**

- **UIButtonExtensions**:
	- func imageForAllStates(image: UIImage) -> **func setImageForAllStates(_ image: UIImage)**
	- func titleColorForAllStates(color: UIColor) -> **func setTitleColorForAllStates(_ color: UIColor)**
	- func titleForAllStates(title: String) -> **func setTitleForAllStates(_ title: String)**


- **UIColorExtensions**:
	- init(netHex:Int) -> **init(hex:Int, transparency: CGFloat = 1)**

- **UIImageExtensions**:
	- func scaledToHeight(height: CGFloat, with orientation: UIImageOrientation?) -> **scaled(toHeight: CGFloat, with orientation: UIImageOrientation?)**
	- func scaledToWidth(width: CGFloat, with orientation: UIImageOrientation?) -> **scaled(toWidth: CGFloat, with orientation: UIImageOrientation?)**

- **UIImageViewExtensions**:
	- func download(fromUrl: String?, contentMode: UIViewContentMode, placeHolder: UIImage?)) -> **download(from: URL?, contentMode: UIViewContentMode, placeHolder: UIImage?, completionHandler: ((UIImage?, Error?) -> Void)?)**

- **UISliderExtensions**:
	- func setValue(value: Float, animated: Bool, duration: TimeInterval, completion: (() -> Void)? = nil) -> **func setValue(_ value: Float, animated: Bool, duration: TimeInterval, completion: (() -> Void)?)**

- **UITableViewExtensions**:
	- var totalRows -> **var numberOfRows**

- **UITextFieldExtensions**:
	- func setPlaceHolderTextColor(color: UIColor) -> **func setPlaceHolderTextColor(_ color: UIColor)**

- **UIViewExtensions**:
	- func loadFromNibNamed(nibNamed: String, bundle : Bundle?) -> **func loadFromNib(named: String, bundle : Bundle?)**

### Removed Extensions:

- **StringExtensions**:
	 - var locale


## v1.1

UISearchBarExtensions:
- **textField**: Return the text field inside search bar

UITextFieldExtensions:
- **setPlaceHolderTextColor(color)**: Change place holder text color
- **leftViewTintColor**: Left view tint color
- **rightViewTintColor**: Right view tint color

UINavigationItemExtensions:
- **replaceTitle(with image)**: Replace title with an image in naivgation item

UITabBarExtensions:
- **setColors(background, selectedBackground, item, selectedItem)**: Change UITabBar colors

UIImageExtensions:
- **filled(withColor)**: Return image filled with color
- **init(color, size)**: Create image from color and size

UITextViewExtensions:
- **scrollToBotom()**: Scroll to the bottom of text view
- **scrollToTop()**: Scroll to the top of text view

UISegmentedControlExtensions:
- **segmentTitles**: Segments titles
- **segmentImages**: Segments images

UISliderExtensions:
- **setValue(value, animated, duration, completion)**: Set slide bar value with completion handler

UIAlertControllerExtensions:
- **show(vibrate)**: Added optional vibration while presenting the alert

IntExtensions:
- **asLocaleCurrency**: Return string with number and current locale currency

FloatExtensions:
- **asLocaleCurrency**: Return string with number and current locale currency

DoubleExtensions:
- **asLocaleCurrency**: Return string with number and current locale currency

StringExtensions:
- Fixed a bug in toDouble, toFloat, toFloat32, toFloat64 where number is not calculated if not in english

DateExtensions:
- **adding(component, value)**: Return date by adding a component
- **nearestHourQuarter**: Return nearest quarter to date
- **nearestHalfHour**: Return nearest half hour to date
- **changing(component, value)**: Return date by changing a component
- Fixed a bug in nearestFiveMinutes, nearestTenMinutes where date was always rounded always to next 5, 10 mins



## v1.0.4

UILabelExtensions:
- **requiredHeight**: Return required height for a label

UIImageViewExtensions:
- **blur(withStyle: UIBlurEffectStyle)**: Make image view blurry
- **blurred(withStyle: UIBlurEffectStyle)**: Return a blurred version of an image view

UINavigationControllerExtensions:
- **makeTransparent(withTint: UIColor)**: Make navigation controller's navigation bar transparent

UINavigationBarExtensions:
- **makeTransparent(withTint: UIColor)**: Make navigation controller's navigation bar transparent

UITextFieldExtensions:
- **trimmedText**: Return text with no spaces or new lines in beginning and end

UIViewExtensions:
- **addShadow(ofColor, radius, offset, opacity)**: /// Add shadow to view

UIImageExtensions:
- **filled(withColor)**: Return image filled with color

DateExtensions:
- **nearestFiveMinutes**: Return nearest five minutes to date
- **nearestTenMinutes**: Return nearest ten minutes to date

UIViewExtensions:
- **shake**: Completion handler added to shake function
