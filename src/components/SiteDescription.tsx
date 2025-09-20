import React from 'react';
import styles from './SiteDescription.module.css';

const SiteDescription = () => {
    return (
        <div className={styles.container}>
            {/* General Website Description */}
            <section className={styles.aboutSection}>
                <h2>Your Complete E-commerce Shipping Solution</h2>
                <p>
                    Welcome to <strong>pdf-crop.com</strong>, your comprehensive solution for e-commerce shipping label management. We understand the challenges faced by online sellers in managing shipping labels across multiple platforms, and we're here to simplify your workflow.
                </p>
                <p>
                    Our mission is to provide efficient, accurate, and user-friendly tools that help you streamline your shipping process, reduce errors, and save valuable time in your order fulfillment operations.
                </p>
            </section>

            {/* Features Section */}
            <section className={styles.featuresSection}>
                <h2>Key Features</h2>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>🎯</div>
                        <h3>Platform-Specific Optimization</h3>
                        <p>Automatically applies the correct dimensions and formatting for each e-commerce platform's shipping labels.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>⚡</div>
                        <h3>Batch Processing</h3>
                        <p>Process multiple labels at once to save time and improve efficiency in your shipping workflow.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>🔍</div>
                        <h3>Quality Control</h3>
                        <p>Preview and adjust labels before printing to ensure all elements are clearly visible and properly formatted.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>📱</div>
                        <h3>Mobile Friendly</h3>
                        <p>Access and process your shipping labels from any device, whether you're in the office or on the go.</p>
                    </div>
                </div>
            </section>

            {/* Blog/Content Section */}
            <section className={styles.blogSection}>
                <h2>Latest Insights & Resources</h2>
                <p className={styles.blogIntro}>
                    Stay updated with the latest trends, best practices, and tips for efficient e-commerce shipping and label management.
                </p>
                <div className={styles.blogGrid}>
                    <div className={styles.blogCard}>
                        <div className={styles.cardIconPlaceholder}>
                            <span role="img" aria-label="Label Icon">🏷️</span>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>E-commerce Shipping Label Standards Guide</h3>
                            <p>Comprehensive overview of shipping label requirements across major e-commerce platforms.</p>
                            <a href="/blog/shipping-label-standards" className={styles.readMore}>Read More &raquo;</a>
                        </div>
                    </div>
                    <div className={styles.blogCard}>
                        <div className={styles.cardIconPlaceholder}>
                            <span role="img" aria-label="Magic Wand Icon">🪄</span>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Shipping Workflow Optimization</h3>
                            <p>Learn how to streamline your order fulfillment process and reduce shipping errors.</p>
                            <a href="/blog/shipping-label-troubleshooting" className={styles.readMore}>Read More &raquo;</a>
                        </div>
                    </div>
                    <div className={styles.blogCard}>
                        <div className={styles.cardIconPlaceholder}>
                            <span role="img" aria-label="Rocket Icon">🚀</span>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>E-commerce Shipping Best Practices</h3>
                            <p>Essential tips and strategies for efficient shipping label management and order fulfillment.</p>
                            <a href="/blog/shipping-label-best-practices" className={styles.readMore}>Read More &raquo;</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className={styles.toolsSection}>
                <h2>Our PDF Tools</h2>
                <p>Explore our comprehensive suite of PDF tools designed to make your document management easier and more efficient.</p>
                <div className={styles.toolsGrid}>
                    <div className={styles.toolCard}>
                        <div className={styles.toolIcon}>✂️</div>
                        <h3>PDF Cropper</h3>
                        <p>Crop PDF files to the perfect size for your shipping labels and documents.</p>
                        <a href="/" className={styles.toolLink}>Try PDF Cropper →</a>
                    </div>
                    <div className={styles.toolCard}>
                        <div className={styles.toolIcon}>📝</div>
                        <h3>Edit PDF</h3>
                        <p>Rearrange and delete pages in your PDF documents with our intuitive drag-and-drop interface.</p>
                        <a href="/edit-pdf" className={styles.toolLink}>Edit PDF →</a>
                    </div>
                    <div className={styles.toolCard}>
                        <div className={styles.toolIcon}>🗜️</div>
                        <h3>Compress PDF</h3>
                        <p>Reduce PDF file sizes while maintaining quality for easier sharing and storage.</p>
                        <a href="/compress-pdf" className={styles.toolLink}>Compress PDF →</a>
                    </div>
                    <div className={styles.toolCard}>
                        <div className={styles.toolIcon}>🔄</div>
                        <h3>Merge PDF</h3>
                        <p>Combine multiple PDF files into a single document quickly and easily.</p>
                        <a href="/merge-pdf" className={styles.toolLink}>Merge PDF →</a>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className={styles.newsletterSection}>
                <h2>Stay Updated</h2>
                <p>Subscribe to our newsletter for the latest updates, tips, and best practices in e-commerce shipping.</p>
                <form className={styles.newsletterForm}>
                    <input type="email" placeholder="Enter your email address" required />
                    <button type="submit">Subscribe</button>
                </form>
            </section>
        </div>
    );
};

export default SiteDescription; 