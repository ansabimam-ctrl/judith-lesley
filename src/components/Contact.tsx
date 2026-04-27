import Image from 'next/image';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.imageSide}>
           <Image src="/images/hero.png" alt="Contact Portrait" fill className={styles.img} />
        </div>
        <div className={styles.formSide}>
          <span className={styles.subtitle}>GET IN TOUCH</span>
          <h2 className={styles.title}>LET'S WORK TOGETHER</h2>
          
          <form className={styles.form}>
            <div className={styles.field}>
              <input type="text" placeholder="Name" required />
            </div>
            <div className={styles.field}>
              <input type="email" placeholder="Email" required />
            </div>
            <div className={styles.field}>
              <select required>
                <option value="" disabled selected>Project Type</option>
                <option value="lifestyle">Lifestyle Campaign</option>
                <option value="commercial">Commercial Shoot</option>
                <option value="editorial">Editorial</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.field}>
              <textarea placeholder="Message" rows={5} required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>SEND INQUIRY</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
