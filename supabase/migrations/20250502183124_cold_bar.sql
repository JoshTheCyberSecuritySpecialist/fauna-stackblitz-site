/*
  # Update Services and Add Back Facial

  1. Changes
    - Create base services if they don't exist
    - Update service descriptions and prices
    - Add new Back Facial service
  
  2. Security
    - Maintain existing RLS policies
*/

-- Create services if they don't exist
DO $$ 
BEGIN
  -- Forest Bloom Facial
  IF NOT EXISTS (SELECT 1 FROM services WHERE name = 'Forest Bloom Facial') THEN
    INSERT INTO services (name, description, duration, price, is_available)
    VALUES (
      'Forest Bloom Facial',
      'Basic facial service',
      60,
      80.00,
      true
    );
  END IF;

  -- Quartz Glow Microdermabrasion
  IF NOT EXISTS (SELECT 1 FROM services WHERE name = 'Quartz Glow Microdermabrasion') THEN
    INSERT INTO services (name, description, duration, price, is_available)
    VALUES (
      'Quartz Glow Microdermabrasion',
      'Microdermabrasion service',
      60,
      85.00,
      true
    );
  END IF;

  -- Botanical Enzyme Renewal
  IF NOT EXISTS (SELECT 1 FROM services WHERE name = 'Botanical Enzyme Renewal') THEN
    INSERT INTO services (name, description, duration, price, is_available)
    VALUES (
      'Botanical Enzyme Renewal',
      'Enzyme treatment service',
      60,
      100.00,
      true
    );
  END IF;

  -- Relaxation Massage
  IF NOT EXISTS (SELECT 1 FROM services WHERE name = 'Relaxation Massage') THEN
    INSERT INTO services (name, description, duration, price, is_available)
    VALUES (
      'Relaxation Massage',
      'Relaxation massage service',
      60,
      70.00,
      true
    );
  END IF;

  -- Therapeutic Massage
  IF NOT EXISTS (SELECT 1 FROM services WHERE name = 'Therapeutic Massage') THEN
    INSERT INTO services (name, description, duration, price, is_available)
    VALUES (
      'Therapeutic Massage',
      'Therapeutic massage service',
      60,
      80.00,
      true
    );
  END IF;

  -- Ground & Glow
  IF NOT EXISTS (SELECT 1 FROM services WHERE name = 'Ground & Glow') THEN
    INSERT INTO services (name, description, duration, price, is_available)
    VALUES (
      'Ground & Glow',
      'Combined massage and facial service',
      90,
      140.00,
      true
    );
  END IF;
END $$;

-- Update service descriptions and prices
UPDATE services 
SET description = 'Inspired by the renewing energy of the forest, this deeply nourishing custom facial is designed to bring your skin back into balance. It begins with a personalized skin analysis, followed by a deep cleanse using natural, skin-loving products. Warm steamed towels and aromatherapy ease you into a state of calm while your skin is gently prepped for extractions if needed. To enhance skin clarity and circulation, a targeted high frequency treatment is used—this powerful yet non-invasive technology helps to kill bacteria, reduce inflammation, minimize pores, and promote a clearer, brighter complexion. Each Forest Bloom Facial is tailored to your skin''s unique needs and concludes with nourishing hydration, leaving your skin refreshed, vibrant, and blooming with radiance—just like the forest after rain.',
    price = 80.00
WHERE name = 'Forest Bloom Facial';

UPDATE services 
SET description = 'Experience radiant, smooth skin with this luxurious microdermabrasion facial, enhanced by the healing energy of rose quartz or clear quartz. The treatment begins with a deep cleanse, followed by gentle microdermabrasion to remove dead skin cells, refine texture, and minimize fine lines, leaving your complexion fresh and glowing. A soothing hydrating mask restores moisture, while cool, smooth quartz stones are used to massage the face, reducing puffiness and promoting circulation. The cold therapy of the stones, combined with steamed towels and calming aromatherapy, enhances relaxation and tightens the skin. This facial is perfect for anyone seeking smoother, brighter skin with the added benefits of energy healing and skin rejuvenation.',
    duration = 60,
    price = 85.00
WHERE name = 'Quartz Glow Microdermabrasion';

UPDATE services 
SET description = 'This gentle yet effective exfoliating treatment harnesses the natural power of pumpkin, pineapple, papaya, and mango fruit enzymes blended in an organic aloe vera gel base to deeply refresh and renew the skin. Rich in peptides and plant stem cell technology from comfrey, this non-chemical peel supports skin regeneration, balances tone, and helps restore a youthful glow without harsh acids or irritation. Your skin is then soothed and recharged with a calming quartz cold stone massage, designed to reduce inflammation, tighten pores, and promote a radiant, balanced complexion. Ideal for sensitive skin types or those looking for a holistic approach to exfoliation, this treatment leaves your skin feeling rebalanced, smooth, and naturally luminous.',
    price = 100.00
WHERE name = 'Botanical Enzyme Renewal';

UPDATE services 
SET description = 'An invitation into stillness, presence, and deep calm. This full-body massage uses light to medium pressure to soothe the nervous system and gently melt away tension. Warm stones and steamed towels provide comfort and grounding, while the air is infused with calming aromatherapy to ease the mind. The session closes with a deeply relaxing cranial massage using essential oils, leaving you feeling soft, centered, and renewed.',
    price = 70.00
WHERE name = 'Relaxation Massage';

UPDATE services 
SET description = 'This deeply restorative massage is designed to address chronic tension, muscle tightness, and pain. Medium to deep pressure is combined with hot stones and herbal-infused steamed towels to melt through layers of stress and support the body''s natural healing. Cupping and gua sha are used as needed to enhance circulation, release stagnation, and encourage greater mobility. Ideal for those seeking targeted relief and deep muscular renewal.',
    price = 80.00
WHERE name = 'Therapeutic Massage';

UPDATE services 
SET description = 'A luxurious, full-body experience designed to restore balance, beauty, and inner calm. This customized session includes your choice of a relaxation or therapeutic massage, enhanced with reiki-infused touch, warm herbal towels, and sound therapy to soothe the nervous system and elevate your energy. A personalized facial using clean, plant-based ingredients revives the skin, while aromatherapy creates a calming sensory journey. A botanical back or foot scrub gently exfoliates and softens the skin, and the treatment concludes with a calming cranial massage—leaving you with a feeling of grounded renewal and elevated stillness.',
    duration = 90,
    price = 140.00
WHERE name = 'Ground & Glow';

-- Add Back Facial service if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM services WHERE name = 'Back Facial') THEN
    INSERT INTO services (
      name,
      description,
      duration,
      price,
      is_available
    ) VALUES (
      'Back Facial',
      'A clarifying treatment designed to deeply cleanse, exfoliate, and nourish the often-overlooked skin of the back. This 30-minute service includes a deep exfoliation, gentle extractions if needed, a custom mask, and warm steamed towels to soften and purify the skin. Perfect for those experiencing congestion or simply wanting smooth, refreshed skin in hard-to-reach places.',
      30,
      50.00,
      true
    );
  END IF;
END $$;