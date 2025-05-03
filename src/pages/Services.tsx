import React from 'react';
import ServiceDetails from '../components/services/ServiceDetails';
import { Sparkles, Flower } from 'lucide-react';

const Services = () => {
  const facialServices = [
    {
      id: '1',
      title: 'Forest Bloom Facial',
      shortDescription: 'Nourishes and clarifies with plant-based ingredients.',
      fullDescription: 'Inspired by the renewing energy of the forest, this deeply nourishing custom facial is designed to bring your skin back into balance. It begins with a personalized skin analysis, followed by a deep cleanse using natural, skin-loving products. Warm steamed towels and aromatherapy ease you into a state of calm while your skin is gently prepped for extractions if needed.\n\nTo enhance skin clarity and circulation, a targeted high frequency treatment is used—this powerful yet non-invasive technology helps to kill bacteria, reduce inflammation, minimize pores, and promote a clearer, brighter complexion.\n\nEach Forest Bloom Facial is tailored to your skin\'s unique needs and concludes with nourishing hydration, leaving your skin refreshed, vibrant, and blooming with radiance—just like the forest after rain.',
      duration: '60 min',
      price: '$80'
    },
    {
      id: '2',
      title: 'Quartz Glow Microdermabrasion Facial',
      shortDescription: 'Gently exfoliates and brightens with crystal energy.',
      fullDescription: 'Experience radiant, smooth skin with this luxurious microdermabrasion facial, enhanced by the healing energy of rose quartz or clear quartz. The treatment begins with a deep cleanse, followed by gentle microdermabrasion to remove dead skin cells, refine texture, and minimize fine lines, leaving your complexion fresh and glowing.\n\nA soothing hydrating mask restores moisture, while cool, smooth quartz stones are used to massage the face, reducing puffiness and promoting circulation. The cold therapy of the stones, combined with steamed towels and calming aromatherapy, enhances relaxation and tightens the skin.\n\nThis facial is perfect for anyone seeking smoother, brighter skin with the added benefits of energy healing and skin rejuvenation.',
      duration: '60 min',
      price: '$85'
    },
    {
      id: '3',
      title: 'Botanical Enzyme Renewal',
      shortDescription: 'Non-Chemical Peel with Quartz Cold Stone Finish',
      fullDescription: 'This gentle yet effective exfoliating treatment harnesses the natural power of pumpkin, pineapple, papaya, and mango fruit enzymes blended in an organic aloe vera gel base to deeply refresh and renew the skin. Rich in peptides and plant stem cell technology from comfrey, this non-chemical peel supports skin regeneration, balances tone, and helps restore a youthful glow without harsh acids or irritation.\n\nYour skin is then soothed and recharged with a calming quartz cold stone massage, designed to reduce inflammation, tighten pores, and promote a radiant, balanced complexion. Ideal for sensitive skin types or those looking for a holistic approach to exfoliation, this treatment leaves your skin feeling rebalanced, smooth, and naturally luminous.',
      duration: '60 min',
      price: '$100'
    },
    {
      id: '4',
      title: 'Back Facial',
      shortDescription: 'Deep cleansing and purifying treatment for the back',
      fullDescription: 'A clarifying treatment designed to deeply cleanse, exfoliate, and nourish the often-overlooked skin of the back. This 30-minute service includes a deep exfoliation, gentle extractions if needed, a custom mask, and warm steamed towels to soften and purify the skin. Perfect for those experiencing congestion or simply wanting smooth, refreshed skin in hard-to-reach places.',
      duration: '30 min',
      price: '$50'
    }
  ];

  const massageServices = [
    {
      id: '5',
      title: 'Relaxation Massage',
      shortDescription: 'Light-medium pressure + hot stones + aromatherapy.',
      fullDescription: 'An invitation into stillness, presence, and deep calm. This full-body massage uses light to medium pressure to soothe the nervous system and gently melt away tension. Warm stones and steamed towels provide comfort and grounding, while the air is infused with calming aromatherapy to ease the mind. The session closes with a deeply relaxing cranial massage using essential oils, leaving you feeling soft, centered, and renewed.',
      duration: '60/90 min',
      price: '$75/$111'
    },
    {
      id: '6',
      title: 'Therapeutic Massage',
      shortDescription: 'Deep pressure, cupping, gua sha, herbal towels.',
      fullDescription: 'This deeply restorative massage is designed to address chronic tension, muscle tightness, and pain. Medium to deep pressure is combined with hot stones and herbal-infused steamed towels to melt through layers of stress and support the body\'s natural healing. Cupping and gua sha are used as needed to enhance circulation, release stagnation, and encourage greater mobility. Ideal for those seeking targeted relief and deep muscular renewal.',
      duration: '60/90 min',
      price: '$85/$127'
    },
    {
      id: '7',
      title: 'Ground & Glow',
      shortDescription: 'Massage + reiki + facial + botanical scrub.',
      fullDescription: 'A luxurious, full-body experience designed to restore balance, beauty, and inner calm. This customized session includes your choice of a relaxation or therapeutic massage, enhanced with reiki-infused touch, warm herbal towels, and sound therapy to soothe the nervous system and elevate your energy.\n\nA personalized facial using clean, plant-based ingredients revives the skin, while aromatherapy creates a calming sensory journey. A botanical back or foot scrub gently exfoliates and softens the skin, and the treatment concludes with a calming cranial massage—leaving you with a feeling of grounded renewal and elevated stillness.',
      duration: '90 min',
      price: '$150'
    }
  ];

  const addOns = [
    {
      id: '8',
      title: 'Aromatherapy Back or Foot Scrub',
      shortDescription: 'Add-on treatment for enhanced relaxation',
      fullDescription: 'A refreshing exfoliation using a blend of mineral-rich salts, nourishing oils, and aromatic botanicals. Choose either back or feet to soften the skin, boost circulation, and enhance your treatment with grounding, sensory care. Includes warm herbal towels for a soothing finish.',
      price: '$5'
    },
    {
      id: '9',
      title: 'Aromatherapy Cranial Massage',
      shortDescription: 'Add-on treatment for deep relaxation',
      fullDescription: 'A deeply relaxing cranial massage designed to quiet the mind and melt stress away. Using slow, intentional movements and aromatic essential oils, this hypnotic treatment soothes the scalp, temples, and neck—inviting a sense of lightness, clarity, and calm. The perfect final touch to any massage or facial for a truly elevated experience.',
      duration: '10 min',
      price: '$10'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-primary-800 mb-4">Our Services</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Each treatment is personalized to your unique needs, combining therapeutic techniques with natural ingredients to heal and restore balance.
          </p>
        </header>

        <section className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="text-accent-500 h-6 w-6" />
            <h2 className="font-serif text-3xl text-primary-800">Facials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facialServices.map((service) => (
              <ServiceDetails
                key={service.id}
                title={service.title}
                shortDescription={service.shortDescription}
                fullDescription={service.fullDescription}
                duration={service.duration}
                price={service.price}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Flower className="text-primary-500 h-6 w-6" />
            <h2 className="font-serif text-3xl text-primary-800">Massages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {massageServices.map((service) => (
              <ServiceDetails
                key={service.id}
                title={service.title}
                shortDescription={service.shortDescription}
                fullDescription={service.fullDescription}
                duration={service.duration}
                price={service.price}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="text-accent-500 h-6 w-6" />
            <h2 className="font-serif text-3xl text-primary-800">Add-Ons</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((service) => (
              <ServiceDetails
                key={service.id}
                title={service.title}
                shortDescription={service.shortDescription}
                fullDescription={service.fullDescription}
                duration={service.duration}
                price={service.price}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;