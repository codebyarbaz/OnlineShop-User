const Users = require("../schemas/UserSchema");
const passwordHash = require("password-hash");

const { validationResult } = require("express-validator/check");

const UserOperations = {
  create(userDetails) {
    userDetails.password = passwordHash.generate(userDetails.password);
    Users.create(userDetails, (err, doc) => {
      if (err) {
        console.log("err");
      } else {
        console.log("Done", doc);
      }
    });
  },
  addUser(userDetails, res) {
    userDetails.address = "";
    userDetails.orders = [];
    userDetails.purchased = [];
    userDetails.password = passwordHash.generate(userDetails.password);
    Users.find({ email: userDetails.email }, (err, docs) => {
      if (err) {
        res.status(500).send("Error: In checking user");
      } else {
        if (docs.length) {
          return res.status(200).send("Email already registered!");
        } else {
          Users.create(userDetails, (err, doc) => {
            if (err) {
              res.status(500).send("Error: In creating account");
            } else {
              res.status(200).send("Account created successfully!");
            }
          });
        }
      }
    });
  },
  fetchUser(userDetails, req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errArray = errors.array();
      return res.render("login", {
        loginErrMsg: errArray,
        oldEmail: userDetails.email,
        oldPassword: userDetails.password
      });
    }
    Users.find({ email: userDetails.email }, (err, docs) => {
      if (err) {
        res.status(500).send("Error: In getting users");
      } else {
        if (docs.length) {
          const result = passwordHash.verify(
            userDetails.password,
            docs[0].password
          );
          if (result) {
            req.session.userID = docs[0]._id;
            res.status(200).redirect("/dashboard");
          } else {
            res.status(200).send("Wrong Password!");
          }
        } else {
          res.status(200).send("Email is not registered with us!");
        }
      }
    });
  },
  removeUser(details) {},
  myAccountDetails(userID, res) {
    Users.findById(userID, (err, doc) => {
      if (err) {
        res.status(404).send("Error: In getting myAccount details from DB");
      } else {
        res.status(200).render("myAccount", { user: doc });
      }
    });
  },
  addNewAddress(addressDetails, res) {
    Users.findById(addressDetails.userID, (err, doc) => {
      if (err) {
        res.status(404).send("Error: In adding new address in DB");
      } else {
        doc.address = addressDetails.address;
        doc.save(() => {
          res.status(200).send("Successfully updated new address.");
        });
      }
    });
  },
  updateMobile(details, res) {
    Users.findById(details.userID, (err, doc) => {
      if (err) {
        res.status(404).send("Error: In updating mobile from DB");
      } else {
        doc.mobile = details.Mobile;
        doc.save(() => {
          res.status(200).send("Mobile updated successfully!");
        });
      }
    });
  },
  updatePassword(details, res) {
    Users.findById(details.userID, (err, doc) => {
      if (err) {
        res.status(404).send("Error: In updating Password in DB");
      } else {
        let result = passwordHash.verify(details.oldPassword, doc.password);
        if (result) {
          doc.password = passwordHash.generate(details.newPassword);
          doc.save(() => {
            res.status(200).send("Password updated successfully!");
          });
        } else {
          res.status(200).send("Wrong Password");
        }
      }
    });
  },
  getMyOrders(userID, res) {
    Users.findById(userID, (err, doc) => {
      if (err) {
        res.status(404).send("Error: In getting myOrders from DB");
      } else {
        res.status(200).render("myOrders.ejs", {
          orders: doc.orders,
          purchasedOrders: doc.purchasedOrders
        });
      }
    });
  }
};

