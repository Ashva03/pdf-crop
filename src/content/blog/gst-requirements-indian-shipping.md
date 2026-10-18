---
title: "GST Requirements for Indian E-Commerce Shipping: Invoices, E-Way Bills & TCS"
description: "Complete statutory guide to GST compliance for Indian e-commerce sellers: mandatory invoice fields, E-Way Bill thresholds, TCS Section 52 deductions, and transport documentation."
author: "PDF Cropper Technical Team"
date: "2026-10-15"
category: "Tax & Compliance"
tags: ["gst-compliance", "e-way-bill", "tax-invoice", "tcs-section-52", "seller-compliance", "shipping-rules"]
slug: "gst-requirements-indian-shipping"
icon: "📜"
---

# GST Requirements for Indian E-Commerce Shipping: Invoices, E-Way Bills & TCS

In India, operating an online storefront—whether through major marketplaces like Amazon, Flipkart, and Meesho, or via a standalone direct-to-consumer (D2C) website—requires strict adherence to the **Goods and Services Tax (GST)** regulatory framework.

Unlike local brick-and-mortar retail where goods change hands immediately at the checkout counter, e-commerce involves goods moving across state boundaries and city limits via third-party logistics (3PL) carriers. During transit, consignments are subject to inspection by State and Central GST roving squads.

If a shipment is intercepted without a legally compliant **B2C or B2B Tax Invoice**, an active **E-Way Bill** (where applicable), or an accurate transport declaration, tax authorities have the statutory power to detain the vehicle, seize the goods, and levy steep penalties under **Section 129 of the CGST Act** (often equal to 200% of the applicable tax).

This comprehensive legal and operational guide breaks down statutory GST requirements for e-commerce shipments, mandatory invoice fields, E-Way Bill rules, and best practices for packaging station documentation.

---

## The Statutory Transport Documentation Hierarchy

Every commercial package transported within India must be accompanied by specific legal documentation, as outlined in the diagram below:

```
+-------------------------------------------------------------+
| GOODS IN TRANSIT: STATUTORY DOCUMENTATION FRAMEWORK         |
|                                                             |
| 1. OUTER PARCEL:                                            |
|    Standard 4x6" Thermal Shipping Label (AWB Barcode)       |
|    - Affixed flat on outer box or tamper-evident polybag.   |
|                                                             |
| 2. ENCLOSED WITH GOODS:                                     |
|    Statutory Tax Invoice / Delivery Challan / Bill of Supply|
|    - Enclosed inside the parcel box OR placed in an         |
|      exterior clear adhesive document pouch.                |
|                                                             |
| 3. TRANSPORTER HANDOVER:                                    |
|    E-Way Bill (EWB) Copy (Physical or Digital QR Code)      |
|    - Mandatory if consignment value exceeds ₹50,000         |
|      (or state-specific intra-state thresholds).            |
+-------------------------------------------------------------+
```

---

## 1. Mandatory Fields on an E-Commerce Tax Invoice

Under **Section 31 of the CGST Act** read with **Rule 46 of the CGST Rules**, a valid e-commerce tax invoice must contain the following statutory data fields:

```
+-------------------------------------------------------------+
| STATUTORY TAX INVOICE CHECKLIST (RULE 46)                   |
|                                                             |
| [1] Supplier Details:                                       |
|     - Legal Name & Trade Name                               |
|     - Registered Principal Place of Business Address        |
|     - 15-Digit GSTIN (Goods and Services Tax ID)            |
|                                                             |
| [2] Invoice Metadata:                                       |
|     - Consecutive Serial Number (Unique per financial year) |
|     - Date of Issue                                         |
|                                                             |
| [3] Recipient (Buyer) Details:                              |
|     - Full Name & Complete Delivery Address                 |
|     - State Name and 2-Digit State Code                     |
|     - Buyer's GSTIN (Mandatory for B2B input tax credit)    |
|                                                             |
| [4] Product Line-Item Data:                                 |
|     - Full Description of Goods & Variant SKU               |
|     - Harmonized System of Nomenclature (HSN Code)          |
|     - Quantity & Unit of Measurement (UOM)                  |
|     - Gross Taxable Value & Unit Price                      |
|                                                             |
| [5] Tax Breakup:                                            |
|     - Intra-State: CGST Rate + SGST/UTGST Rate               |
|     - Inter-State: IGST Rate                                |
|     - Total Tax Amount & Total Invoice Gross Value          |
|                                                             |
| [6] Marketplace Operator Details (Section 52):              |
|     - Name & GSTIN of E-Commerce Operator (e.g. Amazon)     |
+-------------------------------------------------------------+
```

