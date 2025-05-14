
# FilmVeDizi Takip Uygulaması - Teknik Rapor

## Proje Adı
FilmVeDizi Takip

## Geliştirici
Efe Demirtaş - Bilgisayar Programcılığı Bölümü

## Projenin Amacı
Bu proje, kullanıcıların izledikleri ve izlemek istedikleri film ve dizileri takip etmelerine olanak sağlayan bir web uygulamasıdır. Proje bireysel gelişim ve öğrenme amaçlı hazırlanmıştır.

## Kullanılan Teknolojiler
- **HTML5:** Uygulama arayüzü için temel yapı.
- **CSS3 (Bootstrap 5):** Responsive ve şık tasarım için.
- **Vanilla JavaScript:** Uygulama işlevleri, API istekleri ve veri yönetimi.
- **TMDb API:** Film ve dizi verilerini almak için.
- **LocalStorage:** Kullanıcı verilerini tarayıcıda saklamak için.

## API Kullanımı
1. **API Key Alma:**
   - TMDb (https://www.themoviedb.org/) sitesine üye olun.
   - Hesap ayarlarından API Key alın.

2. **Proje içine API Key ekleme:**
   - `app.js` dosyasını açın.
   - Aşağıdaki satırdaki `"YOUR_TMDB_API_KEY"` kısmına kendi API keyinizi yazın:
     ```javascript
     const apiKey = 'YOUR_TMDB_API_KEY';
     ```

## Dosya Yapısı ve Görevleri
| Dosya/Klasör     | Görev                                                  |
|------------------|--------------------------------------------------------|
| index.html       | Uygulamanın ana arayüzü ve dosya çağrıları             |
| css/style.css    | Uygulamanın stil ve tasarım dosyası                    |
| js/app.js        | Uygulamanın ana işleyişi, API çağrıları, liste yönetimi |
| js/storage.js    | LocalStorage işlemleri                                 |
| js/dataset.js    | Örnek veri setleri veya sabit veri yönetimi (opsiyonel)|
| js/ui.js         | Arayüz güncellemeleri ve dinamik içerik oluşturma      |
| utils/           | Yardımcı fonksiyonlar veya ek script dosyaları         |

## Çalıştırma Adımları
1. Proje dosyalarını bilgisayarınıza indirin veya GitHub'dan klonlayın.
2. `index.html` dosyasını tarayıcıda açın.
3. API key doğru şekilde eklenmişse arama kutusuna film veya dizi ismi yazılarak API'den veri çekilebilir.
4. Kullanıcılar aradıkları içerikleri listeleyebilir, silebilir veya düzenleyebilir.
5. Tüm işlemler tarayıcıdaki LocalStorage üzerinde tutulur, sayfa yenilense dahi kayıtlı içerikler korunur.

## Yayınlama
Bu proje statik bir web uygulaması olduğu için GitHub Pages üzerinden kolaylıkla yayınlanabilir.

**GitHub Pages yayını için:**
- GitHub reposuna dosyaları yükleyin.
- `Settings` > `Pages` menüsünden `main branch / root` seçin.
- Projeniz `https://kullaniciadiniz.github.io/FilmTVTracker/` adresinde yayına alınır.

## Notlar
- Proje **öğrenci geliştirme amaçlıdır ve lisanssızdır**.
- TMDb API kullanımı için kendi API key'inizi temin etmeniz gereklidir.
- Projede CORS hataları almamak için API key doğru ve güncel olmalıdır.

---

**Geliştirici:** Efe Demirtaş
