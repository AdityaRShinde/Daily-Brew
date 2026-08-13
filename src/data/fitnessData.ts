import { ExerciseDetail } from '../types';

export const FITNESS_DATA: Record<string, Record<string, ExerciseDetail[]>> = {
  warmup: {
    '5-Min Warmup': [
      {
        id: 'w_jacks',
        name: 'Jumping Jacks',
        emoji: '🤸‍♂️',
        category: 'warmup',
        subCategory: '5-Min Warmup',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Full Body Cardiovascular',
        durationOrReps: '60 Seconds',
        description: 'Classic dynamic cardio exercise to raise heart rate and body temperature.',
        steps: [
          'Stand upright with feet together and arms at your sides.',
          'Jump your feet out laterally while bringing arms overhead until hands nearly touch.',
          'Jump back to the starting position with feet together and arms down.',
          'Maintain a rhythmic cadence with soft landing on the balls of your feet.'
        ],
        muscles: [
          { muscle: 'Calves & Ankles', percentage: 75 },
          { muscle: 'Shoulders & Lats', percentage: 65 },
          { muscle: 'Quads & Glutes', percentage: 60 },
          { muscle: 'Core Stabilizers', percentage: 45 }
        ],
        whatToAvoid: [
          '❌ Landing hard on flat feet or locking knees on touchdown',
          '❌ Letting lower back arch or flaring ribs excessively',
          '❌ Incomplete arm swing stopping below shoulder level'
        ],
        standards: {
          sets: '2 Sets',
          reps: '45-60 Seconds',
          rest: '15 Seconds',
          tempo: 'Continuous Rhythmic',
          progression: 'Increase tempo or switch to Cross-Jacks for added coordination.'
        },
        relatedProgram: 'Pre-Workout Cardio Primer'
      },
      {
        id: 'w_arm_swings',
        name: 'Arm Swings & Hugs',
        emoji: '🙆‍♂️',
        category: 'warmup',
        subCategory: '5-Min Warmup',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Chest, Shoulders & Upper Back',
        durationOrReps: '45 Seconds',
        description: 'Dynamic chest and rear delt opener to prime shoulder girdle motion.',
        steps: [
          'Stand tall with feet shoulder-width apart and arms extended wide at shoulder height.',
          'Swing arms dynamically across your chest, crossing right arm over left.',
          'Swing back out wide to open the chest, then cross left arm over right.',
          'Keep movement fluid and shoulders relaxed away from ears.'
        ],
        muscles: [
          { muscle: 'Pectoralis Major', percentage: 80 },
          { muscle: 'Rear Deltoids', percentage: 75 },
          { muscle: 'Rhomboids & Traps', percentage: 70 }
        ],
        whatToAvoid: [
          '❌ Shrugging shoulders up toward ears',
          '❌ Over-arching spine or hyperextending lower back',
          '❌ Aggressive ballistic snapping at end range'
        ],
        standards: {
          sets: '2 Sets',
          reps: '20 Reps',
          rest: '10 Seconds',
          tempo: 'Controlled Fluid',
          progression: 'Add vertical arm swings or diagonal arm swings.'
        },
        relatedProgram: 'Pre-Chest & Shoulder Warmup'
      },
      {
        id: 'w_hip_circles',
        name: 'Dynamic Hip Circles',
        emoji: '🔄',
        category: 'warmup',
        subCategory: '5-Min Warmup',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Hips & Lower Back',
        durationOrReps: '45 Seconds',
        description: 'Multi-directional hip joint lubrication exercise.',
        steps: [
          'Place hands on hips with feet slightly wider than hip-width apart.',
          'Rotate hips in broad, smooth circles clockwise, driving through full range.',
          'Complete 10 rotations, then reverse direction counter-clockwise.'
        ],
        muscles: [
          { muscle: 'Hip Rotators & Flexors', percentage: 85 },
          { muscle: 'Erector Spinae', percentage: 60 },
          { muscle: 'Gluteus Medius', percentage: 55 }
        ],
        whatToAvoid: [
          '❌ Bending knees excessively instead of pivoting hips',
          '❌ Moving rapidly without full circular rotation'
        ],
        standards: {
          sets: '1-2 Sets',
          reps: '10 Clockwise / 10 Counter',
          rest: '10 Seconds',
          tempo: 'Smooth Controlled'
        },
        relatedProgram: 'Full Body Mobility'
      },
      {
        id: 'w_neck_rolls',
        name: 'Controlled Neck Rolls',
        emoji: '🧘‍♂️',
        category: 'warmup',
        subCategory: '5-Min Warmup',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Cervical Spine & Trapezius',
        durationOrReps: '30 Seconds',
        description: 'Gentle neck mobility to relieve desk strain and upper trap stiffness.',
        steps: [
          'Drop chin toward chest softly.',
          'Slowly roll right ear toward right shoulder, then back gently, then left ear to left shoulder.',
          'Keep shoulders depressed throughout the movement.'
        ],
        muscles: [
          { muscle: 'Upper Trapezius', percentage: 80 },
          { muscle: 'Sternocleidomastoid', percentage: 75 },
          { muscle: 'Levator Scapulae', percentage: 70 }
        ],
        whatToAvoid: [
          '❌ Jerking or jamming head backward with force',
          '❌ Lifting shoulders to meet the ears'
        ],
        standards: {
          sets: '1 Set',
          reps: '5 Rotations Each Way',
          rest: '0 Seconds',
          tempo: 'Slow Mindful'
        },
        relatedProgram: 'Desk Relief Routine'
      },
      {
        id: 'w_high_knees',
        name: 'High Knees Sprint',
        emoji: '🏃‍♂️',
        category: 'warmup',
        subCategory: '5-Min Warmup',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Hip Flexors & Core Strength',
        durationOrReps: '45 Seconds',
        description: 'Explosive hip flexor activation and heart rate booster.',
        steps: [
          'Run in place while driving knees up toward chest height alternately.',
          'Pump opposite arms vigorously with 90-degree elbow bend.',
          'Stay light on the balls of your feet.'
        ],
        muscles: [
          { muscle: 'Hip Flexors (Iliopsoas)', percentage: 90 },
          { muscle: 'Core Abs & Rectus Abdominis', percentage: 80 },
          { muscle: 'Calves & Quads', percentage: 75 }
        ],
        whatToAvoid: [
          '❌ Leaning far backward to compensate for weak hip flexors',
          '❌ Letting knees turn inward (valgus collapse)'
        ],
        standards: {
          sets: '2 Sets',
          reps: '30-45 Seconds',
          rest: '15 Seconds',
          tempo: 'Fast Rhythmic'
        },
        relatedProgram: 'Lower Body Primer'
      },
      {
        id: 'w_butt_kicks',
        name: 'Dynamic Butt Kicks',
        emoji: '🦵',
        category: 'warmup',
        subCategory: '5-Min Warmup',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Hamstrings & Quads Dynamic Warmup',
        durationOrReps: '45 Seconds',
        description: 'Dynamic quad stretch and hamstring firing pattern.',
        steps: [
          'Jog in place bringing heels directly up toward glutes.',
          'Keep torso upright with slight forward lean.',
          'Land lightly on mid-foot.'
        ],
        muscles: [
          { muscle: 'Hamstrings', percentage: 85 },
          { muscle: 'Quadriceps (Dynamic Stretch)', percentage: 80 },
          { muscle: 'Calves', percentage: 65 }
        ],
        whatToAvoid: [
          '❌ Arching lower back excessively',
          '❌ Flaring knees out to the sides'
        ],
        standards: {
          sets: '2 Sets',
          reps: '45 Seconds',
          rest: '15 Seconds',
          tempo: 'Rhythmic Cadence'
        },
        relatedProgram: 'Leg Day Warmup'
      }
    ],
    '10-Min Warmup': [
      {
        id: 'w_wgs',
        name: "World's Greatest Stretch",
        emoji: '🧗‍♂️',
        category: 'warmup',
        subCategory: '10-Min Warmup',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Hips, Thoracic Spine & Hamstrings',
        durationOrReps: '5 Reps / Side',
        description: 'The gold-standard mobility exercise opening thoracic spine, hips, and hamstrings simultaneously.',
        steps: [
          'Step forward into a deep runner lunge with right foot outside right hand.',
          'Place left hand firmly on floor, rotate right arm up toward ceiling, opening chest.',
          'Lower right elbow inside right ankle, then straighten right leg to stretch hamstring.',
          'Step back to plank and repeat on left side.'
        ],
        muscles: [
          { muscle: 'Thoracic Spine Mobility', percentage: 95 },
          { muscle: 'Hip Flexors & Glutes', percentage: 90 },
          { muscle: 'Hamstrings & Groin', percentage: 85 },
          { muscle: 'Core & Shoulders', percentage: 70 }
        ],
        whatToAvoid: [
          '❌ Rounding lower back during rotation',
          '❌ Letting front knee collapse inward past toes',
          '❌ Holding breath during rotation'
        ],
        standards: {
          sets: '2 Sets',
          reps: '5 Reps per side',
          rest: '20 Seconds',
          tempo: 'Held for 3s per position'
        },
        relatedProgram: 'Athletic Full Body Warmup'
      },
      {
        id: 'w_inchworm',
        name: 'Inchworm Walkouts',
        emoji: '🐛',
        category: 'warmup',
        subCategory: '10-Min Warmup',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Posterior Chain & Shoulder Stability',
        durationOrReps: '8 Reps',
        description: 'Hamstring lengthener combined with shoulder plank stability.',
        steps: [
          'Stand tall, bend at hips with straight legs, hands reaching for floor.',
          'Walk hands forward into a solid high plank position.',
          'Hold plank 1 second, then walk feet toward hands keeping legs as straight as possible.'
        ],
        muscles: [
          { muscle: 'Hamstrings & Calves', percentage: 90 },
          { muscle: 'Core & Abdominals', percentage: 85 },
          { muscle: 'Shoulders & Triceps', percentage: 75 }
        ],
        whatToAvoid: [
          '❌ Sagging hips at bottom plank position',
          '❌ Bending knees excessively when walking feet in'
        ],
        standards: {
          sets: '2 Sets',
          reps: '6-8 Reps',
          rest: '20 Seconds',
          tempo: 'Controlled Pace'
        },
        relatedProgram: 'Push/Pull Warmup'
      },
      {
        id: 'w_wrist_rotations',
        name: 'Wrist & Forearm Prep',
        emoji: '🖐️',
        category: 'warmup',
        subCategory: '10-Min Warmup',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Wrists & Forearm Flexors',
        durationOrReps: '60 Seconds',
        description: 'Essential joint preparation before push-ups, dips, or heavy lifts.',
        steps: [
          'Clasp fingers together and make smooth infinity figure-8 loops with wrists.',
          'Next, come to hands and knees and lean weight over wrists in forward, side, and reverse angles.',
          'Gently rock backward to stretch forearm flexors.'
        ],
        muscles: [
          { muscle: 'Wrist Flexors & Extensors', percentage: 90 },
          { muscle: 'Brachioradialis', percentage: 70 }
        ],
        whatToAvoid: [
          '❌ Applying sudden sharp force when wrists are at full extension',
          '❌ Ignoring joint pain'
        ],
        standards: {
          sets: '1 Set',
          reps: '15 Circles Each Direction',
          rest: '0 Seconds'
        },
        relatedProgram: 'Calisthenics Wrist Prep'
      },
      {
        id: 'w_shoulder_passthrough',
        name: 'Shoulder Pass-Throughs',
        emoji: '🧹',
        category: 'warmup',
        subCategory: '10-Min Warmup',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Rotator Cuff & Shoulders',
        durationOrReps: '10 Reps',
        description: 'Dynamic shoulder dislocation drill using a band or broomstick.',
        steps: [
          'Grasp band/stick with wide grip in front of thighs.',
          'Keep arms straight, lift overhead and lower stick behind lower back.',
          'Reverse movement back to front without bending elbows.'
        ],
        muscles: [
          { muscle: 'Anterior & Rear Deltoids', percentage: 85 },
          { muscle: 'Pectoralis Minor', percentage: 80 },
          { muscle: 'Rotator Cuff', percentage: 75 }
        ],
        whatToAvoid: [
          '❌ Bending elbows to force stick over head',
          '❌ Over-arching lower back'
        ],
        standards: {
          sets: '2 Sets',
          reps: '10-12 Reps',
          rest: '15 Seconds'
        },
        relatedProgram: 'Upper Body Warmup'
      },
      {
        id: 'w_cat_cow',
        name: 'Cat-Cow Spinal Waves',
        emoji: '🐈',
        category: 'warmup',
        subCategory: '10-Min Warmup',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Entire Spine & Core',
        durationOrReps: '10 Cycles',
        description: 'Classic flexion and extension movement for spinal articulation.',
        steps: [
          'Start on all fours with wrists under shoulders and knees under hips.',
          'Inhale into Cow pose: drop belly, lift tailbone and gaze up.',
          'Exhale into Cat pose: arch spine high toward ceiling, tuck chin and tailbone.'
        ],
        muscles: [
          { muscle: 'Erector Spinae', percentage: 85 },
          { muscle: 'Rectus Abdominis', percentage: 80 },
          { muscle: 'Multifidus', percentage: 75 }
        ],
        whatToAvoid: [
          '❌ Forcing neck hyperextension',
          '❌ Bending elbows during movement'
        ],
        standards: {
          sets: '2 Sets',
          reps: '10 Full Breaths',
          rest: '10 Seconds'
        },
        relatedProgram: 'Spinal Health & Mobility'
      },
      {
        id: 'w_deep_squat_reach',
        name: 'Deep Squat with Arm Reach',
        emoji: '🧘',
        category: 'warmup',
        subCategory: '10-Min Warmup',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Hips, Ankles & Thoracic Spine',
        durationOrReps: '45 Seconds Hold',
        description: 'Ankle mobility and deep squat opener.',
        steps: [
          'Squat down deeply with feet flat on floor and elbows pushing knees out.',
          'Reach right hand straight up toward ceiling while keeping left hand grounded.',
          'Switch sides with controlled breathing.'
        ],
        muscles: [
          { muscle: 'Adductors & Groin', percentage: 90 },
          { muscle: 'Ankle Mobility (Soleus)', percentage: 85 },
          { muscle: 'Thoracic Rotators', percentage: 80 }
        ],
        whatToAvoid: [
          '❌ Heels lifting off floor',
          '❌ Knee collapse inward'
        ],
        standards: {
          sets: '2 Sets',
          reps: '5 Reaches per side',
          rest: '15 Seconds'
        },
        relatedProgram: 'Squat Day Primer'
      }
    ],
    'Full Body': [
      {
        id: 'w_fb_1',
        name: 'Leg Swings (Front & Side)',
        emoji: '🦵',
        category: 'warmup',
        subCategory: 'Full Body',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Hip Flexors, Glutes & Adductors',
        durationOrReps: '12 Swings / Leg',
        description: 'Dynamic pendulum swings to mobilize hip socket in sagittal and frontal planes.',
        steps: [
          'Hold onto wall for support on one side.',
          'Swing inside leg forward and backward smoothly.',
          'Turn facing wall and swing leg laterally side-to-side across body.'
        ],
        muscles: [
          { muscle: 'Gluteus Maximus & Medius', percentage: 85 },
          { muscle: 'Hip Flexors', percentage: 85 },
          { muscle: 'Adductors', percentage: 80 }
        ],
        whatToAvoid: [
          '❌ Excessive twisting in torso during swing',
          '❌ Forcing height over controlled momentum'
        ],
        standards: {
          sets: '1-2 Sets',
          reps: '12 Front/Back + 12 Side',
          rest: '10 Seconds'
        },
        relatedProgram: 'Full Body Dynamic Prep'
      },
      {
        id: 'w_fb_2',
        name: 'Ankle Circles & Calf Pumps',
        emoji: '🦶',
        category: 'warmup',
        subCategory: 'Full Body',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Ankle Complex & Gastrocnemius',
        durationOrReps: '30s / Foot',
        description: 'Prepares ankle joint dorsiflexion for squatting and jumping.',
        steps: [
          'Lift foot slightly and rotate ankle in wide clockwise circles.',
          'Place toes against wall and pulse knee forward over toes to stretch Achilles.'
        ],
        muscles: [
          { muscle: 'Ankle Dorsiflexors', percentage: 90 },
          { muscle: 'Soleus & Gastrocnemius', percentage: 80 }
        ],
        whatToAvoid: [
          '❌ Bouncing hard at ankle end range'
        ],
        standards: { sets: '1 Set', reps: '15 Circles per direction' },
        relatedProgram: 'Full Body Dynamic Prep'
      },
      {
        id: 'w_fb_3',
        name: 'Scapular Push-Up Wall Slides',
        emoji: '🧱',
        category: 'warmup',
        subCategory: 'Full Body',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Serratus Anterior & Scapula',
        durationOrReps: '12 Reps',
        description: 'Protects shoulders by activating serratus anterior.',
        steps: [
          'Place forearms on wall with elbows at 90 degrees.',
          'Slide forearms upward along wall while keeping shoulders pressed away from ears.',
          'Squeeze shoulder blades down at peak height.'
        ],
        muscles: [
          { muscle: 'Serratus Anterior', percentage: 95 },
          { muscle: 'Lower Trapezius', percentage: 85 }
        ],
        whatToAvoid: [
          '❌ Shrugging traps or arching lower back'
        ],
        standards: { sets: '2 Sets', reps: '12 Reps' },
        relatedProgram: 'Shoulder Health'
      }
    ],
    'Pre-Chest': [
      {
        id: 'w_pc_1',
        name: 'Band Chest Fly Opener',
        emoji: '🎯',
        category: 'warmup',
        subCategory: 'Pre-Chest',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Pectoralis Major & Minor',
        durationOrReps: '15 Reps',
        description: 'Light resistance band flyes to activate mind-muscle connection in pecs.',
        steps: [
          'Hold resistance band anchored behind you at chest height.',
          'Hug arms forward in a wide arc until hands touch in front of sternum.',
          'Squeeze chest for 1 second, then control return back.'
        ],
        muscles: [
          { muscle: 'Pectoralis Major', percentage: 95 },
          { muscle: 'Anterior Deltoid', percentage: 70 }
        ],
        whatToAvoid: [
          '❌ Letting band snap arms backward out of control'
        ],
        standards: { sets: '2 Sets', reps: '15 Reps', rest: '15s' },
        relatedProgram: 'Chest Day Primer'
      },
      {
        id: 'w_pc_2',
        name: 'Scapular Wall Slides',
        emoji: '🧱',
        category: 'warmup',
        subCategory: 'Pre-Chest',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Rotator Cuff & Scapular Retractors',
        durationOrReps: '12 Reps',
        description: 'Improves overhead shoulder range and chest pressing stability.',
        steps: [
          'Stand with back, head, and elbows flat against wall.',
          'Slide arms up into a "V" position without letting lower back lift off wall.'
        ],
        muscles: [
          { muscle: 'Rhomboids', percentage: 85 },
          { muscle: 'Rotator Cuff', percentage: 80 }
        ],
        whatToAvoid: [
          '❌ Lower back arching off wall'
        ],
        standards: { sets: '2 Sets', reps: '12 Reps' },
        relatedProgram: 'Chest Day Primer'
      }
    ],
    'Pre-Back': [
      {
        id: 'w_pb_1',
        name: 'Straight-Arm Band Lat Pulldowns',
        emoji: '🏹',
        category: 'warmup',
        subCategory: 'Pre-Back',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Latissimus Dorsi',
        durationOrReps: '15 Reps',
        description: 'Isolates lat engagement before heavy pulling sessions.',
        steps: [
          'Anchor band high overhead.',
          'Keep arms straight, pull band down to thighs squeezing lats hard.'
        ],
        muscles: [
          { muscle: 'Latissimus Dorsi', percentage: 95 },
          { muscle: 'Teres Major', percentage: 85 }
        ],
        whatToAvoid: [
          '❌ Bending elbows into a tricep pushdown'
        ],
        standards: { sets: '2 Sets', reps: '15 Reps' },
        relatedProgram: 'Back Day Primer'
      }
    ],
    'Pre-Legs': [
      {
        id: 'w_pl_1',
        name: 'Bodyweight Cossack Squat',
        emoji: '🤺',
        category: 'warmup',
        subCategory: 'Pre-Legs',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Adductors, Hips & Ankle Dorsiflexion',
        durationOrReps: '8 Reps / Side',
        description: 'Lateral squat movement opening groin and ankle range.',
        steps: [
          'Take a wide stance. Shift weight to right leg, bending right knee into deep squat.',
          'Keep left leg straight with toes pointed up.',
          'Drive through right heel to return to center.'
        ],
        muscles: [
          { muscle: 'Adductors & Groin', percentage: 95 },
          { muscle: 'Gluteus Medius', percentage: 85 },
          { muscle: 'Ankle Dorsiflexors', percentage: 80 }
        ],
        whatToAvoid: [
          '❌ Heel lifting on squatted foot'
        ],
        standards: { sets: '2 Sets', reps: '8 Reps per side' },
        relatedProgram: 'Leg Day Primer'
      }
    ]
  },
  exercises: {
    'Chest Day': [
      {
        id: 'e_c_pushup',
        name: 'Standard Push-Up',
        emoji: '💪',
        category: 'exercises',
        subCategory: 'Chest Day',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Pectoralis Major, Triceps & Anterior Delts',
        durationOrReps: '3 Sets x 12-15 Reps',
        description: 'The fundamental upper body pushing exercise targeting chest, shoulders, and core stabilization.',
        steps: [
          'Start in high plank position with hands slightly wider than shoulder-width, fingers pointing slightly out.',
          'Engage core and glutes to form a straight line from crown of head to heels.',
          'Lower body smoothly until chest hovers 1 inch off the floor, elbows angled at 45 degrees.',
          'Press firmly through palms to full lockout.'
        ],
        muscles: [
          { muscle: 'Pectoralis Major (Chest)', percentage: 85 },
          { muscle: 'Triceps Brachii', percentage: 70 },
          { muscle: 'Anterior Deltoid', percentage: 65 },
          { muscle: 'Serratus Anterior & Core', percentage: 50 }
        ],
        whatToAvoid: [
          '❌ Flaring elbows wide at 90 degrees (causes shoulder impingement)',
          '❌ Sagging hips or arching lower back toward floor',
          '❌ Half-reps stopping short of chest depth'
        ],
        standards: {
          sets: '3-4 Sets',
          reps: '12-20 Reps',
          rest: '60 Seconds',
          tempo: '2-1-1-0 (2s down, 1s pause, 1s push)',
          progression: 'Progress to Decline Push-Ups or Weighted Push-Ups.'
        },
        relatedProgram: 'Chest & Push Day'
      },
      {
        id: 'e_c_decline_pushup',
        name: 'Decline Push-Up (Upper Chest Focus)',
        emoji: '📐',
        category: 'exercises',
        subCategory: 'Chest Day',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Clavicular Head (Upper Pecs)',
        durationOrReps: '3 Sets x 10-12 Reps',
        description: 'Elevates feet to place higher mechanical load on the clavicular upper chest head.',
        steps: [
          'Place feet elevated on bench or box (12-18 inches high) with hands on floor.',
          'Brace core tightly and lower chest toward floor with controlled tempo.',
          'Press back up, keeping head neutral.'
        ],
        muscles: [
          { muscle: 'Upper Pec (Clavicular Head)', percentage: 92 },
          { muscle: 'Anterior Deltoids', percentage: 78 },
          { muscle: 'Triceps Brachii', percentage: 70 }
        ],
        whatToAvoid: [
          '❌ Craning neck down toward floor',
          '❌ Arching lumbar spine'
        ],
        standards: {
          sets: '3 Sets',
          reps: '10-12 Reps',
          rest: '90 Seconds',
          tempo: '3-0-1-0'
        },
        relatedProgram: 'Upper Pec Hypertrophy'
      },
      {
        id: 'e_c_dips',
        name: 'Chest Dips',
        emoji: '🏋️‍♂️',
        category: 'exercises',
        subCategory: 'Chest Day',
        difficulty: 'Advanced',
        targetMuscleGroup: 'Lower Pecs & Triceps',
        durationOrReps: '3 Sets x 8-10 Reps',
        description: 'Heavy bodyweight pressing movement for lower pec and tricep mass.',
        steps: [
          'Grasp parallel bars, jump to top lockout.',
          'Lean torso forward 30 degrees with feet crossed behind.',
          'Lower body until shoulders descend below elbows.',
          'Press back up squeezing lower chest.'
        ],
        muscles: [
          { muscle: 'Lower Pec (Sternal Head)', percentage: 95 },
          { muscle: 'Triceps', percentage: 85 },
          { muscle: 'Front Delts', percentage: 70 }
        ],
        whatToAvoid: [
          '❌ Keeping torso fully upright (shifts load entirely to triceps)',
          '❌ Dropping too fast into shoulder socket without control'
        ],
        standards: {
          sets: '3 Sets',
          reps: '8-12 Reps',
          rest: '90 Seconds'
        },
        relatedProgram: 'Chest & Dips Program'
      },
      {
        id: 'e_c_diamond',
        name: 'Diamond Push-Up',
        emoji: '💎',
        category: 'exercises',
        subCategory: 'Chest Day',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Inner Chest & Triceps',
        durationOrReps: '3 Sets x 10 Reps',
        description: 'Narrow hand placement targets inner chest fibers and triceps lateral head.',
        steps: [
          'Place hands together under chest with thumbs and index fingers forming a diamond/triangle.',
          'Lower chest until touching hands.',
          'Press up forcefully.'
        ],
        muscles: [
          { muscle: 'Inner Pec Fibers', percentage: 88 },
          { muscle: 'Triceps (Lateral Head)', percentage: 90 }
        ],
        whatToAvoid: [
          '❌ Elbow pain from excessive flare'
        ],
        standards: { sets: '3 Sets', reps: '10-15 Reps', rest: '60s' }
      },
      {
        id: 'e_c_wide_pushup',
        name: 'Wide-Grip Push-Up',
        emoji: '↔️',
        category: 'exercises',
        subCategory: 'Chest Day',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Outer Pec Fibers',
        durationOrReps: '3 Sets x 12 Reps',
        description: 'Wide hand stance increases stretch across outer pectoral insertion.',
        steps: [
          'Place hands 1.5x shoulder width apart.',
          'Lower body smoothly and feel deep stretch across outer chest.'
        ],
        muscles: [
          { muscle: 'Outer Pecs', percentage: 90 },
          { muscle: 'Serratus', percentage: 60 }
        ],
        whatToAvoid: [
          '❌ Cutting depth short'
        ],
        standards: { sets: '3 Sets', reps: '12-15 Reps', rest: '60s' }
      },
      {
        id: 'e_c_archer',
        name: 'Archer Push-Up',
        emoji: '🏹',
        category: 'exercises',
        subCategory: 'Chest Day',
        difficulty: 'Advanced',
        targetMuscleGroup: 'Unilateral Pec Power',
        durationOrReps: '3 Sets x 6 Reps / Side',
        description: 'Unilateral bodyweight pressing progression toward one-arm push-ups.',
        steps: [
          'Assume very wide push-up stance.',
          'Shift weight to right side while extending left arm straight out like an archer.',
          'Lower to right side chest, press up, then alternate to left side.'
        ],
        muscles: [
          { muscle: 'Unilateral Pectoralis Major', percentage: 96 },
          { muscle: 'Core Anti-Rotation', percentage: 88 }
        ],
        whatToAvoid: [
          '❌ Twisting hips away from floor'
        ],
        standards: { sets: '3 Sets', reps: '6-8 Reps per side', rest: '90s' }
      }
    ],
    'Back Day': [
      {
        id: 'e_b_pullup',
        name: 'Strict Pull-Up',
        emoji: '🏋️‍♂️',
        category: 'exercises',
        subCategory: 'Back Day',
        difficulty: 'Advanced',
        targetMuscleGroup: 'Latissimus Dorsi & Rhomboids',
        durationOrReps: '3 Sets x 6-10 Reps',
        description: 'The king of upper body pulling exercises for back width and upper body power.',
        steps: [
          'Grasp overhead bar with overhand grip slightly wider than shoulder width.',
          'Hang with arms fully extended in dead hang position.',
          'Depress shoulder blades down and back, then pull chest toward bar until chin clears bar.',
          'Lower with full 3-second control back to dead hang.'
        ],
        muscles: [
          { muscle: 'Latissimus Dorsi (Lats)', percentage: 95 },
          { muscle: 'Rhomboids & Mid-Traps', percentage: 85 },
          { muscle: 'Biceps Brachii', percentage: 75 },
          { muscle: 'Core & Forearms', percentage: 70 }
        ],
        whatToAvoid: [
          '❌ Kicking legs or kipping momentum to get over bar',
          '❌ Cutting reps at bottom without full arm extension',
          '❌ Craning neck over bar without bringing chest up'
        ],
        standards: {
          sets: '3-4 Sets',
          reps: '6-10 Reps',
          rest: '90-120 Seconds',
          tempo: '2-0-1-2 (Hold 2s at top)',
          progression: 'Add weight vest or perform L-Sit Pull-Ups.'
        },
        relatedProgram: 'Back Width & V-Taper'
      },
      {
        id: 'e_b_chinup',
        name: 'Underhand Chin-Up',
        emoji: '💪',
        category: 'exercises',
        subCategory: 'Back Day',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Lats, Lower Traps & Biceps',
        durationOrReps: '3 Sets x 8-12 Reps',
        description: 'Underhand supinated grip increases biceps engagement while building lower lat thickness.',
        steps: [
          'Grasp bar shoulder-width with palms facing you (supinated grip).',
          'Pull chest up to bar until chin passes bar height.',
          'Lower under control to full elbow lock.'
        ],
        muscles: [
          { muscle: 'Biceps Brachii', percentage: 92 },
          { muscle: 'Latissimus Dorsi', percentage: 88 },
          { muscle: 'Brachialis', percentage: 80 }
        ],
        whatToAvoid: [
          '❌ Half reps or dropping down uncontrolled'
        ],
        standards: { sets: '3 Sets', reps: '8-12 Reps', rest: '90s' }
      },
      {
        id: 'e_b_inverted_row',
        name: 'Inverted Australian Row',
        emoji: '🚣‍♂️',
        category: 'warmup',
        subCategory: 'Back Day',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Mid-Back, Rhomboids & Rear Delts',
        durationOrReps: '3 Sets x 12 Reps',
        description: 'Horizontal pull building back thickness and posture correction.',
        steps: [
          'Lie under low bar or rings with heels on floor and body straight as a plank.',
          'Grasp bar with overhand grip and pull chest up to bar.',
          'Squeeze shoulder blades together at top for 2 seconds.'
        ],
        muscles: [
          { muscle: 'Rhomboids & Middle Traps', percentage: 95 },
          { muscle: 'Rear Deltoids', percentage: 88 },
          { muscle: 'Lats', percentage: 75 }
        ],
        whatToAvoid: [
          '❌ Sagging hips or bending knees to cheat'
        ],
        standards: { sets: '3 Sets', reps: '10-15 Reps', rest: '60s' }
      },
      {
        id: 'e_b_superman',
        name: 'Superman Lat Pulls',
        emoji: '🦸‍♂️',
        category: 'exercises',
        subCategory: 'Back Day',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Erector Spinae & Upper Back',
        durationOrReps: '3 Sets x 15 Reps',
        description: 'Floor bodyweight back extension strengthening lower back and posture.',
        steps: [
          'Lie face down with arms extended overhead.',
          'Lift chest, arms, and thighs off floor simultaneously.',
          'Pull elbows back toward ribs squeezing lats, extend arms, then lower.'
        ],
        muscles: [
          { muscle: 'Erector Spinae', percentage: 90 },
          { muscle: 'Gluteus Maximus', percentage: 80 },
          { muscle: 'Latissimus', percentage: 75 }
        ],
        whatToAvoid: [
          '❌ Hyperextending neck upward'
        ],
        standards: { sets: '3 Sets', reps: '15 Reps', rest: '45s' }
      }
    ],
    'Leg Day': [
      {
        id: 'e_l_squat',
        name: 'Deep Bodyweight Air Squat',
        emoji: '🦵',
        category: 'exercises',
        subCategory: 'Leg Day',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Quadriceps, Glutes & Hamstrings',
        durationOrReps: '4 Sets x 20 Reps',
        description: 'Fundamental lower body strength pattern for quads, glutes, and mobility.',
        steps: [
          'Stand with feet shoulder-width apart, toes turned out 15 degrees.',
          'Inhale, break at hips and knees simultaneously, sitting back into squat.',
          'Lower until thighs descend below parallel with floor while keeping chest up.',
          'Drive through midfoot/heels to return to standing.'
        ],
        muscles: [
          { muscle: 'Quadriceps (Vastus Lateralis/Medialis)', percentage: 90 },
          { muscle: 'Gluteus Maximus', percentage: 85 },
          { muscle: 'Hamstrings & Adductors', percentage: 70 },
          { muscle: 'Calves & Core', percentage: 55 }
        ],
        whatToAvoid: [
          '❌ Knees caving inward (valgus collapse)',
          '❌ Lifting heels off floor',
          '❌ Excessive forward lean or rounding spine'
        ],
        standards: {
          sets: '4 Sets',
          reps: '20 Reps',
          rest: '60 Seconds',
          tempo: '3-1-1-0'
        },
        relatedProgram: 'Leg Hypertrophy & Enduarance'
      },
      {
        id: 'e_l_pistol',
        name: 'Pistol Squat (Single-Leg)',
        emoji: '🎯',
        category: 'exercises',
        subCategory: 'Leg Day',
        difficulty: 'Advanced',
        targetMuscleGroup: 'Unilateral Quads, Glutes & Balance',
        durationOrReps: '3 Sets x 5 Reps / Leg',
        description: 'Elite single-leg strength, mobility, and balance benchmark.',
        steps: [
          'Stand on one leg with other leg extended straight in front of you.',
          'Lower down on standing leg until hamstrings touch calf, keeping free leg off floor.',
          'Drive up forcefully to standing.'
        ],
        muscles: [
          { muscle: 'Unilateral Quadriceps', percentage: 98 },
          { muscle: 'Gluteus Maximus & Medius', percentage: 92 },
          { muscle: 'Ankle Dorsiflexion', percentage: 90 }
        ],
        whatToAvoid: [
          '❌ Letting free leg touch floor',
          '❌ Losing balance forward or backward'
        ],
        standards: { sets: '3 Sets', reps: '5-8 Reps per leg', rest: '90s' }
      },
      {
        id: 'e_l_lunges',
        name: 'Walking Lunges',
        emoji: '🚶‍♂️',
        category: 'exercises',
        subCategory: 'Leg Day',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Quads, Glutes & Hamstrings',
        durationOrReps: '3 Sets x 12 Steps / Leg',
        description: 'Dynamic forward stepping lunge building leg stamina and hip stability.',
        steps: [
          'Take a large step forward with right leg.',
          'Lower hips until right thigh is parallel to floor and left knee hovers 1 inch off floor.',
          'Drive off front heel to step forward into next lunge step.'
        ],
        muscles: [
          { muscle: 'Quadriceps', percentage: 88 },
          { muscle: 'Glutes', percentage: 85 },
          { muscle: 'Hamstrings', percentage: 75 }
        ],
        whatToAvoid: [
          '❌ Banging rear knee into hard floor',
          '❌ Short strides putting excessive torque on front knee'
        ],
        standards: { sets: '3 Sets', reps: '12-15 Steps per leg', rest: '60s' }
      },
      {
        id: 'e_l_nordic',
        name: 'Nordic Hamstring Curl Negatives',
        emoji: '🏋️‍♀️',
        category: 'exercises',
        subCategory: 'Leg Day',
        difficulty: 'Advanced',
        targetMuscleGroup: 'Hamstring Eccentric Strength',
        durationOrReps: '3 Sets x 5 Reps',
        description: 'Gold-standard eccentric hamstring exercise for injury prevention and power.',
        steps: [
          'Kneel with ankles anchored firmly under immovable object or partner hold.',
          'Keep hips extended straight in line with knees and torso.',
          'Lower body forward as slowly as possible using hamstrings to resist gravity.',
          'Catch yourself softly with hands, push back up and repeat.'
        ],
        muscles: [
          { muscle: 'Hamstring Complex (Biceps Femoris)', percentage: 98 },
          { muscle: 'Glutes & Erector Spinae', percentage: 75 }
        ],
        whatToAvoid: [
          '❌ Bending at waist/hips instead of lowering as a rigid hinge'
        ],
        standards: { sets: '3 Sets', reps: '5 Eccentric Negatives', rest: '90s' }
      }
    ],
    'Shoulder Day': [
      {
        id: 'e_s_pike',
        name: 'Pike Push-Up',
        emoji: '⛰️',
        category: 'exercises',
        subCategory: 'Shoulder Day',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Anterior & Lateral Deltoids',
        durationOrReps: '3 Sets x 10 Reps',
        description: 'Overhead pressing variation shifting weight onto shoulders and upper chest.',
        steps: [
          'Start in down-dog position with hips high in air and hands shoulder-width on floor.',
          'Look back toward feet, lower head forward toward floor between hands forming a tripod.',
          'Press back up diagonally along original arm path.'
        ],
        muscles: [
          { muscle: 'Anterior Deltoids', percentage: 92 },
          { muscle: 'Triceps Brachii', percentage: 80 },
          { muscle: 'Upper Pecs & Traps', percentage: 70 }
        ],
        whatToAvoid: [
          '❌ Flare elbows wide laterally instead of tracking back'
        ],
        standards: { sets: '3 Sets', reps: '10-12 Reps', rest: '60s' }
      },
      {
        id: 'e_s_hspu',
        name: 'Handstand Push-Up Progression',
        emoji: '🤸‍♂️',
        category: 'exercises',
        subCategory: 'Shoulder Day',
        difficulty: 'Advanced',
        targetMuscleGroup: 'Full Deltoid Overhead Strength',
        durationOrReps: '3 Sets x 5 Reps',
        description: 'Vertical bodyweight overhead press against full body weight against wall.',
        steps: [
          'Kick up into handstand against wall with hands 6-8 inches away.',
          'Lower head down to touch cushion/floor, keeping elbows angled 45 degrees.',
          'Press straight up to shoulder lockout.'
        ],
        muscles: [
          { muscle: 'Deltoid Complex (Front/Side/Rear)', percentage: 98 },
          { muscle: 'Triceps', percentage: 90 },
          { muscle: 'Upper Trapezius', percentage: 85 }
        ],
        whatToAvoid: [
          '❌ Arching back into banana shape'
        ],
        standards: { sets: '3 Sets', reps: '5 Reps', rest: '120s' }
      }
    ],
    'Arms Day': [
      {
        id: 'e_a_tricep_dips',
        name: 'Bench Tricep Dips',
        emoji: '🪑',
        category: 'exercises',
        subCategory: 'Arms Day',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Triceps (Long, Lateral & Medial Heads)',
        durationOrReps: '3 Sets x 15 Reps',
        description: 'Direct tricep hypertrophy exercise using bench or chair.',
        steps: [
          'Place hands on edge of bench behind hips with legs extended out.',
          'Lower hips down along bench until elbows reach 90 degrees.',
          'Press through palms to full arm extension.'
        ],
        muscles: [
          { muscle: 'Triceps Brachii', percentage: 95 },
          { muscle: 'Anterior Deltoid', percentage: 60 }
        ],
        whatToAvoid: [
          '❌ Letting shoulders shrug up to ears'
        ],
        standards: { sets: '3 Sets', reps: '15 Reps', rest: '45s' }
      }
    ],
    'Core Day': [
      {
        id: 'e_cr_plank',
        name: 'Forearm Plank Hold',
        emoji: '🧱',
        category: 'exercises',
        subCategory: 'Core Day',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Transverse Abdominis & Core Stability',
        durationOrReps: '3 Sets x 60 Seconds',
        description: 'Isometric core stabilization foundation.',
        steps: [
          'Place forearms on floor with elbows under shoulders.',
          'Extend legs straight back, tuck pelvis under (posterior pelvic tilt), squeeze glutes.',
          'Hold straight line from head to heels.'
        ],
        muscles: [
          { muscle: 'Transverse Abdominis', percentage: 95 },
          { muscle: 'Rectus Abdominis', percentage: 85 },
          { muscle: 'Obliques', percentage: 80 }
        ],
        whatToAvoid: [
          '❌ Sagging lower back or piking hips high'
        ],
        standards: { sets: '3 Sets', reps: '60 Seconds Hold', rest: '45s' }
      },
      {
        id: 'e_cr_legraise',
        name: 'Hanging Leg Raise',
        emoji: '🦵',
        category: 'exercises',
        subCategory: 'Core Day',
        difficulty: 'Advanced',
        targetMuscleGroup: 'Lower Rectus Abdominis & Hip Flexors',
        durationOrReps: '3 Sets x 10 Reps',
        description: 'High-intensity lower abdominal exercise performed hanging from pull-up bar.',
        steps: [
          'Hang from bar with straight arms and dead hang.',
          'Exhale and lift straight legs until feet touch bar or reach 90 degrees.',
          'Lower with 3-second negative control without swinging.'
        ],
        muscles: [
          { muscle: 'Lower Rectus Abdominis', percentage: 98 },
          { muscle: 'Iliopsoas (Hip Flexors)', percentage: 85 }
        ],
        whatToAvoid: [
          '❌ Swinging body for momentum'
        ],
        standards: { sets: '3 Sets', reps: '10 Reps', rest: '60s' }
      }
    ],
    'Full Body': [
      {
        id: 'e_fb_burpee',
        name: 'Full Burpee with Push-Up',
        emoji: '🔥',
        category: 'exercises',
        subCategory: 'Full Body',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Full Body Conditioning',
        durationOrReps: '3 Sets x 12 Reps',
        description: 'Metabolic full-body conditioning powerhouse.',
        steps: [
          'Stand upright, drop down into squat and place hands on floor.',
          'Jump feet back to high plank, perform strict push-up.',
          'Jump feet forward to hands, then explode up into vertical jump with arms overhead.'
        ],
        muscles: [
          { muscle: 'Chest & Shoulders', percentage: 85 },
          { muscle: 'Quads & Glutes', percentage: 85 },
          { muscle: 'Cardiovascular Output', percentage: 98 }
        ],
        whatToAvoid: [
          '❌ Arching back on push-up bottom'
        ],
        standards: { sets: '3 Sets', reps: '12 Reps', rest: '60s' }
      }
    ]
  },
  yoga: {
    'Surya Namaskar A': [
      {
        id: 'y_sn_1',
        name: 'Tadasana (Mountain Pose)',
        emoji: '🏔️',
        category: 'yoga',
        subCategory: 'Surya Namaskar A',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Postural Alignment & Grounding',
        durationOrReps: '5 Deep Breaths',
        description: 'Foundation standing pose establishing breath, posture, and core engagement.',
        steps: [
          'Stand with big toes touching, heels slightly apart.',
          'Ground all four corners of feet into floor, engage quads, tuck tailbone lightly.',
          'Lengthen spine upward, roll shoulders back and down, palms facing forward.'
        ],
        muscles: [
          { muscle: 'Core Postural Alignment', percentage: 90 },
          { muscle: 'Quadriceps & Calves', percentage: 70 }
        ],
        whatToAvoid: [
          '❌ Locking knees back hard or slouching shoulders'
        ],
        standards: { sets: '1 Cycle', reps: '5 Breaths' }
      },
      {
        id: 'y_sn_2',
        name: 'Uttanasana (Standing Forward Bend)',
        emoji: '🙇‍♂️',
        category: 'yoga',
        subCategory: 'Surya Namaskar A',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Hamstrings & Spine Lengthening',
        durationOrReps: '5 Deep Breaths',
        description: 'Full standing forward fold relaxing head, neck, and stretching hamstrings.',
        steps: [
          'Exhale, hinge at hips with flat back, folding forward over legs.',
          'Bring palms or fingertips to floor alongside feet.',
          'Relax crown of head toward floor.'
        ],
        muscles: [
          { muscle: 'Hamstring Stretch', percentage: 95 },
          { muscle: 'Spinal Decompression', percentage: 90 }
        ],
        whatToAvoid: [
          '❌ Rounding lower back severely without knee bend'
        ],
        standards: { sets: '1 Cycle', reps: '5 Breaths' }
      },
      {
        id: 'y_sn_3',
        name: 'Chaturanga Dandasana (Four-Limbed Staff Pose)',
        emoji: '🧘‍♂️',
        category: 'yoga',
        subCategory: 'Surya Namaskar A',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Arm, Core & Tricep Power',
        durationOrReps: '1 Breath Hold',
        description: 'Core and upper body transition pose in vinyasa flows.',
        steps: [
          'From high plank, shift forward on toes.',
          'Lower body down until elbows form 90 degree angles hugged close to ribs.',
          'Keep body hovering straight in one line parallel to floor.'
        ],
        muscles: [
          { muscle: 'Triceps & Pecs', percentage: 92 },
          { muscle: 'Core & Serratus', percentage: 90 }
        ],
        whatToAvoid: [
          '❌ Hips sagging below shoulders'
        ],
        standards: { sets: '1 Flow', reps: '1 Breath Transition' }
      },
      {
        id: 'y_sn_4',
        name: 'Bhujangasana (Cobra Pose)',
        emoji: '🐍',
        category: 'yoga',
        subCategory: 'Surya Namaskar A',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Spinal Back Extension & Chest Opener',
        durationOrReps: '3 Breaths',
        description: 'Gently opens chest and strengthens back extensors.',
        steps: [
          'Lie prone on belly with tops of feet pressed into floor and hands under shoulders.',
          'Inhale, press palms to lift chest off mat while keeping elbows slightly bent.',
          'Roll shoulders down and back.'
        ],
        muscles: [
          { muscle: 'Erector Spinae', percentage: 90 },
          { muscle: 'Pectoralis Stretch', percentage: 80 }
        ],
        whatToAvoid: [
          '❌ Jamming lower back or shrugging shoulders to ears'
        ],
        standards: { sets: '1 Flow', reps: '3 Breaths' }
      },
      {
        id: 'y_sn_5',
        name: 'Adho Mukha Svanasana (Downward-Facing Dog)',
        emoji: '🐕',
        category: 'yoga',
        subCategory: 'Surya Namaskar A',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Full Body Inverted Stretch',
        durationOrReps: '5 Deep Breaths',
        description: 'Inverted V-shape pose stretching calves, hamstrings, and lengthening spine.',
        steps: [
          'From belly/plank, tuck toes and lift hips high into air forming inverted V.',
          'Spread fingers wide, press hands into floor, push chest toward thighs.',
          'Reach heels down toward mat.'
        ],
        muscles: [
          { muscle: 'Calves & Hamstrings Stretch', percentage: 95 },
          { muscle: 'Shoulder & Lat Extension', percentage: 88 },
          { muscle: 'Core', percentage: 70 }
        ],
        whatToAvoid: [
          '❌ Rounding upper back (bend knees if hamstrings are tight)'
        ],
        standards: { sets: '1 Flow', reps: '5 Deep Breaths' }
      }
    ],
    'Surya Namaskar B': [
      {
        id: 'y_snb_1',
        name: 'Utkatasana (Chair Pose)',
        emoji: '🪑',
        category: 'yoga',
        subCategory: 'Surya Namaskar B',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Quads, Glutes & Shoulder Extension',
        durationOrReps: '5 Breaths',
        description: 'Fierce pose building leg heat and upper back stamina.',
        steps: [
          'Inhale, bend knees deeply sitting hips back as if in a chair.',
          'Sweep arms overhead along ears with palms facing each other.',
          'Keep weight back in heels and chest lifted.'
        ],
        muscles: [
          { muscle: 'Quadriceps', percentage: 95 },
          { muscle: 'Glutes', percentage: 88 },
          { muscle: 'Upper Traps & Delts', percentage: 80 }
        ],
        whatToAvoid: [
          '❌ Knees extending far past toes or lower back arching excessively'
        ],
        standards: { sets: '1 Flow', reps: '5 Breaths' }
      },
      {
        id: 'y_snb_2',
        name: 'Virabhadrasana I (Warrior I)',
        emoji: '🏹',
        category: 'yoga',
        subCategory: 'Surya Namaskar B',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Hip Flexors, Legs & Balance',
        durationOrReps: '5 Breaths / Side',
        description: 'Standing lunge pose squaring hips forward with arms elevated.',
        steps: [
          'Step right foot forward into deep 90 degree lunge, angle back left foot 45 degrees flat.',
          'Square hips to front edge of mat.',
          'Raise arms overhead with palms touching.'
        ],
        muscles: [
          { muscle: 'Quads & Glutes', percentage: 90 },
          { muscle: 'Rear Hip Flexor Stretch', percentage: 88 }
        ],
        whatToAvoid: [
          '❌ Letting back foot lift or front knee collapse inward'
        ],
        standards: { sets: '1 Flow', reps: '5 Breaths per leg' }
      }
    ],
    'Beginner Flow': [
      {
        id: 'y_bf_1',
        name: 'Virabhadrasana II (Warrior II)',
        emoji: '🤺',
        category: 'yoga',
        subCategory: 'Beginner Flow',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Hips, Thighs & Arm Endurance',
        durationOrReps: '5 Breaths / Side',
        description: 'Wide lateral standing warrior opening hips and chest.',
        steps: [
          'Step feet wide 4 feet apart. Turn right foot out 90 degrees, left foot in 15 degrees.',
          'Bend right knee to 90 degrees directly over ankle.',
          'Extend arms parallel to floor reaching in opposite directions, gaze over right fingertips.'
        ],
        muscles: [
          { muscle: 'Hip Adductors & Openers', percentage: 90 },
          { muscle: 'Quads & Glutes', percentage: 85 },
          { muscle: 'Shoulder Deltoid Isometric', percentage: 75 }
        ],
        whatToAvoid: [
          '❌ Torso leaning too far forward over front leg'
        ],
        standards: { sets: '2 Sets', reps: '5 Breaths per side' }
      },
      {
        id: 'y_bf_2',
        name: 'Trikonasana (Triangle Pose)',
        emoji: '📐',
        category: 'yoga',
        subCategory: 'Beginner Flow',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Hamstrings, Side Body & Obliques',
        durationOrReps: '5 Breaths / Side',
        description: 'Lateral standing triangle stretch lengthening hamstrings and spine.',
        steps: [
          'From wide stance with straight legs, reach right arm far forward over right leg.',
          'Hinge at hip, lowering right hand to shin or block while lifting left arm to sky.',
          'Keep chest stacked and open.'
        ],
        muscles: [
          { muscle: 'Hamstrings', percentage: 92 },
          { muscle: 'Obliques & Lat Stretch', percentage: 88 }
        ],
        whatToAvoid: [
          '❌ Collapsing chest toward floor'
        ],
        standards: { sets: '2 Sets', reps: '5 Breaths per side' }
      }
    ],
    'Flexibility Flow': [
      {
        id: 'y_ff_1',
        name: 'Setu Bandha Sarvangasana (Bridge Pose)',
        emoji: '🌉',
        category: 'yoga',
        subCategory: 'Flexibility Flow',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Glutes, Hamstrings & Spine Extension',
        durationOrReps: '8 Breaths',
        description: 'Supine backbend opening chest and strengthening glute bridge.',
        steps: [
          'Lie on back with knees bent and feet hip-width on floor near glutes.',
          'Press feet firmly into mat and lift hips toward sky.',
          'Interlace fingers under lower back and roll shoulders beneath you.'
        ],
        muscles: [
          { muscle: 'Gluteus Maximus', percentage: 92 },
          { muscle: 'Hamstrings', percentage: 85 },
          { muscle: 'Pec Stretch', percentage: 75 }
        ],
        whatToAvoid: [
          '❌ Letting knees splay wide out to sides'
        ],
        standards: { sets: '2 Sets', reps: '8 Deep Breaths' }
      }
    ],
    'Advanced Asanas': [
      {
        id: 'y_aa_crow',
        name: 'Bakasana (Crow Pose)',
        emoji: '🦅',
        category: 'yoga',
        subCategory: 'Advanced Asanas',
        difficulty: 'Advanced',
        targetMuscleGroup: 'Arm Balance, Core & Wrists',
        durationOrReps: '20-30 Seconds Hold',
        description: 'Iconic arm balance lifting feet off floor with knees resting on triceps.',
        steps: [
          'Squat down, place hands shoulder-width flat on floor with fingers spread wide.',
          'Place knees high on back of triceps.',
          'Lean weight forward onto hands until feet float off floor, touching big toes together.'
        ],
        muscles: [
          { muscle: 'Triceps & Wrists', percentage: 95 },
          { muscle: 'Core Compression', percentage: 92 },
          { muscle: 'Serratus Anterior', percentage: 88 }
        ],
        whatToAvoid: [
          '❌ Looking straight down (gaze slightly forward to prevent tipping)'
        ],
        standards: { sets: '3 Attempts', reps: '15-30s Hold' }
      },
      {
        id: 'y_aa_headstand',
        name: 'Sirsasana (Supported Headstand)',
        emoji: '🙃',
        category: 'yoga',
        subCategory: 'Advanced Asanas',
        difficulty: 'Advanced',
        targetMuscleGroup: 'Inverted Balance, Core & Shoulders',
        durationOrReps: '30-60 Seconds',
        description: 'King of yoga poses improving inversion circulation and shoulder press.',
        steps: [
          'Interlace fingers on floor forming a tripod with forearms.',
          'Crown of head touches floor cradled in hands.',
          'Walk feet in close, compress core, and lift legs vertically over hips.'
        ],
        muscles: [
          { muscle: 'Shoulder Girdle & Forearms', percentage: 95 },
          { muscle: 'Core Stability', percentage: 90 }
        ],
        whatToAvoid: [
          '❌ Dumping weight onto neck (keep 80% weight in forearms)'
        ],
        standards: { sets: '2 Sets', reps: '30-60s Hold' }
      }
    ]
  },
  stretching: {
    'Upper Body': [
      {
        id: 's_u_chest',
        name: 'Doorway Chest & Pec Stretch',
        emoji: '🚪',
        category: 'stretching',
        subCategory: 'Upper Body',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Pectoralis Major & Minor',
        durationOrReps: '45 Seconds / Side',
        description: 'Relieves rounded shoulders and tight chest muscles from desk sitting.',
        steps: [
          'Stand in a doorway, place forearm at 90 degrees against doorframe.',
          'Step forward with inside leg until you feel deep stretch across chest.',
          'Hold and breathe deeply without twisting lower spine.'
        ],
        muscles: [
          { muscle: 'Pectoralis Major', percentage: 95 },
          { muscle: 'Anterior Deltoid', percentage: 80 }
        ],
        whatToAvoid: [
          '❌ Arching lower back to force stretch'
        ],
        standards: { sets: '2 Sets', reps: '45s Hold per side' }
      },
      {
        id: 's_u_tricep',
        name: 'Overhead Tricep & Lat Stretch',
        emoji: '🙆‍♂️',
        category: 'stretching',
        subCategory: 'Upper Body',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Triceps Long Head & Lats',
        durationOrReps: '30 Seconds / Side',
        description: 'Releases overhead tricep tightness and upper lat origin.',
        steps: [
          'Raise right arm overhead, bend elbow placing hand down between shoulder blades.',
          'Grasp right elbow with left hand and gently pull toward center.'
        ],
        muscles: [
          { muscle: 'Triceps (Long Head)', percentage: 90 },
          { muscle: 'Latissimus Dorsi', percentage: 80 }
        ],
        whatToAvoid: [
          '❌ Pushing head forward'
        ],
        standards: { sets: '2 Sets', reps: '30s Hold per side' }
      },
      {
        id: 's_u_cross_shoulder',
        name: 'Cross-Body Shoulder Stretch',
        emoji: '🙅‍♂️',
        category: 'stretching',
        subCategory: 'Upper Body',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Posterior Deltoid & Infraspinatus',
        durationOrReps: '30 Seconds / Side',
        description: 'Opens rear shoulder capsule and upper back muscles.',
        steps: [
          'Bring right arm straight across chest at shoulder height.',
          'Hook left arm under right forearm and pull right arm gently toward chest.'
        ],
        muscles: [
          { muscle: 'Posterior Deltoid', percentage: 90 },
          { muscle: 'Rhomboids', percentage: 75 }
        ],
        whatToAvoid: [
          '❌ Shrugging right shoulder up'
        ],
        standards: { sets: '2 Sets', reps: '30s Hold per side' }
      }
    ],
    'Lower Body': [
      {
        id: 's_l_hamstring',
        name: 'Standing Single-Leg Hamstring Stretch',
        emoji: '🦵',
        category: 'stretching',
        subCategory: 'Lower Body',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Hamstrings & Biceps Femoris',
        durationOrReps: '45 Seconds / Leg',
        description: 'Relieves tight posterior chain and lower back strain.',
        steps: [
          'Place right heel on low step or curb with right leg straight, toes pointing up.',
          'Hinge forward at hips keeping flat spine until stretch is felt in back of thigh.'
        ],
        muscles: [
          { muscle: 'Hamstrings', percentage: 95 },
          { muscle: 'Calves', percentage: 70 }
        ],
        whatToAvoid: [
          '❌ Rounding lower back'
        ],
        standards: { sets: '2 Sets', reps: '45s Hold per leg' }
      },
      {
        id: 's_l_pigeon',
        name: 'Pigeon Pose Hip Flexor & Glute Opener',
        emoji: '🕊️',
        category: 'stretching',
        subCategory: 'Lower Body',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Gluteus Medius, Piriformis & Hip Flexors',
        durationOrReps: '60 Seconds / Leg',
        description: 'Deep hip opener targeting tight glutes and piriformis.',
        steps: [
          'From hands and knees, bring right knee forward behind right wrist, shin angled across.',
          'Extend left leg straight back behind you flat on floor.',
          'Square hips forward and lower torso down over right shin.'
        ],
        muscles: [
          { muscle: 'Gluteus Medius & Piriformis', percentage: 98 },
          { muscle: 'Rear Hip Flexor (Iliopsoas)', percentage: 90 }
        ],
        whatToAvoid: [
          '❌ Tilting weight onto right hip knee joint'
        ],
        standards: { sets: '2 Sets', reps: '60s Hold per side' }
      }
    ],
    'Core': [
      {
        id: 's_c_cobra',
        name: 'Sphinx & Cobra Abdominal Stretch',
        emoji: '🧘‍♀️',
        category: 'stretching',
        subCategory: 'Core',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Rectus Abdominis & Anterior Core',
        durationOrReps: '45 Seconds Hold',
        description: 'Reverses forward spinal flexion and stretches abs.',
        steps: [
          'Lie prone on belly resting on forearms.',
          'Press chest up softly lengthen abdominal muscles from pubic bone to sternum.'
        ],
        muscles: [
          { muscle: 'Rectus Abdominis', percentage: 92 }
        ],
        whatToAvoid: [
          '❌ Pinching lumbar spine'
        ],
        standards: { sets: '2 Sets', reps: '45s Hold' }
      }
    ],
    'Full Body': [
      {
        id: 's_fb_childs',
        name: "Child's Pose with Side Walk",
        emoji: '👶',
        category: 'stretching',
        subCategory: 'Full Body',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Spine, Lats, Hips & Calm Mind',
        durationOrReps: '60 Seconds',
        description: 'Restorative stretch opening lower back, lats, and hips.',
        steps: [
          'Kneel on floor, toes touching, knees wide.',
          'Sit hips back onto heels, reach arms far forward resting forehead on floor.',
          'Walk hands 45 degrees to right side to stretch left lat, then switch.'
        ],
        muscles: [
          { muscle: 'Latissimus & QL', percentage: 90 },
          { muscle: 'Hip Adductors', percentage: 80 }
        ],
        whatToAvoid: [
          '❌ Holding breath'
        ],
        standards: { sets: '2 Sets', reps: '60s Hold' }
      }
    ],
    'Post-Workout': [
      {
        id: 's_pw_quad',
        name: 'Standing Quad & Hip Flexor Stretch',
        emoji: '🦵',
        category: 'stretching',
        subCategory: 'Post-Workout',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Rectus Femoris & Quadriceps',
        durationOrReps: '45 Seconds / Leg',
        description: 'Post-workout cooldown for front thighs.',
        steps: [
          'Stand on left leg holding wall for balance.',
          'Bend right knee, grasp right foot with right hand behind glutes.',
          'Tuck pelvis under slightly and keep knees side-by-side.'
        ],
        muscles: [
          { muscle: 'Quadriceps', percentage: 95 },
          { muscle: 'Hip Flexor', percentage: 85 }
        ],
        whatToAvoid: [
          '❌ Arching lower back'
        ],
        standards: { sets: '2 Sets', reps: '45s Hold per leg' }
      }
    ]
  },
  calisthenics: {
    'Beginner': [
      {
        id: 'cal_b_wall_pushup',
        name: 'Wall Push-Up → Incline Push-Up Progression',
        emoji: '🧱',
        category: 'calisthenics',
        subCategory: 'Beginner',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Chest, Shoulders & Triceps Primer',
        durationOrReps: '3 Sets x 15 Reps',
        description: 'Entry-level pushing progression building basic pressing strength.',
        steps: [
          'Stand facing wall at arm length distance, place hands shoulder-width on wall.',
          'Lower chest toward wall by bending elbows to 45 degrees.',
          'Press back to starting position.'
        ],
        muscles: [
          { muscle: 'Pectoralis Major', percentage: 70 },
          { muscle: 'Triceps', percentage: 65 }
        ],
        whatToAvoid: [
          '❌ Letting hips lag behind shoulders'
        ],
        standards: { sets: '3 Sets', reps: '15 Reps', progression: 'Move to Incline Bench Push-Up when 15 reps become easy.' }
      },
      {
        id: 'cal_b_dead_hang',
        name: 'Dead Hang for Grip & Shoulder Health',
        emoji: '🧱',
        category: 'calisthenics',
        subCategory: 'Beginner',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Grip Strength & Shoulder Decompression',
        durationOrReps: '3 Sets x 30-45 Seconds',
        description: 'Essential grip and shoulder girdle conditioning exercise.',
        steps: [
          'Grasp pull-up bar with overhand grip shoulder-width apart.',
          'Hang freely with feet off floor, relaxing spine and shoulders.',
          'Breathe deeply into diaphragm.'
        ],
        muscles: [
          { muscle: 'Forearm Flexors & Grip', percentage: 95 },
          { muscle: 'Spinal Decompression', percentage: 90 }
        ],
        whatToAvoid: [
          '❌ Swinging or twisting body'
        ],
        standards: { sets: '3 Sets', reps: '45s Hold', rest: '60s' }
      },
      {
        id: 'cal_b_neg_pullup',
        name: 'Negative Eccentric Pull-Up',
        emoji: '🏋️‍♂️',
        category: 'calisthenics',
        subCategory: 'Beginner',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Lat Strength Progression',
        durationOrReps: '3 Sets x 5 Reps',
        description: 'Builds pulling strength to achieve your first unassisted pull-up.',
        steps: [
          'Step onto box to jump chin above bar in top pull-up position.',
          'Lower body down as slowly as possible (5 full seconds) to dead hang.',
          'Step back onto box and repeat.'
        ],
        muscles: [
          { muscle: 'Latissimus Dorsi', percentage: 92 },
          { muscle: 'Biceps', percentage: 85 }
        ],
        whatToAvoid: [
          '❌ Dropping down fast at the bottom half'
        ],
        standards: { sets: '3 Sets', reps: '5 Reps with 5s negative lowering', rest: '90s' }
      },
      {
        id: 'cal_b_plank',
        name: 'Plank Hold',
        emoji: '🧱',
        category: 'calisthenics',
        subCategory: 'Beginner',
        difficulty: 'Beginner',
        targetMuscleGroup: 'Core Anti-Extension',
        durationOrReps: '3 Sets x 45s',
        description: 'Core foundation for bodyweight levers and holds.',
        steps: [
          'Hold high plank or forearm plank keeping rigid straight body.',
          'Squeeze glutes and draw navel to spine.'
        ],
        muscles: [
          { muscle: 'Transverse Abdominis', percentage: 90 }
        ],
        whatToAvoid: [
          '❌ Sagging hips'
        ],
        standards: { sets: '3 Sets', reps: '45s Hold' }
      }
    ],
    'Intermediate': [
      {
        id: 'cal_i_dip',
        name: 'Parallel Bar Dips',
        emoji: '🏋️‍♂️',
        category: 'calisthenics',
        subCategory: 'Intermediate',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Chest & Tricep Power',
        durationOrReps: '3 Sets x 10 Reps',
        description: 'Bodyweight upper body pushing staple.',
        steps: [
          'Lock out on parallel bars, lower body until upper arms are parallel to floor.',
          'Press back up forcefully to full lockout.'
        ],
        muscles: [
          { muscle: 'Triceps', percentage: 90 },
          { muscle: 'Lower Pecs', percentage: 88 }
        ],
        whatToAvoid: [
          '❌ Dipping too low into painful shoulder range'
        ],
        standards: { sets: '3 Sets', reps: '10 Reps', rest: '90s' }
      },
      {
        id: 'cal_i_pullup',
        name: 'Strict Bodyweight Pull-Up',
        emoji: '🏋️‍♂️',
        category: 'calisthenics',
        subCategory: 'Intermediate',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Lats & Rhomboids',
        durationOrReps: '3 Sets x 8 Reps',
        description: 'Full range pull-up from dead hang.',
        steps: [
          'Pull chin over bar with zero momentum, lower back to dead hang with 2s control.'
        ],
        muscles: [
          { muscle: 'Lats', percentage: 95 },
          { muscle: 'Biceps', percentage: 80 }
        ],
        whatToAvoid: [
          '❌ Kipping or kicking feet'
        ],
        standards: { sets: '3 Sets', reps: '8 Reps', rest: '90s' }
      },
      {
        id: 'cal_i_lsit',
        name: 'L-Sit Tuck Hold on Parallettes',
        emoji: '🧘‍♂️',
        category: 'calisthenics',
        subCategory: 'Intermediate',
        difficulty: 'Intermediate',
        targetMuscleGroup: 'Core Compression & Triceps',
        durationOrReps: '3 Sets x 20s Hold',
        description: 'Gymnastic core compression hold on parallettes or floor.',
        steps: [
          'Press hands on bars, lift hips off floor with knees tucked into chest.',
          'Extend legs straight out parallel to floor as balance improves.'
        ],
        muscles: [
          { muscle: 'Rectus Abdominis Compression', percentage: 98 },
          { muscle: 'Triceps', percentage: 80 }
        ],
        whatToAvoid: [
          '❌ Letting feet touch floor'
        ],
        standards: { sets: '3 Sets', reps: '20s Hold' }
      }
    ],
    'Advanced': [
      {
        id: 'cal_a_muscleup',
        name: 'Bar Muscle-Up Progression',
        emoji: '🚀',
        category: 'calisthenics',
        subCategory: 'Advanced',
        difficulty: 'Advanced',
        targetMuscleGroup: 'Explosive Pull-to-Push Transition',
        durationOrReps: '3 Sets x 3 Reps',
        description: 'Ultimate calisthenics skill combining explosive pull-up into straight-bar dip.',
        steps: [
          'Explode up with high pull-up bringing chest to bar level.',
          'Drive shoulders over bar with false grip transition.',
          'Press straight bar dip to full lockout above bar.'
        ],
        muscles: [
          { muscle: 'Explosive Lats & Chest', percentage: 98 },
          { muscle: 'Triceps & Front Delts', percentage: 95 },
          { muscle: 'Core Momentum Control', percentage: 90 }
        ],
        whatToAvoid: [
          '❌ Chicken-winging one arm over bar first (risks rotator tear)'
        ],
        standards: { sets: '3 Sets', reps: '3-5 Strict Reps', rest: '180s' }
      },
      {
        id: 'cal_a_one_arm_pushup',
        name: 'One-Arm Push-Up Progression',
        emoji: '🦾',
        category: 'calisthenics',
        subCategory: 'Advanced',
        difficulty: 'Advanced',
        targetMuscleGroup: 'Unilateral Pec & Core Anti-Rotation',
        durationOrReps: '3 Sets x 4 Reps / Side',
        description: 'Pinnacle single-arm pressing strength and anti-rotational core lock.',
        steps: [
          'Place wide feet stance, single hand directly under sternum, other arm held behind back.',
          'Lower body as a single rigid unit, press up without twisting hips.'
        ],
        muscles: [
          { muscle: 'Unilateral Pectoralis', percentage: 98 },
          { muscle: 'Core Anti-Rotation Obliques', percentage: 95 }
        ],
        whatToAvoid: [
          '❌ Sagging or turning hips sideways'
        ],
        standards: { sets: '3 Sets', reps: '4 Reps per side', rest: '120s' }
      },
      {
        id: 'cal_a_pistol',
        name: 'Strict Pistol Squat',
        emoji: '🎯',
        category: 'calisthenics',
        subCategory: 'Advanced',
        difficulty: 'Advanced',
        targetMuscleGroup: 'Single-Leg Quad & Ankle Mobility',
        durationOrReps: '3 Sets x 8 Reps / Leg',
        description: 'Full depth single-leg squat.',
        steps: [
          'Squat down to bottom ankle fold on one foot, drive up to lockout.'
        ],
        muscles: [
          { muscle: 'Quadriceps', percentage: 98 },
          { muscle: 'Glutes', percentage: 92 }
        ],
        whatToAvoid: [
          '❌ Heel lifting'
        ],
        standards: { sets: '3 Sets', reps: '8 Reps per leg' }
      },
      {
        id: 'cal_a_front_lever',
        name: 'Front Lever Tuck Hold',
        emoji: '🧘‍♂️',
        category: 'calisthenics',
        subCategory: 'Advanced',
        difficulty: 'Advanced',
        targetMuscleGroup: 'Lat Pulling Power & Core Hold',
        durationOrReps: '3 Sets x 15s Hold',
        description: 'Horizontal body lever holding body parallel to floor.',
        steps: [
          'Grasp bar, pull lats down and lift body horizontally parallel to floor with knees tucked to chest.'
        ],
        muscles: [
          { muscle: 'Latissimus Dorsi', percentage: 99 },
          { muscle: 'Core Compression', percentage: 95 }
        ],
        whatToAvoid: [
          '❌ Bending arms at elbows'
        ],
        standards: { sets: '3 Sets', reps: '15s Hold', rest: '120s' }
      },
      {
        id: 'cal_a_human_flag',
        name: 'Human Flag Tuck Progression',
        emoji: '🚩',
        category: 'calisthenics',
        subCategory: 'Advanced',
        difficulty: 'Advanced',
        targetMuscleGroup: 'Obliques, Shoulders & Lateral Chain',
        durationOrReps: '3 Sets x 10s Hold',
        description: 'Iconic lateral body lever hold on vertical pole.',
        steps: [
          'Grasp vertical pole with bottom hand pushing and top hand pulling.',
          'Lift body horizontally off ground with knees tucked.'
        ],
        muscles: [
          { muscle: 'Lateral Obliques', percentage: 99 },
          { muscle: 'Shoulder Pushing/Pulling', percentage: 98 }
        ],
        whatToAvoid: [
          '❌ Sagging hips below horizontal'
        ],
        standards: { sets: '3 Sets', reps: '10s Hold', rest: '180s' }
      }
    ]
  }
};
