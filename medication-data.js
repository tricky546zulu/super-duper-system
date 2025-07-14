const newMedications = [
            {
                name: 'Acetaminophen',
                alert: 'none',
                indications: 'Severe sepsis/septic shock (adult), Pyrexic child/adult, Pain control',
                contraindications: 'Hypersensitivity, Acetaminophen-induced liver disease',
                dosing: {
                    'Adult': 'Oral: 1 g every 6 hours. Rectal: 325 to 650 mg every 4 to 6 hours.',
                    'Elderly (≥75 years)': 'Oral: 500-1000 mg every 6 hours.',
                    'Pediatric': 'Oral/Rectal: 10 to 15 mg/kg every 4 to 6 hours (max 75mg/kg/24h, or 4g/24h).'
                },
                route: 'EMR: PO; PCP/ICP/ACP: PO/PR.'
            },
            {
                name: 'Acetylsalicylic Acid (ASA)',
                alert: 'none',
                indications: 'Ischemic chest pain',
                contraindications: 'Hypersensitivity to ASA/NSAIDs, active ulcer disease (relative)',
                dosing: {
                    'Adult/Elderly - Ischemic Chest Pain': '160 mg, uncoated, chewed and swallowed.'
                },
                route: 'EMR/PCP/ICP/ACP: Chew and swallow.'
            },
            {
                name: 'Activated Charcoal',
                alert: 'none',
                indications: 'Treatment of most oral poisonings (except corrosives, iron, lithium, etc.)',
                contraindications: 'Ingestion of corrosive agents, unprotected airway, GI tract not intact',
                dosing: {
                    'Adult/Elderly - Oral Poisoning': '50 grams PO.',
                    'Pediatric - Oral Poisoning': 'Contact PADIS (1 g/kg).'
                },
                route: 'EMR/PCP/ICP/ACP: Oral.'
            },
            {
                name: 'Adenosine',
                alert: 'high',
                indications: 'Conversion of paroxysmal supraventricular tachycardia (PSVT) to sinus rhythm',
                contraindications: '2nd or 3rd degree AV block, sick sinus syndrome, symptomatic bradycardia (unless pacemaker present)',
                dosing: {
                    'Adult - PSVT': '1st dose: 6 mg IV over 1-2s w/ rapid 20mL flush. 2nd dose: 12 mg IV over 1-2s w/ rapid 20mL flush if needed.',
                    'Pediatric - PSVT': '1st dose: 0.1 mg/kg IV (max 6 mg). 2nd dose: 0.2 mg/kg IV (max 12 mg) if needed.',
                    'Special Populations': 'Reduce initial dose to 3mg for patients on carbamazepine/dipyridamole or with central line. Reduce to 1mg for heart transplant patients.'
                },
                route: 'ACP: IV, IO, CVL.'
            },
            {
                name: 'Amiodarone',
                alert: 'high',
                indications: 'Life-threatening recurring VFib and hemodynamically unstable VT',
                contraindications: 'Hypersensitivity, marked sinus bradycardia, cardiogenic shock, 2nd or 3rd degree AV block (unless pacemaker present)',
                dosing: {
                    'Adult - VF/Pulseless VT': '300 mg IV bolus, repeat 150 mg.',
                    'Adult - VT with Pulse': '150 mg in 100 mL D5W infused IV over 10 minutes, repeat q10 min PRN.',
                    'Pediatric - VF/Pulseless VT': '5 mg/kg IV bolus (max 300 mg/dose). May repeat twice.',
                    'Pediatric - VT with Pulse': '150 mg in 100 mL D5W infused IV over 60 min.'
                },
                route: 'ACP: IV, IO, CVAD, IVAD.'
            },
            {
                name: 'Atropine',
                alert: 'none',
                indications: 'Symptomatic Bradycardia, Antidote for organophosphate poisoning',
                contraindications: 'Hypersensitivity, narrow-angle glaucoma, myasthenia gravis (no contraindications in life-threatening poisoning)',
                dosing: {
                    'Adult - Symptomatic Bradycardia': '1 mg IV every 3-5 min (max 3 mg).',
                    'Pediatric - Symptomatic Bradycardia': '0.02 mg/kg IV (max single dose 0.5 mg).',
                    'Adult - Organophosphate Poisoning': '1 to 2 mg; repeat every 5 to 60 minutes as needed. Severe cases: 2 to 6 mg initially.',
                    'Pediatric - Organophosphate Poisoning': '<12 years: 0.05 mg/kg IV initially, then double dose q5 min. ≥12 years: 1 mg IV initially, then double dose q5 min.'
                },
                route: 'ACP: IV, IO, ET.'
            },
            {
                name: 'Calcium Chloride',
                alert: 'high',
                indications: 'Treatment of hypocalcemia (e.g., cardiac arrest with hyperkalemia), sine wave pattern ECG, Beta-blocker/Calcium channel blocker overdose',
                contraindications: 'Hypersensitivity, hypercalcemia, severe renal disease',
                dosing: {
                    'Cardiac Arrest / Hyperkalemia': '500 to 1000 mg IV over 2 to 5 minutes, may repeat.',
                    'Beta-Blocker / CCB Overdose': 'Contact PADIS. Initial: 1000-2000 mg over 5 min.'
                },
                route: 'ACP: IV, IO, CVL.'
            },
            {
                name: 'CefTRIAXone',
                alert: 'none',
                indications: 'Infections (lower respiratory, urinary tract, etc.) with >45 min delay to hospital',
                contraindications: 'Hypersensitivity to cephalosporins, do not administer with IV calcium-containing solutions',
                dosing: {
                    'Adult/Elderly': '2 g IV over 5 minutes or infused over 20 minutes.'
                },
                route: 'ACP: IV/IO.'
            },
            {
                name: 'Dexamethasone',
                alert: 'none',
                indications: 'Pediatric croup (adjunctive treatment)',
                contraindications: 'Hypersensitivity, systemic fungal infections, live virus vaccines',
                dosing: {
                    'Pediatric - Croup': '0.6 mg/kg PO to a max of 16 mg.'
                },
                route: 'ACP: PO.'
            },
            {
                name: 'Dextrose (D10/D25/D50)',
                alert: 'high',
                indications: 'Treatment of insulin hypoglycemia',
                contraindications: 'Hypersensitivity to corn, diabetic coma while hyperglycemic, intracranial hemorrhage',
                dosing: {
                    'Adult - Hypoglycemia': '12.5 to 25 grams D10W IV over 1 to 5 minutes. Repeat as required.',
                    'Pediatric - Hypoglycemia': '2 to 4 mL/kg D25W IV over 2 to 5 minutes. Repeat as required.',
                    'Neonate - Hypoglycemia': '5 to 10 mL/kg D10W IV over 2 to 5 minutes. Repeat as required.'
                },
                route: 'EMR: Oral Glucose; PCP/ICP/ACP: PO/IV/IO.'
            },
            {
                name: 'DimenhyDRINATE (Gravol)',
                alert: 'elder',
                indications: 'Nausea, vomiting, vertigo',
                contraindications: 'Hypersensitivity, concurrent MAOI use, narrow-angle glaucoma, neonates',
                dosing: {
                    'Adult': '25 to 50 mg IV/IM every 4 hours PRN.',
                    'Elderly': '12.5 mg IV/IM every 4 hours PRN.',
                    'Pediatric (<12 years)': '1 mg/kg (max 50 mg) IV/IM every 4-6 hours PRN.'
                },
                route: 'PCP/ICP/ACP: SC/IM/IV.'
            },
            {
                name: 'DiphenhydrAMINE (Benadryl)',
                alert: 'elder',
                indications: 'Allergic symptoms, adjunct in anaphylaxis',
                contraindications: 'Hypersensitivity',
                dosing: {
                    'Adult/Pediatric': '1 mg/kg IV infusion or IM (max 50 mg). Recommended daily max: 400mg (Adult), 300mg (Peds).'
                },
                route: 'ACP: IM/IV.'
            },
            {
                name: 'Entonox (Nitrous Oxide)',
                alert: 'none',
                indications: 'Pain (musculoskeletal, cardiac, burns), active labour',
                contraindications: 'Head injury with impaired consciousness, inebriation, severe facial injuries, chest trauma (pneumothorax)',
                dosing: {
                    'All Patients': 'Self-administered via inhalation until pain is relieved.'
                },
                route: 'PCP/ICP/ACP: Deep inhalation.'
            },
            {
                name: 'EPINEPHrine',
                alert: 'high',
                indications: 'Anaphylaxis, asthmatic attacks, cardiac arrest, croup, profound bradycardia/hypotension, push dose pressor.',
                contraindications: 'No absolute contraindications in life-threatening conditions. Hypersensitivity to sulfites.',
                dosing: {
                    'Adult - Anaphylaxis (Normotensive)': 'IM: 0.5 mg (1:1000) every 5-15 min PRN (max 3 doses).',
                    'Adult - Anaphylaxis (Hypotensive)': 'IV: 100 mcg (10 mL of 1:100,000) over 5-10 min, repeat q5 min PRN.',
                    'Adult - Cardiac Arrest': 'IV/IO Push: 1 mg (1:10,000) every 3-5 min. ETT: 3 mg.',
                    'Adult - Push Dose Pressor': '5-50 mcg (0.5-5 mL of 1:100,000) IVP every 2-5 min.',
                    'Pediatric - Anaphylaxis': 'IM: 0.01 mg/kg (1:1000) (max 0.5 mg/dose), max 3 doses.',
                    'Pediatric - Cardiac Arrest': 'IV/IO Push: 0.01 mg/kg (0.1 mL/kg of 1:10,000) every 3-5 min (max 1 mg/dose). ETT: 0.1 mg/kg (0.1 mL/kg of 1:1000).',
                    'Pediatric - Croup (Nebulized)': '<5 kg: 0.5 mg/kg (1:1000) (max 2.5 mg). >5 kg: 2.5 to 5 mg (1:1000).',
                    'EMR Auto-Injector': 'Adult: 0.3 mg. Peds: 0.15 mg. Repeat in 5 min if needed.'
                },
                route: 'IM, IV, IO, Nebulized, ET, Auto-Injector (EMR only).'
            },
            {
                name: 'FentaNYL',
                alert: 'high',
                indications: 'Moderate to severe pain',
                contraindications: 'Hypersensitivity',
                dosing: {
                    'Adult - Pain': '0.5 to 2 mcg/kg IV over 1-3 min or IM/IN every 10 min PRN.',
                    'Elderly - Pain': '0.5 to 1 mcg/kg IV/IM/IN, repeat 0.25-0.5 mcg/kg q10 min PRN.',
                    'Pediatric - Pain': '0.5 to 2 mcg/kg IV over 3-5 min or IM q10 min PRN; or 1.5-2 mcg/kg IN.'
                },
                route: 'ACP: IV, IO, IN, IM, SC.'
            },
            {
                name: 'Glucagon',
                alert: 'none',
                indications: 'Severe hypoglycemia in patients <4 years or with basal skull fracture without IV access',
                contraindications: 'Hypersensitivity, Pheochromocytoma',
                dosing: {
                    'Adult/Peds >12yrs': '1 mg IM/SC. May repeat in 15 min.',
                    'Peds <12yrs': '0.1 mg/kg (max 1mg) IM/SC. May repeat in 15 min.',
                    'Neonate': '0.2 mg/kg (max 1mg) IM/SC.'
                },
                route: 'PCP/ICP/ACP: IM/SC/IV.'
            },
            {
                name: 'Haloperidol',
                alert: 'elder',
                indications: 'Acute delirium (IM use only)',
                contraindications: 'Hypersensitivity, severe CNS depression, Parkinson\'s syndrome',
                dosing: {
                    'Adult (>12 yrs)': '2.5 to 5 mg IM.',
                    'Elderly/Debilitated': '1 to 2.5 mg IM.'
                },
                route: 'ACP: IM, SC, IV.'
            },
            {
                name: 'HYDROmorphone',
                alert: 'high',
                indications: 'Pain management and breathlessness in palliative patients already taking it',
                contraindications: 'Hypersensitivity',
                dosing: {
                    'Palliative Use Only': 'Dose varies based on patient\'s existing prescription.'
                },
                route: 'ACP: PO/Subcut/IV.'
            },
            {
                name: 'Ibuprofen',
                alert: 'none',
                indications: 'Mild to moderate pain, fever (for patients <50 kg)',
                contraindications: 'Hypersensitivity to NSAIDs, active GI bleeding, 3rd trimester pregnancy',
                dosing: {
                    'Pediatric (6mo-12yr, <50kg)': '10 mg/kg PO every 6-8 hrs.'
                },
                route: 'EMR/PCP/ICP/ACP: PO.'
            },
            {
                name: 'Ipratropium',
                alert: 'none',
                indications: 'Bronchospasm (COPD/Asthma exacerbation)',
                contraindications: 'Hypersensitivity to ipratropium or atropine',
                dosing: {
                    'Adult - Nebulized': '250 to 500 mcg.',
                    'Adult - MDI': '5 puffs (20 mcg/puff).',
                    'Pediatric - Nebulized': '125 to 250 mcg.',
                    'Pediatric - MDI (>20kg)': '5 puffs.',
                    'Pediatric - MDI (<20kg)': '4 puffs.'
                },
                route: 'PCP/ICP/ACP: Inhalation/Nebulized/ETT.'
            },
            {
                name: 'Ketamine',
                alert: 'high',
                indications: 'Dissociative sedation, secondary for severe pain/agitation, anesthesia',
                contraindications: 'Conditions where significant BP elevation is hazardous (e.g., uncontrolled hypertension)',
                dosing: {
                    'Adult/Pediatric - Pain': '0.1 to 0.3 mg/kg IV over >1 min (repeat q10 min) OR 1 mg/kg IN.',
                    'Adult - Severe Agitation': '3 to 4 mg/kg IM.'
                },
                route: 'ACP: IM/IN/IV/IO.'
            },
            {
                name: 'Ketorolac',
                alert: 'none',
                indications: 'Short-term management of moderate to severe pain (IM/IV for patients unable to take oral NSAID)',
                contraindications: 'Hypersensitivity to NSAIDs, active peptic ulcer, renal disease, perioperative pain in CABG',
                dosing: {
                    'Adult (<65yrs)': '10-15 mg IM/IV over >15s, then q4-6h. Max 120mg/day.',
                    'Adult (>65yrs or <50kg)': '10-15 mg IM/IV over >15s, then lowest effective dose q4-6h. Max 60mg/day.',
                    'Pediatric (2-16yrs)': '0.2-0.5 mg/kg IM/IV over 1-5 min q6-8h. Max 10mg q6h.'
                },
                route: 'PCP/ICP/ACP: IM/IV.'
            },
            {
                name: 'Lidocaine',
                alert: 'high',
                indications: 'Cardiac arrest (VF/VT), stable VT, IO pain management',
                contraindications: 'Hypersensitivity, severe heart block (unless pacemaker present), supraventricular arrhythmias',
                dosing: {
                    'Adult - VF/Pulseless VT': '1 to 1.5 mg/kg IV Push, repeat 0.5-0.75 mg/kg q5-10 min (max 3 mg/kg).',
                    'Adult - VT with Pulse': '1 to 1.5 mg/kg IV Push, repeat 0.5-0.75 mg/kg until converted (max 3 mg/kg).',
                    'Adult - IO Pain': '0.5 mg/kg IO (max 40 mg).',
                    'Pediatric - VF/Pulseless VT': '1 mg/kg IVP over 2-3 min (max 3 mg/kg).',
                    'Pediatric - IO Pain': '0.5 mg/kg IO (max 20 mg).'
                },
                route: 'ACP: IV, IO, Spray, ET.'
            },
            {
                name: 'LORazepam',
                alert: 'high',
                indications: 'Sedation, amnesia, relief of anxiety (SL/PO preferred)',
                contraindications: 'Hypersensitivity, acute narrow-angle glaucoma, sleep apnea',
                dosing: {
                    'Adult/Peds >12yrs (<50kg)': '1 mg SL/PO, repeat q4-6h PRN (max 10mg/day).',
                    'Adult/Peds >12yrs (>50kg)': '1 to 2 mg SL/PO, repeat q4-6h PRN (max 10mg/day).'
                },
                route: 'ICP (Med Control)/ACP: SL/PO/IM/SubQ/IV.'
            },
            {
                name: 'Magnesium Sulfate',
                alert: 'high',
                indications: 'Torsades de pointes, eclampsia, severe bronchospasm',
                contraindications: 'Hypersensitivity, heart block, myocardial damage',
                dosing: {
                    'Eclampsia': '4 g IV in 100mL NS over 20 min.',
                    'Torsades (Arrest)': '1 to 2 g IVP diluted in 10mL NS.',
                    'Torsades (Pulse)': '1 to 2 g IV in 50mL NS over 15 min.',
                    'Asthma (Adult)': '1 to 2 g IV over 20-30 min.',
                    'Asthma (Peds)': '25 to 75 mg/kg (max 2g) IV over 20 min.'
                },
                route: 'ACP: IV/IO.'
            },
            {
                name: 'MethylPREDNISolone',
                alert: 'none',
                indications: 'Adjunctive for anaphylaxis, bronchospasm (Asthma/COPD), adult croup',
                contraindications: 'Hypersensitivity, active tuberculosis, systemic fungal infections',
                dosing: {
                    'Adult': '1 mg/kg IV (max 125 mg) over >2-3 min or infused over 20 min.',
                    'Pediatric': '1 mg/kg/dose every 6 hrs (max 60 mg/24h).'
                },
                route: 'ACP: IM/IV/IO.'
            },
            {
                name: 'Midazolam',
                alert: 'high',
                indications: 'Sedation, seizure control, severe agitation',
                contraindications: 'Hypersensitivity, acute pulmonary insufficiency, narrow-angle glaucoma',
                dosing: {
                    'Adult - Seizure': '10 mg IM/IN or 2.5 mg IV q2 min (max 10mg).',
                    'Adult - Agitation': '2.5-5 mg IM/IV q3-10 min (max 20mg).',
                    'Pediatric - Seizure': '0.2 mg/kg IM/IN or 0.1 mg/kg IV q10 min (max 10mg).'
                },
                route: 'ICP (Seizure)/ACP: IM/IV/IO/IN.'
            },
            {
                name: 'Morphine',
                alert: 'high',
                indications: 'Severe acute or chronic pain',
                contraindications: 'Hypersensitivity',
                dosing: {
                    'Adult/Peds': '0.05 to 0.1 mg/kg IV/IM/IN, repeat 0.025-0.05 mg/kg q15 min PRN.',
                    'Elderly': '0.025 to 0.05 mg/kg IV/IM/IN, repeat 0.01 mg/kg q15 min PRN.'
                },
                route: 'ACP: IM/IV/IO/SQ.'
            },
            {
                name: 'Naloxone',
                alert: 'high',
                indications: 'Reversal of narcotic depression, suspected opioid overdose',
                contraindications: 'Hypersensitivity',
                dosing: {
                    'Adult/Elderly': '0.5 to 1.0 mg IM/IV/IN every 2-3 min, titrate to adequate ventilations.',
                    'Pediatric/Neonate': '0.1 mg/kg/dose IM/IV/IN every 2-3 min, titrate. Do not give to neonates in resuscitation immediately post-delivery.'
                },
                route: 'EMR/PCP/ICP/ACP: IM/IV/IN/SQ.'
            },
            {
                name: 'Naproxen',
                alert: 'none',
                indications: 'Musculoskeletal trauma, burns, pain management',
                contraindications: 'Hypersensitivity to NSAIDs, pregnancy, active GI bleeding',
                dosing: {
                    'Adult/Elderly': '250-500 mg PO, then 250-500 mg q12h or 250mg q6-8h PRN.',
                    'Peds >50kg': '250 mg PO q8-12h.'
                },
                route: 'EMR/PCP/ICP/ACP: PO.'
            },
            {
                name: 'NitroGLYCERIN',
                alert: 'high',
                indications: 'Chest pain of cardiac origin, acute pulmonary edema',
                contraindications: 'Hypersensitivity, hypotension, increased ICP, use of phosphodiesterase-5 inhibitors',
                dosing: {
                    'Chest Pain': '0.4 mg SL every 3-5 min (max 3 sprays).',
                    'Pulmonary Edema (SL)': '0.4 mg SL every 3-5 min until SBP < 140mmHg.',
                    'Pulmonary Edema (IV)': 'Start 20 mcg/min, titrate by 10 mcg/min q5 min PRN (max 200 mcg/min).'
                },
                route: 'EMR (Assist)/PCP/ICP/ACP: SL/IV.'
            },
            {
                name: 'Norepinephrine',
                alert: 'high',
                indications: 'Acute hypotension or shock states',
                contraindications: 'Hypersensitivity, suspected mesenteric infarction',
                dosing: {
                    'Adult - IV Infusion': 'Start 0.1 mcg/kg/min, titrate by 0.05 mcg/kg/min to desired BP.'
                },
                route: 'ACP: IV/IO.'
            },
            {
                name: 'Ondansetron',
                alert: 'none',
                indications: 'Prevention of nausea and vomiting',
                contraindications: 'Hypersensitivity',
                dosing: {
                    'Adult (<65yrs)': '4 mg IV/IM/PO/Buccal q6h.',
                    'Elderly (>65yrs)': '4 mg IV infusion/IM/PO/Buccal q6h.',
                    'Peds (<5yrs)': '2 mg IV/IM q6h.',
                    'Peds (>5yrs)': '4 mg IV/IM/Buccal q6h.'
                },
                route: 'PCP/ICP/ACP: IM/IV/PO/Buccal.'
            },
            {
                name: 'Oxytocin',
                alert: 'high',
                indications: 'Control of postpartum hemorrhage',
                contraindications: 'Hypersensitivity, major cephalopelvic disproportion, fetal malpresentation',
                dosing: {
                    'Post-Birth (Prophylaxis)': '10 units IM at delivery of anterior shoulder.',
                    'Postpartum Hemorrhage (PPH)': '10 units IM or 30 units in 500mL IV infusion.'
                },
                route: 'PCP/ICP/ACP: IM/IV/IO.'
            },
            {
                name: 'Salbutamol (Ventolin)',
                alert: 'none',
                indications: 'Severe bronchospasm, hyperkalemia',
                contraindications: 'Hypersensitivity, tachyarrhythmias',
                dosing: {
                    'Adult - Nebulized': '2.5 to 5.0 mg, may repeat PRN.',
                    'Adult - MDI': '10 puffs (100mcg/puff).',
                    'Hyperkalemia': '10 to 20 mg via nebulizer over 10 min.',
                    'Pediatric - Nebulized': '1.25 to 2.5 mg, may repeat PRN.',
                    'Pediatric - MDI (>20kg)': '10 puffs.',
                    'Pediatric - MDI (<20kg)': '5 puffs.'
                },
                route: 'PCP/ICP/ACP: Nebulized/MDI/ETT.'
            },
            {
                name: 'Sodium Bicarbonate',
                alert: 'none',
                indications: 'Known TCA overdose or hyperkalemia with QRS widening, hyperkalemic cardiac arrest',
                contraindications: 'Metabolic or respiratory alkalosis, hypocalcemia',
                dosing: {
                    'Hyperkalemic Cardiac Arrest': '1 mEq/kg IVP.',
                    'TCA / Sodium Channel Blocker OD': 'Contact PADIS. 1-2 mEq/kg IV over 1-2 min, repeat q10 min until QRS narrows.'
                },
                route: 'ACP: IV/IO.'
            },
            {
                name: 'Thiamine',
                alert: 'none',
                indications: 'Hypoglycemic patients who received D50W and appear malnourished',
                contraindications: 'Hypersensitivity',
                dosing: {
                    'Adult': '100 mg IV push over 1 minute.'
                },
                route: 'ACP: IM/IV/IO.'
            },
            {
                name: 'Tranexamic Acid (TXA)',
                alert: 'none',
                indications: 'Trauma-associated hemorrhage, postpartum hemorrhage',
                contraindications: 'Hypersensitivity, active intravascular clotting, subarachnoid hemorrhage',
                dosing: {
                    'Trauma / PPH': '2 g in 100 mL NS infused IV over 20 minutes.'
                },
                route: 'ACP: IV/IO.'
            },
        ];
