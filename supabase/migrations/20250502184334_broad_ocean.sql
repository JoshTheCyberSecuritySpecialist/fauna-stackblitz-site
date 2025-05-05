/*
  # Update Service Prices

  1. Changes
    - Update prices for all services to match new pricing structure
    - Ensure duration values are correct for services with multiple options

  2. Details
    - Forest Bloom Facial: $80
    - Quartz Glow: $85
    - Botanical Enzyme: $100
    - Relaxation Massage: $75 (60 min) / $111 (90 min)
    - Therapeutic Massage: $85 (60 min) / $127 (90 min)
    - Ground & Glow: $150
*/

-- Update service prices
UPDATE services 
SET price = 80.00
WHERE name = 'Forest Bloom Facial';

UPDATE services 
SET price = 85.00
WHERE name = 'Quartz Glow Microdermabrasion';

UPDATE services 
SET price = 100.00
WHERE name = 'Botanical Enzyme Renewal';

UPDATE services 
SET price = 75.00
WHERE name = 'Relaxation Massage';

UPDATE services 
SET price = 85.00
WHERE name = 'Therapeutic Massage';

UPDATE services 
SET price = 150.00
WHERE name = 'Ground & Glow';