const detailsUser = {
  name: "Arbaz Tyagi",
  mobile: 8130484241,
  email: "arbaztyagi123@gmail.com",
  password: "12345",
  address: "B-433, Gali No- 7 Rajiv Nagar Mandoli Delhi- 93",
  orders: [
    {
      title:
        "JBL Flip II (New Black Edition) 10 W Portable Bluetooth Speaker  (Black, Stereo Channel)",
      price: 3999,
      discount: 500,
      availability: [
        {
          pincode: 110090
        },
        {
          pincode: 110091
        },
        {
          pincode: 110093
        },
        {
          pincode: 110090
        },
        {
          pincode: 110038
        }
      ],
      description:
        "People say that good things come in small packages.  This age old adage particularly stands true for the Flip 2 wireless portable speaker from JBL. With a stylish design, NFC support and innovative features, this portable speaker will help you enjoy",
      specification:
        "General\r\nSales Package\r\n1 JBL Flip 2 Portable Bluetooth Speaker, 1 Micro USB Cable, 1 Quick Start Guide\r\nModel Name\r\nFlip II (New Black Edition)\r\nType\r\nMobile/Tablet Speaker\r\nPortable\r\nYes\r\nBluetooth\r\nYes\r\nMemory Card Slot\r\nNo\r\nConfiguration\r\nStereo\r\nPower Source\r\nBattery\r\nPower Output (RMS)\r\n10 W\r\nFrequency Response\r\n100 - 20000 Hz\r\nImpedance\r\n4 Ohms\r\nColor\r\nBlack\r\nWired/Wireless\r\nWireless\r\nOutdoor Usage\r\nYes",
      menu: "Electronics",
      submenu: "Computer Accessories",
      trusted: true,
      images: [
        {
          name: "32.jpeg",
          url:
            "http://localhost:3000/uploads/product_images/Image_1-1539944612088.jpeg"
        },
        {
          name: "33.jpeg",
          url:
            "http://localhost:3000/uploads/product_images/Image_2-1539944612088.jpeg"
        },
        {
          name: "34.jpeg",
          url:
            "http://localhost:3000/uploads/product_images/Image_3-1539944612089.jpeg"
        },
        {
          name: "35.jpeg",
          url:
            "http://localhost:3000/uploads/product_images/Image_4-1539944612091.jpeg"
        }
      ],
      rating: [],
      reviews: [],
      clicked: 0,
      purchased: 0,
      active: true,
      status: "Pending",
      orderDate: "01-Nov-2018"
    },
    {
      title:
        "boAt BassHeads 220 Super Extra Bass Wired Headset with Mic  (Black, In the Ear)",
      price: 599,
      discount: 200,
      availability: [
        {
          pincode: 110090
        },
        {
          pincode: 1109021
        },
        {
          pincode: 22091
        },
        {
          pincode: 110099
        }
      ],
      description:
        "boAt BassHeads 220 Polished Metal Earphones are designed to give you an Experience which no other brand can match. It has an incredible sonic clarity with Super Extra Bass. It is not a plastic earphone - It is Polished Metal. With tangle free flat ca",
      specification:
        "\r\nModel Name\r\nBassHeads 220 Super Extra Bass\r\nColor\r\nBlack\r\nHeadphone Type\r\nIn the Ear\r\nInline Remote\r\nYes\r\nSales Package\r\nOne In-Ear Headphone, One Small and One Large Pair of earbuds",
      menu: "Electronics",
      submenu: "Mobile Accessories",
      trusted: true,
      images: [
        {
          name: "24.jpeg",
          url:
            "http://localhost:3000/uploads/product_images/Image_1-1539943398173.jpeg"
        },
        {
          name: "25.jpeg",
          url:
            "http://localhost:3000/uploads/product_images/Image_2-1539943398176.jpeg"
        },
        {
          name: "26.jpeg",
          url:
            "http://localhost:3000/uploads/product_images/Image_3-1539943398178.jpeg"
        },
        {
          name: "27.jpeg",
          url:
            "http://localhost:3000/uploads/product_images/Image_4-1539943398179.jpeg"
        }
      ],
      rating: [],
      reviews: [],
      clicked: 0,
      purchased: 0,
      active: true,
      status: "Pending",
      orderDate: "05-Nov-2018"
    }
  ],
  purchasedOrders: [
    {
      title:
        "JBL Flip II (New Black Edition) 10 W Portable Bluetooth Speaker  (Black, Stereo Channel)",
      price: 3999,
      discount: 500,
      availability: [
        {
          pincode: 110090
        },
        {
          pincode: 110091
        },
        {
          pincode: 110093
        },
        {
          pincode: 110090
        },
        {
          pincode: 110038
        }
      ],
      description:
        "People say that good things come in small packages.  This age old adage particularly stands true for the Flip 2 wireless portable speaker from JBL. With a stylish design, NFC support and innovative features, this portable speaker will help you enjoy",
      specification:
        "General\r\nSales Package\r\n1 JBL Flip 2 Portable Bluetooth Speaker, 1 Micro USB Cable, 1 Quick Start Guide\r\nModel Name\r\nFlip II (New Black Edition)\r\nType\r\nMobile/Tablet Speaker\r\nPortable\r\nYes\r\nBluetooth\r\nYes\r\nMemory Card Slot\r\nNo\r\nConfiguration\r\nStereo\r\nPower Source\r\nBattery\r\nPower Output (RMS)\r\n10 W\r\nFrequency Response\r\n100 - 20000 Hz\r\nImpedance\r\n4 Ohms\r\nColor\r\nBlack\r\nWired/Wireless\r\nWireless\r\nOutdoor Usage\r\nYes",
      menu: "Electronics",
      submenu: "Computer Accessories",
      trusted: true,
      images: [
        {
          name: "32.jpeg",
          url:
            "http://localhost:3000/uploads/product_images/Image_1-1539944612088.jpeg"
        },
        {
          name: "33.jpeg",
          url:
            "http://localhost:3000/uploads/product_images/Image_2-1539944612088.jpeg"
        },
        {
          name: "34.jpeg",
          url:
            "http://localhost:3000/uploads/product_images/Image_3-1539944612089.jpeg"
        },
        {
          name: "35.jpeg",
          url:
            "http://localhost:3000/uploads/product_images/Image_4-1539944612091.jpeg"
        }
      ],
      rating: [],
      reviews: [],
      clicked: 0,
      purchased: 0,
      active: true,
      status: "Complete",
      orderDate: "10-Dec-2018"
    },
    {
      title:
        "boAt BassHeads 220 Super Extra Bass Wired Headset with Mic  (Black, In the Ear)",
      price: 599,
      discount: 200,
      availability: [
        {
          pincode: 110090
        },
        {
          pincode: 1109021
        },
        {
          pincode: 22091
        },
        {
          pincode: 110099
        }
      ],
      description:
        "boAt BassHeads 220 Polished Metal Earphones are designed to give you an Experience which no other brand can match. It has an incredible sonic clarity with Super Extra Bass. It is not a plastic earphone - It is Polished Metal. With tangle free flat ca",
      specification:
        "\r\nModel Name\r\nBassHeads 220 Super Extra Bass\r\nColor\r\nBlack\r\nHeadphone Type\r\nIn the Ear\r\nInline Remote\r\nYes\r\nSales Package\r\nOne In-Ear Headphone, One Small and One Large Pair of earbuds",
      menu: "Electronics",
      submenu: "Mobile Accessories",
      trusted: true,
      images: [
        {
          name: "24.jpeg",
          url:
            "http://localhost:3000/uploads/product_images/Image_1-1539943398173.jpeg"
        },
        {
          name: "25.jpeg",
          url:
            "http://localhost:3000/uploads/product_images/Image_2-1539943398176.jpeg"
        },
        {
          name: "26.jpeg",
          url:
            "http://localhost:3000/uploads/product_images/Image_3-1539943398178.jpeg"
        },
        {
          name: "27.jpeg",
          url:
            "http://localhost:3000/uploads/product_images/Image_4-1539943398179.jpeg"
        }
      ],
      rating: [],
      reviews: [],
      clicked: 0,
      purchased: 0,
      active: true,
      status: "Complete",
      orderDate: "06-Mar-2018"
    }
  ]
};

// UserOperations.create(detailsUser);

module.exports = UserOperations;
