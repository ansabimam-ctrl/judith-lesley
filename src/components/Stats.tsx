import styles from './Stats.module.css';

const Stats = () => {
  const data = [
    { label: 'AGE', val: '70' },
    { label: 'HEIGHT', val: "5'2\" / 147CM" },
    { label: 'CHEST', val: '42" / 107CM' },
    { label: 'WAIST', val: '40" / 102CM' },
    { label: 'HIPS', val: '44" / 112CM' },
    { label: 'BUST', val: '42" / 107CM' },
    { label: 'WEIGHT', val: '12 STONE / 76KG' },
    { label: 'SHOE SIZE', val: '4 / 37' },
    { label: 'GENDER', val: 'FEMALE' },
    { label: 'LOCATION', val: 'BOLTON' },
    { label: 'ACCENT', val: 'RP' },
    { label: 'HAIR', val: 'DARK BROWN' },
    { label: 'EYES', val: 'BLUE' },
    { label: "DRIVER'S LICENCE", val: 'YES' },
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