### Tax Invoice vs Bill of Supply vs Delivery Challan

| Document Type | Governing Rule | When Issued by E-Commerce Merchants |
| :--- | :--- | :--- |
| **Tax Invoice** | Rule 46 | Standard taxable sales to B2C consumers or B2B registered businesses |
| **Bill of Supply** | Rule 49 | Composition scheme merchants OR suppliers of 100% tax-exempt goods |
| **Delivery Challan** | Rule 55 | Transportation of goods for reasons other than supply (e.g., inter-branch warehouse transfers, job work, goods sent for exhibition/demo) |

---

## 2. E-Way Bill (EWB) Rules for E-Commerce Consignments

An **E-Way Bill** is an electronic document generated on the central GST portal (`ewaybillgst.gov.in`) evidencing the legal movement of goods. Under **Rule 138 of the CGST Rules**, an E-Way Bill is mandatory prior to commencement of movement whenever consignment value exceeds designated statutory limits.

```
+-------------------------------------------------------------+
| ANATOMY OF AN E-WAY BILL                                    |
|                                                             |
| PART A (Filled by Seller / Consignor):                      |
| - GSTIN of Supplier & Recipient                             |
| - Place of Delivery (Pincode & State)                       |
| - Invoice Number & Invoice Date                             |
| - Value of Goods & 6-Digit HSN Code                         |
| - Reason for Transportation (Supply / Job Work / Export)    |
|                                                             |
| PART B (Filled by Transporter / Logistics Partner):         |
| - Vehicle Registration Number (for road freight)            |
| - Transporter Doc / Lorry Receipt (LR) / AWB Tracking No.   |
+-------------------------------------------------------------+
```

### Statutory Value Thresholds:
* **Inter-State Movements (Between Different States):** Mandatory for all consignments with a taxable value exceeding **₹50,000**.
* **Intra-State Movements (Within the Same State):** Thresholds vary by state government notification:
  * *Delhi:* ₹1,00,000 (except certain specified goods)
  * *Maharashtra:* ₹1,00,000
  * *Gujarat, Karnataka, Tamil Nadu:* ₹50,000
  * *West Bengal:* ₹1,00,000 (intra-state)

### E-Way Bill Validity Periods
The legal validity of an E-Way Bill depends on the physical distance between the dispatch origin and delivery destination:
* **Regular Cargo:** Valid for **1 day for every 200 kilometers** (or part thereof).
* **Over Dimensional Cargo (ODC) / Multimodal:** Valid for **1 day for every 20 kilometers**.

If an E-Way Bill expires while the courier truck is stranded in transit due to mechanical breakdown or driver emergency, the transporter must log into the portal and update Part B with the new vehicle number and request an extension within **8 hours of expiry**.

---

## 3. Tax Collection at Source (TCS) Under Section 52

For e-commerce marketplace sellers, understanding **TCS (Tax Collection at Source)** is crucial for monthly cash flow reconciliation.

Under **Section 52 of the CGST Act**, every electronic commerce operator (Amazon, Flipkart, Meesho, Myntra, Nykaa) is legally required to collect TCS at the rate of:
* **0.5% CGST + 0.5% SGST** on intra-state supplies (Total: 1.0%)
* **1.0% IGST** on inter-state supplies

TCS is calculated on the **net value of taxable supplies** (gross sales minus customer sales returns). Marketplaces deposit these withheld funds with the government by the 10th day of the following month under **GSTR-8**. 

Merchants can claim full credit for this deducted TCS in their electronic cash ledger on the GST Portal (**GSTR-2X / TDS-TCS Credit Received**), which can then be offset against their regular monthly output tax liability.

---

## 4. Packing Station Documentation Best Practices

