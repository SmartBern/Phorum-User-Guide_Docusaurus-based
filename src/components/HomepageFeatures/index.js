import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Understand',
    Svg: require('@site/static/img/light_bulb.svg').default,
    description: (
      <>
        This user guide is easy to understand and contains several screenshot-based illustrations 
        to demonstrate how to use the platform.
      </>
    ),
  },

  {
    title: 'Written in Markdown',
    Svg: require('@site/static/img/markdown.svg').default,
    description: (
      <>
        This user guide is entirely written using Markdown, which is now the language of choice for writing 
        user guides and technical documentation.
      </>
    ),
  },

  {
    title: 'Published on Docusaurus',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus is a great platform for writing and publishing user guides, such as this, and other forms 
        of docs.
        
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
