import React from 'react';
import styles from './SiteDescription.module.css';

const SiteDescription = () => {
    return (
        <div className={styles.container}>
            {/* General Website Description */}
            <section className={styles.aboutSection}>
                <h2>More Than Just Label Cropping</h2>
                <p>
                    Welcome to <strong>pdf-crop.com</strong>, your go-to destination for simple and efficient PDF manipulation tools. While you're here perfecting your shipping labels, discover our growing suite of tools designed to make working with PDFs easier than ever.
                </p>
                <p>
                    Our mission is to provide free, accessible, and user-friendly online utilities for everyday PDF tasks. No installations, no sign-ups required – just straightforward tools that work directly in your browser.
                </p>
                {/* Add more benefits or features here */}
            </section>

            {/* Blog/Content Section */}
            <section className={styles.blogSection}>
                <h2>Tips & Insights</h2>
                <p className={styles.blogIntro}>
                    Explore our articles for helpful tips on managing PDFs, optimizing your shipping process, and getting the most out of online tools.
                </p>
                <div className={styles.blogGrid}>
                    {/* Updated Blog Cards with Icons */}
                    <div className={styles.blogCard}>
                        {/* Icon Placeholder */}
                        <div className={styles.cardIconPlaceholder}>
                            <span role="img" aria-label="Label Icon">🏷️</span>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Why A6 is the Standard for Shipping Labels</h3>
                            <p>Understand the benefits of the A6 format and why platforms like Flipkart and Meesho prefer it.</p>
                            <a href="#" className={styles.readMore}>Read More &raquo;</a>
                        </div>
                    </div>
                    <div className={styles.blogCard}>
                        {/* Icon Placeholder */}
                        <div className={styles.cardIconPlaceholder}>
                            <span role="img" aria-label="Magic Wand Icon">🪄</span>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>5 Quick PDF Tricks Every Seller Should Know</h3>
                            <p>Boost your productivity with simple PDF tips for merging, splitting, and compressing documents.</p>
                            <a href="#" className={styles.readMore}>Read More &raquo;</a>
                        </div>
                    </div>
                    <div className={styles.blogCard}>
                        <div className={styles.cardImagePlaceholder}></div> {/* Image Placeholder */}
                        <div className={styles.cardContent}>
                            <h3>Streamlining Your E-commerce Packing Workflow</h3>
                            <p>Discover ways to save time and reduce errors when preparing your orders for shipment.</p>
                            <a href="#" className={styles.readMore}>Read More &raquo;</a>
                        </div>
                    </div>
                    {/* Add more cards or dynamic loading logic */}
                </div>
            </section>
        </div>
    );
};

export default SiteDescription; 