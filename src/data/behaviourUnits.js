// Behaviour Units - Yetenek parçaları
// Bu dosya oyundaki tüm yetenek parçalarını (behaviour units) içerir
// Her bir unit bir slot'a takılabilir ve birleştirilerek yetenek oluşturulur

export const behaviourUnits = [
  {
    id: 1,
    // İsim
    title: 'Common Item',
    // Açıklama
    description: 'Basic Skill',
    // Modifikasyonlar
    modifications: [],
    // Tür (birden fazla tipe sahip olabilir)
    type: ['passive'],
    // Enderlik
    rarity: 1,
    // Etiketler
    tags: [],
    // Level Geliştirmeleri
    levelUpgrades: [],
    // Notlar
    notes: '',
    // Icon (görselleştirme için)
    icon: '⚛️'
  },
  {
    id: 2,
    title: 'Uncommon Item',
    description: 'Green Tier',
    modifications: [],
    type: ['active'],
    rarity: 2,
    tags: [],
    levelUpgrades: [],
    notes: '',
    icon: '🔷'
  },
  {
    id: 3,
    title: 'Rare Item',
    description: 'Blue Tier',
    modifications: [],
    type: 'passive',
    rarity: 3,
    tags: [],
    levelUpgrades: [],
    notes: '',
    icon: '🟢'
  },
  {
    id: 4,
    title: 'Epic Item',
    description: 'Purple Tier',
    modifications: [],
    type: ['active'],
    rarity: 4,
    tags: [],
    levelUpgrades: [],
    notes: '',
    icon: '⚡'
  },
  {
    id: 5,
    title: 'Legendary Item',
    description: 'Gold Tier',
    modifications: [],
    type: ['ultimate'],
    rarity: 5,
    tags: [],
    levelUpgrades: [],
    notes: '',
    icon: '🎨'
  },
  {
    id: 6,
    title: 'Epic Item 2',
    description: 'Purple Tier',
    modifications: [],
    type: ['active', 'support'], // Birden fazla tip örneği
    rarity: 4,
    tags: [],
    levelUpgrades: [],
    notes: '',
    icon: '📦'
  }
]

