import Section from '../components/Section'
import styles from './Contacts.module.css'

const TEAM = [
  {
    name: 'Maria Santos',
    role: 'Field Operations Director',
    phone: '+63 917 820 4431',
    email: 'maria@projectasap.org',
    region: 'Philippines',
  },
  {
    name: 'Thanh Nguyen',
    role: 'Relief Coordination Lead',
    phone: '+84 90 312 7854',
    email: 'thanh@projectasap.org',
    region: 'Vietnam',
  },
  {
    name: 'Arief Wibowo',
    role: 'Volunteer Network Manager',
    phone: '+62 812 5530 9921',
    email: 'arief@projectasap.org',
    region: 'Indonesia',
  },
  {
    name: 'Priya Ramachandran',
    role: 'Donor Relations',
    phone: '+91 98 4430 1127',
    email: 'priya@projectasap.org',
    region: 'India',
  },
]

const PROGRAMS = [
  {
    tag: 'Emergency',
    title: 'Rapid Response',
    desc: 'First-72-hour deployment of food, clean water, and emergency shelter to disaster-hit zones.',
    phone: '+1 (800) 772-6734',
  },
  {
    tag: 'Medical',
    title: 'Field Medical Aid',
    desc: 'Mobile clinics staffed by volunteer doctors providing triage, wound care, and medicine distribution.',
    phone: '+63 2 8896 0041',
  },
  {
    tag: 'Reunification',
    title: 'Family Finder',
    desc: 'Cross-referencing survivor registries with missing persons reports to reconnect displaced families.',
    phone: '+63 917 100 5522',
  },
  {
    tag: 'Recovery',
    title: 'Rebuild Program',
    desc: 'Long-term housing, livelihood grants, and psychosocial support for communities six months post-disaster.',
    phone: '+62 21 5095 8830',
  },
]

function Avatar({ name }) {
  const initials = name.split(' ').map(w => w[0]).join('')
  return (
    <div className={styles.avatar} aria-hidden='true'>
      {initials}
    </div>
  )
}

export default function Contacts() {
  return (
    <>
      <Section id='contact-hero' label='Contact' title='Who we are.'>
        <p>
          Project ASAP operates across Southeast and South Asia with regional
          leads on the ground year-round. Reach anyone below directly — or use
          the general line for the fastest response.
        </p>
        <div className={styles.generalContact}>
          <div className={styles.contactLine}>
            <span className={styles.contactLineLabel}>General</span>
            <a href='mailto:info@projectasap.org'>info@projectasap.org</a>
          </div>
          <div className={styles.contactLine}>
            <span className={styles.contactLineLabel}>Hotline</span>
            <a href='tel:+18007726734'>+1 (800) 772-6734</a>
          </div>
          <div className={styles.contactLine}>
            <span className={styles.contactLineLabel}>WhatsApp</span>
            <span>+63 917 000 1200</span>
          </div>
        </div>
      </Section>

      <hr />

      <Section id='team' label='Team' title='Our regional leads.'>
        <div className={styles.teamGrid}>
          {TEAM.map(person => (
            <div key={person.email} className={styles.card}>
              <Avatar name={person.name} />
              <div className={styles.cardBody}>
                <p className={styles.cardName}>{person.name}</p>
                <p className={styles.cardRole}>{person.role}</p>
                <p className={styles.cardRegion}>{person.region}</p>
              </div>
              <div className={styles.cardContact}>
                <a href={`tel:${person.phone.replace(/\s/g, '')}`} className={styles.cardPhone}>
                  {person.phone}
                </a>
                <a href={`mailto:${person.email}`} className={styles.cardEmail}>
                  {person.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <hr />

      <Section id='programs' label='Programs' title='What we run.'>
        <div className={styles.programGrid}>
          {PROGRAMS.map(prog => (
            <div key={prog.title} className={styles.programCard}>
              <span className={styles.programTag}>{prog.tag}</span>
              <h3 className={styles.programTitle}>{prog.title}</h3>
              <p className={styles.programDesc}>{prog.desc}</p>
              <a href={`tel:${prog.phone.replace(/[\s()-]/g, '')}`} className={styles.programPhone}>
                {prog.phone}
              </a>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
