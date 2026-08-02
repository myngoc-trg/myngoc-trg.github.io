export type ProjectKind = 'Study' | 'Work';
export type ProjectArea =
  | 'Financial Analytics & Data Engineering'
  | 'Machine Learning & Statistics'
  | 'Functional Programming';

export interface Project {
  slug: string;
  title: string;
  kind: ProjectKind;
  area: ProjectArea;
  year: string;
  summary: string;
  highlight: string;
  image: string;
  titleImage?: string;
  titleImageAlt?: string;
  gallery?: {
  src: string;
  alt: string;
  caption?: string;
}[];
  skills: string[];
  featured: boolean;
  situation: string;
  task: string;
  requirements?: string[];
  actions: string[];
  results: string[];
  learnings?: string[];
}

export const projects: Project[] = [
  {
  slug: 'pollen-species-classification',
  title: 'Improving Pollen Species Classification using Deep Learning and Size Features',
  kind: 'Study',
  area: 'Machine Learning & Statistics',
  year: '2026',
  summary:
  'Developed a deep-learning workflow to classify microscope images of ten pollen species by combining computer vision, biological size measurements, and statistically rigorous model evaluation.',
  highlight:
  'Improved test accuracy by 8.4 percentage points, from 76.8% to 85.2%, while maintaining balanced performance across species.',
  image: '/images/bachelor_pollen_dataset_examples.png',
  titleImage: '/images/bachelor_pollenexample.png',
  titleImageAlt:
    'Microscope image of a pollen grain used in the classification project',
  gallery: [
    {
      src: '/images/bachelor_pollen_dataset_examples.png',
      alt: 'Examples of the ten pollen species used in the dataset',
      caption: 'The ten pollen species included in the classification dataset.',
    },
    {
      src: '/images/bachelor_modelformulation.png',
      alt: 'Comparison of pollen classification model results',
    },
    {
      src: '/images/bachelor_confusionmatrix_basebest.png',
      alt: 'Confusion matrix for the best pollen classification model',
    },
    {
      src: '/images/bachelor_hardspecies.png',
      alt: 't-SNE representation of extracted pollen image features',
    },
    {
      src: '/images/bachelor_sensitivityanalysis_recall.png',
      alt: 't-SNE representation of extracted pollen image features',
    },
  ],
  skills: [
  'Python',
  'PyTorch',
  'Computer vision',
  'ConvNeXt',
  'ResNet18',
  'Experimental design',
  'Statistical model evaluation',
  ],
  featured: true,
  situation:
  'Identifying pollen manually is time-consuming and requires specialist knowledge. Automating the process is challenging because several species look nearly identical under a microscope, while images collected from the same flower are strongly related. This creates a risk that poorly designed data splits produce overly optimistic results.',
  task:
  'Build a reproducible machine-learning workflow for classifying ten pollen species, compare modern neural-network architectures, and determine whether pollen size measurements could improve classification reliability.',
  actions: [
  'Built an end-to-end PyTorch workflow covering data preparation, model training, validation, testing, and result analysis.',
  'Designed flower-level data splits so the models were evaluated on pollen from flowers they had not seen during training.',
  'Combined microscope images with measurements of each pollen grain’s major and minor axes.',
  'Benchmarked ResNet18 against ConvNeXt-Tiny and tested alternative image representations, augmentation strategies, class balancing, and loss functions.',
  'Evaluated performance using accuracy, macro recall, class-level recall, confusion matrices, and sensitivity analysis across alternative test flowers.',
  ],
  results: [
  'Increased test accuracy from 76.8% to 85.2% and macro recall from 76.2% to 85.3%.',
  'Demonstrated that the ConvNeXt-Tiny model produced stronger and more balanced image representations than the reproduced ResNet18 baseline.',
  'Confirmed that the final model remained strong across alternative flower-level test splits, with an average accuracy of 84.2%.',
  'Identified that most remaining uncertainty was concentrated between two visually similar species rather than across the full classification problem.',
  'Published a reproducible codebase with documented experiments, assumptions, limitations, and an open-access thesis.',
  ],
  },

  {
    slug: 'funding-cost-spread-engine',
    title: 'Funding Cost and Spread Calculation Engine',
    kind: 'Work',
    area: 'Financial Analytics & Data Engineering',
    year: '2026',
    summary:
      'Redesigned a complex financial calculation workflow as a scalable SQL engine, enabling reproducible funding analytics across thousands of contracts in seconds.',
    highlight: 'About 14 seconds for roughly 6,500 contracts.',
    image: '/images/MF_avatar.png',
    titleImage: '/images/MF_avatar.png',
    gallery: [
      {
        src: '/images/MF_AllMap.png',
        alt: 'A SQL query plan for a financial calculation',
        caption:
          'A SQL query plan showing the execution path for a portfolio-level financial calculation.',
      },
    ],
    skills: ['SQL Server', 'Financial modelling', 'Performance Optimization','Table-valued functions', 'Computational Science', 'Data Validation','Technical documentation'],
    featured: true,
    situation:
      'A financial profitability process relied on a complex calculation workflow that combined contract information, projected cash flows, funding assumptions and time-dependent financial calculations.\n\nThe existing implementation in Excel was useful as a reference, but it was difficult to operate efficiently across a large portfolio. It required substantial processing time, contained many interconnected calculation steps and was challenging to troubleshoot when results differed from expectations.',
    task:
      'Rebuilt the calculation process as a scalable SQL solution while preserving validated financial outcomes.',
    actions: [
      'Mapped the existing calculation flow into clear stages, including contract timelines, scheduled cash flows, monthly exposures, approved assumptions, discounting and final aggregation.',

      'Rebuilt the period-level calculations in SQL and generated contract schedules in a consistent, set-based structure.',

      'Reformulated recursive calculations into mathematically equivalent non-recursive expressions. Verified the equivalence against the approved reference method, then implemented the formulas using SQL window functions and cumulative calculations to improve performance.',

      'Separated the solution into analytical layers so that intermediate results could be inspected, calculation differences could be isolated and each stage could be validated independently.',

      'Created reconciliation outputs comparing the SQL results with the approved reference calculations at both intermediate and final-result level, and documented relevant edge cases.'
    ],
    results: [
      'Reduced processing from an extensive spreadsheet-based workflow to a database calculation.',
      'Supported calculations across thousands of contracts with high performance.',
      'Improved repeatability and traceability for downstream profitability reporting.',
    ],
  },
    {
    slug: 'extreme-value-modelling',
    title: 'Extreme Value Modelling of Winter Temperatures and Hurricane Damage',
    kind: 'Study',
    area: 'Machine Learning & Statistics',
    year: '2025',
    summary:
      'Applied extreme value theory to model rare climate and economic-loss observations, compare covariate structures, and estimate long-term return levels.',
    highlight: 'A likelihood-based modelling workflow for understanding rare but consequential events.',
    image: '/images/ext-avatar.png',
    titleImage: '/images/ext-avatar.png',
    gallery: [
      {
        src: '/images/ext-AO-fevd.png',
        alt: 'Feasible Event Detection of AO Index in Extreme Value Analysis',
      },
      {
        src: '/images/ext-AO-return-levels.jpg',
        alt: 'Return Levels of AO Index in Extreme Value Analysis',
      },
      {
        src: '/images/ext-damage-fevd2.06.png',
        alt: 'Feasible Event Detection of Hurricane Damage in Extreme Value Analysis',
      },
      {
        src: '/images/ext-damage-fevd10.png',
        alt: 'Feasible Event Detection of Hurricane Damage in Extreme Value Analysis',
      },
      {
        src: '/images/ext-threshold-damage.png',
        alt: 'Threshold Selection of Hurricane Damage in Extreme Value Analysis',
      },
    ],
    skills: ['R', 'Extreme Value Theory', 'Maximum Likelihood Estimation', 'Model diagnostics', 'Return-level estimation'],
    featured: false,

    situation:
      'Rare climate and loss events cannot be described reliably by average behaviour alone. The project examined how extreme-value models could represent unusually high observations and support estimation of events beyond those commonly observed.\n\nThis project applied extreme value theory to two real-world datasetss:\n\n- Maximum winter temperatures recorded at Port Jervis, New York, from 1927 to 1995, combined with the Arctic Oscillation index to test whether large-scale atmospheric variation helped explain changes in temperature extremes.\n\n- Estimated economic damage from U.S. hurricanes between 1926 and 1995, used to model unusually large losses and estimate the magnitude of rare damage events.',
    task:
      'Working with a project partner, we built a statistical workflow for covariate evaluation, threshold selection, model comparison, return-level estimation and uncertainty assessment.\n\nUsed Generalised Extreme Value and Generalised Pareto models to analyse the upper tails of these datasets, compare alternative model structures and estimate return levels for rare events.',
    actions: [
    'For the temperature data, I fitted a stationary Generalised Extreme Value model to maximum winter temperatures (1927–1995), incorporated the Arctic Oscillation index as a covariate in the location parameter, tested its inclusion in the scale parameter, compared nested models via likelihood-ratio tests, and estimated 2-, 20-, and 100-year return levels under varying Arctic Oscillation conditions.',
    'For the hurricane-loss data, I analysed U.S. hurricane damages (1926–1995), used parameter-stability and mean-residual-life plots to select a USD 6 billion threshold, fitted a Generalised Pareto model to exceedances, adjusted for an average rate of 2.06 hurricanes per year, validated the fit using probability, quantile, and return-level diagnostics, and constructed a maximum-likelihood confidence interval for the tail-shape parameter.',
  ],
    results: [
    'The temperature analysis found evidence that the Arctic Oscillation index was associated with the location of the maximum-winter-temperature distribution. Including the covariate in the scale parameter did not provide sufficient additional improvement, supporting a simpler model in which the covariate affected the expected level of extremes but not their variability.',
    'The hurricane analysis produced a threshold-exceedance model for damages above approximately USD 6 billion. The model provided a structured basis for estimating rare annual loss levels while making the limited number of extreme observations and the resulting statistical uncertainty visible.',
  ],
  },
  {
    slug: 'profitability-scenario-assistant',
    title: 'Profitability Contribution Simulation Tool',
    kind: 'Work',
    area: 'Financial Analytics & Data Engineering',
    year: '2026',
    summary:
      'Built an interactive Power BI scenario simulator that helps finance stakeholders evaluate how changes in sales and volume assumptions may affect contract targets and profitability contribution.',
    highlight: 'A prototype architecture for explainable, governed scenario analysis.',
    image: '/images/profit-simulation-avatar.png',
    titleImage: '/images/profit-simulation-avatar.png',
    gallery: [
      {
        src: '/images/profit-simulation.png',
        alt: 'Profitability Simulation',
      }],
    skills: ['Power BI', 'Semantic models', 'DAX', 'RLS'],
    featured: true,
    situation:
      'Traditional profitability reporting is often backward-looking. It can explain current and historical performance, but it may not easily answer planning questions such as how future volume assumptions could affect profitability outcomes.\n\nThe business needed a more interactive way to evaluate different commercial scenarios across key business categories. The tool had to support management-level decision-making while keeping the underlying calculation logic consistent, reusable, and easy to interpret.',
    task:
      'Make forward-looking scenario analysis easier for management by connecting current business performance, active pipeline volume, and simulated future volume in one clear decision-support view.',
    actions: [
      'Created a Power BI simulation page using DAX measures and parameter-driven inputs. The model allows users to adjust selected planning assumptions and compare simulated targets with current business volumes.',
      'Estimated remaining volume needs and potential profitability impact.',
      'Implemented row-level security and controlled visibility for different user groups.',
      'Separated actual and simulated values to keep the dashboard clear and governed.',
    ],
    results: [
      'Transformed static reporting into an interactive scenario-planning tool.',
      'Enabled CFO and management to test assumptions directly in Power BI.',
      'Supported faster planning discussions and decision-making.',
    ],
  },
  {
    slug: 'credit-risk-prediction',
    title: 'Credit Risk Prediction',
    kind: 'Study',
    area: 'Machine Learning & Statistics',
    year: '2025',
    summary:
      'Developed a reproducible machine-learning workflow to classify borrower default risk and compared Random Forest and neural-network models on imbalanced tabular data.',
    highlight: 'The tuned Random Forest achieved approximately 94% test accuracy and 91% recall for the default class.',
    image: '/images/credit-risk-avatar.png',
    titleImage: '/images/credit-risk-avatar.png',
    gallery: [
      {
        src: '/images/credit-risk-dataset.png',
        alt: 'Dataset',
        caption:
          'Dataset - Customer Data.',
      },
      {
        src: '/images/credit-risk-correlation.png',
        alt: 'Correlation matrix of borrower and loan features',
        caption:
          'Feature Correlation Matrix - relationships and potential dependencies among borrower and loan variables.',
      },
      {
        src: '/images/credit-risk-random-forest.png',
        alt: 'Random Forest classification report and confusion matrix',
        caption:
          'Random Forest Performance - approximately 94% accuracy and 91% recall for the default class.',
      },
      {
        src: '/images/credit-risk-shap.png',
        alt: 'SHAP summary showing the influence of credit-risk features',
        caption:
          'Default-Risk Drivers - SHAP analysis showing how each feature influenced the Random Forest predictions.',
      },
      {
        src: '/images/credit-risk-neural-network.png',
        alt: 'Neural-network classification results for credit default prediction',
        caption:
          'Neural Network Performance - approximately 87% accuracy, providing a benchmark against the Random Forest model.',
      },
    ],
    skills: ['Python', 'SMOTE', 'Random Forest', 'Neural networks', 'PCA','t-SNE'],
    featured: true,
    situation:
      'Default cases were underrepresented in the dataset, meaning a model could achieve high overall accuracy while still failing to identify borrowers at greater risk of default.',
    task:
      'Build and evaluate a reproducible classification workflow that addressed class imbalance, explored the underlying data structure, and compared model performance using metrics relevant to credit-risk decisions.',
    actions: [
      'Validated and prepared the data by handling missing values, duplicates, categorical variables, feature scaling, and potentially unrealistic observations.',
          'Examined correlations and multicollinearity to identify dependencies and overlapping information between borrower and loan features.',
          'Applied PCA and t-SNE to investigate linear and non-linear patterns, dimensionality, and class separation in the data.',
          'Used SMOTE to improve representation of the minority default class during model development.',
          'Trained and tuned Random Forest and fully connected neural-network models using cross-validation, regularisation, and early stopping.',
          'Compared the models using precision, recall, F1-score, confusion matrices, feature importance, and SHAP-based interpretation.',
    ],
    results: [
        'The tuned Random Forest produced the strongest experimental results, with approximately 94% accuracy, 97% precision, and 91% recall for the default class.',
            'The neural-network models achieved approximately 87% test accuracy but did not outperform the tree-based model on the structured tabular data.',
            'Created a reusable end-to-end workflow connecting data validation, statistical exploration, imbalance treatment, modelling, evaluation, and interpretation.',
    ],
  },

    {
    slug: 'irr-function-sql',
    title: 'Internal Rate of Return Function in SQL',
    kind: 'Work',
    area: 'Financial Analytics & Data Engineering',
    year: '2026',
    summary:
      'Developed a reusable SQL function to calculate the Internal Rate of Return from periodic cash flows.The solution added spreadsheet-compatible financial functionality to the data platform. Analytical processes can now calculate and validate return rates consistently without manual spreadsheet use.',
    highlight: 'Implemented and validated an iterative IRR calculation in SQL, with controls for numerical convergence, invalid cash-flow patterns and calculation precision.',
    image: '/images/irr-plan.png',
    titleImage: '/images/irr-avatar.png',
    skills: ['SQL Server', 'Financial mathematics','IRR','NPV','Numerical methods','Iterative algorithms','Cash-flow modelling'],
    featured: false,
    situation:
      'A financial analytical process required IRR calculations to be performed directly within SQL.\n\nThe existing reference calculation was available in spreadsheet software, but SQL Server did not provide an equivalent standard function. Relying on external spreadsheet calculations would make the process more difficult to automate, reuse and validate across larger datasets.',
    task:
      'Design a reusable SQL implementation. It had to accept an ordered series of periodic cash flows. It had to estimate the rate at which the net present value approaches zero. It had to produce results consistent with established financial calculation behaviour. It had to handle invalid or unsuitable input safely. It had to prevent uncontrolled numerical iteration. It had to support repeatable validation and downstream analytical use.',
    actions: [
    'Mapped how IRR behaves in practice by breaking down how each cash flow shifts the final rate outcome.',
    'Built a single SQL structure capable of ingesting a full time-series of cash flows instead of relying on row-by-row processing.',
    'Locked each cash flow to its time index so that discounting reflects real temporal distance (not just sequence order).',
    'Recreated Net Present Value logic inside SQL to evaluate whether a guessed rate is “too high” or “too low.”',
    'Turned IRR into a search problem: repeatedly adjust the rate until the NPV collapses close to zero.',
    'Engineered a controlled iteration loop with: hard stop limits (to prevent infinite execution), convergence tolerance (to define “close enough”), bounded rate search space (to avoid numerical explosion)',
    'Added structural validation rules: reject cash-flow sets with no sign change (no mathematical IRR exists) and detect incomplete or malformed sequences early',
    'Hardened execution against real-world data issues: NULL handling, invalid numeric states, and non-converging scenarios',
    'Benchmarked outputs against Excel IRR to verify behavioural alignment rather than just formula similarity.',
    'Investigated subtle divergence cases caused by: floating-point precision drift, different default initial guesses, and rounding behaviour differences between SQL and Excel.', 
    'Documented edge behaviour so downstream users know exactly when results are reliable vs when they are mathematically undefined.',
  ],
    results: [
    'Added reusable IRR functionality to the SQL analytical layer.',
    'Reduced dependence on manually executed spreadsheet calculations.',
    'Enabled return-rate calculations to run closer to the underlying analytical data.',
    'Improved consistency between database and spreadsheet-based validation.',
    'Made the numerical calculation easier to test, document and reuse.',
    'Added controlled handling of unsuitable inputs and non-converging calculations.',
    'Created a foundation for broader discounted-cash-flow and profitability analysis.',
  ],
  },
 
  {
    slug: 'regression-modelling-beta-carotene',
    title: 'Regression Modelling of Plasma β-Carotene Concentration',
    kind: 'Study',
    area: 'Machine Learning & Statistics',
    year: '2025',
    summary:
      'Built a regression workflow to study associations between demographic, lifestyle and dietary variables and plasma β-carotene concentration.',
    highlight: 'Reduced a 13-parameter model to a five-parameter final model that achieved the lowest AIC and BIC while preserving similar explanatory power.',
    image: '/images/masm22_1-avatar.png',
    titleImage: '/images/masm22_1-avatar.png',
    gallery: [
      {
        src: '/images/masm22_1-logplasmaBMI.png',
        alt: 'log-Plasma β-carotene by BMI',
      },
      {
        src: '/images/masm22_1-plasmaBMI.png',
        alt: 'Plasma β-carotene by BMI',
      },
      {
        src: '/images/masm22_1-boxplot-smokestat.png',
        alt: 'Plasma β-carotene by BMI',
      },
      {
        src: '/images/masm22_1-plasma-smokestat.png',
        alt: 'Plasma β-carotene by BMI',
      },
      {
        src: '/images/masm22_1-plasma-allvars.png',
        alt: 'Plasma β-carotene by BMI',
      },
    ],
    skills: ['R', 'Linear Regression', 'Statistical Inference', 'Model Diagnostics', 'Feature Selection'],
    featured: false,

    situation:
      'Plasma β-carotene measurements were strongly right-skewed and varied considerably across individuals. The available predictors included demographic characteristics, smoking status, vitamin use and several related dietary measurements.\n\nA direct linear model did not satisfy important assumptions. Its residual variance increased with fitted values, and the residual distribution showed clear skewness. Several dietary variables were also strongly correlated, creating a risk of unstable coefficient estimates.',
    task:
      'Build a statistically defensible model that explained variation in plasma β-carotene levels while appropriately handling skewness and categorical predictors, controlling multicollinearity, identifying unusual or influential observations, balancing model fit with simplicity and interpretability, and reporting associations without implying causation.',
    actions: [
      'Compared raw and log-transformed β-carotene. The log scale produced more stable variance and near-normal residuals.',
      'Explored simple associations with BMI and smoking. Reference groups were chosen for clarity and sample size; this affected interpretation only, not predictions..',
      'Built a multiple regression with continuous and categorical predictors, with categorical effects encoded and interpreted on the original scale.',
      'Detected strong overlap between calorie, fat and cholesterol variables. Calorie intake was removed due to instability, improving model robustness.',
      'Used t-tests, F-tests and confidence intervals to assess predictor and group significance.',
      'Identified outliers, leverage and influence; one observation notably affected a dietary coefficient.',
    ],
    results: [
      'Built an end-to-end regression workflow for mixed data types.',
      'Improved model validity via log transformation of the response.',
      'Reduced multicollinearity by removing redundant dietary predictors.',
      'Distinguished outliers from truly influential observations.',
      'Showed how influential points can alter automated variable selection.',
      'Simplified the model from 13 to 5 parameters with minimal loss of performance.',
      'Achieved the lowest AIC and BIC while maintaining interpretability.',
    ],
  },
   {
    slug: 'ice-melting-rate-analysis',
    title: 'Experimental Design for Ice-Melting Rate Analysis',
    kind: 'Study',
    area: 'Machine Learning & Statistics',
    year: '2025',
    summary:
      'Designed and analysed a replicated fractional factorial experiment to determine how six environmental and physical conditions influenced the melting rate of ice.',
    highlight: 'A 32-run experimental workflow combining fractional factorial design, effect screening, ANOVA, interaction analysis, model diagnostics and treatment prediction.',
    image: '/images/masc05-avatar.png',
    titleImage: '/images/masc05-avatar.png',
    gallery: [
      {
        src: '/images/masc05-comerc.png',
        alt: 'Experimental setup for ice-melting rate analysis',
      },
    ],
    skills: ['Design of Experiments', 'Fractional Factorial Design', 'Statistical Modelling', 'ANOVA', 'ANCOVA', 'Interaction Analysis', 'Model Diagnostics', 'R'],
    featured: false,

    situation:
      'Melting behaviour can depend on several conditions simultaneously. A one-factor-at-a-time experiment would require many separate comparisons and would provide limited information about interactions.\n\nThe analytical challenge was therefore to study six factors efficiently while maintaining enough replication to estimate experimental error.',
    task:
      'Design an efficient and reproducible experiment, estimate the main effects of six physical conditions, investigate whether combinations of factors influenced the response, account for aliasing arising from the fractional factorial design, assess the credibility of the fitted statistical model, and identify candidate conditions associated with slower melting.',
    actions: [
      'Defined 30-minute mass loss as the response',
      'Coded six physical conditions into two-level factors',
      'Built a replicated quarter-fractional factorial design (32 randomised runs)',
      'Controlled key experimental sources of error (setup, water level, temperature, environment)',
      'Collected and structured initial and final mass data',
      'Visualised distributions and factor-level effects',
      'Fitted factorial models in R and estimated effects',
      'Screened effects using Daniel plots and ANOVA with confidence intervals',
      'Interpreted results with full alias structure awareness',
      'Explored key interactions via model-based predictions',
      'Validated assumptions using residual diagnostics',
      'Compared treatment combinations using predicted outcomes',
      'Tested initial mass as a covariate (ANCOVA)',
      'Confirmed robustness with a reduced four-factor model'
    ],
    results: [
      'Surface material, airflow, salt and insulation showed significant effects on melting.',
      'Metal, airflow and salt increased mass loss, while foil insulation reduced it.',
      'The lowest mass loss occurred with glass, no airflow and foil insulation.',
      'Model diagnostics supported the reliability of the findings.',
    ],

  },
  {
    slug: 'robot-localisation-hmm',
    title: 'Probabilistic Robot Localisation with Hidden Markov Models',
    kind: 'Study',
    area: 'Machine Learning & Statistics',
    year: '2025',
    summary:
       'Built a probabilistic tracking system that estimates a robot’s hidden grid position from uncertain movement and noisy sensor observations.',
    highlight: 'A reproducible comparison of raw sensing, recursive filtering, and fixed-lag smoothing for localisation under uncertainty.',
    image: '/images/robot-loco-avatar.png',
    titleImage: '/images/robot-loco-avatar.png',
    gallery: [
      {
        src: '/images/robot-loco-nonreading.jpg',
        alt: 'A robot in a grid world with a non-reading sensor observation',
      },
      {
        src: '/images/robot-loco-UF-NUF.png',
        alt: 'A robot in a grid world with a non-reading sensor observation',
      },
      {
        src: '/images/robot-loco-3methods.png',
        alt: 'A robot in a grid world with a non-reading sensor observation',
      },
    ],
    skills: ['Python', 'Bayesian Statistics', 'Hidden Markov Models', 'Probalistic Robotics','Simulation'],
    featured: false,

    situation:
       'A simulated robot moved through a landmark-free grid while its true position and orientation remained hidden. The available sensor provided only an uncertain approximation of the robot’s position and could also return a failed reading, making individual observations unreliable.',
    task:
      'Implement and evaluate a probabilistic localisation system using Hidden Markov Models. I compared forward filtering with five-step fixed-lag forward-backward smoothing and investigated how sensor assumptions and grid size affected tracking performance.',
    actions: [
    'Analysed the state, transition, observation, and simulation models to understand how movement uncertainty and sensor noise were represented.',
    'Implemented the recursive forward-filtering update using matrix-based prediction, observation weighting, and probability normalisation.',
    'Implemented fixed-lag forward-backward smoothing by propagating evidence backwards across five later sensor observations.',
    'Converted pose-level beliefs into position-level probabilities by aggregating the four possible orientations within each grid cell.',
    'Generated reproducible robot trajectories and sensor sequences using controlled random seeds.',
    'Compared sensor models and localisation methods on small, large, and rectangular grids using shared trajectories and Manhattan-distance evaluation.',
  ],
    results: [
    'Produced a working end-to-end HMM localisation pipeline for both forward filtering and fixed-lag smoothing.',
    'In the recorded 10×20-grid experiment, fixed-lag smoothing achieved the lowest reported average localisation error compared with forward filtering and raw sensor output.',
    'Created running-error visualisations that showed how localisation performance developed over time rather than relying on one final value.',
    'Demonstrated that evaluation conditions, sensor assumptions, and stochastic variation can materially affect the apparent performance of a tracking method.',
  ],
  },
  {
    slug: 'monadic-parser-interpreter',
    title: 'Monadic Parser and Interpreter in Haskell',
    kind: 'Study',
    area: 'Functional Programming',
    year: '2026',
    summary:
      'Implemented and extended a modular Haskell parser and interpreter that converts source code into structured syntax, evaluates it in an immutable environment, and produces program output.',
    highlight: 'A complete language-processing pipeline connecting parser combinators, algebraic data types, expression evaluation, recursive interpretation, state management, and automated testing.',
    image: '/images/parser-avatar.png',
    titleImage: '/images/parser-avatar.png',
    gallery: [
      {
        src: '/images/parser-plan.png',
        alt: 'Grammar for a small imperative language',
      }],
    skills: ['Haskell', 'Functional Programming', 'Parser Combinators', 'Interpreter Design','HUnit'],
    featured: false,
    situation:
      'The assignment provided a grammar for a small imperative language together with elementary parser components and partially implemented modules.\n\nThe missing functionality had to be completed without bypassing the parser abstraction. The implementation also needed to preserve operator precedence, handle runtime errors, support comments, and execute control-flow statements correctly.',
    task:
      'Develop the remaining components required to parse, represent, execute, and reproduce valid programs. This involved building reusable parser combinators, representing expressions and statements with algebraic data types, and implementing correct expression precedence and associativity. I also managed program variables through an immutable dictionary, interpreted assignments, blocks, conditions, loops, input, and output, and integrated comments as part of lexical whitespace. Finally, I ensured that source code could be regenerated in a form that could be parsed again and validated both individual modules and complete programs using automated tests.',
    actions: [
      'Built parser combinator primitives for tokens, numbers, words, whitespace, and symbols',
      'Composed parsers using sequencing and choice to simplify grammar construction',
      'Integrated -- single-line comments into whitespace handling',
      'Designed expression AST with constants, variables, and arithmetic operators',
      'Implemented full operator precedence and right-associative exponentiation',
      'Connected parsing, evaluation, and pretty-printing for consistent expression handling',
      'Added safe evaluation with error handling for undefined variables and division by zero',
      'Defined statement system (assignment, skip, block, if, while, read, write)',
      'Built unified statement parser from modular statement-specific parsers',
      'Implemented recursive interpreter with pattern matching over immutable state',
      'Managed program state via an immutable dictionary updated during execution',
      'Supported full control flow: conditionals, loops, I/O, and nested blocks',
      'Integrated end-to-end pipeline: parse → execute → output',
      'Ensured round-trip correctness between source code and parsed representation',
      'Developed comprehensive test suite covering all language features',
    ],
    results: [
      'Built a modular Haskell-based language-processing pipeline integrating lexical analysis, parsing, AST construction, semantic evaluation, state management, and recursive execution',
      'Demonstrated how a complete programming language can be systematically decomposed into composable functional modules with clear separation of concerns',
      'Strengthened ability to design and reason about recursive systems, operator grammars, immutable state transitions, error propagation, and strongly typed module interactions',
    ],
  },
 
];

export const featuredProjects = projects.filter((project) => project.featured);
export const smallerProjects = projects.filter((project) => !project.featured);
export const dropdownProjects = projects;
