import styles from './Stats.module.css';

const Stats = () => {
  const data = [
    { label: 'AGE', val: '70' },
    { label: 'HEIGHT', val: "5'7\" / 170CM" },
    { label: 'CHEST', val: '34DD / 86CM' },
    { label: 'WAIST', val: '27" / 69CM' },
    { label: 'HIPS', val: '36" / 91CM' },
    { label: 'BUST', val: '34DD / 86CM' },
    { label: 'WEIGHT', val: '10 STONE 4LBS / 65KG' },
    { label: 'SHOE SIZE', val: '6 / 39' },
    { label: 'GENDER', val: 'FEMALE' },
    { label: 'LOCATION', val: 'WAKEFIELD' },
    { label: 'ACCENT', val: 'ENGLISH POSH' },
    { label: 'HAIR', val: 'GOLDEN' },
    { label: 'EYES', val: 'HAZEL' },
    { label: "DRIVER'S LICENCE", val: 'NO LONGER DRIVE' },
  ];

  return (
    <section id="profile" className={styles.stats}>
      <h2 className={styles.sectionTitle}>STATS</h2>
      <div className={styles.grid}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <span className={styles.value}>{item.val}</span>
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
