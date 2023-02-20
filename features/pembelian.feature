Feature: Purchase on the kasirAja website

@Buy
#Case Negative
Scenario Outline: TC-03 As a user, I login and not purchase products

 Given I am on the login page
 When User toko input <email> and <password> then user click menu Pembelian at navbar
 Then User does not select a product and clicks the save button it will see <alert>

 Examples:
      | email                   | password    | alert               |
      | admin@mail.com          | admin       | item produk kosong  |
      

@Buy 
#Case Positive
Scenario Outline: TC-04 As a user, I login and make product purchases

 Given I am on the login page
 When User toko input <email> and <password> then user click menu Pembelian at navbar
 And  User search produk <barang>
 And  Users see the product they are looking for <message> 
 Then User selects the product to be purchased and see <popup>

 Examples:
      | email                   | password     | barang      | message      | popup                   | 
      | tokorisdho@gmail.com    | 123asd@      | Roti        | BR156916     | transaksi ditambahkan   | 