To maintain flawless compliance while maximizing packaging speed at your warehouse:

```
+-------------------------------------------------------+
| RECOMMENDED PACKAGING BENCH PROCEDURES                |
|                                                       |
| 1. NEVER print full A4 invoices on thermal stickers.  |
|    Thermal stickers are expensive and fade over time. |
|                                                       |
| 2. Use our Amazon / Flipkart / Meesho Cropper to:     |
|    - Extract only the A6 shipping label for thermal.  |
|    - Strip invoice pages to print on plain paper.     |
|                                                       |
| 3. Enclose the paper tax invoice inside the box.      |
|                                                       |
| 4. Maintain PDF copies in compressed digital format   |
|    for mandatory 72-month GST audit retention.        |
+-------------------------------------------------------+
```

1. **Separate Invoices from Outer Labels:** Never print tax invoices on thermal self-adhesive label rolls. Thermal paper contains heat-sensitive leuco dyes that fade under sunlight, heat, and friction, making them legally invalid for long-term tax audits. Print tax invoices on standard A4 plain paper using an office laser printer, and reserve thermal stickers exclusively for the outer shipping box.
2. **Use Vector Coordinate Cropping:** Use our [Amazon Label Cropper Tool](/amazon-label), [Flipkart Label Cropper](/flipkart-label), or [Meesho Label Cropper](/meesho-label) to isolate the outer shipping label from composite A4 downloads without distorting barcodes or quiet zones.
3. **Audit Trail Retention (72 Months):** Under **GST Rule 56**, registered taxpayers must maintain complete books of accounts, tax invoices, delivery challans, and e-way bills for a minimum period of **72 months (6 years)** from the due date of filing the annual return. Compress your monthly digital PDF manifests using our [Compress PDF Tool](/compress-pdf) to preserve storage capacity without losing text vector clarity.

---

## Frequently Asked Questions (FAQ)

### Can an e-commerce seller operate without a GST registration in India?
Under recent GST Council amendments, small e-commerce merchants with an annual turnover below the mandatory threshold (₹40 lakhs for goods / ₹20 lakhs for services) can sell goods intra-state (within their home state) through e-commerce operators using an **Enrolment ID (UIN)** without regular GST registration. However, as soon as a seller initiates **inter-state sales** (shipping to customers in other states), mandatory GST registration is legally required regardless of turnover.

### Does every courier shipment require an E-Way Bill?
No. An E-Way Bill is required only if the total invoice value (including taxes) of the consignment exceeds **₹50,000** (or the designated intra-state threshold of that specific state). For typical B2C orders valued between ₹300 and ₹5,000, only the physical or digital Tax Invoice and carrier shipping label are required.

### What should I do if a shipment is detained by a GST roving squad?
If a consignment vehicle is stopped and detained under Section 129, the officer will issue a notice in Form **GST MOV-06**. The transporter or merchant must present the valid Tax Invoice and E-Way Bill within the stipulated response period. Ensuring your documents contain matching HSN codes, correct dispatch addresses, and accurate vehicle registration details guarantees immediate release.

### Is digital PDF documentation accepted during highway transit checks?
Yes. Under Rule 138A, the person in charge of a conveyance can carry the E-Way Bill in electronic form (such as on an RFID device, tablet, or smartphone displaying the verified QR code) matched with an electronic tax invoice.

---

## Recommended Tools and Educational Resources

* **Compliance & Logistics Guides:**
  * [PDF Size Reduction for GST & Portal Uploads](/blog/shipping-cost-optimization)
  * [Shipping Carrier Options in India](/blog/shipping-carrier-options-india)
  * [Managing Returns & Reducing RTO](/blog/managing-returns-rto-logistics)
* **Marketplace Cropping Tools:**
  * [Flipkart Label Cropper](/flipkart-label)
  * [Meesho Label Cropper](/meesho-label)
  * [Amazon Label Cropper Tool](/amazon-label)
  * [Snapdeal Label Cropper](/snapdeal-label)
* **Document Utilities:**
  * [Compress PDF File Sizes](/compress-pdf)
  * [Merge Multi-Day PDF Manifests](/merge-pdf)
  * [Rotate PDF Pages](/rotate-pdf)
