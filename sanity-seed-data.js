// sanity-seed-data.js
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'b9j78os4',
  dataset: 'production',
  useCdn: false,
  token: 'skz1Wn77biHePFrATA33ZRpxEJiChg2Qjxer2rvQc0zDTvFOQZ23DUy6hiUn2wpcLJkx5mnZrKlvZAGKD3yxhHfJXq9j6cjYH5ZIpVDqAfSLjFnNWWfFtlay2XUBstKSmXMW6IjVa6dV7102pFIc8vhyuYsRAA0Lt81u0eek6Z9KoUoPAYXO',
  apiVersion: '2024-01-01'
})

async function seedData() {
  try {
    console.log('मुख्य श्रेणियाँ बना रहे हैं...')
    
    const categories = await Promise.all([
      client.create({
        _type: 'category',
        name: 'दवाइयाँ',
        slug: { _type: 'slug', current: 'dawaiyan' }
      }),
      client.create({
        _type: 'category',
        name: 'सर्जिकल आइटम्स',
        slug: { _type: 'slug', current: 'surgical-items' }
      }),
      client.create({
        _type: 'category',
        name: 'उपकरण',
        slug: { _type: 'slug', current: 'upkaran' }
      }),
      client.create({
        _type: 'category',
        name: 'पुस्तकें',
        slug: { _type: 'slug', current: 'pustaken' }
      }),
      client.create({
        _type: 'category',
        name: 'विविध',
        slug: { _type: 'slug', current: 'vividh' }
      })
    ])

    console.log('✅ मुख्य श्रेणियाँ बन गईं')
    console.log('उप-श्रेणियाँ बना रहे हैं...')

    const dawaiyanRef = { _type: 'reference', _ref: categories[0]._id }
    const surgicalRef = { _type: 'reference', _ref: categories[1]._id }
    const upkaranRef = { _type: 'reference', _ref: categories[2]._id }

    const subcategories = await Promise.all([
      client.create({
        _type: 'subcategory',
        name: 'इंजेक्शन',
        slug: { _type: 'slug', current: 'injection' },
        category: dawaiyanRef
      }),
      client.create({
        _type: 'subcategory',
        name: 'गोलियाँ/बोलस',
        slug: { _type: 'slug', current: 'tablets-bolus' },
        category: dawaiyanRef
      }),
      client.create({
        _type: 'subcategory',
        name: 'सीरप/लिक्विड',
        slug: { _type: 'slug', current: 'syrup-liquid' },
        category: dawaiyanRef
      }),
      client.create({
        _type: 'subcategory',
        name: 'पाउडर',
        slug: { _type: 'slug', current: 'powder' },
        category: dawaiyanRef
      }),
      client.create({
        _type: 'subcategory',
        name: 'ऑइंटमेंट/क्रीम',
        slug: { _type: 'slug', current: 'ointment-cream' },
        category: dawaiyanRef
      }),
      client.create({
        _type: 'subcategory',
        name: 'स्प्रे',
        slug: { _type: 'slug', current: 'spray' },
        category: dawaiyanRef
      }),
      client.create({
        _type: 'subcategory',
        name: 'ड्रेंच',
        slug: { _type: 'slug', current: 'drench' },
        category: dawaiyanRef
      }),
      client.create({
        _type: 'subcategory',
        name: 'मल्टी-विटामिन',
        slug: { _type: 'slug', current: 'multivitamin' },
        category: dawaiyanRef
      }),
      client.create({
        _type: 'subcategory',
        name: 'सर्जिकल इंस्ट्रूमेंट्स',
        slug: { _type: 'slug', current: 'surgical-instruments' },
        category: surgicalRef
      }),
      client.create({
        _type: 'subcategory',
        name: 'ग्लव्स',
        slug: { _type: 'slug', current: 'gloves' },
        category: surgicalRef
      }),
      client.create({
        _type: 'subcategory',
        name: 'AI उपकरण',
        slug: { _type: 'slug', current: 'ai-equipment' },
        category: surgicalRef
      }),
      client.create({
        _type: 'subcategory',
        name: 'डीवार्मर',
        slug: { _type: 'slug', current: 'dewarmer' },
        category: upkaranRef
      }),
      client.create({
        _type: 'subcategory',
        name: 'लिक्विड नाइट्रोजन कंटेनर',
        slug: { _type: 'slug', current: 'liquid-nitrogen-container' },
        category: upkaranRef
      })
    ])

    console.log('✅ उप-श्रेणियाँ बन गईं')
    console.log('नमूना उत्पाद बना रहे हैं...')

    await Promise.all([
      client.create({
        _type: 'product',
        name: 'Calcimustgel',
        slug: { _type: 'slug', current: 'calcimustgel' },
        price: 450,
        description: 'कैल्शियम सप्लीमेंट जेल - पशुओं के लिए',
        company: 'VetCare Pharma',
        category: dawaiyanRef,
        subcategory: { _type: 'reference', _ref: subcategories[4]._id }
      }),
      client.create({
        _type: 'product',
        name: 'Liver Tonic',
        slug: { _type: 'slug', current: 'liver-tonic' },
        price: 350,
        description: 'लिवर के लिए टॉनिक - पाचन सुधार',
        company: 'AnimalCare',
        category: dawaiyanRef,
        subcategory: { _type: 'reference', _ref: subcategories[2]._id }
      }),
      client.create({
        _type: 'product',
        name: 'AI Gun',
        slug: { _type: 'slug', current: 'ai-gun' },
        price: 2500,
        description: 'कृत्रिम गर्भाधान के लिए AI Gun',
        company: 'VetTools',
        category: surgicalRef,
        subcategory: { _type: 'reference', _ref: subcategories[10]._id }
      }),
      client.create({
        _type: 'product',
        name: 'AI Sheath',
        slug: { _type: 'slug', current: 'ai-sheath' },
        price: 150,
        description: 'AI Gun के लिए शीथ (50 पीस)',
        company: 'VetTools',
        category: surgicalRef,
        subcategory: { _type: 'reference', _ref: subcategories[10]._id }
      }),
      client.create({
        _type: 'product',
        name: 'Surgical Gloves',
        slug: { _type: 'slug', current: 'surgical-gloves' },
        price: 80,
        description: 'सर्जिकल ग्लव्स - 100 पीस',
        company: 'MediVet',
        category: surgicalRef,
        subcategory: { _type: 'reference', _ref: subcategories[9]._id }
      }),
      client.create({
        _type: 'product',
        name: 'Dewarmer Tablets',
        slug: { _type: 'slug', current: 'dewarmer-tablets' },
        price: 120,
        description: 'कृमिनाशक गोलियाँ - 10 टैबलेट',
        company: 'AnimalHealth',
        category: dawaiyanRef,
        subcategory: { _type: 'reference', _ref: subcategories[1]._id }
      })
    ])

    console.log('✅ नमूना उत्पाद बन गए')
    console.log('🎉 सारा डेटा सफलतापूर्वक बन गया!')

  } catch (error) {
    console.error('❌ गड़बड़ी:', error)
  }
}

seedData()